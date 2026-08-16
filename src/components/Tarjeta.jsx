/*==================
Para usar el componente, importalo y usa estas propiedades. Por ejemplo:

<Tarjeta
    paginaActiva={props.paginaActiva}    <- esta siempre (cambia el color de fondo, no modificar)
    titulo = 'SoyElTitulo'               <- esta es el titulo de la tarjeta
>
    <div>Cualquier contenido</div>       <- despues del titulo, coloca el contenido del cuerpo de la tarjeta
<Tarjeta/>

*** La tarjeta ocupa el 100% del ancho de su contenedor
*** Si se importa dentro de un componente personalizado, mandar paginaActual como prop. Por ejemplo:

function GeneracionMenu(props){
    return(
        <>
            <Hero
                titulo = 'Arma el almuerzo de tu peque en segundos'
                descripcion = 'Con consejos prácticos y ajustados a tu presupuesto'
                alt = 'alt'
                imagen = {imagen}
                paginaActiva= {props.paginaActiva}
            />
            <Nav
                paginaActiva={props.paginaActiva}
                onCambiarPagina={props.onCambiarPagina}
                imagenNav={imagenNav}
            />
                <Perfil paginaActiva={props.paginaActiva}/>     <- Mandar como prop         
            <Footer
                paginaActiva={props.paginaActiva}
                onCambiarPagina={props.onCambiarPagina}/>
        </>
    )
}

=====================*/


import './Tarjeta.css'
import { paginas } from '../data/shared'
import { useLocation } from 'react-router-dom'

function Tarjeta(props) {
    const location = useLocation()

    // Detecta la sección activa según la ruta de la URL actual
    const seccion = paginas.find((e) => e.ruta === location.pathname) || paginas[0]

    return (
        <div className="tarjeta">
            <div
                className="titulo"
                style={{ backgroundColor: seccion.color }}
            >
                <h3>{props.titulo}</h3>
            </div>
            <div className="cuerpo">
                {props.children}
            </div>
        </div>
    )
}

export default Tarjeta