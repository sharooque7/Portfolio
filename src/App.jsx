import Footer from "./components/Footer/Footer";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Main from "./components/main/Main";

import Project from "./components/Projects/Project";
import ContactForm from "./components/ContactForm/Form";
import Blogs from "./components/blogs/Social";

const App = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <HomePage />
        {/* <Main /> */}
        <Project />
        <Blogs />

        {/* <ContactForm /> */}
        <Footer />
      </Container>
    </>
  );
};

export default App;
