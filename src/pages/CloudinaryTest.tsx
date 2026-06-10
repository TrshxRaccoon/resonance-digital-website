import { CloudinaryImage, CloudinaryVideo } from '@/lib/cloudinary';

/**
 * TEST PAGE - Use this to verify your Cloudinary setup works
 * 
 * INSTRUCTIONS:
 * 1. Upload ONE test image to Cloudinary → resonance-digital/test/sample
 * 2. Update the publicId below to match your image
 * 3. Visit http://localhost:5173/test in your browser
 * 4. If you see your image = SUCCESS! ✅
 * 5. If you see an error = Check your .env file credentials
 */

const CloudinaryTest = () => {
    return (
        <div className="min-h-screen bg-background text-foreground p-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Cloudinary Test Page</h1>
                    <p className="text-muted-foreground">
                        This page tests your Cloudinary integration. Follow the instructions below.
                    </p>
                </div>

                {/* Test 1: Simple Image */}
                <div className="border border-border p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Test 1: Image Loading</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Upload a test image to: <code>resonance-digital/test/sample</code>
                        <br />
                        Then update the publicId below and reload this page.
                    </p>

                    <div className="bg-secondary/20 p-8">
                        <CloudinaryImage
                            publicId="resonance-digital/test/sample"
                            alt="Test Image"
                            width={600}
                            height={400}
                            className="w-full h-auto border border-primary"
                        />
                    </div>

                    <div className="mt-4 p-4 bg-muted/50 rounded">
                        <p className="text-xs font-mono">
                            publicId: "resonance-digital/test/sample"
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                            ✅ If you see your image above = Working!
                            <br />
                            ❌ If you see broken image = Check .env credentials
                        </p>
                    </div>
                </div>

                {/* Test 2: Responsive Image */}
                <div className="border border-border p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Test 2: Responsive Image</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        This should load different sizes based on screen width.
                    </p>

                    <div className="bg-secondary/20 p-8">
                        <CloudinaryImage
                            publicId="resonance-digital/test/sample"
                            alt="Responsive Test"
                            responsive
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="text-xs text-muted-foreground mt-4">
                        Open DevTools → Network tab → Reload page → Check image size
                    </p>
                </div>

                {/* Test 3: Video (Optional) */}
                <div className="border border-border p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Test 3: Video Loading (Optional)</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Upload a test video to: <code>resonance-digital/test/sample-video</code>
                    </p>

                    <div className="bg-secondary/20 p-8">
                        <div className="w-full aspect-video">
                            <CloudinaryVideo
                                publicId="resonance-digital/test/sample-video"
                                controls
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-4">
                        ✅ Video should play smoothly without downloading entire file
                    </p>
                </div>

                {/* Environment Check */}
                <div className="border border-border p-6 rounded-lg bg-muted/20">
                    <h2 className="text-2xl font-semibold mb-4">Environment Check</h2>

                    <div className="space-y-2 font-mono text-sm">
                        <div>
                            <span className="text-muted-foreground">Cloud Name:</span>{' '}
                            <span className={import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ? 'text-green-500' : 'text-red-500'}>
                                {import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '❌ NOT SET'}
                            </span>
                        </div>
                        <div>
                            <span className="text-muted-foreground">API Key:</span>{' '}
                            <span className={import.meta.env.VITE_CLOUDINARY_API_KEY ? 'text-green-500' : 'text-red-500'}>
                                {import.meta.env.VITE_CLOUDINARY_API_KEY ? '✅ SET' : '❌ NOT SET'}
                            </span>
                        </div>
                        <div>
                            <span className="text-muted-foreground">API Secret:</span>{' '}
                            <span className={import.meta.env.VITE_CLOUDINARY_API_SECRET ? 'text-green-500' : 'text-red-500'}>
                                {import.meta.env.VITE_CLOUDINARY_API_SECRET ? '✅ SET' : '❌ NOT SET'}
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-background rounded">
                        <p className="text-sm font-semibold mb-2">Troubleshooting:</p>
                        <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                            <li>If credentials show "NOT SET": Check your .env file exists and is correct</li>
                            <li>If image doesn't load: Verify the publicId matches your upload path</li>
                            <li>If CORS error: Make sure you're using the correct Cloud Name</li>
                            <li>After changing .env: Restart dev server (npm run dev)</li>
                        </ul>
                    </div>
                </div>

                {/* Instructions */}
                <div className="border-2 border-primary p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">📝 How to Use This Page</h2>
                    <ol className="space-y-3 text-sm">
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">1.</span>
                            <span>Go to Cloudinary → Media Library → Create folder: <code>resonance-digital/test</code></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">2.</span>
                            <span>Upload any image and name it: <code>sample</code></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">3.</span>
                            <span>Make sure your .env file has correct credentials</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">4.</span>
                            <span>Restart dev server: <code>npm run dev</code></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">5.</span>
                            <span>Visit: <code>http://localhost:5173/test</code></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">6.</span>
                            <span>If images load = You're ready! Delete this test page and start uploading real assets!</span>
                        </li>
                    </ol>
                </div>

                <div className="text-center text-muted-foreground">
                    <p>Once everything works, tell me and I'll update all the real pages! 🚀</p>
                </div>
            </div>
        </div>
    );
};

export default CloudinaryTest;
