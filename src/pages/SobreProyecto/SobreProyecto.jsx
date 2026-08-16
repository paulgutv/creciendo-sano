import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "../../components/Hero"
import imagen from './assets/hero.png'
import Nav from "../../components/Nav"
import imagenNav from './assets/icono-nav.png'
import Footer from "../../components/Footer"
import Tarjeta from "../../components/Tarjeta";
import ModalSugerencia from "../SobreProyecto/components/ModalSugerencia.jsx";
import { preguntasFrecuentes, somos } from './data.js';
import ModalTodosComentarios from "../SobreProyecto/components/ModalTodosComentarios.jsx";
import Acordeon from "./components/Acordeon"
import { obtenerOpiniones, guardarOpinion } from "../../services/comentarioService.js";
import { useAuth } from "../../services/useAuth";
import './SobreProyecto.css';



function SobreProyecto(props){  
    const [modalAbierto, setModalAbierto] = useState(false);
    const [modalVerTodos, setModalVerTodos] = useState(false);
 
    const [comentarios, setComentarios] = useState([]);
    const [cargandoComentarios, setCargandoComentarios] = useState(true);

    const { usuario } = useAuth();
    const navigate = useNavigate();

    const cargarComentarios = async () => {
        try {
        const datos = await obtenerOpiniones();
        setComentarios(datos);
        } catch (error) {
        console.log("Error al traer opiniones:", error);
        } finally {
        setCargandoComentarios(false);
        }
    };

    useEffect(() => {
        cargarComentarios();
    }, []);


    const agregarComentario = async (nuevoComentario) => {
        try {
        const guardado = await guardarOpinion(nuevoComentario);
        setComentarios((prev) => [guardado, ...prev]);
        } catch (error) {
        console.log("Error al guardar opinión:", error);
        }
    };

    const handleAbrirModal = () => {
        if (!usuario) {
            navigate("/login");
            return;
        }
        setModalAbierto(true);
    };

    const comentariosRecientes = comentarios.slice(0, 5);

    return (
        <>
       <Hero
        titulo='Conoce la historia detrás de Creciendo Sano'
        descripcion='Por qué existe este proyecto y quiénes lo hicieron posible'
        alt='foco'
        imagen={imagen}
        paginaActiva={props.paginaActiva}
      />

      <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav} />

      <div className="sobre-proyecto-contenido">
        <div id="quienes-somos" className="seccion-bloque">
          <Tarjeta paginaActiva={props.paginaActiva} titulo="¿QUIÉNES SOMOS?">
            <p className="texto texto-m">
               {somos[0].texto}
            </p>
          </Tarjeta>
        </div>

        <div id="preguntas-frecuentes" className="seccion-bloque">
            <h2 className="subtitulo-seccion">PREGUNTAS FRECUENTES</h2>
            <Acordeon items={preguntasFrecuentes} />
        </div>

        {/* SECCIÓN OPINIONES Y SUGERENCIAS */}
        <div id="opiniones" className="seccion-bloque">
          <h2 className="subtitulo-seccion">OPINIONES Y SUGERENCIAS</h2>
          
          <div className="contenedor-btn-opinion">
            <button className="btn-abrir-modal" onClick={handleAbrirModal}>
               DEJAR UNA OPINIÓN O SUGERENCIA
            </button>
          </div>

          {cargandoComentarios? <p>Cargando comentarios...</p>: null}

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
