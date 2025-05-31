"use client";

import { useEffect, useState } from "react";
import MatrixStream from "./matrixstream";



export default function TheMatrix({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    function generateRemArray(windowWidth: number){
      let curVal = 0
      const remInPx = 16;
      const rez: number[] = []
      while (curVal < windowWidth){
        rez.push(curVal)
        curVal += remInPx
      }
      return rez
    }
    const [streams, setStreams] = useState<number[]>([])
    let width = 0
    useEffect(() => {
      width = window.innerWidth
    }, [])
    useEffect(() => {
      setStreams(generateRemArray(window.innerWidth))
    }, [width])

    return(
        <div>
            <div className="fixed -z-10">
              {streams.map((index) => (
                <MatrixStream x={index} key={index}/>
              ))}
            </div>
            {children}
        </div>
    )
}