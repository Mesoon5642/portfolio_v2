import Image from "next/image"
import faceimage from "../../public/masonimage.jpg"

export default function Home(){
    return(
        <div className="text-center m-5">
            <p className="mb-5">Hello there! I'm Mason Shields, welcome to my <span className="underline underline-offset-3">(under construction)</span> portfolio website!</p>
            <p className="mb-5">I want to use this place as somewhere where I can document my CS career, ramble on about my code among other things, keep people posted on what I'm up to, and maybe make someone's day a little better!</p>
            <div className="flex justify-center">
                <Image 
                        src={faceimage}
                        alt="face image"
                        width={300}
                        height={300}
                        className="static mb-2 border-20 border-violet-600 object-contain"
                        style={{borderStyle: "ridge"}}
                />
            </div>
            <p className="text-emerald-500 mb-10">Caption: Me, for reference</p>
            <p className="mb-5">As a developer, I primarily work with full stack web development with a specialization in backend. I use React, Next.js, and Tailwind for a lot of my work, and am most familiar with Python and C++ for heavy duty DSA things.</p>
            <p className="mb-5">If you want a longer "brag sheet" than that, read my resume! I like to think I'm a humble guy, and I'd rather have my website showcase the things I build than list the lines on my resume.</p>
            <p className="text-emerald-500 mb-2">
                Where to Find Me:
            </p>
            <div className="flex w-[100%] justify-center">
                <div className="flex justify-around w-[100%] lg:w-[50%] underline underline-offset-3 text-pink-400">
                    <a href="https://github.com/Mesoon5642" target="_blank">Github</a>
                    <a href="http://www.linkedin.com/in/mason-shields-713613289" target="_blank">LinkedIn</a>
                    <a href="mailto:masonlshields@gmail.com" target="_blank">Email</a>
                </div>
            </div>
        </div>
    )
}