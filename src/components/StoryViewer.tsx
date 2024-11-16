import '../styles/storyViewer.css'

interface StoryViewerProps {
    story: {
      userName: string;
      mediaUrls: string[];
    };
    activeStoryIndex: number;
    onClose: () => void;
    onNavigate: (direction: 'next' | 'prev') => void;
  }

const StoryViewer: React.FC<StoryViewerProps> = ({ story, activeStoryIndex, onClose, onNavigate }) => {
    console.log('story viewer props', story, activeStoryIndex)
    return (
        <div className="story-viewer-container">
            <button className="story-close-button" onClick={onClose}>X</button>
            <div className="story-navigation-container">
                <div className="story-left-panel" onClick={() => onNavigate('prev')}></div>
                <div className="story-right-panel" onClick={() => onNavigate('next')}></div>
            </div>
            <img src={story.mediaUrls[activeStoryIndex]} alt={`${story.userName}'s Story`} className="story-media" />
        </div>
    )
}

export default StoryViewer
