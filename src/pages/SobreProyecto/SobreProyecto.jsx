import { useState } from 'react';
import Hero from "../../components/Hero"
import imagen from './assets/hero.png'
import Nav from "../../components/Nav"
import imagenNav from './assets/icono-nav.png'
import Footer from "../../components/Footer"
import Tarjeta from "../../components/Tarjeta";
import ModalSugerencia from "../SobreProyecto/components/ModalSugerencia.jsx";
import { preguntasFrecuentes, comentariosIniciales } from './data.js';
import ModalTodosComentarios from "../SobreProyecto/components/ModalTodosComentarios.jsx";
import './SobreProyecto.css';



function SobreProyecto(props){
   
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);

   
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalVerTodos, setModalVerTodos] = useState(false); 

 
  const [comentarios, setComentarios] = useState(comentariosIniciales);



    const alternarPregunta = (id) => {
        if (preguntaAbierta === id) {
            setPreguntaAbierta(null);
        } else {
            setPreguntaAbierta(id);
        }
    };

    const LIMITE_HISTORIAL = 10;

    const agregarComentario = (nuevoComentario) => {
    setComentarios([nuevoComentario, ...comentarios.slice(0,LIMITE_HISTORIAL)]);
  };


  const comentariosRecientes = comentarios.slice(0, 5);

    return (
        <>
       <Hero
        titulo='titulo'
        descripcion='descripcion'
        alt='alt'
        imagen={imagen}
        paginaActiva={props.paginaActiva}
      />

      <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav} />

      <div className="sobre-proyecto-contenido">
        <div id="quienes-somos" className="seccion-bloque">
          <Tarjeta paginaActiva={props.paginaActiva} titulo="¿QUIÉNES SOMOS?">
            <p className="texto-m">
              Somos un grupo de estudiantes de Computación e Informática que decidimos construir algo más que un proyecto de curso...
            </p>
          </Tarjeta>
        </div>

        <div id="preguntas-frecuentes" className="seccion-bloque">
          <h2 className="subtitulo-seccion">PREGUNTAS FRECUENTES</h2>
          <div className="lista-faqs">
            {preguntasFrecuentes.map((item) => (
              <div key={item.id} className="item-faq">
                <button 
                  className="boton-faq texto-m"
                  onClick={() => alternarPregunta(item.id)}
                >
                  {item.pregunta}
                </button>
                {preguntaAbierta === item.id && (
                  <Tarjeta paginaActiva={props.paginaActiva}>
                    <p className="texto-m">{item.respuesta}</p>
                  </Tarjeta>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN OPINIONES Y SUGERENCIAS */}
        <div id="opiniones" className="seccion-bloque">
          <h2 className="subtitulo-seccion">OPINIONES Y SUGERENCIAS</h2>
          
          <div className="contenedor-btn-opinion">
            <button className="btn-abrir-modal" onClick={() => setModalAbierto(true)}>
               DEJAR UNA OPINIÓN O SUGERENCIA
            </button>
          </div>

          {/* Muestra solo los 5 comentarios más recientes */}
          <div className="lista-comentarios">
            {comentariosRecientes.map((item) => (
              <div key={item.id} className="tarjeta-comentario">
                <strong className="autor-comentario">{item.nombre}</strong>
                <p className="texto-m texto-comentario">{item.texto}</p>
              </div>
            ))}
          </div>

       
          {comentarios.length > 5 && (
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button className="btn-ver-todos" onClick={() => setModalVerTodos(true)}>
                Ver todos los comentarios ({comentarios.length})
              </button>
            </div>
          )}
        </div>

        <div id="contacto" className="seccion-bloque contacto-bloque">
          <h2 className="subtitulo-seccion">CONTACTO</h2>
          <p className="email-contacto texto-m">info@creciendosano.dev</p>
        </div>
      </div>

      
      <ModalSugerencia 
        estaAbierto={modalAbierto} 
        alCerrar={() => setModalAbierto(false)} 
        alPublicar={agregarComentario} 
      />

     
      <ModalTodosComentarios 
        estaAbierto={modalVerTodos} 
        alCerrar={() => setModalVerTodos(false)} 
        todosLosComentarios={comentarios} 
      />

      <Footer paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} />
    </>
  );
}

export default SobreProyecto