import React from 'react';
import ContactForm from './contact';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
        subsets: ['latin'],
        weight : '400',
})

export const Contactdiv = () => {
    return(
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 px-4'>
            <ContactForm />
            <span className={`${caveat.className} text-xl px-4 flex mt-4 sm:mt-0 border-l dark:text-gray-300 text-[#000000] border-zinc-600 items-center w-[240px]`}>
                &quot;Great brands aren&apos;t built by chance — they&apos;re
                 engineered with intent. I don&apos;t just write code, I build experiences. 
                 You&apos;re one message away from it all.&quot;
            </span>
        </div>
    )
}
