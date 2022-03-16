export const header = {
  title: "Roger Wang",
  subtitle: "Software Engineer @ NYC",
};

export const summary = {
  picture: require("assets/rogerwang.png"),
};
export const SummaryText = () => {
  return (
    <p>
      <strong>Hey!</strong> 👋
      <br /> I'm <strong>Roger</strong>. currently a software engineer based in
      NYC working on the Discovery+ 🦈 Roku platform client team. Building out
      UI and Rok
    </p>
  );
};

export const skills = [
  {
    name: "Languages",
    items: [
      "Python",
      "Javascript",
      "Brightscript",
      "Java",
      "C",
      "Golang",
      "Dart",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    name: "Development",
    items: ["React", "Node", "Graphql", "MongoDB", "PostGres"],
  },
  {
    name: "Data Analysis",
    items: ["Numpy + Pandas", "Matplotlib"],
  },
];

export const projects = [
  {
    name: "Roku Testing Framework",
    shortname: "Roku Test Framework",
    subtitle: "Spring 2022 - Discovery Inc.",
    images: [
      require("assets/rokutesting1.png"),
      require("assets/rokutesting2.png"),
    ],
    description:
      "Developed a headless automated testing framework for the Roku platform with fellow engineer Vitaly Tarasov at Discovery. The framework allows for extensive functionality testing suites and remote automated testing.",
    links: [
      {
        name: "See It",
        link: "https://www.linkedin.com/posts/vitaly-tarasov-1137008_my-coworker-roger-wang-and-i-recently-wrote-activity-6907478605467893760--p9M?utm_source=linkedin_share&utm_medium=member_desktop_web",
      },
    ],
  },
  {
    name: "Boston Foods Explorer",
    shortname: "Boston Food Explorer",
    subtitle: "Fall 2020",
    images: [
      require("assets/bostonfood1.png"),
      require("assets/bostonfood2.png"),
    ],
    description:
      "For Pr. Nam Wook Kim's Visualization course at Boston College. An interactive visualization with drill-down functionality to explore various restaurants in the Greater Boston area and learn more about the nutrition of their menu items. Built with d3.js",
    links: [
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/boston-food-vis",
      },
    ],
  },
  {
    name: "Observation Visualization Tool",
    shortname: "Obs Vis",
    subtitle: "Summer 2020 - NASA Jet Propulsion Lab",
    images: [require("assets/obsvis1.png"), require("assets/obsvis2.png")],
    description:
      "This tool interfaces with a database of observed telemetry. It provides a user friendly interface for instrument operators view past observations, note anomalies and errors, as well as generate an anomly report. The tool is developed as part of the MAIA mission. Built with React.js",
    links: [
      {
        name: "Mission Status",
        link: "https://www.jpl.nasa.gov/missions/multi-angle-imager-for-aerosols-maia",
      },
    ],
  },
  {
    name: "LiteDoc - Distributed Collab Editor",
    shortname: "LiteDoc",
    subtitle: "March 2020 - Percom 2020",
    images: [require("assets/litedoc1.png"), require("assets/litedoc2.png")],
    description:
      "Under the guidance of Pr. Lewis Tseng (Boston College), I implementated LiteDoc, a distributed collaborative text editor. LiteDoc proposes a fault tolerant approach to consensus using a set of single write multi read (SWMR) atomic registered to separate different parts of a given document.",
    links: [
      {
        name: "Conference Paper",
        link: "https://ieeexplore.ieee.org/document/9156221",
      },
      {
        name: "Source Code",
        link: "https://github.com/LiteDoc",
      },
    ],
  },
  {
    name: "Dijkstra's Arena",
    subtitle: "Fall 2019",
    images: [
      require("assets/dijkstras1.png"),
      require("assets/dijkstras2.png"),
      require("assets/dijkstras3.png"),
    ],
    description:
      "Dijkstra’s Arena is a web browser game aimed to educate players on the basis of Dijkstra’s algorithm and other graph theory shortest path problems in a fun, challenging, and interactive environment.",
    links: [
      {
        name: "See It",
        link: "http://dijkstras-arena.rogerwangcs.com/",
      },
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/Dijkstras-Arena",
      },
    ],
  },
  {
    name: "Live Subtitles",
    subtitle: "April 2019 - Hack Dartmouth V",
    images: [
      require("assets/live-subtitles1.png"),
      require("assets/live-subtitles2.png"),
    ],
    description:
      "Display what people are saying as they are talking in real time! A quick app built during Hack Dartmouth V. Created by Roger Wang, David Shen, Jerry Han, and Alex Sun using React and Google Chrome's speech-to-text API.",
    links: [
      {
        name: "See It",
        link: "http://live-subtitles.rogerwangcs.com/",
      },
      {
        name: "Devpost",
        link: "https://devpost.com/software/live-subtitles",
      },
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/ar-dialogue-subtitles",
      },
    ],
  },
  {
    name: "Write Fast",
    subtitle: "Summer 2018",
    images: [
      require("assets/writefast1.jpg"),
      require("assets/writefast2.jpg"),
      require("assets/writefast3.jpg"),
    ],
    description:
      "An attempt to relieve writers block. A clean writing interface without distractions helps you focus, while the glowy red border nudges to continue writing.",
    links: [
      {
        name: "See It",
        link: "https://rogerwangcs.github.io/writefast",
      },
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/writefast",
      },
    ],
  },
  {
    name: "GraphQL Blogging Platform",
    shortname: "Blog Platform",
    subtitle: "Summer 2018",
    images: [
      require("assets/rogersblog1.jpg"),
      require("assets/rogersblog2.jpg"),
      require("assets/rogersblog3.jpg"),
    ],
    description:
      "Blogging Platform built using React, Apollo, Express, Graphql and MongoDB. Features authentication and authorization with Auth0, markup blog editor and individual user profiles.",
    links: [
      {
        name: "See it",
        link: "https://rogers-react-blog.herokuapp.com/",
      },
    ],
  },
  {
    name: "Better BC Housing",
    subtitle: "April 2018",
    images: [require("assets/better-bc-housing.png")],
    description:
      "Reinvents the obsolete housing selection system at Boston College with a React, Node, and MongoDB single page web application. Features Beautiful and interactive map interface where students can navigate to buildings and rooms of choice. Accommosubtitles live room picking, giving students real time feedback during the selection process. 🏆 Won best UI/UX at BC's Hack The Heights 2018 hackathon.",
    links: [
      {
        name: "Devpost",
        link: "https://devpost.com/software/better-bc-housing",
      },
      {
        name: "Source Code",
        link: "https://github.com/MikeN64/Better-BC-Housing",
      },
    ],
  },
];

export const socials = [
  {
    name: "Github",
    image: [require("assets/github.png")],
    link: "https://github.com/rogerwangcs",
  },
  {
    name: "LinkedIn",
    image: [require("assets/linkedin.png")],
    link: "https://www.linkedin.com/in/rogerwangcs/",
  },
  {
    name: "Email",
    image: [require("assets/gmail.png")],
    link: "mailto:rogerwangcs@gmail.com",
  },
];
