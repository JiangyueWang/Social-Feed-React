import React, { useState } from 'react';

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    let [id, setId] = useState(3);

    function getPostTime() {
        // const timeSubmit = Date.now();
        // const date = new Date(timeSubmit);
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
    function handleSubmit(event) {
        event.preventDefault();
        const postTime = getPostTime();
        const newId = id + 1; 
        setId(newId);
        // console.log(JSON.stringify(postTime))
        let newPost = {
            id: id,
            name: name,
            postTime: postTime,
            post: post,
        }
        props.addNewPost(newPost)

    }
    return (
        <form onSubmit={handleSubmit} className='create-post-form shadow-sm p-3 mb-5 bg-white rounded'>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)}></input>
                <small class="form-text text-muted">This name will appear next to your post.</small>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Post</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Post" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
                
            </div>
            <div className='create-post-button'>
                <button type="submit" class="btn btn-primary">Create</button>
            </div>
            
       
        </form>

        

        // {/* <form onSubmit={handleSubmit}>
        //     <label>Name</label>
        //     <input type="text" ></input>

        //     <label>Post</label>
        //     <input type="text" ></input>

        //     <button type='submit'>Create</button>

        // </form> */}
    );
}
 
export default CreatePost;