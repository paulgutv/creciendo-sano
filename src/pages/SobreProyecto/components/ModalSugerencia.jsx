import React, { useState } from 'react';

function ModalSugerencia({ estaAbierto, alCerrar, alPublicar }) {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');

  if (!estaAbierto) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !comentario.trim()) return;

    alPublicar({
      id: Date.now(),
      nombre,
      texto: comentario
    });

    setNombre('');
    setComentario('');
    alCerrar();
  };

  return (
    <div className="overlay-modal">
      <div className="contenido-modal">
        <button className="btn-cerrar-modal" onClick={alCerrar}>✕</button>
        <h3 className="titulo-modal">Tu opinión nos importa</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="campo-formulario">
            <label className="label-formulario texto-m">Nombre:</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              placeholder="Ej. María Delgado" 
              className="input-formulario"
              required 
            />
          </div>

          <div className="campo-formulario">
            <label className="label-formulario texto-m">Sugerencia o comentario:</label>
            <textarea 
              rows="4" 
              value={comentario} 
              onChange={(e) => setComentario(e.target.value)} 
              placeholder="Escribe tu mensaje..." 
              className="input-formulario textarea-formulario"
              required 
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar-opinion">
            PUBLICAR OPINIÓN
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalSugerencia;