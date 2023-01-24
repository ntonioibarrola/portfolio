import { FC } from 'react';
import useDateTime from '../hooks/useDateTime';

const Navbar: FC = () => {
  const { date, time } = useDateTime();

  return (
    <nav className='flex h-auto w-full justify-between border-b-3 border-solid border-charcoal bg-offwhite-100 py-2 px-5 font-medium text-charcoal'>
      <div className='hidden sm:block'>Antonio Ibarrola</div>
      <div className='block sm:hidden'>AI</div>
      <div className='flex gap-2'>
        <div>{time}</div>
        <div> - </div>
        <div>{date}</div>
      </div>
    </nav>
  );
};

export default Navbar;
