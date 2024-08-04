// src/app/page.js
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";

export default function MainPage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Habilidades y conocimientos</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
        </ul>
      </nav>
      <Home />
      <About />
      <Projects />
    </div>
  );
}
