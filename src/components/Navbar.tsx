import { FC } from 'react';
import useDateTime from '../hooks/useDateTime';

const Navbar: FC = () => {
  const { date, time } = useDateTime();

  return (
    <nav className='fixed m-3 flex h-auto w-[calc(100%-1.5rem)] justify-between rounded-retro bg-[#1f2025] py-2 px-5 text-center text-xs font-light tracking-wide text-white drop-shadow-md'>
      <div>
        <div className='hidden sm:block'>Antonio Ibarrola</div>
        <div className='block sm:hidden'>AI</div>
      </div>
      <div>{time}</div>
      <div>{date}</div>
    </nav>
  );
};

export default Navbar;
