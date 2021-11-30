import React from 'react';
import Navbar from './Navbar';
import './style';

const Proyectos = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <form class="proyect">
          <h3>Gestor de turnos</h3>
          <p>
            Primero en el tp7 hice el diseño de la página, para luego pasar al
            tp8 y dale funcionalidad, donde del formulario le pasábamos la
            información ingresada a la App, y de la App al js. turnos, para que
            así lo registre
          </p>
        </form>

        <form class="proyect">
          <h3>APIs en React</h3>
          <p>
            En el tp9 lo que hice es básicamente conectar una API a el react, a
            través de axios, para poder así traer requests como: nombre de
            usuario , foto que publico, nombre de la foto que publico y likes
          </p>
        </form>

        <form class="proyect">
          <h3>Lista de tareas</h3>
          <p>
            En este tp hacemos un TO DO List para que uno pueda ingresar cosas
            para hacer y luego, una vez realizadas, tacharlas. Primero ingresas
            tus cosas por hacer en el text-box, luego tocas el botón para que
            después la información ingresada se guarde en una lista , donde
            después se puede tocar para marcar que la tarea ya fue realizada.
          </p>
        </form>
      </div>
    </>
  );
};

export default Proyectos;
