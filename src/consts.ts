import { SolutionCardProps } from "./components/Solution/SolutionCard";
import { FaLaptop } from "react-icons/fa";

export const LINKS = [
  {
    label: "How it works",
    path: "/",
  },
  {
    label: "Solutions",
    path: "/solutions",
  },
  {
    label: "Who we serve",
    path: "#",
  },
  {
    label: "Pricing",
    path: "#",
  },
  {
    label: "About us",
    path: "/about",
  },
  {
    label: "Contact us",
    path: "/contact",
  },
];

export const SOLUTIONS: SolutionCardProps[] = [
  {
    title: "RESERVATION SYSTEM",
    description:
      "Manage all reservations, increase bookings and boost revenue with our easiest, smartest & mostuser friendly app.",
    icon: "/s1.png",
    link: "/",
  },
  {
    title: "EVENT MANAGEMENT",
    description:
      "Our customized tool manages reservations and checks table inventory in real time, guarenteeing the best possible guest experience.",
    icon: "/s2.png",
    link: "/",
  },
  {
    title: "TABLE MANAGEMENT",
    description:
      "With our easiest & most advanced table management technology, you can now control all reservations, seats & their availability by using our simplified or dynamic floor/section view",
    icon: "/s3.png",
    link: "/",
  },
  {
    title: "CRM & GUEST PROFILES",
    description:
      "Create a powerful guest database & automatically know important details about their previous visit, You can book your visitors more quickly and provide them the best experience possible.",
    icon: "/s4.png",
    link: "/",
  },
  {
    title: "REPORTS & ANALYTICS",
    description:
      "Tracking figures & evaluating the data about guests & activities can help you make plans to boost income & expenditure",
    icon: "/s5.png",
    link: "/",
  },
  {
    title: "MARKETING MODULES",
    description:
      "Quickseat’s built-in marketing manager enables communication with customers and increase brand loyalty. Send clients personalized campaigns, reminders, and special offers to increase revenue",
    icon: "/s6.png",
    link: "/",
  },
  {
    title: "WAITLIST",
    description:
      "Manage waitlists  and keep a weekly track on your outlet’s capacity. Avoid no-shows and cancelations by easily converting waitlisted guests to standard ones",
    icon: "/s7.png",
    link: "/",
  },
];
