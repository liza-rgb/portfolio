export interface CertificateDataProps {
  id: string;
  image: any;
  title: string;
  date: string;
  link: string;
}

const certificatesData: CertificateDataProps[] = [
  {
    id: "1",
    image: require("../../assets/certificates/coursera-basics.jpeg"),
    title: "Coursera: HTML, CSS, and Javascript for Web Developers",
    date: "18/08/2021",
    link: "https://coursera.org/share/6c44e177db5ed5794180c3ec0097725a",
  },
  {
    id: "2",
    image: require("../../assets/certificates/coursera-bootstrap.jpeg"),
    title: "Coursera: Front-End Web UI Frameworks and Tools: Bootstrap 4",
    date: "23/08/2021",
    link: "https://coursera.org/share/a1ae33750e2c46affdfe3a2b72e18d17",
  },
  {
    id: "3",
    image: require("../../assets/certificates/coursera-react.jpeg"),
    title: "Coursera: Front-End Web Development with React",
    date: "02/09/2021",
    link: "https://coursera.org/share/40dd0999041b4858e447bf2fa0908794",
  },
  {
    id: "4",
    image: require("../../assets/certificates/shecodes-basics.png"),
    title: "SheCodes: Introduction to Coding",
    date: "23/05/2022",
    link: "https://www.shecodes.io/certificates/88f62bb23db2607234c249fc0f6454d1",
  },
  {
    id: "5",
    image: require("../../assets/certificates/shecodes-plus.png"),
    title: "SheCodes: Front End Development",
    date: "04/07/2022",
    link: "https://www.shecodes.io/certificates/ae087a3432ca8e514f7411a059b55dac",
  },
  {
    id: "6",
    image: require("../../assets/certificates/shecodes-responsive.png"),
    title: "SheCodes: Responsive Web Development",
    date: "22/07/2022",
    link: "https://www.shecodes.io/certificates/787fa521134d401bc42801d6c69e5a56",
  },
  {
    id: "7",
    image: require("../../assets/certificates/udemy-bootcamp.jpg"),
    title: "Udemy: The Web Developer Bootcamp 2022",
    date: "28/08/2022",
    link: "https://www.udemy.com/certificate/UC-ea6fe40f-1209-49be-84ec-f367ecad3239/",
  },
];

export default certificatesData;
