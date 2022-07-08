import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NewsLetter from "./components/NewsLetter";

function App() {
    return (
        <div>
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <NewsLetter />
        </div>
    );
}

export default App;
