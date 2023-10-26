


function Contac(){
    return(
        <article className="container-contacto">
            <section className="container-contacto-title">
              <h4>Contacto</h4>
            </section>
            <ul className="container-data-contact">
              <li className="list-data-contact">
                <i class='bx bx-envelope' ></i>
                <div>
                  <h6>Email:</h6>
                  <span>junitrapa357@gmail.com</span>
                </div>
              </li>
              <li className="list-data-contact">
                <i class='bx bxl-whatsapp' ></i>
                <div>
                  <h6>WhatsApp:</h6>
                  <span>943 413 353</span>
                </div>
              </li>
            </ul>
            <form className="form-contact">
              <input placeholder="Nombre" className="input-contact-email" type="text" />
              <input placeholder="Tu Email" className="input-contact-email" type="text" />
              <textarea className="textarea-contact" name="" id="" cols="30" rows="10"></textarea>
              <button className="button-contact">enviar correo</button>
            </form>
        </article>
    )
}

export default Contac