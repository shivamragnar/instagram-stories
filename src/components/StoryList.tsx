import { User } from "../types"
import StoryCircle from "./StoryCircle"
import "../styles/storyList.css"

interface StoryListProps {
    users: User[];
    onOpenStory: (index: number) => void;
  }
  

const StoryList: React.FC<StoryListProps> = ({ users, onOpenStory }) => {
    return (
        <div className="story-list-container">
            {users.map((user, index) => (
                <StoryCircle key={user.id} user={user} onClick={() => onOpenStory(index)} />
            ))}
        </div>
    )
}

export default StoryList
