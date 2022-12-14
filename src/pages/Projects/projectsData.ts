export interface ProjectDataProps {
  id: string;
  image: any;
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
}

const projectsData: ProjectDataProps[] = [
  {
    id: "1",
    image: require("../../assets/projects/weather.png"),
    title: "Weather App",
    description: "projects.weather-app",
    githubLink: "https://github.com/liza-rgb/weather-app",
    projectLink: "https://main--moonlit-cajeta-3bdc23.netlify.app/",
  },
  {
    id: "2",
    image: require("../../assets/projects/yelp-camp.png"),
    title: "YelpCamp App",
    description: "projects.yelp-camp-app",
    githubLink: "https://github.com/liza-rgb/yelp-camp-project/",
    projectLink: "https://obscure-journey-85126.herokuapp.com/",
  },
  {
    id: "3",
    image: require("../../assets/projects/notes.png"),
    title: "Notes App 1.0",
    description: "projects.notes-app-1",
    githubLink: "https://github.com/liza-rgb/radency-task-1",
    projectLink: "https://dulcet-eclair-67bb94.netlify.app/",
  },
  {
    id: "4",
    image: require("../../assets/projects/notes.png"),
    title: "Notes App 2.0",
    description: "projects.notes-app-2",
    githubLink: "https://github.com/liza-rgb/radency-task-2/",
    projectLink: "https://lustrous-cupcake-d32a39.netlify.app/",
  },
  {
    id: "5",
    image: require("../../assets/projects/news-portal.png"),
    title: "News Portal",
    description: "projects.news-portal",
    githubLink: "https://github.com/liza-rgb/news-portal/",
    projectLink: "https://fascinating-swan-3aff30.netlify.app",
  },
  {
    id: "6",
    image: require("../../assets/projects/behealthy.png"),
    title: "Behealthy (Internship Radency)",
    description: "projects.behealthy",
    githubLink: "",
    projectLink: "",
  },
  {
    id: "7",
    image: require("../../assets/projects/behealthy-mobile.png"),
    title: "Behealthy Mobile (Internship Radency)",
    description: "projects.behealthy-mobile",
    githubLink: "",
    projectLink: "",
  },
];

export default projectsData;
