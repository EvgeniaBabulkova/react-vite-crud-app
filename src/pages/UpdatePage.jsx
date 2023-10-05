import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {

    const [post, setPost] = useState({});
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const url = `https://st-try-e1382-default-rtdb.firebaseio.com/posts/${params.postId}.json`;

    console.log(url);
    console.log(params.postId);

    useEffect(() =>{
        async function getPost() {
            const response = await fetch(url);
            const data = await response.json();
            setPost(data);
            setCaption(post.caption);
            setImage(post.image);
        }

        getPost();
    }, [post.caption, post.image, url]);

    async function UpdatePost(event) {
        event.preventDefault();
        const postToUpdate = {
            caption: caption,
            image: image,
            uid: post.uid
        };

        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(postToUpdate)
        });

        if (response.ok) {
            navigate("/lost");
        } else {
            console.log("Something's wrong")
        }
    }



    return (
        <section className="page">
            <h1>Update Page</h1>
            <form onSubmit={UpdatePost}>
                <label>Caption</label>
                <input
                    type="text"
                    placeholder="Type a caption"
                    value={caption}
                    required
                    onChange={event => setCaption(event.target.value)}
                />
                <label>Image</label>
                <input
                    type="url"
                    placeholder="Paste an image url"
                    value={image}
                    required
                    onChange={event => setImage(event.target.value)}
                />
                <button>Save</button>

            </form>
        </section>
    );
}