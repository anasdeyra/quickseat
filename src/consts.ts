import { SolutionCardProps } from "./components/Solution/SolutionCard";
import { SystemCardProps } from "./components/System/SystemCard";

export const LINKS = [
  {
    label: "How it works",
    path: "/",
  },
  {
    label: "Solutions",
    subLinks: [
      {
        label: "Solutions",
        path: "/#solutions",
      },
      {
        label: "Integration",
        path: "/integrations",
      },
    ],
  },
  {
    label: "Who we serve",
    path: "/#who-we-serve",
  },
  {
    label: "Pricing",
    path: "/#pricing",
  },
  {
    label: "About us",
    subLinks: [
      {
        label: "About us",
        path: "/about-us",
      },
      {
        label: "Join the team",
        path: "/about-us#join-the-team",
      },
    ],
  },
  {
    label: "Contact us",
    path: "/#contact-us",
  },
];

export const SOLUTIONS: SolutionCardProps[] = [
  {
    title: "RESERVATION SYSTEM",
    description:
      "Manage all reservations, increase bookings and boost revenue with our easiest, smartest & mostuser friendly app.",
    icon: "/s1.png",
    more: [
      "Get a complete overview of bookings and tables in real-time",
      "See available, reserved and occupied tables at a glance",
      "Use the floor map managemen according to your outlet physical setup",
      "Make it easier o allocate guests and improve your daily routines",
    ],
  },
  {
    title: "EVENT MANAGEMENT",
    description:
      "Our customized tool manages reservations and checks table inventory in real time, guarenteeing the best possible guest experience.",
    icon: "/s2.png",
    more: [
      "Run multiple outlets by using switch/add features and get reservations insights instantly",
      "Use and configure different floor maps for all types of events",
      "Seat more guests on your floor and boost revenue with time-slot, duration and capacity optimizations",
      "Enrich your brand identity by our customized sms integration",
      "Treat yoyr regylar costumers as VIPs by using our client preference widget",
    ],
  },
  {
    title: "TABLE MANAGEMENT",
    description:
      "With our easiest & most advanced table management technology, you can now control all reservations, seats & their availability by using our simplified or dynamic floor/section view",
    icon: "/s3.png",
    more: [
      "Increase seats turnover with easy-to-use table management that provides you a quick overview of reservation",
      "View reservations as a list, search for them, mark them with a highlight, and quickly update their statuses",
      "Visulize the floor plan in real-time in otder to spot availabl tables.",
    ],
  },
  {
    title: "CRM & GUEST PROFILES",
    description:
      "Create a powerful guest database & automatically know important details about their previous visit, You can book your visitors more quickly and provide them the best experience possible.",
    icon: "/s4.png",
    more: [
      "Start building your own guest database today",
      "Create profiles for all your guests that automatically update with visit numbers, preferences, notes and tags.",
      "Get a better overview of all your guests and their previous bookings",
      "Book your guests faster and more efficiently with already saved guest information",
      "Provide the best service with comments that remind you of the guest's preferences",
      "Create tags that allow you to keep track of your regulars, VIPs, and bad guests",
    ],
  },
  {
    title: "REPORTS & ANALYTICS",
    description:
      "Tracking figures & evaluating the data about guests & activities can help you make plans to boost income & expenditure",
    icon: "/s5.png",
    more: [
      "Get valuable insights with extensive reports",
      "Get access to data reports from aspects such as bookings, canelation, no-shows, customers and tables",
      "Monitor your daily, weekly and monthly performance throught various graphs and diagrams to help you with analysig the trend.",
      "Surf our Dashboard for a quick charts view on your daily and weekly reservations, guests count and waitlists.",
    ],
  },
  {
    title: "MARKETING MODULES",
    description:
      "Quickseat???s built-in marketing manager enables communication with customers and increase brand loyalty. Send clients personalized campaigns, reminders, and special offers to increase revenue",
    icon: "/s6.png",
    more: [
      "Use multiple filters to target the right audience for the right event from your guest database.",
      "Increase your reservations by scheduling targeted SMS and or Emails campaigns.",
      "Use your guests saved tags in order to create personalized campaigns.",
    ],
  },
  {
    title: "WAITLIST",
    description:
      "Manage waitlists  and keep a weekly track on your outlet???s capacity. Avoid no-shows and cancelations by easily converting waitlisted guests to standard ones",
    icon: "/s7.png",
    more: [
      "Increase efficiency and avoid crowded waiting lines at your outlet",
      "Allow staff to add guests to the waitlist manually or automatically if full capacity is reaced",
      "easily conver waitlist guests to a standard booking once a table is available again",
      "Surf our Dashboard for a quick charts view on your daily and weekly waitlists.",
    ],
  },
];

