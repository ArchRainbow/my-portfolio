import notepad from '../../assets/notepad.png'
import pokemon from '../../assets/pokemon.png'
import spaWeb from '../../assets/spa.png'
import portfolio from '../../assets/portfolio.png'
import messages from './works.messages';

type WorkType = {
  id: number;
    name: {
      id: string;
      defaultMessage: string;
  };
    description: {
      id: string;
      defaultMessage: string;
  };
    image?: string;
    link: string;
    github: string;
    cardClass: string;
    titleTop: boolean;
}

export const workData: WorkType[] = [
  {
    id: 0,
    name: messages.data.spa.title,
    description:
      messages.data.spa.description,
    image: spaWeb,
    link: "https://wireframe-with-bootstrap.netlify.app/",
    github: "https://github.com/ArchRainbow/wireframe",
    cardClass: "spa__page",
    titleTop: false,
  },
  {
    id: 2,
    name: messages.data.pokemon.title,
    description: messages.data.pokemon.description,
    image: pokemon,
    link: "https://pokemon-guessinggame.netlify.app/",
    github: "https://github.com/ArchRainbow/pokemon-game",
    cardClass: "pokemon__page",
    titleTop: true,
  },
  {
    id: 3,
    name: messages.data.notepad.title,
    description: messages.data.notepad.description,
    image: notepad,
    link: "https://note-taking-webpage.netlify.app/",
    github: "https://github.com/ArchRainbow/notepad-app",
    cardClass: "notepad__page",
    titleTop: true,
  },
  {
    id: 4,
    name: messages.data.portfolio.title,
    description: messages.data.portfolio.description,
    image: portfolio,
    link: "https://karen-funes.netlify.app/",
    github: "https://github.com/ArchRainbow/my-portfolio",
    cardClass: "portfolio__page",
    titleTop: false,
  },
];
