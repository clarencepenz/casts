import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps {
  src: string;
  fallbackSrc: string;
  className: string;
  width: number;
  height: number;
  alt: string;
  loading: "lazy" | "eager";
}

const FallbackImage: React.FunctionComponent<FallbackImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className,
  width,
  height,
  loading,
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <Image
      src={!error ? src : fallbackSrc}
      alt={alt}
      loading={loading}
      className={className}
      width={width}
      height={height}
      onError={handleError}
    />
  );
};

export default FallbackImage;
