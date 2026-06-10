import { useState, useEffect } from 'react';
import axios from 'axios';

function GetPostById({postId}) {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => { setPost(response.data) })
    }, [])

    return (
        <div>
            <h2> Risultato della GET postId = {post.id}</h2>
            <ul>
                <li>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            </ul>
        </div>
    )
}

export default GetPostById;