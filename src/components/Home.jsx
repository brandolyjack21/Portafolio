import React from 'react'

function Home() {

  const networks = [
    { iconClass:'bx bxl-netlify', link:'https://app.netlify.com/teams/brandolyjack21/overview' },
    { iconClass:'bx bxl-github', link:'https://github.com/brandolyjack21' },
    { iconClass:'bx bxl-linkedin', link:'https://www.linkedin.com/in/brandoly-jack-figueroa-gonz%C3%A1lez-b8b465260/' }
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
