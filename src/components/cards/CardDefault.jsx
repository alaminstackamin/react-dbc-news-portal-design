import React from 'react';
import Time from '../content/Time';
import Title from '../content/Title';
import Description from '../content/Description';

function CardDefault(props) {
    const img = 'https://dbcnews.tv/_next/image?url=https%3A%2F%2Fapi.dbcnews.tv%2Fstorage%2F100872%2F150629.webp&w=640&q=75';
    return (
        <div>
            <a href="#" className='w-100 shadow-sm'>
                <div>
                    <img src={img} className='card-img rounded-top-2'/>
                </div>
                <div className='p-3 bg-white rounded-bottom-2 mb-2'>
                    <Time/>
                    <div className='mt-2 mb-3'>
                        <Title/>
                    </div>
                    <div>
                        <Description/>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CardDefault;