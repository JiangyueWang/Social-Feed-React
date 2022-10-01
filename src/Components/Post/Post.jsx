import React, { useState } from "react";
import DisPlayComment from "../DisplayComments/DisplayComments";
import AddNewComment from "../AddComments/AddComments";
const Posts = (prop) => { 
    const [comment, setComment] = useState([{}]);
    const [show, setShow] = useState(false);
    function addNewComment(newComment) {
        let temComments = [newComment, ...comment];
        setComment(temComments);
    }
    return (       
    <div>
        <h2>{prop.post.name}</h2>
        <p>{prop.post.postTime}</p>
        <p>{prop.post.post}</p>
    
        <button type="button" onClick={() => setShow(!show)}> 
        {
            show === true ? 'hide comment(s)' : 'show comment(s)'
        }
        </button> 
        <div>
            {show && <DisPlayComment comments={comment}/>}
            {show &&  <AddNewComment addNewComment={addNewComment}/>}
        </div>  
    </div>

    );
}
 
export default Posts;