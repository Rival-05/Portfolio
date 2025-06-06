import React from 'react';
import Glow from './glow';
import DarkModeToggle from './DarkModeToggle';
export const Nav = () =>{
    return(
        <nav className="py-5 mb-3 lg:mb-10 md:mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center ">
                  <a href="#" className="flex-none lg:flex items-center gap-3 text-3xl font-semibold text-[#FFFFFF] antialiased tracking-tight">rival.me
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
