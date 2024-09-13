import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Cristiano Ronaldo",
    company: "Legend",
    image: user1,
    text: "The service exceeded my expectations in every way. The team's dedication, professionalism, and results were truly impressive.",
  },
  {
    user: "Virat Kohli",
    company: "MRF",
    image: user2,
    text: "Our project turned out to be a huge success thanks to this team's creativity and problem-solving abilities. They brought our vision to life brilliantly.",
  },
  {
    user: "Neymar Junior",
    company: "Pubg Gamer",
    image: user3,
    text: "Collaborating with this company was a fantastic experience. Their meticulous attention to detail and commitment to excellence make them highly recommendable.",
  },
  {
    user: "Steve Smith",
    company: "Cricket",
    image: user4,
    text: "Partnering with XYZ Company transformed our project. Their innovative solutions and meticulous attention to detail accelerated our progress significantly. We truly appreciate their expertise!",
  },
  {
    user: "Khabib",
    company: "UFC School",
    image: user5,
    text: "The level of professionalism and dedication from the team was outstanding. They went beyond our expectations to deliver exceptional results.",
  },
  {
    user: "Conor Macgregor",
    company: "Actor",
    image: user6,
    text: "The team's commitment and expertise were unmatched. They ensured our project's success and went the extra mile. I’m eager to collaborate with them again in the future.",
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Save Hours Within the Day",
    description:
      "Drastically reduce the time spent on searching for suitable schools.",
  },
  {
    icon: <Fingerprint />,
    text: "Know Exactly Where Your Teachers Can Get To, in Seconds",
    description:
      "Immediate results help in making quick decisions.",
  },
  {
    icon: <ShieldHalf />,
    text: "Decrease Time from Initial Candidate Call to Placement",
    description:
      "Accelerate the placement process, enhancing efficiency.",
  },
  {
    icon: <BatteryCharging />,
    text: "Make More Placements, Make More Money",
    description:
      "Increased efficiency leads to more successful placements and higher revenue.",
  },
  {
    icon: <PlugZap />,
    text: "Saving Hours per Week",
    description:
      "opens up the opportunity for your recruiters to spend time doing what youdo best...Recruit!",
  },
];


export const checklistItems = [
  {
    title: "Locates the Closest Schools",
    description:
      "Locates the closest schools that your candidates can get to in seconds.",
  },
  {
    title: "Choose Commute Preferences",
    description:
      "Choose how your candidates would prefer to commute, as well as their max commute time.",
  },
  {
    title: "Google Maps Filtering",
    description:
      "Filters the schools using Google Maps technology.",
  },
  {
    title: "Ideal for Temp Staff Recruiting",
    description:
      "Perfect for recruiting temp staff, where time is of the essence.",
  },
  {
    title: "Grow Your Business",
    description:
      "The perfect tool to help you build your business.",
  },
  {
    title: "Market Candidates to Relevant Schools",
    description:
      "Market your candidates out to all the relevant schools.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
