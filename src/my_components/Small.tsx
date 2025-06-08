import React from 'react';
import {FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaPaperclip,FaEnvelope } from 'react-icons/fa';

export const Last = () => {
    return(
        <small>
            <hr className="mt-5 border-zinc-800"/>
            <div className='flex justify-between mt-4'>
                <p>© 2025<a href="#" className="underlining-links text-sm" >  rival.me </a></p>
                <div className="flex gap-3 text-lg">
                <a href="https://x.com/Rival_o5" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/rivalo5/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
                <a href="https://github.com/Rival-05" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
                <a href="https://www.instagram.com/rivalxdezines/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram /></a>
                <a href="mailto:rivalo3.chat@gmail.com" className="hover:text-white"><FaEnvelope /></a>
                <a href="#" className="hover:text-white"><FaPaperclip /></a>
            </div>
            </div>
        </small>  
    )
}