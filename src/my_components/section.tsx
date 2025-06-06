import React from "react";
import { Techie } from "@/my_components/techstack";
import { Achieved } from "./achievements";
import { Bookameat } from "./bookameet";

export const Sextion = () =>{
    return(
        <section className="flex-col justify-center items-center py-3">
        <h1 className="text-2xl text-[#FFFFFF] font-medium tracking-tight">dev ~ i debug in prod btw.</h1>
        <div className="flex flex-col mt-5 text-gray-300 leading-relaxed">
            <p className="tracking-wide">i'm a 21-year-old and a final year web developer <br />
            and an active member of the dev-community. From debugging <br />at 2am to shipping side
            projects for fun, I love building clean,<br /> functional web apps that just work.
            </p>
            <p className="tracking-wide mt-4 mb-4">Meanwhile you can find me on the field playing cricket, 
            <br />or chilling and shitposting on <a href="https://x.com/Rival_o5" className="underline underline-offset-2 decoration-gray-600 transition-all duration-200 hover:decoration-gray-400 mouse-cursor decoration-2">twitter</a>.
            </p>
            <div className="mt-6 mb-2 font-medium tracking-normal ">my weapons of mass-creation:</div>
            <Techie />
            <Bookameat />
            <Achieved />
        </div>
        </section>
    )
}
