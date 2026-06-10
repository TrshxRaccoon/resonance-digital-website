#!/usr/bin/env node

/**
 * Asset Migration Script - Google Drive → Cloudinary
 */

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

// Load .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cloudinary credentials from .env
const CLOUD_NAME = process.env.VITE_CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.VITE_CLOUDINARY_API_KEY;
const API_SECRET = process.env.VITE_CLOUDINARY_API_SECRET;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    console.error('❌ Missing Cloudinary credentials in .env file');
    console.error('Please set: VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_API_KEY, VITE_CLOUDINARY_API_SECRET');
    process.exit(1);
}

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true
});

const assetManifest = {
    images: [],
    videos: [],
    timestamp: new Date().toISOString()
};

async function uploadToCloudinary(filePath, folder = 'resonance-digital') {
    const isVideo = /\.(mp4|webm|mov|avi)$/i.test(filePath);
    const resourceType = isVideo ? 'video' : 'image';

    console.log(`⬆️  Uploading ${path.basename(filePath)}...`);

    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder,
            resource_type: resourceType,
            ...(isVideo && {
                eager: [
                    { streaming_profile: 'hd', format: 'auto' },
                    { quality: 'auto', fetch_format: 'auto' }
                ],
                eager_async: true
            }),
            ...(!isVideo && {
                transformation: [{ quality: 'auto', fetch_format: 'auto' }]
            })
        });

        console.log(`✅ ${result.secure_url}`);

        return {
            originalName: path.basename(filePath),
            cloudinaryId: result.public_id,
            url: result.secure_url,
            type: resourceType,
            width: result.width,
            height: result.height,
            format: result.format,
            size: result.bytes
        };
    } catch (error) {
        console.error(`❌ Failed: ${error.message}`);
        return null;
    }
}

async function uploadDirectory(dirPath, cloudinaryFolder) {
    if (!fs.existsSync(dirPath)) {
        console.error(`❌ Directory not found: ${dirPath}`);
        return;
    }

    const getAllFiles = (dir) => {
        let results = [];
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            file = path.join(dir, file);
            const stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(getAllFiles(file));
            } else {
                results.push(file);
            }
        });
        return results;
    };

    const allFiles = getAllFiles(dirPath);
    const assetFiles = allFiles.filter(f =>
        /\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|mov)$/i.test(f)
    );

    console.log(`\n📦 Found ${assetFiles.length} assets to upload...\n`);

    for (const fullPath of assetFiles) {
        const result = await uploadToCloudinary(fullPath, cloudinaryFolder);
        if (result) {
            if (result.type === 'video') {
                assetManifest.videos.push(result);
            } else {
                assetManifest.images.push(result);
            }
        }
    }

    // Save manifest
    const manifestPath = path.join(process.cwd(), 'asset-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(assetManifest, null, 2));
    console.log(`\n✅ Asset manifest saved: ${manifestPath}`);
    console.log(`\n📊 Summary:`);
    console.log(`   Images: ${assetManifest.images.length}`);
    console.log(`   Videos: ${assetManifest.videos.length}`);
    console.log(`   Total: ${assetManifest.images.length + assetManifest.videos.length}`);
}

// Main
const args = process.argv.slice(2);
const localDir = args.find(arg => arg.startsWith('--local='))?.split('=')[1];
const folder = args.find(arg => arg.startsWith('--folder='))?.split('=')[1] || 'resonance-digital';

console.log('🚀 Cloudinary Asset Migration Tool\n');

if (localDir) {
    uploadDirectory(localDir, folder);
} else {
    console.log('Usage:');
    console.log('  node scripts/migrate-assets.js --local=./path/to/assets --folder=resonance-digital\n');
    console.log('Example:');
    console.log('  node scripts/migrate-assets.js --local=./temp-assets');
}
