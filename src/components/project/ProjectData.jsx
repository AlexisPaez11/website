import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import YoutubeClone from '../../assets/projects-assets/youtube-clone.webp'
import TwitterClone from '../../assets/projects-assets/twitter-clone.webp'

const ProjectData = [
  {
    id: 1,
    image: YoutubeClone,
    title: 'Youtube Clone',
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    github: 'https://github.com/AlexisPaez11/Youtube',
    demo: 'https://alexispaez11.github.io/Youtube/',
  },
  {
    id: 2,
    image: TwitterClone,
    title: 'Twitter Clone',
    technologies: [<SiHtml5 />, <SiCss3 />],
    github: 'https://github.com/AlexisPaez11/Twitter',
    demo: 'https://alexispaez11.github.io/Twitter/',
  },
]

export default ProjectData