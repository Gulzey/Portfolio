import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[210px] w-full' >
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div 
      options={{
        max:45,
        scale: 1,
        speed: 450
       }} className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex 
        justify-evenly items-center flex-col '>
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] 
          front-bold text-center'>{title}</h3>

       </div>


      </motion.div>



    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      
      Hello! I’m a 23-year-old software engineering graduate from the University of the West of England. I have a a deep passion for web development and I love creating dynamic and user-friendly digital experiences. I am well versed in Javascript, HTML, CSS and React. I have built this website by utilising React.js and Three.js to include the 3D objects. 
    
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-20'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index= {index} {...service}/>
      ))}

    </div>

    </>

  )
}

export default SectionWrapper(About, "about")