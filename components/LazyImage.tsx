import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string; // To allow passing existing styling classes
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  // Combine the passed className with our loading/loaded classes
  const imageClasses = `${className} lazy-image ${loaded ? 'loaded' : 'loading'}`;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      
      {/* Placeholder/Skeleton (Visible only while loading) */}
      {!loaded && (
        <div className={`lazy-image-placeholder ${className}`} />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={imageClasses}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};

export default LazyImage;