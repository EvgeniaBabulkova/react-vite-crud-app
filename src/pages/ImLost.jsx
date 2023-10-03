import { useEffect, useState } from "react";
import LostItem from "../components/LostItem";

export default function ImLost() {
    const [losts, setLosts] = useState([]);

    useEffect(() => {
        async function getLosts(){
            const url = "https://fb-rest-race-default-rtdb.firebaseio.com/posts.json"
            const response = await fetch(url);
            const data = await response.json();
            const lostsArray = Object.keys(data).map(key =>({ id: key, ...data[key]}));
            setLosts(lostsArray);

        console.log(data);
        console.log(lostsArray);    
    }

    getLosts();
    }, []);

    
    return (
        <section className="page">
            <h1>Im Lost</h1>

            <section className="grid">
                {losts.map(lost => (
                    <LostItem lost={lost} key={lost.id} />
                    
                ))}
            </section>
        </section>
    );
}



// {
//     id:1,
//     caption:"I love Aaaa",
//     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Automobile_Association_logo.svg/800px-The_Automobile_Association_logo.svg.png"
// },

// {
//     id:2,
//     caption:"I love Bbbb",
//     image:"https://pbs.twimg.com/profile_images/1267921885490274304/8HcfM0ab_400x400.jpg"
// },

// {
//     id:3,
//     caption:"I love Cccc",
//     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Closed_captioning_symbol.svg/1200px-Closed_captioning_symbol.svg.png"
// }