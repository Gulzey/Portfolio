import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { useInView } from 'react-intersection-observer';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            className='w-28 h-28'
            key={technology.name}
            ref={ref}
            initial={{ y: 100, opacity: 0, scale: 0.5, rotate: -45 }}
            animate={inView ? { y: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, '');
