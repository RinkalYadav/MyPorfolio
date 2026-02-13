
import {
  developer,
  mobile,
  backend,
  angular_basic,
  codegnan_logo,
  hackerrank,
  codegnan_certificate,
  ingendynamics_certificate,
  ingendynamics_logo,
  jp_morgan_certificate,
  jp_morgon_logo,
  notification_dashboard,
  homework_tracking,
  fitness_dashboard,
  cricket_game,
  web,
  javascript,
  html,
  css,
  tailwind,


  front,
  destination,
  clang,
  clang2,
  java,
  python,
  sql,
  spring,
  bootstrap,
  dsa,
  react,
  chatgpt,
  currency,
  library,
  java_basic,
  sql_basic,
  sql_intermediate,
  javascript_basic,
  sql_advance,
  css_basic,
  alexa,
  spotify,
  amazon,
  JavaScript_Intermediate,
  Problem_Solving_basic,
  React_Basic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certificates",
  },
 
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Java Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend developer",
    icon: front,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "c language",
    icon: clang,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "c++ language",
    icon: clang2,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "data structure",
    icon: dsa,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Independent Full Stack Developer",
    company_name: "Self-Employed",
    icon: developer,
    iconBg: "#383E56",
    date: "Dec 2024 – Present",
    points: [
        "Building personal portfolio projects.",
  "Improving skills in Angular, Spring Boot.",
  "Practicing DSA and system design.",
  "Developing real-time applications.", ],
  },
  {
    title: "Junior Software Engineer (Intern)",
    company_name: "Ingen Dynamics Inc (AH Beta Dynamics and Robotics Pvt Ltd), Bangalore",
    icon: developer,
    iconBg: "#383E56",
    date: "Feb 2025 – Nov 2025",
    certificateLink: "/certificates/ingendynamics_certificate.pdf",
    points: [
        "Developing dynamic and responsive web applications using Angular.",
  "Designing and integrating RESTful APIs using Spring Boot for seamless frontend-backend communication.",
  "Managing MySQL database operations including schema design and query optimization.",
  "Contributing to scalable enterprise application architecture in a collaborative development environment.", ],
  },
   {
    title: "Full Stack Developer Trainee",
    company_name: "Codegnan – Destination Technologies, Bangalore",
    icon: developer,
    iconBg: "#383E56",
    date: "Sep 2024 – Feb 2025",
    certificateLink: "/certificates/codegnan_certificate.pdf",
    points: [
      "Completed intensive Java Full Stack Development training.",
      "Built real-world applications using Java, Spring Boot, MySQL, React, and Angular.",
      "Worked on frontend and backend integration with REST APIs.",
      "Developed strong understanding of scalable web application architecture.",
    ],
  },
];

const testimonials = [
  {
    certificateLink:
      "/certificates/jp_morgon_certificate.pdf",
    name: "Software Engineering Job Simulation",
    designation: "Certification",
    company: "Jp Morgan Chase & Co.",
    image: jp_morgan_certificate,
    companyLogo: jp_morgon_logo,
  },
    {
    certificateLink:
      "https://www.hackerrank.com/certificates/78d819064535",
    name: "Angular (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: angular_basic,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/ff75e0e45aa9",
    name: "Java (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: java_basic,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/4b79ace354a7",
    name: "SQL (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: sql_basic,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/3aeb1770c03c",
    name: "SQL (Intermediate)",
    designation: "Certification",
    company: "HackerRank",
    image: sql_intermediate,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/0371a0879388",
    name: "CSS (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: css_basic,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/b893f911604f",
    name: "SQL (Advanced)",
    designation: "Certification",
    company: "HackerRank",
    image: sql_advance,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/8fdd217029aa",
    name: "JavaScript (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: javascript_basic,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/fc7d1b44b5f0",
    name: "JavaScript (Intermediate)",
    designation: "Certification",
    company: "HackerRank",
    image: JavaScript_Intermediate,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/51240da4efc9",
    name: "React (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: React_Basic,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/9ec8227fcb02",
    name: "Problem Solving (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: Problem_Solving_basic,
    companyLogo: hackerrank,
  },
  {
    certificateLink:
      "https://www.hackerrank.com/certificates/9ec8227fcb02",
    name: "Problem Solving (Basic)",
    designation: "Certification",
    company: "HackerRank",
    image: Problem_Solving_basic,
    companyLogo: hackerrank,
  },
 
];

