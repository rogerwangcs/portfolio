import {combineReducers} from 'redux'

import {ACTIONS} from "utils/action-types";

const initialState = {
  posts: [
    {
      "id": "5a8f6e3a1032963577ea3ba4",
      "title": "Covfefe",
      "date": "Sun Jun 12 2005 12:28:39 GMT-0400 (Eastern Daylight Time)",
      "author": "Weiss",
      "tags": [
        "American Samoa", "Uruguay"
      ],
      "content": "Eu commodo in qui incididunt aliquip sint. Duis quis est officia aliquip occaeca" +
          "t. Commodo Lorem sunt do duis non dolor amet aliqua eiusmod nulla culpa.",
      "imageUrl": "Mccarty"
    }, {
      "id": "5a8f6e3aa7bda29272194f6e",
      "title": "Orbixtar",
      "date": "Wed Jan 10 1996 10:18:16 GMT-0500 (Eastern Standard Time)",
      "author": "Davis",
      "tags": [
        "Namibia", "Italy"
      ],
      "content": "Aliquip Lorem laborum laboris aute in consectetur adipisicing laborum incididunt" +
          " commodo est. Aliqua labore magna nostrud magna consequat incididunt excepteur a" +
          "dipisicing est aliqua ex reprehenderit. Pariatur duis duis quis dolore cupidatat" +
          " laboris adipisicing aliquip amet pariatur proident ipsum commodo.",
      "imageUrl": "Holcomb"
    }, {
      "id": "5a8f6e3a3218dc949c0db40e",
      "title": "Cipromox",
      "date": "Sun Aug 01 1999 00:39:45 GMT-0400 (Eastern Daylight Time)",
      "author": "Lorene",
      "tags": [
        "Seychelles", "Australia"
      ],
      "content": "Id aute nulla veniam ad ad consectetur proident reprehenderit officia minim exer" +
          "citation fugiat nulla id. Magna velit cillum esse elit aliquip dolore reprehende" +
          "rit nostrud deserunt et exercitation cupidatat. Commodo aliqua ullamco qui aute " +
          "esse nostrud.",
      "imageUrl": "Lowe"
    }, {
      "id": "5a8f6e3ae279c772cbc69f8c",
      "title": "Sureplex",
      "date": "Thu Feb 09 1984 02:26:15 GMT-0500 (Eastern Standard Time)",
      "author": "Rhea",
      "tags": [
        "Georgia", "Panama"
      ],
      "content": "Sunt pariatur ipsum proident ut. Veniam ullamco pariatur irure dolor ex proident" +
          " do officia officia et anim laboris mollit deserunt. Dolor ea esse esse exercita" +
          "tion veniam sunt eiusmod.",
      "imageUrl": "Cohen"
    }, {
      "id": "5a8f6e3af44e174832889ab9",
      "title": "Extrawear",
      "date": "Thu Mar 07 1991 17:06:55 GMT-0500 (Eastern Standard Time)",
      "author": "Levy",
      "tags": [
        "Niue", "Bermuda"
      ],
      "content": "Cupidatat commodo cupidatat fugiat elit cupidatat nisi ullamco do deserunt sint " +
          "velit id sint. Quis aliquip anim tempor nisi veniam. Ad ut deserunt sit pariatur" +
          " veniam id incididunt dolor.",
      "imageUrl": "Acosta"
    }, {
      "id": "5a8f6e3acc52635762b8000e",
      "title": "Bugsall",
      "date": "Tue Jul 02 1985 08:34:44 GMT-0400 (Eastern Daylight Time)",
      "author": "Washington",
      "tags": [
        "Sweden", "Bhutan"
      ],
      "content": "Aute tempor anim eiusmod ipsum occaecat amet minim Lorem ad non exercitation. Es" +
          "se aliquip exercitation ad Lorem minim ullamco laboris eiusmod est proident nisi" +
          " reprehenderit. Pariatur voluptate cillum fugiat ipsum labore ea cillum laboris " +
          "commodo dolore anim.",
      "imageUrl": "Marsh"
    }, {
      "id": "5a8f6e3aaf725735028253b3",
      "title": "Chorizon",
      "date": "Wed Feb 18 2009 02:06:37 GMT-0500 (Eastern Standard Time)",
      "author": "Shawn",
      "tags": [
        "El Salvador", "Trinidad and Tobago"
      ],
      "content": "Occaecat est veniam nulla commodo do cupidatat. Excepteur dolore officia aute do" +
          " labore ad commodo ea anim aute veniam non occaecat consectetur. Veniam voluptat" +
          "e cupidatat elit et nisi ipsum anim ea consequat eiusmod pariatur laboris velit " +
          "et.",
      "imageUrl": "Drake"
    }, {
      "id": "5a8f6e3a854c94e7a404260c",
      "title": "Gaptec",
      "date": "Fri May 06 1988 12:30:14 GMT-0400 (Eastern Daylight Time)",
      "author": "Jewel",
      "tags": [
        "Reunion", "Samoa"
      ],
      "content": "Proident irure ea amet cillum qui reprehenderit ipsum id consequat sunt est labo" +
          "rum irure. Do sit enim labore culpa fugiat id ex reprehenderit deserunt nostrud " +
          "qui laborum ullamco ut. Dolore do eu exercitation consequat sunt proident deseru" +
          "nt nulla mollit.",
      "imageUrl": "Patel"
    }, {
      "id": "5a8f6e3a8703a43ae9cef2fc",
      "title": "Xumonk",
      "date": "Mon Jun 01 2009 13:54:54 GMT-0400 (Eastern Daylight Time)",
      "author": "Hancock",
      "tags": [
        "Syria", "Bolivia"
      ],
      "content": "Sint laboris commodo magna nostrud laborum non. Aliquip reprehenderit cupidatat " +
          "cillum nulla minim nostrud enim magna sunt. Est qui labore tempor voluptate ut t" +
          "empor exercitation commodo minim tempor fugiat.",
      "imageUrl": "Hudson"
    }, {
      "id": "5a8f6e3ac7ceac69d05b7f0f",
      "title": "Sensate",
      "date": "Mon Nov 11 2013 12:02:11 GMT-0500 (Eastern Standard Time)",
      "author": "Audrey",
      "tags": [
        "Bosnia and Herzegovina", "Lesotho"
      ],
      "content": "Est ipsum nostrud irure elit aute minim et incididunt. Adipisicing sunt deserunt" +
          " elit esse esse labore in est. Lorem aliquip aliquip anim ut fugiat.",
      "imageUrl": "Crane"
    }, {
      "id": "5a8f6e3a28f37c201450f02c",
      "title": "Calcula",
      "date": "Thu Jun 11 1981 17:39:05 GMT-0400 (Eastern Daylight Time)",
      "author": "Noemi",
      "tags": [
        "Macedonia", "Gibraltar"
      ],
      "content": "Id aliqua mollit commodo aliquip dolor non velit. Ipsum nostrud dolor laborum cu" +
          "pidatat officia laboris. Id in deserunt deserunt velit magna.",
      "imageUrl": "Hunt"
    }
  ],
  currentPostIndex: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload
        ]
      };
    case ACTIONS.SET_CURRENT_POST_INDEX:
      return {
        ...state,
        currentPostIndex: action.index
      };
    default:
      return state;
  }
};

export default rootReducer;