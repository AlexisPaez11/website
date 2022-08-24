import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si'
import YoutubeClone from '../../assets/projects-assets/youtube-clone.webp'
import TwitterClone from '../../assets/projects-assets/twitter-clone.webp'
import CarRental from '../../assets/projects-assets/car-rental.webp'

const ProjectData = [
  {
    image: YoutubeClone,
    title: 'Youtube Clone',
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    github: 'https://github.com/AlexisPaez11/Youtube',
    demo: 'https://alexispaez11.github.io/Youtube/',
  },
  {
    image: TwitterClone,
    title: 'Twitter Clone',
    technologies: [<SiHtml5 />, <SiCss3 />],
    github: 'https://github.com/AlexisPaez11/Twitter',
    demo: 'https://alexispaez11.github.io/Twitter/',
  },
  {
    image: CarRental,
    title: 'Car Rental',
    technologies: [<SiReact />, <SiCss3 />],
    github: 'https://github.com/AlexisPaez11/Car-Rental',
    demo: 'https://optimus-alexispaez11.vercel.app/',
  },
]

export default ProjectData