import React from 'react';

const Title = (props) => {
    const title = props.title;
    return (
        <div>
            <h3><a href="">{title ? title : 'যে কৌশলে ইসরায়েলে প্রবেশ করে ফিলিস্তিনি যোদ্ধারা'}</a></h3>
        </div>
    );
};

export default Title;