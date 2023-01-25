import { FC, Fragment, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Window from './components/Window';
import Shortcut from './components/Shortcut';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import AboutMeIcon from './assets/about-icon.png';
import MySkillsIcon from './assets/skills-icon.png';
import MyProjectsIcon from './assets/projects-icon.png';
import ContactMeIcon from './assets/contact-icon.png';
import Window2 from './components/RetroWindow';
import TypeWriter from './components/TypeWriter';
import MinimizeIcon from './assets/button-minimize-icon';
import ScreenIcon from './assets/button-screen-icon';
import CloseIcon from './assets/close-icon';
import DesktopWindow from './components/DesktopWindow';

// About Me 400 x 552
// My Skills 416 x 352
// My Projects 544 x 566
// Contact Me 336 x 422

function App() {
  const welcome: string[] = [
    ` _       __     __`,
    `| |     / /__  / /________  ____ ___  ___`,
    `| | /| / / _ \\/ / ___/ __ \\/ __ '__ \\/ _ \\`,
    `| |/ |/ /  __/ / /__/ /_/ / / / / / /  __/`,
    `|__/|__/\\___/_/\\___/\\____/_/ /_/ /_/\\___/ `,
  ];

  return (
    <main className='h-screen w-screen cursor-default bg-[url("assets/bg-1.png")] bg-cover'>
      <Navbar />
      <div className='h-14' />
      <div className='relative grid aspect-video h-[calc(100%-3.5rem)] w-full grid-cols-1 grid-rows-[1fr,_1.75rem,_auto,_1.75rem]'>
        <DesktopWindow
          title='About Me'
          className='h-[26rem] w-80 overflow-hidden rounded-retro border-2 border-solid border-froly-200 bg-independence-400 shadow-window desktop:h-[30rem] desktop:w-[30rem]'
        >
          <AboutMe />
        </DesktopWindow>
        <div className='absolute left-1/2 right-1/2 bottom-0 inline-flex justify-center py-7 px-0 desktop:right-0 desktop:bottom-0 desktop:left-0 desktop:top-0 desktop:justify-end desktop:py-0 desktop:px-7'>
          <div className='flex gap-x-3 sm:gap-x-6 desktop:flex-col desktop:gap-y-6'>
            <Shortcut source={AboutMeIcon}>About Me</Shortcut>
            <Shortcut source={MySkillsIcon}>My Skills</Shortcut>
            <Shortcut source={MyProjectsIcon}>My Projects</Shortcut>
            <Shortcut source={ContactMeIcon}>Contact Me</Shortcut>
          </div>
        </div>
      </div>
      <div className='glassmorphism fixed left-0 bottom-0 h-[26rem] w-80 rounded-retro border-2 border-solid border-portage-200 p-10 shadow-window desktop:h-[30rem] desktop:w-[30rem]'>
        <TypeWriter ascii={welcome} color={'portage'} />
      </div>
      {/* <main className='grid h-[calc(100%-25px)] w-full grid-cols-[1fr] grid-rows-[1fr,_1.75rem,_auto,_1.75rem] bg-froly-200 desktop:grid-cols-[1fr_minmax(320px,_960px)_1fr]'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-2 grid h-full w-full py-14 px-5 pb-[calc(3.5rem-1.75rem)] desktop:col-start-2 desktop:col-end-3 desktop:row-end-5 desktop:grid-cols-[2rem,_2rem,_17rem,_1.5rem,_3rem,_1.5rem,_1.5rem,_1.5rem_1fr,_2rem,_2rem] desktop:grid-rows-[1fr,_8rem,_22rem,_1.5rem,_3rem,_3rem,_26.375rem,_3rem,_1fr] desktop:py-7 desktop:px-3 [@media(max-width:1259px)]:items-center [@media(max-width:1259px)]:justify-center'>
          <div className='desktop:col-start-2 desktop:col-end-7 desktop:row-start-2 desktop:row-end-6 [@media(max-width:1259px)]:h-[552px] [@media(max-width:1259px)]:w-[400px]'>
            <Window title={'About Me'}>
              <AboutMe />
            </Window>
          </div>
          <div className='desktop:col-start-8 desktop:col-end-10 desktop:row-start-3 desktop:row-end-3 [@media(max-width:1259px)]:h-[352px] [@media(max-width:1259px)]:w-[416px]'>
            <Window title={'My Skills'}>
              <MySkills />
            </Window>
          </div>
          <div className='desktop:col-start-5 desktop:col-end-11 desktop:row-start-5 desktop:row-end-9 [@media(max-width:1259px)]:h-[566px] [@media(max-width:1259px)]:w-[544px]'>
            <Window title={'My Projects'}>
              <MyProjects />
            </Window>
          </div>
          <div className='desktop:col-start-1 desktop:col-end-4 desktop:row-start-7 desktop:row-end-7 [@media(max-width:1259px)]:h-[422px] [@media(max-width:1259px)]:w-[336px]'>
            <Window title={'Contact Me'}>
              <ContactMe />
            </Window>
          </div>
          <div className='desktop:col-start-1 desktop:col-end-4 desktop:row-start-7 desktop:row-end-7 [@media(max-width:1259px)]:h-[422px] [@media(max-width:1259px)]:w-[336px]'>
            <Window title={'Contact Me'}>
              <ContactMe />
            </Window>
          </div>
        </div>
        <div className='col-start-1 col-end-2 row-start-2 row-end-5 flex justify-center p-7 desktop:col-start-3 desktop:col-end-4 desktop:row-start-1 desktop:justify-end'>
          <div className='flex gap-x-3 sm:gap-x-6 desktop:flex-col desktop:gap-y-6'>
            <Shortcut source={AboutMeIcon}>About Me</Shortcut>
            <Shortcut source={MySkillsIcon}>My Skills</Shortcut>
            <Shortcut source={MyProjectsIcon}>My Projects</Shortcut>
            <Shortcut source={ContactMeIcon}>Contact Me</Shortcut>
          </div>
        </div>
      </main> */}
    </main>
  );
}

export default App;
