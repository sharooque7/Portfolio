import Zaberi from "../../assets/zabri3.JPG";
import next from "../../assets/next.JPG";
import whatsApp from "../../assets/whatsapp.JPG";
import netflix from "../../assets/netflixclone.JPG";
import chat from "../../assets/chat.JPG";
import socialLite from "../../assets/socialLite.JPG";
const data = [
  {
    id: 1,
    title: "ZaberiEcommerce",
    desc: "An ecommerce application .This is implemented using MERN stack.I have used Bootstrap for styling the frontend and also implemented paypal integration for payment .Used Redux for state management ",
    src: Zaberi,
    library: [
      "ReactJS",
      "NodeJs",
      "Redux",
      "Bootstrap",
      "CSS",
      "NoSQL",
      "MongoDB",
    ],
    liveApp: "https://zaberi.netlify.app/",
    Frontend: "https://github.com/sharooque7/ZaberiFront",
    Backend: "https://github.com/sharooque7/ZaberiBackend",
  },
  {
    id: 2,
    title: "Trave App",
    desc: "A small CRUD application where the travel enthusiast can post and edit the places that they admire.I have used NEXTJS for this implementation .This app will help others to plan their trip",
    src: next,
    library: [
      "React JS",
      "Node Js",
      "NEXT JS",
      "materialUI",
      "CSS",
      "NoSQL",
      "MongoDB",
    ],
    liveApp: "https://travel-app-gold.vercel.app/",
    Frontend: "https://github.com/sharooque7/TravelApp.git",
    Backend: "https://github.com/sharooque7/TravelApp.git",
  },
  {
    id: 3,
    title: "Whatsapp Clone",
    desc: "A small clone of whatsapp . Here we can create a room and start chatting with people in the room . I have used ReactJS for frontEnd with ContextApi for state management with google authentication and storing data in firebase  ",
    src: whatsApp,
    library: [
      "ReactJS",
      "ContextApi",
      "MaterialUI",
      "Firebase",
      "CSS",
      "NoSQL",
    ],
    liveApp: "https://whatsapp-clone-a8525.web.app/",
    Frontend: "https://github.com/sharooque7/whatsapp-clone",
    Backend: "",
  },
  {
    id: 4,
    title: "Netflix Clone",
    desc: "A  clone of Netflix the popular streaming website . I have used TMDB Api's  to get the realtime data from internet .Here i have build only the frontend part for now with ReactJS and CSS and deployed this to firebase the backend functionality will be added later .",
    src: netflix,
    library: ["ReactJS", "Firebase", "CSS"],
    liveApp: "https://nelfiix-clone.netlify.app/",
    Frontend: "https://github.com/sharooque7/Netflix-clone.git",
    Backend: "",
  },
  {
    id: 5,
    title: "ChatApp",
    desc: "A Chat Application build using socket.io . Here i have used ReactJS for frontend and Nodejs for Backend and MongoDB as DataBase . At a time two user has to be online to start conversation and also send messages . I have used redux for state management and the layout is done using CSS-flexbox .",
    src: chat,
    library: ["ReactJS", "MongoDB", "CSS-flex", "Socket.io", "Nodejs", "Redux"],
    liveApp: "https://chatappsocial.netlify.app/",
    Frontend: "https://github.com/sharooque7/chatApp",
    Backend: "https://github.com/sharooque7/chatBackend",
  },
  {
    id: 6,
    title: "SocialLite",
    desc: "A Social media lite where user can share their post and chat with online users .This is a full stack MERN application also uses contextApi for state management The messaging part is build using socket.io. ",
    src: socialLite,
    library: [
      "ReactJS",
      "MongoDB",
      "CSS-flex",
      "Socket.io",
      "ContextApi",
      "Nodejs",
    ],
    liveApp: "https://sociallite.netlify.app/",
    Frontend: "https://github.com/sharooque7/socialLite",
    Backend: "https://github.com/sharooque7/socialLiteBackend",
  },
];

export default data;
