import { FC, ReactNode, useState } from 'react';
import MinimizeIcon from '../assets/button-minimize-icon';
import ScreenIcon from '../assets/button-screen-icon';
import CloseIcon from '../assets/button-close-icon';
import useDimensions from '../hooks/useDimensions';

type Tab = 'About Me' | 'My Skills' | 'My Projects' | 'Contact Me';

const Window2: FC<{ children: ReactNode; tab: Tab; multi?: boolean }> = ({
  children,
  tab,
  multi,
}) => {
  const [active, setActive] = useState<Tab>(tab);

  const tabs = {
    'About Me': {
      zIndex:
        active === 'My Skills' || active === 'My Projects' || active === 'Contact Me' ? 0 : 30,
      borderBottomWidth: active === 'About Me' ? '0px' : '3px',
      color: active === 'About Me' ? 'black' : '#ff7a9b',
      backgroundColor: '#ff7a9b',
    },
    'My Skills': {
      zIndex:
        active === 'My Projects' || active === 'Contact Me' ? 10 : active === 'About Me' ? 20 : 30,
      borderBottomWidth: active === 'My Skills' ? '0px' : '3px',
      color: active === 'My Skills' ? 'black' : '#fa6a0a',
      backgroundColor: '#fa6a0a',
    },
    'My Projects': {
      zIndex:
        active === 'Contact Me' ? 20 : active === 'About Me' || active === 'My Skills' ? 10 : 30,
      borderBottomWidth: active === 'My Projects' ? '0px' : '3px',
      color: active === 'My Projects' ? 'black' : '#f9a31b',
      backgroundColor: '#f9a31b',
    },
    'Contact Me': {
      zIndex: active === 'About Me' || active === 'My Skills' || active === 'My Projects' ? 0 : 30,
      borderBottomWidth: active === 'Contact Me' ? '0px' : '3px',
      color: active === 'Contact Me' ? 'black' : '#1884db',
      backgroundColor: '#1884db',
    },
  };

  const handleColor = (tab: Tab, variant: string) => {
    let bg = '';

    switch (tab) {
      case 'About Me':
        variant === 'primary' ? (bg = '#ff7a9b') : (bg = '#d34b8c');
        break;

      case 'My Skills':
        variant === 'primary' ? (bg = '#fa6a0a') : (bg = '#b4331f');
        break;

      case 'My Projects':
        variant === 'primary' ? (bg = '#f9a31b') : (bg = '#d36f2d');
        break;

      case 'Contact Me':
        variant === 'primary' ? (bg = '#1884db') : (bg = '#2753af');
        break;

      default:
        break;
    }

    return bg;
  };

  const handleTabClick = (tab: Tab) => {
    setActive(tab);
  };

  return (
    <div className='flex h-full w-full flex-col rounded-xl border-3 border-solid border-black bg-offwhite-200 drop-shadow-[10px_10px_0px_black]'>
      <nav className='relative flex h-[25px] w-full items-center justify-end border-b-3 border-solid border-black p-4 font-semibold tracking-wide'>
        {multi ? (
          <ul className='absolute -left-[3px] -bottom-[3px] flex h-[calc(100%+6px)] w-full'>
            <li
              className={`about-me absolute left-0 inline-flex h-full w-32 cursor-pointer items-center justify-center rounded-t-xl border-r-3 border-t-3 border-l-3 border-solid border-black bg-white ${
                active === 'About Me' && 'active'
              }`}
              style={tabs['About Me']}
              onClick={() => handleTabClick('About Me')}
            >
              <a>
                <span>About Me</span>
              </a>
            </li>
            <li
              className={`my-skills absolute left-[34px] inline-flex h-full w-32 cursor-pointer items-center justify-center rounded-t-xl border-r-3 border-t-3 border-l-3 border-solid border-black bg-white ${
                active === 'My Skills' && 'active'
              }`}
              style={tabs['My Skills']}
              onClick={() => handleTabClick('My Skills')}
            >
              <a>
                <span>My Skills</span>
              </a>
            </li>
            <li
              className={`my-projects absolute left-[68px] inline-flex h-full w-32 cursor-pointer items-center justify-center rounded-t-xl border-r-3 border-t-3 border-l-3 border-solid border-black bg-white ${
                active === 'My Projects' && 'active'
              }`}
              style={tabs['My Projects']}
              onClick={() => handleTabClick('My Projects')}
            >
              <a>
                <span>My Projects</span>
              </a>
            </li>
            <li
              className={`contact-me absolute left-[102px] inline-flex h-full w-32 cursor-pointer items-center justify-center rounded-t-xl border-r-3 border-t-3 border-l-3 border-solid border-black bg-white ${
                active === 'Contact Me' && 'active'
              }`}
              style={tabs['Contact Me']}
              onClick={() => handleTabClick('Contact Me')}
            >
              <a>
                <span>Contact Me</span>
              </a>
            </li>
          </ul>
        ) : (
          <ul className='absolute -left-[3px] -bottom-[3px] flex h-[calc(100%+6px)] w-full'>
            <li
              className='absolute left-0 inline-flex h-full w-32 items-center justify-center rounded-t-xl border-r-3 border-t-3 border-l-3 border-solid border-black bg-white'
              style={{ backgroundColor: handleColor(active, 'primary') }}
            >
              <a>
                <span>{active}</span>
              </a>
            </li>
          </ul>
        )}
        <div className='relative z-40 flex gap-1'>
          <div className='h-4 w-4 rounded-full border-3 border-solid border-zinc-400 bg-offwhite-200 drop-shadow-[2px_2px_0px_rgb(161_161_170)]' />
          <div className='h-4 w-4 rounded-full border-3 border-solid border-zinc-400 bg-offwhite-200 drop-shadow-[2px_2px_0px_rgb(161_161_170)]' />
          <div className='h-4 w-4 rounded-full border-3 border-solid border-black bg-offwhite-200 drop-shadow-[2px_2px_0px_black] hover:cursor-pointer hover:bg-red-500' />
        </div>
        <div
          className='absolute left-0 top-[calc(100%+3px)] flex h-14 w-full items-center justify-center border-b-3 border-solid border-black font-medium'
          style={{ backgroundColor: handleColor(active, 'primary') }}
        >
          <span className='w-10/12 rounded-full border-3 border-solid border-black bg-offwhite-200 py-1 px-4 text-sm'>
            {`home/${active.replaceAll(' ', '-').toLowerCase()}.txt`}
          </span>
        </div>
      </nav>
      <div className='mx-auto mt-14 h-[calc(100%-25px)] w-full overflow-y-scroll rounded-b-xl bg-white'>
        {children}
      </div>
    </div>
  );
};

export default Window2;
