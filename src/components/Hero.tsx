function Hero() {
  return (
    <div className='relative -z-10 flex w-full max-w-screen-5xl justify-between bg-periwinkle-100'>
      <div className='absolute z-10 flex h-screen flex-col justify-center text-white [@media(min-width:1895px)]:ml-32 [@media(min-width:2150px)]:ml-64 [@media(max-width:1894px)]:ml-16'>
        <div className='mb-5 text-7xl'>
          <p>
            Hi, I'm <span className='text-periwinkle-200'>Antonio👋</span>
          </p>
          <p>I'm a Web Developer.</p>
        </div>
        <button className='w-48 rounded-full bg-periwinkle-200 p-3 px-6 text-lg'>
          View Projects
        </button>
      </div>
      <div className="z-5 h-screen w-full bg-[url('./assets/background.png')] bg-contain bg-right-bottom bg-no-repeat md:ml-60 4xl:mr-32"></div>
    </div>
  );
}

export default Hero;
