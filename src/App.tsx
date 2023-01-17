import DesktopNavbar from './components/DesktopNavbar';
import Window from './components/Window';
import Shortcut from './components/Shortcut';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className='h-screen w-screen cursor-default'>
      <DesktopNavbar />
      <main className='flex h-full w-full flex-col items-center justify-center gap-10 bg-froly-200'>
        <Window title={'About Me'}>Hello</Window>
        <div className='space-y-5 font-w95fa text-sm tracking-wider'>
          <Shortcut source='/src/assets/about-icon.png'>About Me</Shortcut>
          <Shortcut source='/src/assets/skills-icon.png'>My Skills</Shortcut>
          <Shortcut source='/src/assets/projects-icon.png'>My Projects</Shortcut>
          <Shortcut source='/src/assets/contact-icon.png'>Contact Me</Shortcut>
        </div>
      </main>
    </div>
  );
}

export default App;