export const SYSTEM: SystemCardProps[] = [
  {
    title: "GUEST DATA SECURITY",
    description:
      "protect the data that your business collects, stores, creates or transmits with our different user roles feature",
    icon: "/ss1.png",
    link: "/",
  },
  {
    title: "MONITOR CUSTOMER ATTENDANCE",
    description:
      "keep track of your clients behavior  by monitoring number of Check-Ins, Cancelations and No-Shows. Differentiate between Loyal and New   Clients - option to add customized Tags",
    icon: "/ss2.png",
    link: "/",
  },
  {
    title: "ANALYZE BUSINESS PERFORMANCE",
    description:
      "Use our multiple analytics and reporting tools to boost your business performance",
    icon: "/ss3.png",
    link: "/",
  },
  {
    title: "LIMIT NUMBER OF NO-SHOWS",
    description:
      "High no-show rates are significantly decreased by our built-in no-show prevention measures",
    icon: "/ss4.png",
    link: "/",
  },
  {
    title: "Minimize Errors",
    description:
      "Reservation errors and long wait times might hurt your brand's reputation. We can assist you in making fewer of them",
    icon: "/ss5.png",
    link: "/",
  },
  {
    title: "Marketing Campaign Module",
    description:
      "Our built-in marketing platform helps you to keep in touch with your clients via marketing campaigns, customized SMS or Emails in order to improve customer loyalty",
    icon: "/ss6.png",
    link: "/",
  },
  {
    title: "All Features supported on Mobiles",
    description:
      "Our advanced features are compatible with all devices mobiles, tablets and desks including Floor Map Management unlike other systems.",
    icon: "/ss7.png",
    link: "/",
  },
  {
    title: "Increase potential revenue",
    description:
      "Treat your clients differently by using our various integrations without missing any recurring VIP clients.",
    icon: "/ss8.png",
    link: "/",
  },
];

export const SOCIALS = [
  {
    icon: "/fa.png",
    link: "https://www.facebook.com/quickseat/",
  },
  {
    icon: "/in.png",
    link: "https://www.instagram.com/quickseatapp/",
  },
  {
    icon: "/li.png",
    link: "https://www.linkedin.com/company/quickseat/",
  },
];

//who we serve
export const WWS = [
  {
    title: "RESTAURANTS",
    description:
      "the cutting-edge CRM system that drives a reservation and waitlist system, guest analytics, and marketing platform to boost customer spending and clients turnover.",
  },
  {
    title: "NIGHTCLUBS & BARS",
    description:
      "by developing campaigns to engage visitors and increase sales chances through numerous channels, you may better understand guest spending, preferences, and behaviors.",
  },
  {
    title: "HOTELS & STAYINGS",
    description:
      "Utilize a common reservation and guest management platform throughout your hotel or stayings to manage the guest experience and recognize the preferences of internal, external, and corporate guests.",
  },
];

export const INTEGRATIONS = [
  {
    title: "PHONE INTEGRATION",
    description:
      "Get to know your guests profile & history before even answering their calls. Adding that our powerful phone integration will eliminate the possibility of collecting wrong/inaccurate numbers, leading to data accuracy, operational efficiency and minimizing human errors",
    image: "/phone-int.png",
  },
  {
    title: "POS INTEGRATION",
    description:
      "Never miss your guests??? previous orders & spending. Due to our powerful POS integration you will always keep track on your guests spending behavior, order preferences and total value in order to maximize your sales and guests experience",
    image: "/pos-int.png",
  },
  {
    title: "SMS INTEGRATION",
    description:
      "Upgrade your follow up routine & interact with your guests directly through our different communication channels",
    image: "/sms-int.png",
  },
];

export const ABOUT_US_FEATURES = [
  {
    icon: "/mission-icon.png",
    title: "MISSION",
    description:
      "Assist outlets in providing exceptional customer service and reservation management in order to boost revenues.",
  },
  {
    icon: "/vision-icon.png",
    title: "VISION",
    description:
      "Become worldwide leaders in providing the most advanced technologies that satisfiy the ever-changing needs.",
  },
  {
    icon: "/values-icon.png",
    title: "VALUES",
    description:
      "We value diversity, creativity, and innovation. We translate those values in our product, support, and everyday work.",
  },
];

export const FOUNDERS = [
  {
    image: "/jimmy.png",
    name: "JIMMY MASSOUD",
    position: "FOUNDER & CEO",
  },
  {
    image: "/ronny.png",
    name: "RONNY FARAH",
    position: "CO-FOUNDER & CSO",
  },
  {
    image: "/ellie.png",
    name: "ELIE OBEID",
    position: "CO-FOUNDER & CTO",
  },
];

export const PRICING_FEATURES = [
  "Manage Reservations",
  "Table Management",
  "Waitlist Management",
  "CRM & Guest Profiles",
  "Guest Tagging",
  "Daily Insights & Reports",
  "Customized SMS & Email",
  "Marketing Module",
  "Integrations",
  "Offline Mode",
  "Support",
];

export const JOIN_US = [
  {
    title: "YOUR VOICE COUNTS",
    description:
      "There is something to learn from everyone. We do not believe in hierarchies and what you have to say always matters",
  },
  {
    title: "FLEXIBLE WORK SCHEDULE",
    description:
      "We care immensly about your work life balance. Tell us the situation and we will find a remedy",
  },
  {
    title: "GROW FAST",
    description:
      "We encourage situational leadership, which means you will start taking responsibilities early on and gain experience",
  },
  {
    title: "NEVER STOP LEARNING",
    description:
      "We embrace emerging technologies. So learning becomes your way of life.",
  },
  {
    title: "FEELS LIKE HOME",
    description:
      "We work like a family. You will experiencea work culture based on respect, care, and openness",
  },
];
