import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import TheMatrix from "./matrixwrapper";
import "./css/globals.css";
import Image from "next/image";
import wordart from '../../public/wordart.png';

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mason's Portfolio",
  description: "Mason's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.className} antialiased`}
      >
        <TheMatrix>
          <div className="z-10 w-[100%]">
            <div className="absolute min-h-screen h-auto bg-black absolute text-teal-200 p-5 border-x-2 border-violet-600 w-[75%] md:w-[50%] mx-[12.5%] md:mx-[25%] content-container">
              <div className="flex justify-center items-center">
                  <Image
                    src={wordart}
                    alt="wordart"
                    style={{width: "50%", height: "auto", minHeight: "10rem", minWidth: "10rem"}}
                    className="object-contain"
                  />
              </div>
              <div className="text-xl text-pink-400 mb-10 underline underline-offset-4 flex items-center flex-col lg:flex-row justify-around w-[100%]">
                <a className="mb-3 lg:mb-0" href="/portfolio_v2/">Home</a>
                <a className="mb-3 lg:mb-0 cursor-default">Resume & Portfolio</a>
                <a className="mb-3 lg:mb-0 cursor-default">Blog</a>
                <a className="mb-3 lg:mb-0 cursor-default">Web Things</a>
              </div>
              {children}
              <div className="mt-20 text-violet-600 text-center text-xs">
                <p className="mb-1">Copyright &copy; 2025 Mason Shields</p>
                <p>You are free to use any code on this website, but ask if you want to use content!</p>
              </div>
            </div>
          </div>
        </TheMatrix>
      </body>
    </html>
  );
}
