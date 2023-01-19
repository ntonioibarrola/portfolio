import { FC, ReactNode } from 'react';

const Shortcut: FC<{ children: ReactNode; source: string }> = ({ children, source }) => {
  return (
    <div className='group flex flex-col items-center gap-1'>
      <div
        className='h-12 w-12 transition-transform group-hover:scale-110 group-hover:cursor-pointer group-active:scale-100'
        onClick={() => console.log('hello')}
        role='button'
      >
        <img src={source} />
      </div>
      <div className='select-none rounded-retro bg-froly-100 px-2 font-w95fa leading-tight tracking-wide group-hover:cursor-pointer'>
        {children}
      </div>
    </div>
  );
};

export default Shortcut;
