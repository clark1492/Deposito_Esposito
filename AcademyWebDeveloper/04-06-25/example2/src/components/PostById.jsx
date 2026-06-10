import { useState, useEffect } from 'react';
import axios from 'axios';

function PostById({title, body, userId}) {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, { title, body, userId })
            .then((response) => { setPost(response.data) })
    }, [])

    return (
        <div>
            <br />
            <h2> Risultato della POST</h2>
            <p>Post {post.id} creato con successo!</p> 

            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostById;