import React from 'react';

export const Bookameat = () => {
    return(
        <div className='flex flex-wrap gap-2 mt-10 items-center'>
            <span className='font-medium dark:text-gray-200'>Available for freelance projects - </span>
            <br />
            <div className='flex flex-row gap-3 items-center justify-between px-2 py-1 border border-zinc-700 cursor-pointer hover:shadow-lg rounded-lg text-sm font-medium tracking-tight'>
                <a href="https://cal.com/rajat-tripathi/30min" className='flex flex-row underlining-links gap-2 justify-between items-center'>
                    <img src="/util/gmeet.png" alt="Gmeet" className='w-5 h-5 rounded' />
                    <span >book-a-meet</span>
                </a>
            </div>
        </div>
    )
}