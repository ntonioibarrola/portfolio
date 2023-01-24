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

// About Me 400 x 552
// My Skills 416 x 352
// My Projects 544 x 566
// Contact Me 336 x 422

function App() {
  return (
    <div className='h-screen w-screen cursor-default'>
      <Navbar />
      <main className='grid h-[calc(100%-43px)] w-full grid-cols-1 grid-rows-[1fr,_1.75rem,_auto,_1.75rem] bg-froly-200 desktop:grid-cols-[1fr_150px]'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-2 flex items-center justify-center'>
          <div className='mt-4 h-[calc(26rem)] w-80 desktop:h-96 desktop:w-96'>
            <Window2 tab='About Me' multi>
              <AboutMe />
            </Window2>
          </div>
        </div>
        <div className='col-start-1 col-end-2 row-start-2 row-end-5 flex justify-center p-7 desktop:col-start-2 desktop:col-end-3 desktop:row-start-1 desktop:row-end-5 desktop:justify-end'>
          <div className='flex gap-x-3 sm:gap-x-6 desktop:flex-col desktop:gap-y-6'>
            <Shortcut source={AboutMeIcon}>About Me</Shortcut>
            <Shortcut source={MySkillsIcon}>My Skills</Shortcut>
            <Shortcut source={MyProjectsIcon}>My Projects</Shortcut>
            <Shortcut source={ContactMeIcon}>Contact Me</Shortcut>
          </div>
        </div>
      </main>
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
    </div>
  );
}

export default App;
