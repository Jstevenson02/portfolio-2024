import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='flex w-screen h-screen'>
        <div className='w-1/2 p-4'>
          <Link href={"/#about"}>About</Link>
        </div>
        <div className='w-1/2 p-4'>
          <div id='container' className='container'>
            <h1 id='about' className='h-full'>
              About
            </h1>
            <h2 id='experience' className='h-full'>
              Experience
            </h2>
            <h3 id='projects'>Projects</h3>
          </div>
        </div>
      </div>
    </>
  );
}
