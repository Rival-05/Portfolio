import React from 'react';
import Image from 'next/image';

export const Techie = () => {
    return(
            <div className="flex flex-wrap items-center mt-2 gap-2">
                <div className="techstack-appear">
                    <Image src="/util/nextjs.png" alt="Nextjs" width= {20} height={20} className="rounded-full" />
                    <span>next.js</span>
                </div>
                <div className="techstack-appear">
                    <Image src="/util/ts.png" alt="Typescript" width= {20} height={20} />
                    <span>typescript</span>
                </div>
                <div className="techstack-appear">
                    <Image src="/util/react.png" alt="React" width= {20} height={20} className="rounded-full " />
                    <span>react</span>
                </div>
                <div className="techstack-appear">
                    <Image src="/util/cpp.png" alt="Cpp" width= {16} height={16} />
                    <span>cpp</span>
                </div>
                <div className="techstack-appear">
                    <Image src="/util/mysql.png" alt="Mysql" width= {16} height={16}/>
                    <span>mysql</span>
                </div>
                <div className="techstack-appear">
                    <Image src="/util/git.png" alt="git" width= {16} height={20} className="rounded-full" />
                    <span>git</span>
                </div>
                <div className="techstack-appear">
                    <Image src="/util/shit.jpeg" alt="git" width= {60} height={20}/>
                </div>
            </div>
    )
}