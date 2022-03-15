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
    title: "Dijkstra's Arena",
    date: "Fall 2019",
    image: require("assets/dijkstras.png"),
    description:
      "Dijkstra’s Arena is a web browser game aimed to educate players on the basis of Dijkstra’s algorithm and other graph theory shortest path problems in a fun, challenging, and interactive environment.",
    website: "http://dijkstras-arena.rogerwangcs.com/",
    github: "https://github.com/rogerwangcs/Dijkstras-Arena",
  },
  {
    title: "Live Subtitles",
    date: "April 2019",
    image: require("assets/live-subtitles.png"),
    description:
      "Display what people are saying as they are talking in real time! A quick app built during Hack Dartmouth V. Created by Roger Wang, David Shen, Jerry Han, and Alex Sun using React and Google Chrome's speech-to-text API.",
    website: "http://live-subtitles.rogerwangcs.com/",
    github: "https://github.com/rogerwangcs/ar-dialogue-subtitles",
  },
  {
    title: "Write Fast",
    date: "Summer 2018",
    image: require("assets/writefast1.jpg"),
    description:
      "An attempt to relieve writers block. A clean writing interface without distractions helps you focus, while the glowy red border nudges to continue writing.",
    website: "https://rogerwangcs.github.io/writefast",
    github: "https://github.com/rogerwangcs/writefast",
  },
  {
    title: "Better BC Housing",
    date: "April 2018",
    image: require("assets/better-bc-housing.png"),
    description:
      "Reinvents the obsolete housing selection system at Boston College with a React, Node, and MongoDB single page web application. Features Beautiful and interactive map interface where students can navigate to buildings and rooms of choice. Accommodates live room picking, giving students real time feedback during the selection process. 🏆 Won best UI/UX at BC's Hack The Heights 2018 hackathon.",
    github: "https://github.com/MikeN64/Better-BC-Housing",
  },
];

export const socials = [
  {
    name: "Github",
    image: require("assets/github.png"),
    link: "https://github.com/rogerwangcs",
  },
  {
    name: "LinkedIn",
    image: require("assets/linkedin.png"),
    link: "https://www.linkedin.com/in/rogerwangcs/",
  },
  {
    name: "Email",
    image: require("assets/gmail.png"),
    link: "mailto:rogerwangcs@gmail.com",
  },
];
