function Contac() {
  return (
    <article id="contact" className="container-contacto">
      <section className="container-contacto-title">
        <h4>Contacto</h4>
      </section>
      <section className="container-data-form">
        <ul className="container-data-contact">
          <li className="list-data-contact">
            <i class="bx bx-envelope"></i>
            <div>
              <h6>Email:</h6>
              <span>junitrapa357@gmail.com</span>
            </div>
          </li>
          <li className="list-data-contact">
            <i class="bx bxl-whatsapp"></i>
            <div>
              <h6>WhatsApp:</h6>
              <span>943 413 353</span>
            </div>
          </li>
        </ul>
        <form className="form-contact">
          <input
            placeholder="Nombre"
            className="input-contact-email"
            type="text"
          />
          <input
            placeholder="Tu Email"
            className="input-contact-email"
            type="text"
          />
          <textarea
            className="textarea-contact"
            name=""
            id=""
            cols="60"
            rows="10"
          ></textarea>
          <button className="button-contact">enviar correo</button>
        </form>
      </section>
    </article>
  );
}

export default Contac;
