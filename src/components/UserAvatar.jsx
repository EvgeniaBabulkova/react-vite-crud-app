import { useEffect, useState } from "react";

export default function UserAvatar({uid}) {
    const[user, setUser] = useState({});
    
    useEffect(() => {
        async function getUser() {
            const url = `https://st-try-e1382-default-rtdb.firebaseio.com/users/${uid}.json`
            console.log(url);
            const response = await fetch(url);
            const data = await response.json();
            setUser(data);
        }
        getUser();
        
    }, [uid]);

    console.log(uid);
    return <div>{user.name}</div>;
}