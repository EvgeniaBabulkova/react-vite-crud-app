export default function LostItem({lost}) {
    return(
        <article>
            
            <img src={lost.image} alt={lost.caption} />
            <h3>{lost.caption}</h3>
        </article>
    )
}