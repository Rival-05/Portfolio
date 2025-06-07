import React from 'react';

export const Bookameat = () => {
    return(
        <div className='flex flex-wrap gap-2 mt-10 items-center'>
            <span className='font-medium'>Available for freelance projects - </span>
            <br />
            <div className='flex flex-row gap-3 items-center justify-between px-3 py-2 border  dark:border-zinc-700 border-zinc-200 cursor-pointer hover:shadow-md rounded-lg text-sm font-medium tracking-tight'>
                <a href="https://cal.com/rajat-tripathi/30min" className='flex flex-row gap-2 justify-between items-center'>
                    <img src="/util/gmeet.png" alt="Gmeet" className='w-5 h-5 rounded' />
                    <span className='underline underline-offset-2 decoration-gray-600 transition-all duration-200 hover:decoration-gray-400 mouse-cursor decoration-2'>book-a-meet</span>
                </a>
            </div>
        </div>
    )
}