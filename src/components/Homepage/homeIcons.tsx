import trashbin from "../../assets/icons/garbage-bin.png";
import music from "../../assets/icons/headphones.png";
import work from "../../assets/icons/books.png";
import resume from "../../assets/icons/folder.png";
import contact from "../../assets/icons/contact.png";
import messages from "./homepage.messages";

type HomeIconsType = {
  id: number;
  icon: string;
  text?: {
    id: string,
    defaultMessage: string,
  };
  link?: string;
};

export const fixedIcons: HomeIconsType[] = [
  {
    id: 1,
    icon: music,
  },
  {
    id: 2,
    icon: work,
    text: messages.icons.work,
    link: "/works",
  },
  {
    id: 3,
    icon: resume,
    text: messages.icons.resume,
    link: "/resume",
  },
  {
    id: 4,
    icon: contact,
    text: messages.icons.contact,
    link: "/contacts",
  },
]

export const homeIconsDesktop: HomeIconsType[] = [
  {
    id: 0,
    icon: trashbin,
  }
].concat(fixedIcons);
