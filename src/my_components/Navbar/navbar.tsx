import React from 'react';
import Glow from './glow';
import { Star } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export const Nav = () =>{
    return(
        <nav className="py-5 mb-3 lg:mb-10 md:mb-10">
          <div className="flex flex-row md:items-center justify-between">
              <div className="flex items-center outline-none ">
                  <a href="https://x.com/Rival_o5" className="flex-none lg:flex items-center gap-3 text-3xl font-semibold text-[#000000] dark:text-[#FFFFFF] antialiased tracking-tight">rival.me
                  <Glow />  
                  </a>   
              </div>
              <div className="flex flex-row gap-4 items-center md:ml-auto">
                <a href="https://github.com/Rival-05/Portfolio">
                  <button className="relative overflow-hidden group flex items-center justify-between gap-2 cursor-pointer border border-zinc-500 dark:border-zinc-700 px-4 py-1 transition-all duration-300 hover:shadow-[0_0_8px_#00000040] dark:hover:shadow-[0_0_8px_#ffffff40]">
                    <Star size={17} className="text-zinc-400 group-hover:text-amber-400 transition-all duration-300 relative z-10" />
                    <span>star</span>
                    <span className="absolute left-[-75%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-x-[100%]" />
                  </button>
                </a>
                <DarkModeToggle />
              </div>
          </div>
        </nav>
    )
}
