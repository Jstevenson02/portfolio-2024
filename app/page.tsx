import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>Hello World</div>
      <div id='container' className='container'>
        <h1 id='about' className='h-full'>
          About
        </h1>
        <h2 id='experience' className='h-full'>
          Experience
        </h2>
        <h3 id='projects'>Projects</h3>
      </div>
    </>
  );
}
``;
