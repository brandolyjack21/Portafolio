import imgAbout from '../assets/imagenAboutcuadrado.png'

function About(){
    return(
        <>
            <section className='container-about'>
                <article className='body-about'>
                    <section className='container-h2'>
                        <h2>Acerca de Mí</h2>
                    </section>
                    <section className='container-description-profesional'>
                        <section className='profesional-description'>
                            <p>Soy un apasionado programador con un enfoque en el desarrollo de sitios web utilizando WordPress y la potente herramienta de diseño, Elementor. Mi amor por el mundo del SEO me llevó a aprender JavaScript y React, junto con Node.js y Express, para crear experiencias web altamente interactivas y optimizadas para motores de búsqueda.</p>
                        </section>
                        <section className='container-img-and-skils'>
                            <div className='img-about'>
                                <img src={imgAbout} alt="" />
                            </div>
                            <div className='description-skils'>
                                <div className='container-habilidades'>
                                    <h4>Habilidades usadas en mis proyectos</h4>
                                </div>
                                <ul>
                                    <li className='list-habilidades'><i class='bx bx-chevron-right'></i>Javascript</li>
                                    <li className='list-habilidades'><i class='bx bx-chevron-right'></i>Html</li>
                                    <li className='list-habilidades'><i class='bx bx-chevron-right'></i>Css</li>
                                    <li className='list-habilidades'><i class='bx bx-chevron-right'></i>React</li>
                                    <li className='list-habilidades'><i class='bx bx-chevron-right'></i>php</li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </article>
            </section>
        </>
    )
}

export default About