export interface ProjectDataProps {
  id: string;
  image: any;
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
}

const projectData: ProjectDataProps[] = [
  {
    id: "1",
    image: require("../../assets/projects/weather.png"),
    title: "Weather App",
    description:
      "The weather app is developed using HTML, CSS and Vanilla JS + API, AJAX. It features upper panel with Ukrainian cities and weather forecast for next 5 days on the bottom. User can switch the units of temperature between Celsius and Fahrenheit. There is a light and dark mode.",
    githubLink: "https://github.com/liza-rgb/weather-app",
    projectLink: "https://main--moonlit-cajeta-3bdc23.netlify.app/",
  },
  {
    id: "2",
    image: require("../../assets/projects/yelp-camp.png"),
    title: "YelpCamp App",
    description:
      "YelpCamp is a full-stack, fully functional web application where people can submit campgrounds and users can review them. It was developed using Atlas MongoDB, combined with integration of cookies and sessions to improve user experience.",
    githubLink: "https://github.com/liza-rgb/yelp-camp-project/",
    projectLink: "https://obscure-journey-85126.herokuapp.com/",
  },
  {
    id: "3",
    image: require("../../assets/projects/notes.png"),
    title: "Notes App 1.0",
    description:
      "Notes App is written in Vanilla JS. The app functionality provides user with ability of creating, deleting, editing, archiving and unarchiving notes. At the bottom of the page user can view the summary table, which shows counts of created notes.",
    githubLink: "https://github.com/liza-rgb/radency-task-1",
    projectLink: "https://dulcet-eclair-67bb94.netlify.app/",
  },
  {
    id: "4",
    image: require("../../assets/projects/notes.png"),
    title: "Notes App 2.0",
    description:
      "The new version is written using React framework with combination of Redux state management and Typescript. On additional branches you can view integration of Storybook and Tailwind. The API created with Node.js can be viewed here. On additional branches you can view implementation with Postgres, Sequelize ORM, Nest.js and Docker.",
    githubLink: "https://github.com/liza-rgb/radency-task-2/",
    projectLink: "https://lustrous-cupcake-d32a39.netlify.app/",
  },
];

export default projectData;
