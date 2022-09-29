import React from "react";

const Posts = (prop) => {
    return (
    <div>
        <h2>{prop.post.name}</h2>
        <p>{prop.post.postTime}</p>
        <p>{prop.post.post}</p>
        <button>like</button>
        <button>dislike</button>
    </div>
    );
}
 
export default Posts;