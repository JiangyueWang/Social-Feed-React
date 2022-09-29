import React, { useState } from 'react';
const AddComments = (props) => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');

    function handleCommentSubmit(event) {
        event.preventDefault();
        let temComment = {
            name: name,
            comment:comment,
        }
        props.addNewComment(temComment);
    }

    return (
       <form onSubmit={handleCommentSubmit}>
        <p>Add new comment below</p>
        <label>name</label>
        <input type="text" value={name} onChange={(event)=> setName(event.target.value)}></input>
        <label>comment</label>
        <input type='text' value={comment} onChange={(event)=>setComment(event.target.value)}></input>
        <button>Add</button>
       </form>
    );
}
 
export default AddComments;