import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import sound from '../assets/music.wav';
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Create a new audio element and play it
    const audio = new Audio(sound);
    audio.volume = 0.3;
    audio.play().catch(error => {
      console.error('Error playing sound automatically:', error);
      // If the browser prevented autoplay, provide a fallback to play on user interaction
      document.addEventListener('click', () => {
        audio.play().catch(err => console.error('Error playing sound on user interaction:', err));
      }, { once: true });
    });
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Guled.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Graduate Software Engineer <br className='sm:block hidden' /> who loves building websites
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute w-full flex justify-center items-center' style={{ bottom: '10vh' }}>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
