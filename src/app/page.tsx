import Image from "next/image";
import wordart from '../../public/wordart.png';

export default function Home() {
  return (
    <div className="z-10 absolute w-[100%] h-[100%]">
      <div className="bg-black absolute text-teal-200 p-5 border-x-2 border-violet-600 w-[75%] md:w-[50%] h-[100%] mx-[12.5%] md:mx-[25%] content-container">
        <div className="relative w-[100%] h-[25%]">
            <Image
              src={wordart}
              alt="wordart"
              fill
              className="object-contain"
            />
        </div>
        <p>Hello World!</p>
      </div>
    </div>

  );
}
