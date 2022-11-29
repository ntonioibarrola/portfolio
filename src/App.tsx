import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <div className='flex max-w-screen-5xl justify-center bg-periwinkle-100 text-white'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
