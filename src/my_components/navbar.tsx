import React from 'react';
import Glow from './glow';
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
              <div className="flex flex-row items-center md:ml-auto">
                <DarkModeToggle />
              </div>
          </div>
        </nav>
    )
}
