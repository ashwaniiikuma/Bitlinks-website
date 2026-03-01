import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"], // ExtraBold
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL sortner in the market
          </p>
          <p className="px-50 text-center">
            we are the most straitforward URL in the world. Most of the URL shortner will track or your are ask you to give your details for login. we undersand your needs and hence we have created this URL shortner. 
          </p>
           <div className='flex gap-3 justify-start'>
                <Link href="/shorten" ><button className='bg-purple-500 shadow-lg p-3 text-white rounded-lg py-2 font-bold'>Try Now</button></Link>
                <Link href="/Github" ><button className='bg-purple-500 shadow-lg p-3 text-white rounded-lg py-2 font-bold'>Github</button></Link>
            </div>
        </div>
        <div className="flex justify-start relative">
      <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
