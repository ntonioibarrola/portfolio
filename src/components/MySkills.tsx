import { FC } from 'react';
import CssIcon from '../assets/skills-css-icon';
import FigmaIcon from '../assets/skills-figma-icon';
import GitIcon from '../assets/skills-git-icon';
import GitHubIcon from '../assets/skills-github-icon';
import HtmlIcon from '../assets/skills-html-icon';
import JavaScriptIcon from '../assets/skills-javascript-icon';
import NextIcon from '../assets/skills-next-icon';
import NodeIcon from '../assets/skills-node-icon';
import PostgreSqlIcon from '../assets/skills-postgresql-icon';
import ReactIcon from '../assets/skills-react-icon';
import TailwindCssIcon from '../assets/skills-tailwindcss-icon';
import TypeScriptIcon from '../assets/skills-typescript-icon';

const MySkills: FC = () => {
  return (
    <div className='grid h-full w-full grid-cols-[1fr,_1fr,_1fr,_1fr] grid-rows-[1fr,_1fr,_1fr] gap-2 p-5 font-w95fa text-sm'>
      <div className='group col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <ReactIcon />
        </div>
        <p>React JS</p>
      </div>
      <div className='group col-start-2 col-end-2 row-start-1 row-end-1 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <JavaScriptIcon />
        </div>
        <p>JavaScript</p>
      </div>
      <div className='group col-start-3 col-end-3 row-start-1 row-end-1 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <CssIcon />
        </div>
        <p>CSS</p>
      </div>
      <div className='group col-start-4 col-end-4 row-start-1 row-end-1 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <HtmlIcon />
        </div>
        <p>HTML</p>
      </div>
      <div className='group col-start-1 col-end-1 row-start-2 row-end-2 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <NodeIcon />
        </div>
        <p>Node JS</p>
      </div>
      <div className='group col-start-2 col-end-2 row-start-2 row-end-2 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <TypeScriptIcon />
        </div>
        <p>TypeScript</p>
      </div>
      <div className='group col-start-3 col-end-3 row-start-2 row-end-2 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <TailwindCssIcon />
        </div>
        <p>TailwindCSS</p>
      </div>
      <div className='group col-start-4 col-end-4 row-start-2 row-end-2 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <NextIcon />
        </div>
        <p>Next JS</p>
      </div>
      <div className='group col-start-1 col-end-1 row-start-3 row-end-3 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <PostgreSqlIcon />
        </div>
        <p>PostgreSQL</p>
      </div>
      <div className='group col-start-2 col-end-2 row-start-3 row-end-3 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <GitIcon />
        </div>
        <p>Git</p>
      </div>
      <div className='group col-start-3 col-end-3 row-start-3 row-end-3 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <GitHubIcon />
        </div>
        <p>GitHub</p>
      </div>
      <div className='group col-start-4 col-end-4 row-start-3 row-end-3 flex flex-col items-center justify-center gap-y-1'>
        <div className='flex h-12 w-12 items-center justify-center rounded-retro group-hover:animate-bounce'>
          <FigmaIcon />
        </div>
        <p>Figma</p>
      </div>
    </div>
  );
};

export default MySkills;
