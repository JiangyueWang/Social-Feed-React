import React, { useState } from "react";
import DisPlayComment from "../DisplayComments/DisplayComments.jsx";
import AddNewComment from "../AddComments/AddComments.jsx";
const Posts = (prop) => { 
    const [comment, setComment] = useState([{name: 'J', comment: 'great post'}]);
    const [show, setShow] = useState(!false);
    function addNewComment(newComment) {
        let temComments = [newComment, ...comment]
        setComment(temComments);
    }
    return (       
    <div>
        <h2>{prop.post.name}</h2>
        <p>{prop.post.postTime}</p>
        <p>{prop.post.post}</p>
        <button>like</button>
        <button>dislike</button>
        <button type="button" onClick={() => setShow(!show)}> 
        {
            show === true ? 'hide comment(s)' : 'show comment(s)'
        }
        </button> 
        {
            show && <DisPlayComment comments={comment}/> 
        }
        {/* <DisPlayComment comments={comment}/>  */}
        <AddNewComment addNewComment={addNewComment}/>

    </div>
    );
}
 
export default Posts;