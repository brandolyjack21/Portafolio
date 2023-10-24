import React from 'react'
import { useState } from 'react'

function Nav() {

  const [ positionDiv, setPositionDiv ] = useState(false)
  const [ selectedButton, setSelectedButton ] = useState(null)

  const menuOptions = [
    { id:1 , iconClass:'bx bx-home', name:'Inicio' },
    { id:2 , iconClass:'bx bx-user', name:'Acerca de' },
    { id:3 , iconClass:'bx bx-folder', name:'Portafolio' },
    { id:4 , iconClass:'bx bxl-whatsapp', name:'Contactame' }
  ]

  const bgColor = (id) => {
    setSelectedButton(id)
    setPositionDiv(!positionDiv)
  }
  return (
    <>
      <nav className='nav'>
        <section className='container-menu-amburguesa'>
          <span className='menu-ambuerguesa' onClick={ () => setPositionDiv(!positionDiv)}>
            <div className={  positionDiv ? 'rotateDiv': ''  }></div>
            <div className={  positionDiv ? 'visibilityDiv': ''  }></div>
            <div className={  positionDiv ? 'rotateDiv2': ''  }></div>
          </span>
        </section>
        <section className={ positionDiv?'nav-section container-menu':'nav-section' }>
            <ul className='container-list'>

              {
                menuOptions.map( (option) => (
                  <li className={ selectedButton === option.id ? 'list listSelect': 'list' } key={option.id} onClick={() => bgColor(option.id)}><i class={option.iconClass}></i><span className='span'>{ option.name }</span></li>
                ))
              }
                
            </ul>
        </section>
      </nav>
    </>
  )
}

export default Nav
