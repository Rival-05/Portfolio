import React from 'react';
import {FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaPaperclip,FaEnvelope } from 'react-icons/fa';

export const Last = () => {
    return(
        <small>
            <hr className="mt-5 border-zinc-800"/>
            <div className='flex justify-between mt-4'>
                <p className='text-sm cursor-default'>© 2025 rival.me </p>
                <div className="flex gap-3 text-lg">
                <a href="https://x.com/Rival_o5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaTwitter /></a>
                <a href="https://github.com/Rival-05" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-[#ffffff] dark:text-gray-300"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/rivalo5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
                <a href="https://www.instagram.com/rivalxdezines/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
                <a href="mailto:rivalo3.chat@gmail.com" className="hover:text-orange-300"><FaEnvelope /></a>
                <a href="#" className="hover:text-purple-400"><FaPaperclip /></a>
            </div>
            </div>
        </small>  
    )
}