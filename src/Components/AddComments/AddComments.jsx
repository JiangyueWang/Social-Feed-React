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
       <form onSubmit={handleCommentSubmit} className='create-post-form shadow-sm p-3 mb-5 bg-white rounded comment-form'>
        <p>Add new comment below</p>
        <div class="form-group comment-form-group">
           <label>Name</label>
            <input class="form-control"  type="text" value={name} onChange={(event)=> setName(event.target.value)}></input> 
        </div>
        <div className="form-group comment-form-group">
            <label>Comment</label>
            <input class="form-control"  type='text' value={comment} onChange={(event)=>setComment(event.target.value)}></input>
        </div>
        
        <button class="btn btn-primary">Add</button>
       </form>
    );
}
 
export default AddComments;