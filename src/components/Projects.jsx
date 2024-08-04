// src/components/Projects.js
export default function Projects() {
  const projects = [
    {
      name: "Proyecto Crud",
      description: "Proyecto de aprendizaje",
      link: "https://github.com/Omargfm/Aplicacion-Crud",
    },
    {
      name: "Landing de venta",
      description: "Proyecto de aprendizaje",
      link: "https://github.com/Omargfm/proyecto1-landing-venta",
    },
    {
      name: "Dashboard",
      description: "Proyecto de aprendizaje",
      link: "https://github.com/Omargfm/proyecto3",
    },
  ];

  return (
    <section id="projects">
      <h1>Parte de mis proyectos del Bootcamp</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Directo desde GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
