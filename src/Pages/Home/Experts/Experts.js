import React from 'react';

import expert2 from '../../../images/experts/expert-2.jpg';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';

import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: "Will Smith", img: expert1 },
    { id: 2, name: "Bilgates", img: expert2 },
    { id: 3, name: "Nura Pagla", img: expert3 },
    { id: 4, name: "TrumpBhai", img: expert4 },
    { id: 5, name: "Jhonsong Babu", img: expert5 },
    { id: 6, name: "Showmitra Podder", img: expert6 },
]

const Experts = () => {
    return (
        <div className='container'>
            This is Experts Page
            <h2>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;