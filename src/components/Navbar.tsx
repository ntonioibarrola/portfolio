import LinkedInIcon from '../assets/linkedin.svg';
import GitHubIcon from '../assets/github.svg';
import ResumeIcon from '../assets/resume.svg';
import MenuIcon from '../assets/menu.svg';
import ResumePDF from '../documents/resume-2022.pdf';

function Navbar() {
  const hyperlinks = [
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      link: 'https://www.linkedin.com/in/antonio-ibarrola/',
    },
    {
      name: 'GitHub',
      icon: GitHubIcon,
      link: 'https://github.com/ntonioibarrola',
    },
    {
      name: 'Resume',
      icon: ResumeIcon,
      link: ResumePDF,
    },
  ];

  return (
    <nav className='fixed z-20 h-24 w-full max-w-screen-5xl bg-periwinkle-100 p-6 text-base md:p-12'>
      <div className='hidden h-full w-full items-center justify-between lg:flex'>
        <div className='flex cursor-pointer gap-12'>
          <div>Home</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <ul className='flex gap-12'>
          {hyperlinks.map((_, index) => (
            <li
              key={hyperlinks[index].name}
              className='group relative inline-block cursor-pointer text-sm'
            >
              <a href={hyperlinks[index].link} target='_blank' rel='noopener noreferrer'>
                <img
                  src={hyperlinks[index].icon}
                  width='45px'
                  alt={`${hyperlinks[index].name} Icon`}
                />
              </a>
              <span
                className='invisible absolute top-[130%] left-1/2 z-10 -ml-[50px] w-[100px] rounded-md bg-periwinkle-300 px-[5px] text-center text-white before:absolute before:bottom-full
                before:left-1/2 before:-ml-[5px] before:border-[5px] before:border-solid before:border-x-transparent before:border-t-transparent before:border-b-periwinkle-300 group-hover:visible'
              >
                {hyperlinks[index].name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex h-full w-full cursor-pointer items-center justify-end lg:hidden'>
        <img src={MenuIcon} width='45px' alt='Menu Logo' />
      </div>
    </nav>
  );
}

export default Navbar;
