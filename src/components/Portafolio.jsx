import imgPortafolio from "../assets/portafolio-img.png"
import imgEcomerce from "../assets/ecomerce-portafolio-image.png"
import imgClima from "../assets/app-del-clima.png"
import imgPokeapi from "../assets/pokeApi-image-portafolio.png"

function Portafolio(){
    return (
        <>
            <section className="container-portafolio">
                <div className="container-portafolio-title">
                    <h4>Portafolio</h4>
                </div>
                <div className="proyectos-creados">
                    <p>Estos son mis proyectos creados con las tecnologias mas usandas en la web que es Javascript y una de sus librerias mas usadas como lo es React y estilizada con css , ademas el consumo de API para mas dinamismos para que las personas tengan una buena experiencia.</p>
                </div>
                <ul className="container-list-projects">
                    <li className="list-projects list-projects1">
                        <img className="img-project" src={imgClima} alt="" />
                    </li>
                    <li className="list-projects list-projects2">
                        <img className="img-project" src={imgEcomerce} alt="" />
                    </li>
                    <li className="list-projects list-projects3">
                        <img className="img-project" src={imgPortafolio} alt="" />
                    </li>
                    <li className="list-projects list-projects4">
                        <img className="img-project" src={imgPokeapi} alt="" />
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Portafolio