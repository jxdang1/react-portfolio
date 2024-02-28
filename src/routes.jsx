import { createRef } from 'react'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'


// this was provided in react-community transition group URL provided in the README, integrated into code for animated pages
export const routes = [
    { path: '/', name: 'About', element: <About />, nodeRef: createRef() },
    { path: '/portfolio', name: 'Portfolio', element: <Portfolio />, nodeRef: createRef(), },
    { path: '/resume', name: 'Resume', element: <Resume />, nodeRef: createRef(), },
    { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef(), },
  ]