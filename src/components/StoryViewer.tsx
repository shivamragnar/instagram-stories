import "../styles/storyViewer.css";
import StoryMedia from "./StoryMedia";

interface StoryViewerProps {
  story: {
    userName: string;
    userProfilePicture: string;
    mediaUrls: string[];
  };
  activeStoryIndex: number;
  onClose: () => void;
  onNavigate: (direction: "next" | "prev") => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({
  story,
  activeStoryIndex,
  onClose,
  onNavigate,
}) => {
  return (
    <div className="story-viewer-container">
      <div className="story-top-bar">
        <div className="story-progress-bars">
          {story.mediaUrls.map((_, index) => (
            <div
              key={index}
              className={`story-progress-bar ${index <= activeStoryIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="tools">
          <div className="user-info">
            <img
              src={story.userProfilePicture}
              alt="User"
              className="user-image"
            />
            <span>{story.userName}</span>
          </div>
          <button className="story-close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
      <div className="story-navigation-container">
        <div
          className="story-left-panel"
          onClick={() => onNavigate("prev")}
        ></div>
        <div
          className="story-right-panel"
          onClick={() => onNavigate("next")}
        ></div>
      </div>
      <StoryMedia mediaUrl={story.mediaUrls[activeStoryIndex]} altText={`${story.userName}'s Story`} className={`story-index-${activeStoryIndex}`} />
    </div>
  );
};

export default StoryViewer;
