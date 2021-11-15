import Zaberi from "../../assets/zabri3.JPG";
import product from "../../assets/product.JPG";
import whatsApp from "../../assets/whatsapp.JPG";
import netflix from "../../assets/netflixclone.JPG";
import chat from "../../assets/chat.JPG";
import socialLite from "../../assets/socialLite.JPG";
const data = [
  {
    id: 1,
    title: "ZaberiEcommerce",
    desc: "A ecommerce application",
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
    title: "Product Manager",
    desc: "A small CRUD application where the sellers can mange thier product",
    src: product,
    library: [
      "ReactJS",
      "NodeJs",
      "ContextApi",
      "materialUI",
      "CSS",
      "NoSQL",
      "MongoDB",
    ],
    liveApp: "https://productmanagercrud.netlify.app/",
    Frontend: "https://github.com/sharooque7/ProductManager-FrontEnd",
    Backend: "https://github.com/sharooque7/ProductManagerBackend",
  },
  {
    id: 3,
    title: "WhatsApp Clone",
    desc: "A small clone of whatsApp where we can chat in room",
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
    desc: "A  clone of Netflix ",
    src: netflix,
    library: ["ReactJS", "Firebase", "CSS"],
    liveApp: "https://nelfiix-clone.netlify.app/",
    Frontend:
      "https://github.com/sharooque7/Netflix-clone/blob/main/package.json",
    Backend: "",
  },
  {
    id: 5,
    title: "ChatApp",
    desc: "A Chat Application build using socket.io ",
    src: chat,
    library: ["ReactJS", "MongoDB", "CSS-flex", "Socket.io", "Nodejs", "Redux"],
    liveApp: "https://chatappsocial.netlify.app/",
    Frontend: "https://github.com/sharooque7/chatApp",
    Backend: "https://github.com/sharooque7/chatBackend",
  },
  {
    id: 6,
    title: "SocialLite",
    desc: "A Social media lite where user can share their post and chat with online users   ",
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
