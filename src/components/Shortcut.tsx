import { FC, ReactNode } from 'react';

const Shortcut: FC<{ children: ReactNode; source: string }> = ({ children, source }) => {
  return (
    <div className='flex cursor-pointer flex-col items-center gap-1'>
      <div className='h-12 w-12'>
        <img src={source} />
      </div>
      <div className='rounded-retro bg-froly-100 px-2 font-w95fa leading-tight tracking-wide'>
        {children}
      </div>
    </div>
  );
};

export default Shortcut;
