import React, { useState } from 'react';

const CustomButton = (props) => {
    const [text, setText] = useState(`${props.text}`);
    function handleClick() {
        let num = 0;
        if (text === 'like') {
            setText('like +1');
        } else if(text === 'dislike') {
            setText('dislike +1');
        } else if(text.substring(0,4) === 'like') {
            num = parseInt(text.substring(6));
            setText(`like +${num+1}`)
        }
        else {
            num = parseInt(text.substring(6));
            setText(`dislike +${num+1}`)
        }

    }
    return (
        <div>
            <button onClick={handleClick} className="btn btn-outline-success" >{text}</button>
        </div>
    );
}
 
export default CustomButton;