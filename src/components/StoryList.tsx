import { User } from "../types"
import StoryCircle from "./StoryCircle"
import "../styles/storyList.css"

interface StoryListProps {
    users: User[];
    onOpenStory: (username: string) => void;
  }
  

const StoryList: React.FC<StoryListProps> = ({ users, onOpenStory }) => {
    return (
        <div className="story-list-container">
            {users.map((user) => (
                <StoryCircle key={user.id} user={user} onClick={() => onOpenStory(user.userName)} />
            ))}
        </div>
    )
}

export default StoryList
