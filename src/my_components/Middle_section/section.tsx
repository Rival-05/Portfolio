import React from "react";
import { Techie } from "./techstack";
import { Achieved } from "./achievements";
import { Bookameat } from "./bookameet";
import { Ad } from "./ad";
import { Contactdiv } from "../contact/contactdiv";
import Image from "next/image";

export const Sextion = () =>{
    return(
        <section className="flex-col justify-center items-center py-3">
        <h1 className="text-2xl dark:text-[#FFFFFF] text-[#000000] font-medium tracking-tight">dev ~ i debug in prod btw.</h1>
        <div style={{ wordSpacing: '1px' }} className="flex flex-col cursor-default mt-5 dark:text-[#D4D4D4] text-[#333333] tracking-tight leading-relaxed">
            
            <div className="flex justify-between">
                <p className="tracking-normal">i&apos;m a 21-year-old and a final year web developer 
                and an <br /> active member of the dev-community. From <br /> debugging at 2am to shipping side
                projects for fun, I love building <br /> clean, functional web apps that just work.
                </p>
                <Image src="/util/dp.jpg"  alt="profile-pic" width={100} height={100} className="rounded-sm"/>
            </div>
            
            <p className="tracking-wide mt-5 mb-4">Meanwhile you can find me on the field playing cricket, 
            <br />or chilling and shitposting on <a href="https://x.com/Rival_o5" className="underlining-links">X</a>.
            </p>
            <div className="mt-10 mb-2 font-medium tracking-normal dark:text-gray-200">my weapons of mass-creation:</div>
            <Techie />
            <Bookameat />
            <Achieved />
            <hr className="mt-8 border-zinc-700"/>
            <Ad />
            <hr className="mt-10 border-zinc-700"/>
            <Contactdiv />
        </div>
        </section>
    )
}
