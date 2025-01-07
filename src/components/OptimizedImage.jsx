import { memo } from "react";

const OptimizedImage = memo(
  ({ src, alt, width, height, className, loading = "lazy" }) => {
    return (
      <img
        src={src}
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
