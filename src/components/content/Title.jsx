import React from 'react';
import './Title.css';

const Title = (props) => {
    const title = props.title;
    return (
        <div>
            <div className='title fw-medium fs-lg'>{title ? title : 'যে কৌশলে ইসরায়েলে প্রবেশ করে ফিলিস্তিনি যোদ্ধারা'}</div>
        </div>
    );
};

export default Title;