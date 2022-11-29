import LinkedInIcon from '../assets/linkedin.svg';
import GitHubIcon from '../assets/github.svg';
import ResumeIcon from '../assets/resume.svg';
import MenuIcon from '../assets/menu.svg';

function Navbar() {
  return (
    <nav className='fixed z-10 h-24 w-full bg-periwinkle-100 p-6 text-base md:p-12'>
      <div className='hidden h-full w-full items-center justify-between lg:flex'>
        <div className='flex cursor-pointer gap-12'>
          <div>Home</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className='flex cursor-pointer gap-12'>
          <img src={LinkedInIcon} width='45px' alt='LinkedIn Logo' />
          <img src={GitHubIcon} width='45px' alt='GitHub Logo' />
          <img src={ResumeIcon} width='45px' alt='Resume Logo' />
        </div>
      </div>
      <div className='flex h-full w-full cursor-pointer items-center justify-end lg:hidden'>
        <img src={MenuIcon} width='45px' alt='Menu Logo' />
      </div>
    </nav>
  );
}

export default Navbar;
