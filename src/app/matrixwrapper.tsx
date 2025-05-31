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
    const [width, setWidth] = useState(0)
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
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