import { FC, Fragment, ReactElement, useState } from 'react';
import LinkIcon from '../assets/projects-link-icon';
import GitHubIcon from '../assets/projects-github-icon';
import FigmaIcon from '../assets/projects-figma-icon';
import SpotifyCover from '../assets/projects-spotify-cover.png';
import SpotifyPreview from '../assets/projects-spotify-preview.gif';
import TasselCover from '../assets/projects-tassel-cover.png';
import Ez3dCover from '../assets/projects-ez3d-cover.png';
import Ez3dPreview from '../assets/projects-ez3d-preview.gif';
import Tooltip from './Tooltip';

const ProjectCover: FC<{ type: 'cover' | 'preview'; source: string; hasPreview?: boolean }> = ({
  type,
  source,
  hasPreview,
}) => {
  let styles = 'absolute h-full w-full object-cover';

  if (type === 'cover' && !hasPreview) {
    return <img className={styles} src={source} />;
  }

  if (type === 'cover' && hasPreview) {
    styles += ' opacity-100 group-hover:opacity-0 transition-opacity';
  }

  if (type === 'preview') {
    styles += ' opacity-0 group-hover:opacity-100 transition-opacity';
  }

  return <img className={styles} src={source} />;
};

const ProjectLink: FC<{ text: string; link: string; icon: ReactElement }> = ({
  text,
  link,
  icon,
}) => {
  return (
    <Tooltip text={text}>
      <a href={link} target='_blank'>
        <div className='cursor-pointer opacity-60 transition-transform group-hover:scale-110 group-hover:opacity-100'>
          {icon}
        </div>
      </a>
    </Tooltip>
  );
};

interface Project {
  name: string;
  cover: ReactElement;
  preview: ReactElement | undefined;
  stack: string[];
  description: string;
  links: ReactElement[];
}

const projects: Project[] = [
  {
    name: 'Spotify Music Player',
    cover: <ProjectCover type='cover' source={SpotifyCover} hasPreview />,
    preview: <ProjectCover type='preview' source={SpotifyPreview} />,
    stack: ['React JS', 'TypeScript', 'TailwindCSS', 'Next JS', 'NextAuth JS', 'Spotify API'],
    description:
      'An interactive, music player based on the Spotify Web API. It features user authentication through your own Spotify account, an interface for viewing your created playlists and saved songs, and an audio player for playing or pausing music and adjusting the volume.',
    links: [
      <ProjectLink
        text='View repository'
        link='https://github.com/ntonioibarrola/spotify-music-player'
        icon={<GitHubIcon />}
      />,
      <ProjectLink
        text='View site'
        link='https://spotify-music-player-alpha.vercel.app'
        icon={<LinkIcon />}
      />,
    ],
  },
  {
    name: 'Tassel',
    cover: <ProjectCover type='cover' source={TasselCover} />,
    preview: undefined,
    stack: ['React JS', 'JavaScript', 'CSS', 'Material UI', 'Express JS', 'PostgreSQL'],
    description:
      'A web application that aims to foster a more tight-knit college community between alumni, students, and faculty by providing a platform for micro-volunteering. Users are able to create, search, and join different volunteering opportunities. Note: The application is currently in development.',
    links: [
      <ProjectLink
        text='View repository'
        link='https://github.com/mikeriepe/tassel-ucsc'
        icon={<GitHubIcon />}
      />,
      <ProjectLink
        text='View Figma'
        link='https://www.figma.com/file/gUK7iC6Uhk9grIrrc6oUaJ/AC-Match-Maker-Wireframe?node-id=0%3A1&t=bLToJ2LGqrxp2IrG-1'
        icon={<FigmaIcon />}
      />,
    ],
  },
  {
    name: 'EZ3D',
    cover: <ProjectCover type='cover' source={Ez3dCover} hasPreview />,
    preview: <ProjectCover type='preview' source={Ez3dPreview} />,
    stack: ['React JS', 'JavaScript', 'CSS', 'Three JS', 'React Three Fiber'],
    description:
      'A lightweight, computer-aided design (CAD) web application that provides an interface for showcasing and manipulating 3D graphics, which include primitives, lights, and shadows. It utilizes React to encapsulate the app within the browser without having to download it externally.',
    links: [
      <ProjectLink
        text='View repository'
        link='https://github.com/groverburger/ez3d'
        icon={<GitHubIcon />}
      />,
      <ProjectLink
        text='View site'
        link='https://groverburger.github.io/ez3d/'
        icon={<LinkIcon />}
      />,
    ],
  },
];

const MyProjects: FC = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const handlePreviousClick = () => {
    if (projectIndex === 0) return;
    setProjectIndex((currentIndex) => currentIndex - 1);
  };

  const handleNextClick = () => {
    if (projectIndex === projects.length - 1) return;
    setProjectIndex((currentIndex) => currentIndex + 1);
  };

  return (
    <div className='h-full w-full'>
      <div className='group relative h-80 w-full overflow-y-hidden border-b-1 border-solid border-gray-200'>
        <div className='absolute z-10 flex h-auto w-full animate-crt items-center justify-between bg-[#00000095] px-2 py-1 font-w95fa text-sm text-white'>
          <div>{projects[projectIndex].name}</div>
          <div className='relative -top-[1px] select-none space-x-2'>
            <span
              className={`pl-2 ${
                projectIndex === 0 ? 'cursor-default opacity-50' : 'cursor-pointer'
              }`}
              onClick={handlePreviousClick}
              role='button'
            >
              {'<'}
            </span>
            <span
              className={`pl-2 ${
                projectIndex === projects.length - 1
                  ? 'cursor-default opacity-50'
                  : 'cursor-pointer'
              }`}
              onClick={handleNextClick}
              role='button'
            >
              {'>'}
            </span>
          </div>
        </div>
        {projects[projectIndex].cover}
        {projects[projectIndex].preview}
        <div className='absolute left-0 top-0 block h-full w-full bg-[url("src/assets/projects-screen-overlay.png")] bg-[length:2px_2px] opacity-20' />
        <div className='crt-effect absolute left-0 top-0 h-full w-full opacity-20' />
        <div className='absolute left-0 right-0 top-0 h-4 animate-scanline bg-[linear-gradient(180deg,transparent_0,snow_50%,lightgray_0,transparent)] opacity-10' />
      </div>
      <div className='h-[calc(100%-20rem)] w-full space-y-3 p-6'>
        <div className='flex flex-wrap gap-2'>
          {projects[projectIndex].stack.map((item) => (
            <div
              key={`${projects[projectIndex].name} - Stack: ${item}`}
              className='inline-block rounded-retro bg-gray-200 px-2 py-1 font-w95fa text-sm text-charcoal'
            >
              {item}
            </div>
          ))}
        </div>
        <div className='text-justify font-w95fa'>{projects[projectIndex].description}</div>
        <div className='absolute bottom-0 right-0 flex items-center gap-x-2 py-4 px-5 font-w95fa text-sm text-black'>
          {projects[projectIndex].links.map((link, index) => (
            <Fragment key={`${projects[projectIndex].name} - Link: ${index}`}>{link}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
