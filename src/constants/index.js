import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "React Development",
      icon: mobile,
    },
    {
      title: "Photo Editing",
      icon: backend,
    },
    {
      title: "Video Editing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Software Engineering Degree",
      company_name: "The University of the West of England",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2020 - July 2024",
      points: [
        "Developing and maintaining software for clients using JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other students.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Designing Web applications using React.js and other related technologies.",
        "Understand client requirements and provide regular progress updates.",
        "Develop design concepts and wireframes for responsive user interfaces.",
        "Write clean HTML, CSS, and JavaScript code for interactive UIs. Set up servers, databases and implement APIs. ",
        "Manage hosting environments and deploy updates to live sites. Whilst also analysing the site by using SEO practices.",

      ],
    },
    {
      title: "Next Job",
      company_name: "N/a",
      icon: shopify,
      iconBg: "#383E56",
      date: "Soon",
      points: [
        "",
        
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CycleNav",
      description:
        "For my dissertation, I developed a navigation web service tailored specifically for cyclists. While established services like Google Maps exist, my aim was to create a platform that caters to the unique needs of the cycling community.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "MapBoxAPI",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Gulzey/Cyclenav",
    },
    {
      name: "Adhan Alert",
      description:
        "A user-friendly website designed to help users track prayer times in their city. Utilizing the Aladhan API and Geolocation API, it accurately displays prayer schedules based on the user's location. It will soon become a web application through ReactJS. ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "AladhanAPI",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Gulzey/AdhanAlert",
    },
    {
      name: "Portfolio",
      description:
        "My portfolio web app is a showcase of dynamic, responsive websites and applications created by me. Featuring a collection of projects, it highlights my skills in designing and implementing user-friendly interfaces with robust functionality.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Gulzey/PF",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };