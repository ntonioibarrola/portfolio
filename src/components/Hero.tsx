import useWindowDimensions from '../hooks/window-dimensions';
import Rainbow from '../assets/rainbow.svg';

const dropShadow = () => {
  const { width } = useWindowDimensions();
  const maxWidth = 1920;
  const minWidth = 1024;

  let xFactor = 0;
  const xFactorMin = 10;
  const xFactorMax = 31;

  let yFactor = 0;
  const yFactorMin = 6;
  const yFactorMax = 17;

  if (width > maxWidth) {
    xFactor = xFactorMax;
    yFactor = yFactorMax;
  } else if (width < minWidth) {
    xFactor = xFactorMin;
    yFactor = yFactorMin;
  } else {
    xFactor = xFactorMin + (xFactorMax - xFactorMin) * ((width - 1024) / (1920 - 1024));
    yFactor = yFactorMin + (yFactorMax - yFactorMin) * ((width - 1024) / (1920 - 1024));
  }

  return `drop-shadow(${xFactor}px ${yFactor}px 0 #FF7999)`;
};

function Hero() {
  return (
    <section className='h-screen w-full'>
      <div className='absolute right-1/2 left-1/2 flex h-screen min-h-[max(100vh,475px)] w-full max-w-screen-5xl -translate-x-1/2 flex-col justify-end'>
        <div className='relative bottom-[29%] lg:bottom-0'>
          <p className='inline-block animate-squiggle font-poppins text-charcoal fluid-text-6xl sm:fluid-text-7xl lg:fluid-text-7xl'>
            <span className='flex -translate-x-4 justify-end font-bold lg:-translate-x-7'>
              <span>Hello! I'm&nbsp;</span>
              <span className='text-froly'>Antonio</span>
              <span className='inline-block origin-[70%_80%] animate-wave'>👋</span>
            </span>
            <span
              style={{ WebkitTextStroke: '1.5px #2A2829' }}
              className='mb-4 block -translate-x-4 font-extrabold tracking-wider text-offwhite-100 fluid-text-8xl sm:fluid-text-10xl lg:-translate-x-7 lg:fluid-text-9xl'
            >
              WEB DEVELOPER
            </span>
          </p>
        </div>
        <img
          src={Rainbow}
          className='mb-[80px] h-auto w-full origin-bottom-left scale-[1.5] object-contain lg:scale-[1]'
        />
      </div>
      <div className='absolute left-1/2 right-1/2 z-10 flex h-screen w-full max-w-screen-5xl -translate-x-1/2 translate-y-2'>
        <div className='h-screen lg:w-[76.5%]' />
        <div
          style={{ filter: dropShadow() }}
          className="h-screen w-full bg-[url('./assets/background.png')] bg-contain bg-right-bottom bg-no-repeat sm:mx-28 lg:mr-20"
        />
      </div>
    </section>
  );
}

export default Hero;
