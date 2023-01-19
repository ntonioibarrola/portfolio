import { FC, ReactNode, useRef } from 'react';
import useDimensions from '../hooks/useDimensions';

export const Tooltip: FC<{ children: ReactNode; text: string }> = ({ children, text }) => {
  const tooltipRef = useRef(null);
  const { width } = useDimensions(tooltipRef);

  const iconHalfWidth = '50%';
  const tooltipHalfWidth = `${width / 2 + 1}px`;
  const widthBetweenHalfIconAndHalfCarrot = `${iconHalfWidth} - ${tooltipHalfWidth}`;

  const carrotStyles =
    'before:pointer-events-none before:absolute before:bottom-full before:left-[calc(50%-0.25rem)] before:h-0 before:w-0 before:border-5 before:border-solid before:border-x-transparent before:border-t-transparent before:border-b-black before:group-hover:scale-110';

  return (
    <div className='group relative inline-block'>
      {children}
      <div
        className={`invisible absolute -bottom-[38px] whitespace-nowrap rounded-retro bg-black py-1 px-2 font-w95fa text-sm text-white group-hover:visible group-hover:animate-pop ${carrotStyles}`}
        style={{ left: `calc(${widthBetweenHalfIconAndHalfCarrot})` }}
        ref={tooltipRef}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
