import React, { useState } from 'react';
import StateSenior from './StateSenior';

export default () => {
    const [showNiosSenior, setShowNiosSenior] = useState(false);

    const plans = [
        {
            name: " G 9  Arabic",
            price: 12,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 9 English",
            price: 35,
            features: [
                "One To One Sessions",
                "Limited Seats",

            ],
        },
        {
            name: " G 9 Mathematics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 9 Economics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 9 Business Studies",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 9 Data Entry Operation",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 9 Science & Technology",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 9 Accounting",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 10 Arabic",
            price: 12,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 10 English",
            price: 35,
            features: [
                "One To One Sessions",
                "Limited Seats",

            ],
        },
        {
            name: " G 10 Mathematics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 10 Economics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 10 Business Studies",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 10 Data Entry Operation",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 10 Science & Technology",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: " G 10 Accounting",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },

    ];



    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='sm:text-center flex flex-col sm:flex-row lg:ps-24 lg:gap-20'>
                    <h3
                        onClick={() => setShowNiosSenior(false)}
                        className='cursor-pointer text-white bg-[#358FFF] py-2 ps-1 text-center text-2xl w-full font-semibold sm:text-3xl mb-4 sm:mb-0'>
                        State Board Secondary
                    </h3>
                    <h3
                        onClick={() => setShowNiosSenior(true)}
                        className='cursor-pointer w-full text-white bg-[#358FFF] py-2 ps-1 text-center text-2xl font-semibold sm:text-3xl'>
                        State Board Senior Secondary
                    </h3>
                </div>
                {showNiosSenior ? (
                    <StateSenior />
                ) : (
                    <>
                    <div className='relative max-w-xl mx-auto sm:text-center lg:mt-10 mt-5'>
                            <h3 className='text-gray-800 text-2xl font-semibold sm:text-4xl'>
                                State  Secondary
                            </h3>
                        </div>
                        <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                            {
                                plans.map((item, idx) => (
                                    <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                        <div>
                                            <span className='text-[#358FFF] font-medium'>
                                                {item.name}
                                            </span>
                                            <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                                ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                            </div>
                                        </div>
                                        <ul className='py-8 space-y-3'>
                                            {
                                                item.features.map((featureItem, idx) => (
                                                    <li key={idx} className='flex items-center gap-5 text-gray-600
                                        '>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='h-5 w-5 text-[#358FFF]'
                                                            viewBox='0 0 20 20'
                                                            fill='currentColor'>
                                                            <path
                                                                fill-rule='evenodd'
                                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                                clip-rule='evenodd'></path>
                                                        </svg>
                                                        {featureItem}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="flex-1 flex items-end">
                                            <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-[#358FFF] hover:bg-blue-700 active:bg-indigo-700'>
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};