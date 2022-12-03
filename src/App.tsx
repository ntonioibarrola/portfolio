import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <div className='flex justify-center bg-periwinkle-100 text-white'>
        <Navbar />
        <Hero />
      </div>
      <section className='relative z-10 h-screen w-full bg-white' />
      <section className='relative z-10 h-screen w-full bg-red-500' />
    </div>
  );
}

export default App;
