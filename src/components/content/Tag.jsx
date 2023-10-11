import React from 'react';

function Tag(props) {
    const tag = props.tag;
    const downfaul = "রাজধানী";
    return (
        <div>
            <span className='fs-sm fw-light'>{tag ? tag : downfaul}</span>
        </div>
    );
}

export default Tag;