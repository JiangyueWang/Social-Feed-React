import React, { useState } from "react";
import DisPlayComment from "../DisplayComments/DisplayComments";
import AddNewComment from "../AddComments/AddComments";
import CustomButton from "../CustomButton/CustomButton";
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
        <CustomButton text='like' />
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