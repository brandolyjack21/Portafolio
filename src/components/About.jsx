import imgAbout from '../assets/fotodeperfil.jpeg'

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
                            <p>"Soy un apasionado programador web con experiencia en tecnologías como <strong>JavaScript, React, Redux, Node.js y PostgreSQL</strong>.<br/><br/>

Diseño soluciones web innovadoras y elegantes que impulsan el éxito de tu negocio. Si buscas resultados excepcionales, ¡contáctame hoy!"</p>
                        </section>
                        <section className='container-img-and-skils'>
                            <div className='img-about'>
                                <img src={imgAbout} alt="" />
                            </div>
                        </section>
                    </section>
                </article>
            </section>
        </>
    )
}

export default About