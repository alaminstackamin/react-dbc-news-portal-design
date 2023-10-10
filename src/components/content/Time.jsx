import React from 'react';
import ClockIcon from './ClockIcon';

function Time(props) {
    const time = props.time;
    const downfaul = "১ ঘন্টা আগে";
    return (
        <div>
            <div className='d-flex align-items-center text-danger'>
                <ClockIcon />
                <span className='fs-sm fw-light'>{time ? time : downfaul}</span>
            </div>
        </div>
    );
}

export default Time;