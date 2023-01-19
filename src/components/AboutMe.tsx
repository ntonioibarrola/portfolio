import { FC } from 'react';
import BackgroundImage from '../assets/about-background.jpg';
import ProfileImage from '../assets/about-profile.png';

const AboutMe: FC = () => {
  return (
    <div className='h-full w-full space-y-8 overflow-y-scroll px-8 pt-5 pb-10'>
      <div className='flex h-auto w-full items-center justify-center'>
        <div className='group relative grid aspect-[1/1.175] h-auto w-[250px] items-end overflow-hidden rounded-[0_0_100vw_100vw] transition-transform duration-popup ease-popup hover:scale-110'>
          <img
            className='relative aspect-square h-[250px] w-[250px] rounded-full object-cover'
            src={BackgroundImage}
          />
          <img
            className=' absolute left-4 h-[250px] w-auto scale-[1.2] object-cover transition-transform duration-300 ease-popup group-hover:-translate-y-6'
            src={ProfileImage}
          />
        </div>
      </div>
      <div className='h-auto w-full text-justify font-w95fa'>
        <p>
          Hello! I'm{' '}
          <span className='inline-block font-sysfont text-froly-200 hover:animate-squiggle'>
            Antonio Ibarrola
          </span>
          , a recent grad from UCSC with a knack for web development. I take pleasure in learning
          about the ins-and-outs of web development and its new technologies, and I enjoy the
          subtleties in websites like micro-animations and cohesive color themes.
        </p>
        <br />
        <p>
          When I'm not programming, I love exploring anything that gets my creative gears going—from
          taking self-portraits with a camera to dabbling in game dev and creating pixel art. In
          most cases though, you can catch me playing video games and drawing digital art in my free
          time.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
