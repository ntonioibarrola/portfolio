import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <div className='flex justify-center bg-periwinkle-100 text-white'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
