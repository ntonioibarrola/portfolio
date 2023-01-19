import Navbar from './components/Navbar';
import Window from './components/Window';
import Shortcut from './components/Shortcut';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import AboutMeIcon from './assets/about-icon.png';
import MySkillsIcon from './assets/skills-icon.png';
import MyProjectsIcon from './assets/projects-icon.png';
import ContactMeIcon from './assets/contact-icon.png';

function App() {
  return (
    <div className='h-screen w-screen cursor-default'>
      <Navbar />
      <main className='grid h-[calc(100%-25px)] w-full grid-cols-[1fr_minmax(320px,_960px)_1fr] grid-rows-[1fr,_1.75rem,_auto,_1.75rem] bg-froly-200'>
        <div className='col-start-2 col-end-3 row-start-1 row-end-5 grid h-full w-full grid-cols-[2rem,_2rem,_17rem,_1.5rem,_3rem,_1.5rem,_1.5rem,_1.5rem_1fr,_2rem,_2rem] grid-rows-[1fr,_8rem,_22rem,_1.5rem,_3rem,_3rem,_26.375rem,_3rem,_1fr] py-7 px-3'>
          <div className='col-start-2 col-end-7 row-start-2 row-end-6'>
            <Window title={'About Me'}>
              <AboutMe />
            </Window>
          </div>
          <div className='col-start-8 col-end-10 row-start-3 row-end-3'>
            <Window title={'My Skills'}>
              <MySkills />
            </Window>
          </div>
          <div className='col-start-5 col-end-11 row-start-5 row-end-9'>
            <Window title={'My Projects'}>
              <MyProjects />
            </Window>
          </div>
          <div className='col-start-1 col-end-4 row-start-7 row-end-7'>
            <Window title={'Contact Me'}>Hello</Window>
          </div>
        </div>
        <div className='col-start-3 col-end-4 row-start-1 row-end-5 flex justify-end p-7'>
          <div className='space-y-6'>
            <Shortcut source={AboutMeIcon}>About Me</Shortcut>
            <Shortcut source={MySkillsIcon}>My Skills</Shortcut>
            <Shortcut source={MyProjectsIcon}>My Projects</Shortcut>
            <Shortcut source={ContactMeIcon}>Contact Me</Shortcut>
          </div>
        </div>
        {/* <div className='col-start-2 col-end-2 row-start-2 row-end-5 flex justify-center p-7'>
          <div className='flex space-x-6 font-w95fa text-sm tracking-wider'>
            <Shortcut source='/src/assets/about-icon.png'>About Me</Shortcut>
            <Shortcut source='/src/assets/skills-icon.png'>My Skills</Shortcut>
            <Shortcut source='/src/assets/projects-icon.png'>My Projects</Shortcut>
            <Shortcut source='/src/assets/contact-icon.png'>Contact Me</Shortcut>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default App;
