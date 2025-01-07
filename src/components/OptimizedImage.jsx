import { memo } from "react";

const OptimizedImage = memo(
  ({ src, alt, width, height, className, loading = "lazy" }) => {
    // WebP format kontrolü
    const supportsWebP = () => {
      const elem = document.createElement("canvas");
      return elem.getContext && elem.getContext("2d")
        ? elem.toDataURL("image/webp").indexOf("data:image/webp") === 0
        : false;
    };

    // Responsive image srcset
    const generateSrcSet = (src) => {
      const sizes = [320, 640, 960, 1280];
      return sizes.map((size) => `${src}?w=${size} ${size}w`).join(", ");
    };

    return (
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding="async"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/fallback-image.png"; // Fallback görsel
        }}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
