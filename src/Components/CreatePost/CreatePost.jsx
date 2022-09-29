import React, { useState } from 'react';

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    function getPostTime() {
        // const timeSubmit = Date.now();
        // const date = new Date(timeSubmit);
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
    function handleSubmit(event) {
        event.preventDefault();
        const postTime = getPostTime()
        // console.log(JSON.stringify(postTime))
        let newPost = {
            name: name,
            postTime: postTime,
            post: post
        }
        props.addNewPost(newPost)

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>

            <label>Post</label>
            <input type="text" value={post} onChange={(event) => setPost(event.target.value)}></input>

            <button type='submit'>Create</button>
        </form>
    );
}
 
export default CreatePost;