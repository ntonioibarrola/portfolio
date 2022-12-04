function Hero() {
  return (
    <section className='h-screen w-full'>
      <div className='absolute left-1/2 right-1/2 z-10 h-screen w-full max-w-screen-4xl -translate-x-1/2'>
        <div className='m-auto flex h-screen w-11/12 flex-col items-center justify-start pt-[30vh] text-center md:ml-24 md:mr-16 md:w-auto md:items-start md:justify-center md:p-0 md:text-start'>
          <div className='fluid-text-6xl'>
            <p>
              Hi, I'm&nbsp;
              <span className='text-periwinkle-200'>Antonio</span>
              <span className='inline-block origin-[70%_80%] animate-wave'>👋</span>
            </p>
            <p>I'm a Web Developer.</p>
          </div>
          <button className='mt-5 w-48 rounded-full bg-periwinkle-200 p-3 px-6 text-base'>
            View Projects
          </button>
        </div>
      </div>
      <div className='fixed left-1/2 right-1/2 z-0 flex h-screen w-full max-w-screen-4xl -translate-x-1/2'>
        <div className='h-screen md:w-1/3' />
        <div className="h-screen w-full bg-[url('./assets/background.png')] bg-contain bg-right-bottom bg-no-repeat" />
      </div>
    </section>
  );
}

export default Hero;
