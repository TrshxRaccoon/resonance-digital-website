/**
 * Cloudinary Asset Helper
 * Provides utilities for working with Cloudinary URLs
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your_cloud_name';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

interface CloudinaryOptions {
    width?: number;
    height?: number;
    crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb';
    quality?: 'auto' | number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    gravity?: 'auto' | 'face' | 'center';
}

/**
 * Generate optimized image URL from Cloudinary public ID
 */
export function getImageUrl(publicId: string, options: CloudinaryOptions = {}): string {
    const {
        width,
        height,
        crop = 'fill',
        quality = 'auto',
        format = 'auto',
        gravity = 'auto'
    } = options;

    const transformations: string[] = [];

    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (crop) transformations.push(`c_${crop}`);
    if (gravity !== 'auto') transformations.push(`g_${gravity}`);
    transformations.push(`q_${quality}`);
    transformations.push(`f_${format}`);

    const transformString = transformations.join(',');
    return `${BASE_URL}/image/upload/${transformString}/${publicId}`;
}

/**
 * Generate optimized video URL from Cloudinary public ID
 */
export function getVideoUrl(publicId: string, options: CloudinaryOptions = {}): string {
    const {
        width,
        height,
        quality = 'auto',
        format = 'auto'
    } = options;

    const transformations: string[] = [];

    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    transformations.push(`q_${quality}`);
    transformations.push(`f_${format}`);

    const transformString = transformations.join(',');
    return `${BASE_URL}/video/upload/${transformString}/${publicId}`;
}

/**
 * Get responsive image srcset for different screen sizes
 */
export function getResponsiveSrcSet(publicId: string, sizes: number[] = [640, 768, 1024, 1280, 1536]): string {
    return sizes
        .map(size => `${getImageUrl(publicId, { width: size })} ${size}w`)
        .join(', ');
}

/**
 * CloudinaryImage component for optimized image loading
 */
interface CloudinaryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    publicId: string;
    alt: string;
    width?: number;
    height?: number;
    responsive?: boolean;
}

export function CloudinaryImage({
    publicId,
    alt,
    width,
    height,
    responsive = true,
    className,
    ...props
}: CloudinaryImageProps) {
    const src = getImageUrl(publicId, { width, height });
    const srcSet = responsive ? getResponsiveSrcSet(publicId) : undefined;

    return (
        <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            loading="lazy"
            className={className}
            {...props}
        />
    );
}

/**
 * CloudinaryVideo component for optimized video loading
 */
interface CloudinaryVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    publicId: string;
    poster?: string; // Optional poster image public ID
}

export function CloudinaryVideo({
    publicId,
    poster,
    className,
    ...props
}: CloudinaryVideoProps) {
    const src = getVideoUrl(publicId);
    const posterUrl = poster ? getImageUrl(poster) : undefined;

    return (
        <video
            src={src}
            poster={posterUrl}
            className={className}
            {...props}
        />
    );
}
