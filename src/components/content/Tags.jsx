import React from 'react';
import Tag from './Tag';

function Tags(props) {
    return (
        <div>
            <div className='d-flex align-items-center text-danger'>
                <Tag tag="রাজধানী" /> , &nbsp; <Tag tag="আন্তর্জাতিক" />
            </div>
        </div>
    );
}

export default Tags;