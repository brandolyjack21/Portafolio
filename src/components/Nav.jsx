import React from 'react'

function Nav() {
  return (
    <>
      <nav className='nav'>
        <section className='nav-section container-menu'>
            <ul className='container-list'>
                <a href="">
                    <li className='list'><i class='bx bx-home' ></i><span className='span'>Inicio</span></li>
                </a>
                <a href="">
                    <li className='list'><i class='bx bx-user'></i><span className='span'>Acerca de </span></li>
                </a>
                <a href="">
                    <li className='list'><i class='bx bx-folder'></i><span className='span'>Portafolio</span></li>
                </a>
                <a href="">
                    <li className='list'><i class='bx bxl-whatsapp'></i><span className='span'>Contactame</span></li>
                </a>
            </ul>
        </section>
      </nav>
    </>
  )
}

export default Nav
