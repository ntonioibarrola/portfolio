import { FC, ReactNode } from 'react';
import MinimizeIcon from '../assets/button-minimize-icon';
import ScreenIcon from '../assets/button-screen-icon';
import CloseIcon from '../assets/close-icon';

const getColor = (title: string) => {
  let styles = {
    background: '',
    outline: '',
    hover: '',
  };

  switch (title) {
    case 'About Me':
      styles.background = 'bg-froly-200';
      styles.outline = 'outline-froly-200';
      styles.hover = 'hover:text-froly-100';
      break;

    case 'My Skills':
      styles.background = 'bg-blaze-200';
      styles.outline = 'outline-blaze-200';
      styles.hover = 'hover:text-blaze-100';
      break;

    case 'My Projects':
      styles.background = 'bg-dandelion-200';
      styles.outline = 'outline-dandelion-200';
      styles.hover = 'hover:text-dandelion-100';
      break;

    case 'Contact Me':
      styles.background = 'bg-portage-200';
      styles.outline = 'outline-portage-200';
      styles.hover = 'hover:text-portage-100';
      break;

    default:
      styles.background = 'bg-froly-200';
      styles.outline = 'outline-froly-200';
      styles.hover = 'hover:text-froly-100';
      break;
  }

  return styles;
};

const Window: FC<{ children: ReactNode; className: string; title: string }> = ({
  children,
  className,
  title,
}) => {
  const { background, outline, hover } = getColor(title);

  return (
    <div className={className}>
      <nav
        className={`relative flex w-full items-center justify-between outline outline-2 ${background} ${outline}`}
      >
        <p className={`px-2 py-[0.2rem] text-sm font-bold tracking-wide text-white ${background}`}>
          {title}
        </p>
        <div className={`cursor-pointer p-[0.2rem] text-white ${hover}`}>
          <CloseIcon />
        </div>
      </nav>
      <div className='relative mx-auto mt-[2px] h-[calc(100%-26.4px)] w-full rounded-b-xl'>
        {children}
      </div>
    </div>
  );
};

export default Window;
