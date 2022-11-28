function Navbar() {
  return (
    <div className='text-md fixed flex h-24 w-full max-w-screen-5xl items-center justify-between bg-periwinkle-100 p-12 text-white'>
      <div className='flex cursor-pointer gap-12'>
        <div>Home</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className='flex cursor-pointer gap-12'>
        <div>LinkedIn Icon</div>
        <div>GitHub Icon</div>
        <div>Resume Icon</div>
      </div>
    </div>
  );
}

export default Navbar;
