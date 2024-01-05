import { GithubIcon, LinkedInIcon } from '@/components/Footer';
import { CalendarIcon } from '@primer/octicons-react';

export const data = [
  {
    title: 'TypeTypeGo',
    subtitle: 'A TypeRacer clone, but better.',
    description: 'A multiplayer typing game built with Flutter and Socket.io.',
    href: 'https://typetypego.web.app',
    tags: ['Flutter', 'Dart', 'MongoDB', 'Websockets'],
  },
  {
    title: 'PyRegex',
    subtitle: 'Regular Expression Engine in Python',
    description:
      'A RegEx Parser employing Top-Down Recursive Descent Parsing (TDRDP) and a RegEx Matcher utilizing backtracking. Achieved a fully functional engine encompassing essential features such as grouping, curly brace quantification, range element, and lookaheads.',
    href: 'https://github.com/Zxun2/pyregex',
    tags: ['Python', 'TDD', 'Regex'],
  },
  {
    title: 'Personal Website 💻',
    subtitle: 'My Personal Site!',
    description:
      "This website is built with Next.js and Tailwind CSS. It's deployed on Vercel and the source code is available on GitHub. I also use TypeScript for type safety and ESLint for linting. I'm also using Framer Motion for animations and react-icons for icons.",
    tags: ['React', 'TypeScript', 'Next.js'],
    href: '/',
  },
  {
    title: 'Vibey 🎧',
    subtitle: 'Polyrhythms in Music',
    description:
      "Includes a visual representation of the polyrhythm pattern, displaying each rhythm's sequence of beats and accents. This visual aid helps users understand the rhythmic relationships and aids in composition.",
    tags: ['React', 'TypeScript', 'Next.js'],
    href: 'https://polyrhythmic-three.vercel.app/',
  },
  {
    title: 'FriendlyLink 👴🏻',
    subtitle: 'Volunteer Management Made Easy',
    description:
      'Easily manage your data and pair volunteers with the elderly as you wish, all through an intuitive, user-friendly interface. Our goal is to make volunteer and elderly management simple, efficient, and effective, so that you can focus on making a difference in your communities.',
    tags: ['Java', 'Gradle', 'CLI', 'JUnit'],
    href: 'https://github.com/AY2223S2-CS2103T-W12-1/tp',
  },
  {
    title: 'Groups and Steps 📝',
    subtitle: 'Microsoft Todo But Better',
    description:
      'Progressive Web Application built with Rails and React for CVWO 2021/2022 assignment. It allows you to manage your tasks into groups, and further break them down into steps. Plan, manage and track all your tasks in one flexible software.',
    tags: ['React', 'TypeScript', 'Redux', 'PostgreSQL', 'Ruby On Rails'],
    href: 'https://github.com/Zxun2/cvwo-assignment-frontend',
  },
  {
    title: 'SGSO 🥾',
    subtitle: "Singapore's First Collaborative Hiking App",
    description:
      'SGSO is a web application that aims to provide a platform for hikers to share their hiking experiences and to encourage more people to hike. It is a one-stop application that provides information on hiking trails, allows users to create their own hiking trails, and allows users to share their hiking experiences with others.',
    tags: ['React', 'TypeScript', 'Redux', 'ExpressJS', 'MongoDB'],
    href: 'https://github.com/Zxun2/sgso',
  },
];

export const oss = [
  {
    title: 'TEAMMATES',
    subtitle: 'Student peer evaluations/feedback, shareable instructor comments, and more...',
    description:
      'TEAMMATES is a free online tool for managing peer evaluations and other feedback paths of your students. It is provided as a cloud-based service for educators/students and is currently used by hundreds of universities across the world.',
    tags: ['Angular', 'TypeScript', 'Java'],
    href: 'https://github.com/TEAMMATES/teammates',
  },
  {
    title: 'opencv4nodejs',
    subtitle: 'Nodejs bindings to OpenCV 3 and OpenCV 4',
    description:
      'Asynchronous OpenCV 3.x nodejs bindings with JavaScript and TypeScript API, with examples for: Face Detection, Machine Learning, Deep Neural Nets, Hand Gesture Recognition, Object Tracking, Feature Matching, Image Histogram',
    tags: ['C++', 'JavaScript', 'TypeScript'],
    href: 'https://github.com/UrielCh/opencv4nodejs',
  },
  {
    title: 'cpy3',
    subtitle: 'A C++ library for Python 3 C API',
    description:
      'cpy3 is a C++ library for Python 3 C API. It provides a C++ wrapper for Python 3 C API and allows you to write Python extension modules in C++.',
    tags: ['C++', 'Python'],
    href: 'https://github.com/go-python/cpy3',
  },
  {
    title: 'jupyterlab-git',
    subtitle: 'Extension for JupyterLab',
    description:
      'An extension for JupyterLab which allows you to stage, commit and push your notebooks to GitHub. It also allows you to view a diff of your changes.',
    tags: ['Typescript', 'Python'],
    href: 'https://github.com/jupyterlab/jupyterlab-git',
  },
];

export const socials = [
  {
    name: 'Book a meeting with me',
    href: 'https://cal.com/zongxun',
    icon: CalendarIcon,
  },
  {
    name: 'Connect with me on LinkedIn',
    href: 'https://www.linkedin.com/in/lzongxun',
    icon: LinkedInIcon,
  },
  {
    name: 'Follow me on Github',
    href: 'https://github.com/Zxun2',
    icon: GithubIcon,
  },
];
