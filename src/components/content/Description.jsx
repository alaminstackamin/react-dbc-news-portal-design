import React from 'react';

function Description(props) {

    const description = props.description;
    const downfaul = "বাংলাদেশকে ১৩৭ রানে হারাল ইংল্যান্ড ওয়ানডে ক্রিকেটে ৩২১ রানের বেশি রান তাড়া করে জয়ের রেকর্ড নেই বাংলাদেশের। আগের রেকর্ড ভাঙা সম্ভব হলো না। বিশ্বকাপে নিজেদের দ্বিতীয় ম্যাচে";
    return (
        <div>
            <p>{description ? description : downfaul}</p>
        </div>
    );
}

export default Description;