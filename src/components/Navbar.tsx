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
    <nav className='fixed z-20 h-24 w-full bg-offwhite-100 p-6 text-[1.05rem] tracking-wide lg:py-14 lg:px-28'>
      <div className='m-auto hidden h-full w-full max-w-screen-5xl items-center justify-between lg:flex'>
        <ul className='flex gap-7 no-underline'>
          {['Home', '/', 'Skills', '/', 'Projects', '/', 'About', '/', 'Contact'].map(
            (string, index) => (
              <li key={`${string} ${index}`} className='cursor-pointer'>
                <a className='group relative block font-bold text-charcoal'>
                  {`${string}`}
                  <span
                    className='absolute bottom-[-7px] left-[20%] h-[3px] w-[60%] overflow-hidden before:absolute before:top-0
                    before:left-0 before:h-full before:w-0 before:bg-[url("./assets/zigzag.svg")] before:duration-500 group-hover:before:w-full'
                  />
                </a>
              </li>
            ),
          )}
        </ul>
        <ul className='flex gap-7'>
          {hyperlinks.map((_, index) => (
            <li
              key={hyperlinks[index].name}
              className='group relative inline-block cursor-pointer text-sm'
            >
              <a href={hyperlinks[index].link} target='_blank' rel='noopener noreferrer'>
                <img
                  src={hyperlinks[index].icon}
                  width='50px'
                  alt={`${hyperlinks[index].name} Icon`}
                />
              </a>
              <span
                className='invisible absolute top-[130%] left-1/2 z-10 -ml-[45px] w-[90px] rounded-md bg-charcoal px-[5px] text-center text-white before:absolute before:bottom-full
                before:left-1/2 before:-ml-[5px] before:border-[5px] before:border-solid before:border-x-transparent before:border-t-transparent before:border-b-charcoal group-hover:visible'
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
