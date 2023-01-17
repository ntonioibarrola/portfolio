import { FC } from 'react';
import useDateTime from '../hooks/useDateTime';

const DesktopNavbar: FC = () => {
  const { date, time } = useDateTime();

  return (
    <nav className='fixed flex h-auto w-full justify-between border-b-1 border-solid border-charcoal bg-offwhite-100 px-5 text-charcoal'>
      <div>Antonio Ibarrola</div>
      <div className='flex gap-2'>
        <div>{time}</div>
        <div> - </div>
        <div>{date}</div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
