import React from 'react'

function Home() {

  const networks = [
    { iconClass:'bx bxl-netlify', link:'' },
    { iconClass:'bx bxl-github', link:'' },
    { iconClass:'bx bxl-linkedin', link:'' }
  ]
  return (
    <>
        <section id='home' className='container-home'>
            <article className='container-presentation'>
                <div className='programador-title'>
                    <h1>Programador Full Stack</h1>
                </div>
                <span className='name'>Brandoly Jack Figueroa Gonzales</span>
            </article>
            <ul className='container-networks'>
              {
                networks.map( network => (
                  <li className='network'>
                    <i class={ network.iconClass } ></i>
                  </li>
                ))
              }
            </ul>
        </section> 

    </>
  )
}

export default Home
