import React from 'react';

export const Achieved = () => {
    return(
        <div className='flex flex-col mt-8'>
            <span className='font-medium tracking-normal text-[#333333] dark:text-gray-300'>some of my recent works : </span>
            <div className='mt-3 flex flex-wrap pl-8  gap-3 rounded-lg '>
                <ol className='list-disc text-[#222222] dark:text-gray-200 items-center'>
                    <li >
                        <div className='flex-row gap-2 items-center mt-2'>
                            <a href="#" className="underline underline-offset-2 decoration-gray-600 transition-all duration-200 hover:decoration-gray-400 mouse-cursor decoration-2">Anonymous</a>
                            <span className='flex-wrap text-[15px]'> - A real-time, identity-free application using anonymous user chat sessions. June 2o25</span>
                        </div>
                    </li>
                    <li >
                        <div className='flex-row  gap-2 items-center mt-2'>
                            <a href="#" className="underline underline-offset-2 decoration-gray-600 transition-all duration-200 hover:decoration-gray-400 mouse-cursor decoration-2">Dorm-desk</a>
                            <span className='flex-wrap text-[15px]'> - Streamlined issue tracking and resolution within the hostel premises. June 2o25</span>
                        </div>
                    </li>
                    <li >
                        <div className='flex-row gap-2 items-center mt-2'>
                            <a href="#" className="underline underline-offset-2 decoration-gray-600 transition-all duration-200 hover:decoration-gray-400 mouse-cursor decoration-2">AttendEase</a>
                            <span className='flex-wrap text-[15px]'> - face recognition for fast, contactless, and accurate verification. Jan 2o25</span>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}