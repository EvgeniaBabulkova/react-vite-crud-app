import UserAvatar from "./UserAvatar";

export default function LostItem({lost}) {
    console.log(lost);
    return(
        <article key={lost.id}>
            <UserAvatar uid={lost.uid} />
            <img src={lost.image} alt={lost.caption} />
            <h3>{lost.caption}</h3>
        </article>
    );
}