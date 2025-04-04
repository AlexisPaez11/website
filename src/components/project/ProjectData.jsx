import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si'
import YoutubeClone from '../../assets/projects-assets/YouTubeClone.webp'
import TwitterClone from '../../assets/projects-assets/TwitterClone.webp'
import CarRental from '../../assets/projects-assets/CarRental.webp'

const ProjectData = [
  {
    image: YoutubeClone,
    title: 'Youtube Clone',
    technologies: [<p>HTML</p>,<p>CSS</p>,<p>JavaScript</p>,<p>JavaScript</p>,<p>JavaScript</p>],
    github: 'https://github.com/AlexisPaez11/Youtube',
    demo: 'https://alexispaez11.github.io/Youtube/',
  },
  {
    image: TwitterClone,
    title: 'Twitter Clone',
    technologies: [<p>React</p>,<p>CSS</p>],
    github: 'https://github.com/AlexisPaez11/Twitter-Clone',
    demo: 'https://twitter-clone-alexispaez11.vercel.app/',
  },
  {
    image: CarRental,
    title: 'Car Rental',
    technologies: [<p>React</p>,<p>CSS</p>],
    github: 'https://github.com/AlexisPaez11/Car-Rental',
    demo: 'https://optimus-alexispaez11.vercel.app/',
  },
]

export default ProjectData