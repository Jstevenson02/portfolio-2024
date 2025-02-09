import Image from "next/image";

const links = [
  { label: "GitHub", url: "https://github.com/Jstevenson02", icon: "🐙" },
  { label: "Twitter", url: "https://x.com/jacobrste", icon: "🐦" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jacob-stevenson-406098162/", icon: "🔗" },
  { label: "Reddit", url: "https://www.reddit.com/user/jacobrste/", icon: "( ͡° ͜ʖ ͡°)" },
  { label: "Portfolio", url: "https://jacobrs.com", icon: "💼" },
];

const LinkTree = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
      <Image
        src='/jacob.jpg'
        alt='Jacob'
        className='w-24 h-24 rounded-full mb-4 border-4 border-gray-700'
        width={1000}
        height={1000}
      />
      <div className='text-3xl font-bold mb-6'>👋 Welcome to My Links</div>
      <div className='w-full max-w-sm space-y-4'>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block bg-gray-800 hover:bg-gray-700 text-center px-6 py-3 rounded-lg text-lg font-medium shadow-md transition'
          >
            {link.icon} {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkTree;
