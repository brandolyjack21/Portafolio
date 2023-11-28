import imgPortafolio from "../assets/portafolio-img.png"
import imgEcomerce from "../assets/ecomerce-portafolio-image.png"
import imgClima from "../assets/app-del-clima.png"
import imgPokeapi from "../assets/pokeApi-image-portafolio.png"
import imgEcomerceConBootstrap from '../assets/imgEcomerceConBootstrap.png'

function Portafolio(){
    return (
        <>
            <section id="porfolio" className="container-portafolio">
                <div className="container-portafolio-title">
                    <h4>Portafolio</h4>
                </div>
                <div className="proyectos-creados">
                    <p>Estos son mis proyectos creados con las tecnologias mas usandas en la web que es Javascript y una de sus librerias mas usadas como lo es React y estilizada con css , ademas el consumo de API para mas dinamismos para que las personas tengan una buena experiencia.</p>
                </div>
                <ul className="container-list-projects">
                    <li className="list-projects list-projects1">
                        <a href="https://app-delclimaproyecto-trmnd-0045am.netlify.app/">
                        <img className="img-project" src={imgClima} alt="" />
                        <div className="ancor-click">click aquí</div>
                        </a>
                    </li>
                    <li className="list-projects list-projects2">
                        <a href="https://heartfelt-pie-d17b06.netlify.app/">
                        <img className="img-project" src={imgEcomerce} alt="" />
                        <div className="ancor-click">click aquí</div>
                        </a>
                    </li>
                    <li className="list-projects list-projects3">
                        <a href="">
                        <img className="img-project" src={imgPortafolio} alt="" />
                        <div className="ancor-click">click aquí</div>
                        </a>
                    </li>
                    <li className="list-projects list-projects4">
                        <a href="https://spiffy-liger-99f86d.netlify.app/">
                        <img className="img-project" src={imgPokeapi} alt="" />
                        <div className="ancor-click">click aquí</div>
                        </a>
                    </li>
                    <li className="list-projects list-projects5">
                        <a href="https://leafy-phoenix-9da974.netlify.app/#action1">
                        <img className="img-project" src={imgEcomerceConBootstrap} alt="" />
                        <div className="ancor-click">click aquí</div>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Portafolio