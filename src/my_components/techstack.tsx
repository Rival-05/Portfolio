import React from 'react';

export const Techie = () => {
    return(
            <div className="flex flex-wrap items-center mt-2 gap-2">
                <div className="flex flex-row gap-3 items-center justify-between px-4 py-2 border border-transparent dark:border-zinc-700 border-zinc-200 cursor-pointer trasition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-lg text-sm font-medium tracking-tight">
                    <img src="/util/nextjs.png" alt="Nextjs" className="w-5 h-5 rounded-full " />
                    <span>next.js</span>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between px-4 py-2 border border-transparent dark:border-zinc-700 border-zinc-200 cursor-pointer trasition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-lg text-sm font-medium tracking-tight">
                    <img src="/util/ts.png" alt="Typescript" className="w-4 h-4  " />
                    <span>typescript</span>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between px-4 py-2 border border-transparent dark:border-zinc-700 border-zinc-200 cursor-pointer trasition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-lg text-sm font-medium tracking-tight">
                    <img src="/util/react.png" alt="React" className="w-5 h-5 rounded-full " />
                    <span>react</span>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between px-4 py-2 border border-transparent dark:border-zinc-700 border-zinc-200 cursor-pointer trasition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-lg text-sm font-medium tracking-tight">
                    <img src="/util/cpp.png" alt="Cpp" className="w-4 h-4 rounded-full " />
                    <span>cpp</span>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between px-4 py-2 border border-transparent dark:border-zinc-700 border-zinc-200 cursor-pointer trasition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-lg text-sm font-medium tracking-tight">
                    <img src="/util/mysql.png" alt="Mysql" className="w-4 h-4  " />
                    <span>mysql</span>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between px-4 py-2 border border-transparent dark:border-zinc-700 border-zinc-200 cursor-pointer trasition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-lg text-sm font-medium tracking-tight">
                    <img src="/util/git.png" alt="git" className="w-5 h-5 rounded-full " />
                    <span>git</span>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between px-2 py-2 border border-transparent dark:border-zinc-700 border-zinc-200 cursor-pointer trasition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-lg text-sm font-medium tracking-tight">
                    <img src="/util/shit.jpeg" alt="git" className='h-4' />
                </div>
            </div>
    )
}