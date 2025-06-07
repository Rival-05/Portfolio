import React from "react";
import { Techie } from "@/my_components/techstack";
import { Achieved } from "./achievements";
import { Bookameat } from "./bookameet";
import { Ad } from "./ad";

export const Sextion = () =>{
    return(
        <section className="flex-col justify-center items-center py-3">
        <h1 className="text-2xl text-[#FFFFFF] font-medium tracking-tight">dev ~ i debug in prod btw.</h1>
        <div className="flex flex-col mt-5 text-gray-300 leading-relaxed ">
            <p className="tracking-wide">i'm a 21-year-old and a final year web developer <br />
            and an active member of the dev-community. From debugging <br />at 2am to shipping side
            projects for fun, I love building clean,<br /> functional web apps that just work.
            </p>
            <p className="tracking-wide mt-4 mb-4">Meanwhile you can find me on the field playing cricket, 
            <br />or chilling and shitposting on <a href="https://x.com/Rival_o5" className="underlining-links">X</a>.
            </p>
            <div className="mt-6 mb-2 font-medium tracking-normal ">my weapons of mass-creation:</div>
            <Techie />
            <Bookameat />
            <Achieved />
            <hr className="mt-5 border-zinc-800"/>
            <Ad />
        </div>
        </section>
    )
}
