export default function LostItem({lost}) {
    return(
        <article>
            <h3>{lost.caption}</h3>
            <img src={lost.image} alt={lost.caption} />
        </article>
    )
}