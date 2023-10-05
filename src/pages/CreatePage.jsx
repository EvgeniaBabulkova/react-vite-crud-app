import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    
    async function handleSubmit(event){
        event.preventDefault();
        const newPost = {
            caption: caption,
            image: image, 
            uid:"ZfPTVEMQKf9vhNiUh0bj"
        }; 

        const url = 
        "https://st-try-e1382-default-rtdb.firebaseio.com/posts.json";
console.log(newPost)
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newPost)
        });

        if (response.ok) {
            navigate("/lost");
        } else {
            console.log("Something's wrong")
        }
    }

    return (
        <section className="page">
            <h1>Create new Post</h1>
            <form onSubmit={handleSubmit}>
                <label> Caption </label>
                <input 
                type="text" 
                value={caption} 
                onChange={event=> setCaption(event.target.value)}
                />

                <label> Image</label>
                <input 
                type="url" 
                value={image} 
                onChange={event => setImage(event.target.value)}
                />
                
                <button>Create</button>
            </form>

        </section>
    );
}