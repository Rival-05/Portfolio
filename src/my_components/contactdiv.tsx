import React from 'react';
import ContactForm from './contact';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
        subsets: ['latin'],
        weight : '400',
})

export const Contactdiv = () => {
    return(
        <div className='flex flex-row items-center justify-between gap-4 mt-10 px-4'>
            <ContactForm />
            <span className={`${caveat.className} text-xl flex items-center w-[200px]`}> "Great brands aren't built by chance — they're
                 engineered with intent. I don't just write code, I build experiences. 
                 You're one message away from it all."
            </span>
        </div>
    )
}