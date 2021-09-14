import React, { useState } from "react";
import "./formulario.css";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [carnet, setCarnet] = useState("");
  const [correo, setCorreo] = useState("");
  const [carrera, setCarrera] = useState("");
  const [horario, setHorario] = useState("");
  const [fecha, setFecha] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Formulario de matrícula</h1>
      <form id="formulario-matricula">
        <div class="input">
          <label>Nombre</label>
          <input
            required
            autocomplete
            id="input-nombre"
            type="text"
            name="nombre"
            placeholder="Juanito Mechas"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div class="input">
          <label>Carnet</label>
          <input
            required
            autocomplete
            id="input-carnet"
            type="text"
            name="carnet"
            placeholder="2222222222"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
          />
        </div>

        <div class="input">
          <label>Correo electrónico</label>
          <input
            required
            autocomplete
            id="input-correo"
            type="email"
            name="carnet"
            placeholder="ejemplo@dominio.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div class="input">
          <label>Carrera</label>
          <select
            onChange={(e) => setCarrera(e.target.value)}
            name="carrera"
            required
            id="input-carrera"
            value={carrera}
          >
            <option value="">Seleccione una carrera</option>
            <option value="informatica">Informática</option>
            <option value="negocios">Negocios</option>
            <option value="ri">Relaciones Internacionales</option>
            <option value="fisica">Física</option>
            <option value="admin">Administración</option>
          </select>
        </div>

        <div class="input">
          <label>Horario</label>
          <div class="formulario-horarios">
            <div class="formulario-horarios-fila">
              <input
                required
                type="radio"
                name="horario"
                value="1"
                id="horarioDiurno"
                onClick={(e) => setHorario(e.target.value)}
              />
              <label for="horarioDiurno">Diurno</label>
            </div>
            <div class="formulario-horarios-fila">
              <input
                type="radio"
                name="horario"
                value="2"
                id="horarioNocturno"
              />
              <label for="horarioNocturno">Nocturno</label>
            </div>
          </div>
        </div>

        <div class="input">
          <label>Fecha de nacimiento</label>
          <input
            onChange={(e) => setFecha(e.target.value)}
            name="fecha-nacimiento"
            type="date"
          />
        </div>

        <div class="input">
          <label>Estado Civil</label>
          <select required name="estado-civil">
            <option value="">Seleccione un estado civil</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </select>
        </div>

        <div class="input">
          <label>Género</label>
          <select required name="genero">
            <option value="">Seleccione un género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div class="input">
          <label>Número de teléfono</label>
          <input
            required
            name="numero-telefono"
            autocomplete
            type="tel"
            placeholder="2222-2222"
            pattern="[0-9]{4}-[0-9]{4}"
          />
        </div>

        <div class="input">
          <label>Lista de materias</label>
          <select>
            <option value="">Agregue materias</option>
            <option value="calculo">Cálculo</option>
          </select>
        </div>
        <button onClick={handleClick} id="boton-enviar" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};
