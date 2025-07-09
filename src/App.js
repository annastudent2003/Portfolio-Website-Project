import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/Navigation";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;