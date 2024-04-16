import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen'>
        <div className='w-1/2 p-28 h-screen fixed  '>
          <Navbar />
        </div>
        <main>
          <div className='ml-96 py-24'>
            <h1 id='about' className='h-full'>
              About
            </h1>
            <h2 id='experience' className='h-full'>
              Experience
            </h2>
            <h3 id='projects' className='h-full'>
              Projects
            </h3>
          </div>
        </main>
      </div>
    </>
  );
}
