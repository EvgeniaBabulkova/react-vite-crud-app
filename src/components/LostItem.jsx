import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function LostItem({lost}) {
    const navigate = useNavigate();
    function handleClick() {

        navigate(`/posts/${lost.id}`);
    }
    
    
    
    return(
        <article key={lost.id} onClick={handleClick}>
            <UserAvatar uid={lost.uid} />
            <img src={lost.image} alt={lost.caption} />
            <h3>{lost.caption}</h3>
        </article>
    );
}