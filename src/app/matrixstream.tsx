'use client';

import { useEffect, useRef, useState } from "react";
import "./css/globals.css";
import "./css/matrix.css"
import { wait } from "./scripts/globals"
import { prefetchDNS } from "react-dom";

interface StreamProps{
    x: number
}

function randomUnicodeChar(min = 0x0000, max = 0x10FFFF) {
  if (min > max || min < 0 || max > 0x10FFFF) {
    throw new Error('Invalid Unicode range');
  }
  const codePoint = Math.floor(Math.random() * (max - min + 1)) + min;
  return String.fromCodePoint(codePoint);
}

export default function MatrixStream({ x }: StreamProps){
    const pRef = useRef<HTMLParagraphElement>(null);
    const [isAlive, setAlive] = useState(false)
    const [isFirst, setFirst] = useState(true)

    async function generateTextStream(elementRef: HTMLParagraphElement | null){
        if (elementRef){
            setAlive(true)
            while (elementRef.clientHeight < window.innerHeight){
                elementRef.innerHTML += randomUnicodeChar(0x0021, 0x007E) + "\n"
                await wait(25)
            }
            elementRef.classList.add("fade-out")
            await wait(2000)
            setAlive(false)
        }
    }   

    useEffect( () => {
        if (!isAlive && pRef.current) {
            pRef.current.innerHTML = ""
            pRef.current.classList.remove("fade-out")
            if (isFirst){
                setFirst(false)
                setTimeout(() => {
                    generateTextStream(pRef.current);
                }, Math.floor(Math.random() * (5000 - 500 + 1)) + 500)
            } else {
                setTimeout(() => {
                    generateTextStream(pRef.current);
                }, Math.floor(Math.random() * (2500 - 1000 + 1)) + 500)
            }
        }
    }, [isAlive]);

    return(
        <p className="fixed text-violet-600 font-source-code-pro whitespace-pre-wrap w-[1rem]" style={{left: x}} ref={pRef}>
        </p>
    )
}