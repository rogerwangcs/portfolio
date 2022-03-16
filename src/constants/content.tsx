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
    name: "Observation Visualization Tool",
    shortname: "Obs Vis",
    subtitle: "Summer 2020 - NASA Jet Propulsion Lab",
    images: [require("assets/obsvis1.png"), require("assets/obsvis2.png")],
    description:
      "Dijkstra’s Arena is a web browser game aimed to educate players on the basis of Dijkstra’s algorithm and other graph theory shortest path problems in a fun, challenging, and interactive environment.",
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
