import { FC, ReactNode } from 'react';
import MinimizeIcon from '../assets/button-minimize-icon';
import ScreenIcon from '../assets/button-screen-icon';
import CloseIcon from '../assets/button-close-icon';

const Window: FC<{ children: ReactNode; title: string }> = ({ children, title }) => {
  return (
    <div className='relative h-full w-full rounded-retro border-1 border-solid border-charcoal bg-offwhite-100 drop-shadow-[6px_6px_0px_rgba(0,_0,_0,_0.15)]'>
      <nav className='absolute flex h-[25px] w-full items-center justify-between px-[5px]'>
        <div>{title}</div>
        <div className='flex gap-1'>
          <div className='h-[calc(25px-10px)] w-[calc(25px-10px)] border-1 border-solid border-zinc-400 bg-white text-zinc-400'>
            <MinimizeIcon />
          </div>
          <div className='h-[calc(25px-10px)] w-[calc(25px-10px)] border-1 border-solid border-zinc-400 bg-white text-zinc-400'>
            <ScreenIcon />
          </div>
          <div className='h-[calc(25px-10px)] w-[calc(25px-10px)] cursor-pointer border-1 border-solid border-charcoal bg-white text-charcoal hover:bg-red-500 hover:text-offwhite-100'>
            <CloseIcon />
          </div>
        </div>
      </nav>
      <div className='relative bottom-[-25px] mx-auto h-[calc(100%-25px-5px)] w-[calc(100%-10px)] rounded-retro border-1 border-solid border-charcoal bg-white'>
        {children}
      </div>
    </div>
  );
};

export default Window;