const projects = [
  {
    name: "Notification Dashboard",
    description:
      "I built a full-stack Real-Time Notification Dashboard using Angular and Spring Boot. The application uses WebSocket for instant updates, JWT authentication for security, and REST APIs for seamless data communication. This project showcases my skills in frontend development, backend architecture, database integration, and real-time systems",
 tags: [
  {
    name: "Angular",
    color: "blue-text-gradient",
  },
  {
    name: "Spring Boot",
    color: "green-text-gradient",
  },
  {
    name: "Java",
    color: "pink-text-gradient",
  },
  {
    name: "WebSocket",
    color: "orange-text-gradient",
  },
  {
    name: "JWT Authentication",
    color: "purple-text-gradient",
  },
  {
    name: "REST API",
    color: "yellow-text-gradient",
  },
  {
    name: "PostgreSQL",
    color: "blue-text-gradient",
  },
  {
    name: "JPA / Hibernate",
    color: "green-text-gradient",
  },
  
]
,
    image: notification_dashboard,
    source_code_link_frontend: "https://github.com/RinkalYadav/NotificationDashboardProjectFrontend",
  source_code_link_backend: "https://github.com/RinkalYadav/NotificationDashboardBackend",
    live_link: "https://notificationdashboardprojectfrontend.onrender.com",
  },
  {
    name: "Homework Tracking System",
    description:
      "Designed a full-stack Homework Management System using Angular and Spring Boot with JWT authentication and role-based access control. Integrated REST APIs with PostgreSQL using JPA/Hibernate for secure assignment tracking and user management.",
    tags: [
  {
    name: "Angular",
    color: "blue-text-gradient",
  },
  {
    name: "Spring Boot",
    color: "green-text-gradient",
  },
  {
    name: "Java",
    color: "pink-text-gradient",
  },
  {
    name: "JWT Authentication",
    color: "orange-text-gradient",
  },
  {
    name: "Role-Based Access",
    color: "purple-text-gradient",
  },
  {
    name: "REST API",
    color: "yellow-text-gradient",
  },
  {
    name: "PostgreSQL",
    color: "blue-text-gradient",
  },
  {
    name: "JPA / Hibernate",
    color: "green-text-gradient",
  },
]
,
    image: homework_tracking,
    source_code_link_frontend: "https://github.com/RinkalYadav/HomeworkTrackingFrontend",
  source_code_link_backend: "https://github.com/RinkalYadav/HomeworkTrackingBackend",
    live_link: "https://homeworktrackingfrontend.onrender.com",
  },
  {
    name: "Fitness dashboard",
    description:
      "I built a full-stack Fitness Dashboard using Angular and Spring Boot that allows users to track workouts and monitor fitness progress. The system uses JWT authentication, REST APIs, and PostgreSQL for secure and efficient data management. This project highlights my skills in frontend development, backend architecture, and database-driven applications.",
    tags: [
  {
    name: "Angular",
    color: "blue-text-gradient",
  },
  {
    name: "Spring Boot",
    color: "green-text-gradient",
  },
  {
    name: "Java",
    color: "pink-text-gradient",
  },
  {
    name: "JWT Authentication",
    color: "orange-text-gradient",
  },
  {
    name: "REST API",
    color: "purple-text-gradient",
  },
  {
    name: "PostgreSQL",
    color: "blue-text-gradient",
  },
  {
    name: "JPA / Hibernate",
    color: "green-text-gradient",
  },
  
],
    image: fitness_dashboard,
    source_code_link_frontend: "https://github.com/RinkalYadav/Fitness-Lifestyle-Dashboard-Frontend",
  source_code_link_backend: "https://github.com/RinkalYadav/Fitness-Lifestyle-Dashboard-Backend",
    live_link: "https://fitnessdashboard1.netlify.app/",
  },
  
  {
    name: "Virtual Assistant",
    description:
      "The Virtual Assistance project is a web-based interactive platform, built using HTML, CSS, and JavaScript, designed to provide users with quick responses and assistance for various tasks. The project emulates the functionality of a personal assistant and was developed to enhance user experience through an intuitive interface and seamless interaction.",
    tags: [
      {
        name: "Html&CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: alexa,
    source_code_link_frontend: "https://github.com/RinkalYadav/VitrualAssistance",
    live_link: "https://rinkalsassistance.netlify.app/",
  },
  
  {
    name: "Music Player",
    description:
      "The Spotify Music Player Clone is a web-based application, built using HTML, CSS, and JavaScript, designed to replicate the core functionality and interface of a music player. The project provides users with an interactive platform to play, pause, and navigate through tracks, offering a seamless and engaging digital music experience for all types of users.",
    tags: [
      {
        name: "Html&CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link_frontend: "https://github.com/RinkalYadav/Spotify",
    live_link: "https://minimusicplayerac.netlify.app/",
  },
  {
    name: "Amazon Clone",
    description:
      "The Amazon Clone is a web-based application, developed using HTML, CSS, and JavaScript, designed to replicate the core features and interface of the Amazon shopping platform. The project offers users an intuitive online shopping experience, allowing them to browse products, view details, while providing a seamless and engaging e-commerce interface.",
    tags: [
      {
        name: "Html&CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link_frontend: "https://github.com/RinkalYadav/Amazon_clone",
    live_link: "https://amazonrinkal.netlify.app/",
  },  
  
];

export { services, technologies, experiences, testimonials, projects };



