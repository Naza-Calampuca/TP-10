import React from 'react';
import Navbar from './Navbar';

const Contacto = () => {
  function mensaje() {
    alert('El mensaje a sido enviado');
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <form class="contact">
          <div>
            <div>
              <h3>Mi contacto</h3>
            </div>
            <div>
              <h4>Mi gmail: calampuca.naza.2004@gmail.com</h4>
            </div>
          </div>
          <div>
            <div>
              <div>
                <input placeholder="Nombe" />
              </div>

              <div>
                <input placeholder="Apellido" />
              </div>
              <div>
                <input placeholder="Mail" />
              </div>
              <div>
                <input placeholder="Tu mensaje" />
              </div>
              <br />

              <div>
                <form class="content">
                  <h3 onClick={mensaje} type="submit">
                    Enviar
                  </h3>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contacto;
