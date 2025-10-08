import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhotoViewSingle = ({ src, className, alt }) => {
  return (
    <PhotoProvider maskOpacity={0.75}>
      <PhotoView src={src}>
        <Image
          className={`object-cover ${className}`}
          src={src}
          alt="preview-photo"
          fill
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/app-images/avatar.png";
          }}
        />
      </PhotoView>
    </PhotoProvider>
  );
};

export default PhotoViewSingle;
