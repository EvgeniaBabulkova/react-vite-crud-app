import { useEffect, useState } from "react";
import LostItem from "../components/LostItem";

export default function ImLost() {
    const [losts, setLosts] = useState([]);

    useEffect(() => {
        async function getLosts(){
            const url = "https://st-try-e1382-default-rtdb.firebaseio.com/posts.json"
            const response = await fetch(url);
            const data = await response.json();
            const lostsArray = Object.keys(data).map(key =>({ id: key, ...data[key]}));
            setLosts(lostsArray);

            console.log(data);
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


