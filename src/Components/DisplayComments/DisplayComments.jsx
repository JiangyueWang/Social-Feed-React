import React from 'react';

const DisplayComments = (props) => {

    return (
        props.comments.map((comment) => {
        return (
            <div>
                <p>Name: {comment.name}</p>
                <p>Comment: {comment.comment}</p>
            </div>
            
        )
         }) 
    )
}
 
export default DisplayComments;