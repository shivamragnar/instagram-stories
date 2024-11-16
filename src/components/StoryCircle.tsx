import { User } from "../types";

import "../styles/storyCircle.css"


interface StoryCircleProps {
    user: User;
    onClick: () => void;
  }

const StoryCircle: React.FC<StoryCircleProps> = ({ user, onClick }) => {
    return (
        <div className='story-circle-container' onClick={onClick}>
            <div className="story-circle-thumbnail-container">
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className='story-circle-thumbnail' />
            </div>
            <div className="story-circle-text">{user.userName}</div>
        </div>
    )
}

export default StoryCircle
