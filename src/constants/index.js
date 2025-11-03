export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 4,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Engineering Manager",
    position: "VALEO",
    img: "assets/review1.png",
    review:
      "Mostafa has been an exceptional Full Stack Engineer. His work on CoreALM, an internal task management system using Node.js, Express, and SQL, demonstrates his technical expertise and attention to detail. He significantly improved workflow visibility and productivity across departments.",
  },
  {
    id: 2,
    name: "Team Lead",
    position: "VALEO",
    img: "assets/review2.png",
    review:
      "Mostafa's Model-Based Design skills are impressive. He led development of Automatic Emergency Braking (AEB) using MATLAB/Simulink and TargetLink, ensuring compliance with ISO 26262 functional safety standards. His MIL/SIL validation work was exceptional.",
  },
  {
    id: 3,
    name: "Engineering Manager",
    position: "ELARABY Group",
    img: "assets/review3.png",
    review:
      "Mostafa's embedded software development skills are outstanding. He developed firmware for smart coffee makers using C/C++ on STM32 microcontrollers, implementing real-time control logic and optimizing code performance for efficient power management.",
  },
  {
    id: 4,
    name: "Project Manager",
    position: "VALEO",
    img: "assets/review4.png",
    review:
      "Mostafa's automation of build and deployment pipelines using Docker and GitLab CI/CD significantly improved our development workflow. His RESTful API development and scalable database design skills are commendable.",
  },
];

export const myProjects = [
  {
    title: "Recipe Generator & Meal Planner",
    desc: "Developed a comprehensive recipe generation and meal planning application using Node.js, React, and PostgreSQL. The system generates personalized recipes from ingredient input using Gemini Studio API integration.",
    subdesc:
      "Implemented recipe saving and retrieval functionality with dynamic content rendering. Built responsive user interface with React and designed scalable database architecture using PostgreSQL. Integrated external API for recipe generation and implemented user authentication system.",
    href: "https://github.com/mostafablalsaad/Recipe-planner",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#0B4F6C",
      border: "0.2px solid #145A7A",
      boxShadow: "0px 0px 60px 0px #0B4F6C4D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/Node.js.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/PostgresSQL.png",
      },
      {
        id: 4,
        name: "Gemini API",
        path: "/assets/Express.png",
      },
    ],
  },
  {
    title: "Task Manager Application",
    desc: "Built a comprehensive task management application with authentication and RESTful backend architecture. Features include user registration, task creation, assignment, and progress tracking with real-time updates.",
    subdesc:
      "Developed responsive frontend using React with modern UI components and state management. Built scalable backend API using Node.js and Express with MongoDB for data persistence. Containerized the application using Docker and deployed on Vercel for production scalability.",
    href: "https://github.com/mostafablalsaad/TaskManger",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#7C3AED",
      border: "0.2px solid #8B5CF6",
      boxShadow: "0px 0px 60px 0px #7C3AED4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/Node.js.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/MongoDB.png",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/Express.png",
      },
      {
        id: 5,
        name: "Vercel",
        path: "/assets/typescript.png",
      },
    ],
  },

{
    title: "NexusCore-Solutions",
    desc: "Build a full stack project for a SW company that's an embedded solutions provider.",
    subdesc:
      "Developed responsive frontend using React with modern UI components and state management. Built scalable backend API using Node.js and Express with MongoDB for data persistence. Containerized the application using Docker and deployed on Vercel for production scalability.",
    href: "https://nexus-core-solutions-ybki.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/NC.png",
    logoStyle: {
      backgroundColor: "#879b86ff",
      border: "0.2px solid #8B5CF6",
      boxShadow: "0px 0px 60px 0px #7C3AED4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/Node.js.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/MongoDB.png",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/Express.png",
      },
      {
        id: 5,
        name: "Vercel",
        path: "/assets/typescript.png",
      },
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 1, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 2, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 3, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "VALEO Egypt",
    pos: "Full Stack Engineer",
    duration: "2025",
    title:
      "Developed CoreALM, an internal task management system using Node.js, Express, and SQL, improving workflow visibility and productivity. Built and deployed REST APIs with scalable database design. Automated build and deployment pipelines using Docker and GitLab CI/CD. Collaborated in Agile sprints to deliver internal web solutions used across departments.",
    icon: "/assets/Valeo-Logo.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "VALEO",
    pos: "Model-Based Design Engineer",
    duration: "2022-2024",
    title:
      "Led development of Automatic Emergency Braking (AEB) using MATLAB/Simulink and TargetLink. Performed MIL/SIL validation and integration within AUTOSAR architecture. Ensured compliance with ISO 26262 functional safety standards. Coordinated with testing and validation teams to ensure feature reliability.",
    icon: "/assets/Valeo-Logo.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "ELARABY Group",
    pos: "Embedded Software Engineer",
    duration: "2021-2022",
    title:
      "Developed firmware for smart coffee makers using C/C++ on STM32 microcontrollers. Implemented real-time control logic and user interface features for reliability and safety. Optimized code performance for efficient power and resource management.",
    icon: "/assets/elaraby-group.png",
    animation: "salute",
  },
];

export const contactInfo = {
  phone: "+20-1063698866",
  email: "mostafa.b.saad@gmail.com",
  location: "Cairo, Egypt",
  github: "https://github.com/mostafablalsaad",
  linkedin: "https://linkedin.com/in/mostafa-belal-676960199/",
  whatsapp: "+20-1063698866",
};

export const skills = [
  {
    category: "Web Development",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "RESTful APIs",
    ],
  },
  {
    category: "Databases",
    technologies: ["SQL", "MongoDB", "PostgreSQL", "Mongoose"],
  },
  {
    category: "DevOps Tools",
    technologies: ["Docker", "Git", "GitHub", "GitLab CI/CD", "Vercel"],
  },
  {
    category: "Programming Languages",
    technologies: ["Python", "Java", "C/C++"],
  },
  {
    category: "Model-Based Design Tools",
    technologies: ["MATLAB", "Simulink", "AUTOSAR", "ISO 26262"],
  },
];
