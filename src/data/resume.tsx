import { Icons } from "@/components/icons";
import { HomeIcon, User, FolderOpenDot, File } from "lucide-react";

export const DATA = {
  name: "John Carlo Catindig",
  initials: "JC",
  url: "https://catindigportfolio.netlify.app/",
  location: "Santa Rosa City, Philippines",
  locationLink: "https://www.google.com/maps/place/Santa+Rosa,+Laguna/",
  languages: [
    "English",
    "Tagalog",
  ],

  description:
    "Fullstack Web-Developer | Freelancer. Turning your ideas into stunning realities.",
  summary:
    "A highly skilled Full-Stack Developer/Software Engineer with extensive experience in designing, developing, and maintaining dynamic web applications. Specializing in PHP, JavaScript,Laravel, Reactjs and Vue.js. Proficient in working with RESTful APIs, modern JavaScript frameworks, and database technologies to deliver high-quality solutions tailored to meet business and technical needs.Continuously improving technical skills and staying ahead of industry trends. Delivers exceptional user experiences aligned with client goals and organizational objectives.",
  avatarUrl: "/BTS00389.jpg",
  skills: [
    "PHP",
    "Laravel",
    "React.js",
    "MYSQL",
    "Javascript",
    "Restful API development",
    "Tailwind CSS",
    "Bootstrap",
    "CSS",
    "HTML",
    "Responsive Web Design",
    "API integration",
    "Vue.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/projects", icon: FolderOpenDot, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nigumi1",
        icon: Icons.github,

        navbar: true,
        info: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/john-carlo-catindig-ab095a324/",
        icon: Icons.linkedin,

        navbar: true,
        info: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:johncarlo.catindig006@gmail.com",
        icon: Icons.email,

        navbar: false,
        info: true,
      },
      CV: {
        name: "View CV",
        url: "/JC CV.pdf",
        icon: File,
        navbar: false,

        info: true,
      }
    },
  },

  work: [
    {
      company: "NeuralCore",
      href: "https://neuralcoredev.com/",
      badges: [ "Freelance"],
      location: "Remote",
      title: "Fullstack Web Developer",
      logoUrl: "/neuralcore.jpg",
      start: "October 2024",
      end: "Present",
      description:
        "Collaborated with clients to design and develop customized web applications tailored to their specific business needs, Provided ongoing maintenance, debugging, and feature enhancements for existing applications, Delivered full-stack solutions using PHP, JavaScript, and Vue.js, ensuring high performance and scalability.",
    },
    {
      company: "HR Primo Management Services",
      badges: ["Internship"],
      href: "https://hrprimo.com",
      location: "Muntinlupa, Philippines",
      title: "Junior Full Stack Web Developer",
      logoUrl: "/hrprimologo.png",
      start: "September 2024",
      end: "January 2025",
      description:
        "Designed and developed a web application for HR management from the ground up, incorporating features such as Attendance System, HRIS, and Sales Pipeline",
    },
  ],
  education: [
    {
      school: "AMA University - Biñan Campus",
      href: "https://ama.edu.ph/",
      degree: "Bachelor of Science in Information Technology",
      location: "Biñan, Philippines",
      logoUrl: "/AMA.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Hanoy's Footwear E-Commerce Website (Capstone Project)",
      slug: "hanoy-footwear", 
      href: "https://hanoyfootwear.free.nf/",
      dates: "Feb 2024 - August 2024",
      active: true,
      overview:
        "An E-commerce Website for Hanoy’s Footwear, designed to showcase and sell products online. It features a user-friendly interface and robust admin panel for efficient management.",
      description:
        "An E-commerce Website for Hanoy’s Footwear, designed to showcase and sell products online. It features a user-friendly interface and robust admin panel for efficient management.",
      technologies: [
        "PHP",
        "Javascript",
        "MySQL",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://hanoyfootwear.free.nf/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hanoy-footwear-1.png",
      video:
        "",
      carousel: [
        {src: "/hanoy-footwear-1.png"},
        {src: "/hanoy-footwear-2.png"},
        {src: "/hanoy-footwear-3.png"},
        {src: "/hanoy-footwear-4.png"},
        {src: "/hanoy-footwear-5.png"},
      ],
    },
    {
      title: "Voice Controlled Learning Portal",
      slug:"voice-controlled",
      href: "https://audilibrary.com/",
      dates: "October 2024 - November 2024",
      active: true,
      overview:
      "An innovative Voice-Controlled Learning Platform that empowers visually impaired users.",
      description:
        "An innovative Voice-Controlled Learning Platform that empowers visually impaired users. By leveraging voice command technology, this platform provides a seamless and intuitive learning experience. Users can navigate educational content, control video playback, and customize audio speaker(female/male), all through voice commands.",
      technologies: [
        "PHP",
        "Javascript",
        "MySQL",
        "Vue.js",
        "TailwindCSS",
        "Annyang Speech Recognition",
      ],
      links: [
        {
          type: "Website",
          href: "https://audilibrary.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nigumi1/Voice-Controlled-Learning-Portal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/voice-command-1.jpg",
      video: "",
      carousel: [
        {src: "/voice-command-1.jpg"},
        {src: "/voice-command-2.jpg"},
        {src: "/voice-command-3.jpg"},
        {src: "/voice-command-4.jpg"},
        {src: "/voice-command-5.jpg"},
      ],
    },
    {
      title: "Movie Discovery Website (Personal Hobby Project)",
      slug: "movie-discovery",
      href: "",
      dates: "Feb 2025 - Feb 2025",
      active: true,
      overview:
      "A movie discovery platform built with Laravel, React, and Inertia.js, integrating the TMDB API for real-time search and detailed movie information",
      description:
        "A movie discovery platform built with Laravel, React, and Inertia.js, integrating the TMDB API for real-time search and detailed movie information. Users can explore movies, track their watch history, and create a watchlist for future viewing. This project showcases my skills in full-stack development, API integration, and building interactive web applications. The website features a dynamic search bar that fetches movie data from TMDB, a movie details page displaying essential information, and functionalities for tracking watch history and managing a watchlist. Built with a modern tech stack, this project highlights my skills in full-stack development, API integration, and interactive web applications",
      technologies: [
        "Laravel",
        "ReactJS",
        "TailwindCSS",
        "MySQL",
        "TMDB API",
        "Inertia JS",
        "Shadcn UI",
      ],
      links: [
      ],
      image: "/martene-kalbo-1.png",
      video: "",
      carousel: [
        {src: "/movie-1.png"},
        {src: "/movie-2.png"},
        {src: "/movie-4.png"},
        {src: "/movie-5.png"},
      ],
    },
    {
      title: "Attendance Management System For HRPrimo",
      slug: "hrprimo-attendance",
      href: "https://attendance.hrprimo.com/HRPrimo%20Attendance/hrprimo/login.php",
      dates: "September 2024 - Jan 2025",
      active: true,
      overview:
      "A comprehensive Attendance Management System designed to optimize HRPrimo's workforce management processes.",
      description:
        "A comprehensive Attendance Management System designed to optimize HRPrimo's workforce management processes. The system offers features such as attendance tracking, report generation, and automated employee onboarding, including automated email notifications for new user credentials. Collaborated with [Allen Adrian Contreras](https://contrerasportfolio.free.nf/) on the development of the attendance tracking module.",
      technologies: [
        "PHP",
        "Javascript",
        "MySQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://attendance.hrprimo.com/HRPrimo%20Attendance/hrprimo/login.php",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/attendance-1.jpg",
      video:
        "",
      carousel: [
        {src: "/attendance-6.jpg"},
        {src: "/attendance-1.jpg"},
        {src: "/attendance-2.jpg"},
        {src: "/attendance-3.jpg"},
        {src: "/attendance-4.jpg"},
        {src: "/attendance-5.jpg"},
        {src: "/attendance-7.jpg"},
        {src: "/attendance-8.jpg"},
      ],
    },
    {
      title: "Human Resources Information System (HRIS) for HRPrimo",
      slug: "hrprimo-hris",
      href: "",
      dates: "September 2024 - Jan 2025",
      active: true,
      overview:
      "A comprehensive HRIS system that streamlines HR processes and employee management. The system features a user-friendly interface, allowing HRPrimo to efficiently manage employee records, track attendance, and perform various HR functions.",
      description:
        "A comprehensive HRIS system that streamlines HR processes and employee management. The system features a user-friendly interface, allowing HRPrimo to efficiently manage employee records, track attendance, and perform various HR functions. Key features include employee management, performance management, discipline management, training and development, document management, benefits management, attendance tracking, and leave management. The system offers user-friendly portals for HR, managers, and employees, enabling efficient task completion and data-driven decision-making. Collaborated with [Allen Adrian Contreras](https://contrerasportfolio.free.nf/) on the development of the HRIS.",
      technologies: [
        "PHP",
        "Javascript",
        "MySQL",
        "TailwindCSS",
      ],
      links: [
      ],
      image: "/hris1.jpg",
      video:
        "",
      carousel: [
        {src: "/hris-1.jpg"},
        {src: "/hris-2.jpg"},
        {src: "/hris-3.jpg"},
        {src: "/hris-4.jpg"},
        {src: "/hris-5.jpg"},
      ],
    },
    {
      title: "Sales Pipeline Management System For HRPrimo",
      slug: "hrprimo-sales-pipeline",
      href: "",
      dates: "September 2024 - Jan 2025",
      active: true,
      overview:
      "A comprehensive sales pipeline management system that automates proposal tracking, follow-up activities, and performance analysis.",
      description:
        "A comprehensive sales pipeline management system that automates proposal tracking, follow-up activities, and performance analysis. Key features include centralized proposal management, automated email reminders, and insightful reporting to boost sales efficiency and drive revenue. Collaborated with [Allen Adrian Contreras](https://contrerasportfolio.free.nf/) on the development of the sales pipeline system.",
      technologies: [
        "PHP",
        "Javascript",
        "MySQL",
        "TailwindCSS",
      ],
      links: [
      ],
      image: "/sales-pipe1.jpg",
      video:
        "",
      carousel: [
        {src: "/pipeline-1.jpg"},
        {src: "/pipeline-2.jpg"},
      ],
    },
  ],
} as const;
