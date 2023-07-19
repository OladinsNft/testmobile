import {
  CheckIcon,
  
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "GOALS",
  desc: "For more, here is what we will do:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Community Dao",
      desc: "Goal to be among the top DAO in the Linea network.",
      icon: <CheckIcon />,
    },
    {
      title: "Airdrop",
      desc: "Let's work together for the Linea Airdrop.",
      icon: <CheckIcon />,
    },
    {
      title: "TOKEN???",
      desc: "We want to distribute tokens to our NFT holders to strengthen the ties of our DAO.",
      icon: <CheckIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <CheckIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <CheckIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <CheckIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
