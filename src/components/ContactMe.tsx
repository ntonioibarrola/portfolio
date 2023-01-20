import { FC } from 'react';

const ContactMe: FC = () => {
  return (
    <div className='flex h-full w-full flex-col space-y-6 px-8 pt-6 pb-8 text-sm'>
      <div className='space-y-2'>
        <div>
          <label className='block cursor-default' htmlFor='name'>
            Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Bob Smith'
            className='w-full cursor-text rounded-retro px-2 py-1 font-w95fa ring-1 ring-black'
          />
        </div>
        <div>
          <label className='block cursor-default' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='text'
            placeholder='bobsmith@aol.com'
            className='w-full cursor-text rounded-retro px-2 py-1 font-w95fa ring-1 ring-black'
          />
        </div>
      </div>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex flex-1 flex-col'>
          <label className='block cursor-default' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            placeholder='Enter message...'
            className='w-full flex-1 cursor-text rounded-retro px-2 py-1 font-w95fa ring-1 ring-black'
          />
        </div>
        <button className='cursor-pointer rounded-retro bg-froly-200 p-1 ring-1 ring-black'>
          Send message
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
