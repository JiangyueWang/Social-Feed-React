import React from 'react';

const DisplayComments = (props) => {

    return (
        props.comments.map((comment) => {
        return (
            <div>
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
            </div>
            
        )
         }) 
    )
}
 
export default DisplayComments;