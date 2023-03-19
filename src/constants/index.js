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
  budgetApp,
  threejs,
  microverse,
  sociumtech,
  orange,
  finalCapstone,
  covid19,
  osaid,
  jonathan,
  shedrack,
  ruby,
  postgres,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ruby on Rails Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ruby on rails",
    icon: ruby,
  },
  {
    name: "postgres",
    icon: postgres,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer RoR - React",
    company_name: "Micorverse",
    icon: microverse,
    iconBg: "#383E56",
    date: "September 2022 - April 2023",
    points: [
      "Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux",
      "Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full - stack Web Developer at Socium Tech",
    company_name: "Socium Tech",
    icon: sociumtech,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - March 2021",
    points: [
      "Forbes Media - Building new pages in Forbes Media website that gets million of visitors every month",
      "Participated in fixing bugs and suggesting new solutions for current problems",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer - student",
    company_name: "Orange Coding Academy",
    icon: orange,
    iconBg: "#383E56",
    date: "June 2019 - Dec 2020",
    points: [
      "Learned the basics of Web Development and Created many Full-stack projects using the following technologies (HTML-CSS-JavaScript-ReactJS, PHP Laravel)",
      "Online Store -  Built an online Store to show different items and filter all the items based on the price",
      "Cleaning Services: Built a Cleaning service website that allows people to offer their cleaning services and people to hire the,Built with: (HTML - CSS - JavaScript React - PHP Laravel)",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having worked closely with Shaker for several weeks on daily remote pair programming projects, I can attest to his strong skills in JavaScript, algorithms, and CSS. He is a detail-oriented developer with a positive attitude towards teamwork, making him a valuable asset to any team.",
    name: "Osaid Ayadi",
    designation: "Front End Developer",
    company: "Socium Tech",
    image: osaid,
  },
  {
    testimonial:
      "Over the course of several weeks, I had the pleasure of working with Shaker Abady on daily remote pair programming projects. He has an excellent grasp of JavaScript, algorithms, and CSS, and he consistently demonstrates a positive attitude toward teamwork.",
    name: "Jonathan Kayizzi",
    designation: "Full Stack Engineer",
    company: "Microverse",
    image: jonathan,
  },
  {
    testimonial:
      "I had the opportunity to work with Shaker Abady in a pair learning group for a few weeks. One of his most notable skills is his excellent communication and synchronization abilities, making him a great collaborator. He is an asset to any team and a pleasure to work with.",
    name: "Shedrack Sunday",
    designation: "Full Stack Developer",
    company: "Microverse",
    image: shedrack,
  },
];

const projects = [
  {
    name: "Trip Reservations",
    description:
      "Web-based platform that allows users to search, book, and manage Trips Reservations, Built with Ruby on Rails, React, Redux, and PostgresSQL, meant for training purposes only.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgresSQL",
        color: "green-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "yellow-text-gradient",
      },
    ],
    image: finalCapstone,
    source_code_link: "https://github.com/shakerAbuDrais/final-capstone-frontend",
  },
  {
    name: "Covid19 Tracker",
    description:
      "Web application that enables users to get the latests stats of covid 19, view stats per specific country, Built using React, Redux, Bootstrap, meant for training purposes only.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
    ],
    image: covid19,
    source_code_link: "https://funny-fudge-a808b4.netlify.app/",
  },
  {
    name: "Budget App",
    description:
      "Simple budget app that allows users to add expenses to see where they spent the money, Built using Ruby on Rails, Bootstrap. Meant for mobile devices only.",
    tags: [
      {
        name: "Ruby on Rails",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "PostgresSQL",
        color: "pink-text-gradient",
      },
      {
        name: "erb templates",
        color: "yellow-text-gradient",
      }
    ],
    image: budgetApp,
    source_code_link: "https://github.com/shakerAbuDrais/RoR-Budget-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
