import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Register from "./RegisterPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Register />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
