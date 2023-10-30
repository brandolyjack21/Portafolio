import imgAbout from "../assets/fotodeperfil.jpeg";

function About() {
  const projects = [
    {
      name: "Ecommerce",
      technologies: ["HTML ","CSS ","JavaScript ","React ","Redux ","React-Router ","Bootstrap "],
      description:"Un sitio web de ecommerce que permite a los usuarios comprar productos de forma online de una manera intuitiva y fácil de usar.",
    },
    {
      name: "Clima",
      technologies: ["React ", "HTML ", "JavaScript ", "API REST "],
      description:
        "Una aplicación web que muestra la temperatura actual en tu ubicación y también permite buscar la temperatura de cualquier ciudad del mundo.",
    },
    {
      name: "Pokeapi",
      technologies: ["React ", "HTML ", "JavaScript ", "API REST "],
      description:
        "Una aplicación web que muestra los diferentes tipos de Pokémon.",
    },
  ];
  return (
    <>
      <section className="container-about">
        <article className="body-about">
          <section className="container-h2">
            <h2>Acerca de Mí</h2>
          </section>
          <section className="container-description-profesional">
            <section className="profesional-description">
              <p className="description">
                Soy un apasionado programador web con experiencia en tecnologías
                como{" "}
                <strong>JavaScript, React, Redux, Node.js y PostgreSQL</strong>.
                <br />
                <br />
                Diseño soluciones web innovadoras y elegantes que impulsan el
                éxito de tu negocio. Si buscas resultados excepcionales,
                ¡contáctame hoy!
              </p>
              <h4 className="title-presentation-project">Estos son algunos de mis proyectos:</h4>
              <ul className="container-list-description-projects">
                {projects.map((project) => (
                  <li className="description-project">
                    <section className="container-line-circle">
                      <div className="line"></div>
                      <div className="circle"></div>
                    </section>
                    <section className="project-description">
                      <h4 className="title-discription-project">{ project.name }</h4>
                      <span><strong>{ project.technologies }</strong></span>
                      <p>
                        { project.description }
                      </p>
                    </section>
                  </li>
                ))}
              </ul>
            </section>
            <section className="container-img-and-skils">
              <div className="img-about">
                <img src={imgAbout} alt="" />
              </div>
            </section>
          </section>
        </article>
      </section>
    </>
  );
}

export default About;
