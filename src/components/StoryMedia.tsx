import React, { useEffect, useState } from "react";
import LoadingSpinner from "./Spinner";
import "../styles/storyMedia.css";

interface StoryMediaProps {
  mediaUrl: string;
  altText: string;
  className?: string;
}

const StoryMedia: React.FC<StoryMediaProps> = ({
  mediaUrl,
  altText,
  className = "",
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = mediaUrl;

    if (img.complete) {
      setLoading(false);
    } else {
      img.onload = () => {
        setLoading(false);
      };
      img.onerror = () => {
        console.error("Failed loading image:", mediaUrl);
        setLoading(false);
      };
    }
  }, [mediaUrl]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="story-media-container" style={{ position: "relative" }}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <img
          src={mediaUrl}
          alt={altText}
          className={`story-media ${className} ${
            loading ? "hidden" : "visible"
          }`}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};

export default StoryMedia;
