import React from 'react';

export const Achieved = () => {
    return(
        <div className='flex flex-col mt-10'>
            <span className='font-medium tracking-normal text-[#333333] dark:text-gray-200'>some of my recent works : </span>
            <div className='mt-3 flex flex-wrap pl-8  gap-3 rounded-lg '>
                <ol className='list-disc text-[#222222] dark:text-gray-300 items-center'>
                    <li >
                        <div className='flex-row gap-2 items-center mt-2'>
                            <a target="_blank" rel="noopener noreferrer" href="#" className="underlining-links">Anonymity</a><span> [In progress]</span>
                            <span className='flex-wrap text-[15px]'> - A real-time, identity-free application using anonymous user chat sessions.</span>
                        </div>
                    </li>
                    <li >
                        <div  className='flex-row  gap-2 items-center mt-2'>
                            <a href="#" className="underlining-links">Dorm-desk</a><span> [In progress]</span>
                            <span className='flex-wrap text-[15px]'> - Streamlined issue tracking and resolution within the hostel premises.</span>
                        </div>
                    </li>
                    <li >
                        <div className='flex-row gap-2 items-center mt-2'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rival-05/face_recognition_based_attendance_system" className="underlining-links">AttendEase</a><span> [Jan 2o25]</span>
                            <span className='flex-wrap text-[15px]'> - face recognition for fast, contactless, and accurate verification. </span>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}