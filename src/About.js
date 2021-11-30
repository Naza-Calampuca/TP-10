import React from 'react';
import './style.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div>
          <form class="about">
            <h3>Objetivos profesionales</h3>
            <p>
              Mi objetivo profesional es llegar a ser director artístico (o
              similar) de algún medio audiovisual de calidad; ya sea serie
              animada, película animada o corto.
            </p>
          </form>
        </div>
        <div>
          <form class="about">
            <h3>Intereses</h3>
            <p>
              Mi mayor interes es hacia el arte, con relacion al dibujo,
              ilustración, pintura y animación. También me atrae la programación
              como medio para mejorar el dibujo por computadora
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default About;
