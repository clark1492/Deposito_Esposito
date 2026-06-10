import { useState, useEffect } from 'react';
import axios from 'axios';

function DeletePostById({postId}) {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => { setPost(response.data) })
    }, [])

    return (
        <div>
            <br />
            <h2> Risultato della DELETE postId = {postId}</h2>
            <p>Post {post.id} eliminato con successo!</p> 
        </div>
    )
}

export default DeletePostById;