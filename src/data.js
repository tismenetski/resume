import React from 'react'
import { FaLinkedin, FaTwitter , FaGithub } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    element: 'home'
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    element: 'section-about'
  },
  {
    id: 5,
    url: '/skills',
    text: 'skills',
    element: 'section-skills'
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    element: 'section-projects'
  },
  // {
  //   id: 4,
  //   url: '/contact',
  //   text: 'contact',
  // },

]

export const social = [

  {
    id: 1,
    url: 'https://www.twitter.com/tismenetski',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/stas-tismenetski-8a4429101/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.github.com/tismenetski',
    icon: <FaGithub />,
  },
]
