import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return (
        props.post.map((post) => {
            return (
                    <Post post={post} />
                
            )
        })

    )
}
 
export default DisplayPosts;