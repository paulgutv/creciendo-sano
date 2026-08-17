/*==================
Para usar el componente, importalo y usa estas propiedades. Por ejemplo:

<Boton
    
    texto = 'SoyUnBoton'                 <- esta es el texto del boton
    onClick = {soyUnaFuncion}            <- esta es la llamada a la función de tu boton
    type='submit'                        <- opcional, por defecto es 'button' (no recarga la página)
/>

*** El boton ocupa el 100% del ancho de su contenedor

=====================*/


import './Boton.css'
import { paginas } from '../data/shared'
import { useLocation } from 'react-router-dom'

function Boton(props) {
    const location = useLocation()

    // Detecta la sección activa según la ruta actual de la URL
    const seccion = paginas.find((e) => e.ruta === location.pathname) || paginas[0]

    return (
        <button
            className="boton texto-m"
            style={{ backgroundColor: seccion.color }}
            onClick={props.onClick}
            type={props.type || 'button'}
        >
            {props.texto}
        </button>
    )
}

export default Boton