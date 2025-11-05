import { About, Home, Newsletter, Person, Social } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aditya",
  lastName: "Narvekar",
  name: `Aditya Narvekar`,
  role: "CA Finalist",
  avatar: "/images/avatar.png",
  email: "aadiinarvekar@gmail.com",
  phone: "+91 8329294330",
  location: "Mumbai, Maharashtra",
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adityanarvekar2002/",
  },
  {
    name: "Phone",
    icon: "phone",
    link: `tel:${person.phone}`,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – ${person.role}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  headline: <>Aspiring Chartered Accountant | CA Finalist</>,
  featured: {
    display: false,
    title: <></>,
    href: "/",
  },
  subline: <></>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aspiring Chartered Accountant with a strong academic base and a growing interest in M&A Advisory, 
        Transaction Taxation, Financial Due Diligence, and Private Equity. Developing skills in financial 
        analysis and business understanding, with a disciplined, detail-focused approach and a willingness 
        to learn and take responsibility.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Skills",
    experiences: [
      {
        company: "ICAI Training",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Completed the mandatory 90-hour Information Technology Training (ITT) and Orientation Course by ICAI. Gained foundational knowledge in IT applications for accounting, professional ethics, and basic skills required for the CA profession.
          </>,
        ],
        images: [],
      },
      {
        company: "Accounting Knowledge",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Developing knowledge in Indian taxation including Income Tax Act and GST regulations. Learning Auditing Standards and accounting principles through CA curriculum. Building understanding of financial reporting, tax compliance, and audit procedures.
          </>,
        ],
        images: [],
      },
      {
        company: "Professional Skills",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Good communication skills with ability to work effectively in team settings. Eager to learn and adapt to new challenges. Reliable and detail-oriented with a willingness to take on responsibilities and contribute to team objectives.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "CA Intermediate G2",
        description: (
          <>
            May 2024
            <br />
            Institute of Chartered Accountants of India
            <br />
            Scored - 161/300
          </>
        ),
      },
      {
        name: "CA Intermediate G1",
        description: (
          <>
            Sept 2025
            <br />
            Institute of Chartered Accountants of India
            <br />
            Scored - 150/300
          </>
        ),
      },
      {
        name: "CA Foundation",
        description: (
          <>
            Nov 2021
            <br />
            Institute of Chartered Accountants of India
            <br />
            Scored - 259/400
          </>
        ),
      },
      {
        name: "B.Com (TY)",
        description: (
          <>
            Gogate Joglekar College, Ratnagiri
          </>
        ),
      },
      {
        name: "HSC",
        description: (
          <>
            2020
            <br />
            DBJ College, Chiplun
            <br />
            Scored - 89.90%
          </>
        ),
      },
      {
        name: "SSC",
        description: (
          <>
            2018
            <br />
            Dalwai Highschool, Mirjoli
            <br />
            Scored - 94.90%
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "MS Excel",
        description: <>Comfortable working with spreadsheets, basic formulas, and data organization. Learning to use Excel for accounting tasks, creating simple reports, and analyzing financial data.</>,
        tags: [],
        images: [],
      },
      {
        title: "MS PowerPoint",
        description: <>Able to create basic presentations with clear formatting and simple data visualization. Learning to design professional slides for reports and presentations.</>,
        tags: [],
        images: [],
      },
      {
        title: "MS Word",
        description: <>Comfortable creating and formatting professional documents, reports, and basic documentation. Familiar with document formatting and templates for business use.</>,
        tags: [],
        images: [],
      },
      {
        title: "Web Development",
        description: <>Learning modern web technologies including HTML, CSS, JavaScript, and frameworks like React and Next.js. Developing skills to build basic websites and web applications.</>,
        tags: [],
        images: [],
      },
    ],
  },
};

export { person, social, newsletter, home, about };
