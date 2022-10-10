import React, { useState } from "react";
import DisPlayComment from "../DisplayComments/DisplayComments";
import AddNewComment from "../AddComments/AddComments";
import CustomButton from "../CustomButton/CustomButton";
const Posts = (prop) => { 
    const [comment, setComment] = useState([{}]);
    const [show, setShow] = useState(false);
    function addNewComment(newComment) {
        const temComments = [newComment, ...comment];
        setComment(temComments);
    }
    return (   
    <div class="card">
        <div class="card-header">
            <h2>{prop.post.name}</h2>
        </div>
        <div class="card-body">

            <p>{prop.post.post}</p>
            <div>

            </div>
            
            <div className="flex">
                <div className='flex-item1'>
                    <CustomButton text='like' />
                </div>
                
                
                <button type="button" onClick={() => setShow(!show)} class="btn btn-outline-info"> 
                {
                    show === true ? 'hide comment(s)' : 'show comment(s)'
                }
                </button> 
            </div>




            {show && <DisPlayComment comments={comment}/>}
            {show &&  <AddNewComment addNewComment={addNewComment}/>}

        </div>
</div>
        
    // <div>
    //     
    //     <p>{prop.post.postTime}</p>
    //     
    //     
    // </div>

    );
}
 
export default Posts;