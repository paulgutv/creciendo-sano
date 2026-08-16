import React from 'react';

function ModalTodosComentarios({ estaAbierto, alCerrar, todosLosComentarios }) {
  if (!estaAbierto) return null;

  return (
    <div className="overlay-modal">
      <div className="contenido-modal modal-grande">
        <button className="btn-cerrar-modal" onClick={alCerrar}>✕</button>
        <h3 className="titulo-modal">Historial de Opiniones ({todosLosComentarios.length})</h3>
        
        <div className="lista-comentarios-completa">
          {todosLosComentarios.map((item) => (
            <div key={item.id} className="tarjeta-comentario">
              <strong className="autor-comentario">{item.nombre}</strong>
              <p className="texto-m texto-comentario">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalTodosComentarios;