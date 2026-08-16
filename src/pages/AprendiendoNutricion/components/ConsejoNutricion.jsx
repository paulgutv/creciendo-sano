import Tarjeta from '../../../components/Tarjeta'

function ConsejoNutricion(props) {

//Cambia el color del borde de la tarjeta al pasar el mouse probando 123
    function cambiarColor(tarjeta) {
        let r = Math.floor(Math.random() * 150)
        let g = Math.floor(Math.random() * 150)
        let b = Math.floor(Math.random() * 150)

        tarjeta.style.borderColor = `rgb(${r}, ${g}, ${b})`
    }

    function entrar(e) {
        let tarjeta = e.currentTarget

        cambiarColor(tarjeta)
        tarjeta.intervalo = setInterval(() => cambiarColor(tarjeta), 700)
    }

    function salir(e) {
        let tarjeta = e.currentTarget

        clearInterval(tarjeta.intervalo)
        tarjeta.style.borderColor = 'transparent'
    }

    return (
        <article
            className="aprendiendo-tarjeta"
            onMouseEnter={entrar}
            onMouseLeave={salir}
        >
            <img
                className="aprendiendo-tarjeta-imagen"
                src={props.imagen}
                alt={props.alt}
            />

            <Tarjeta
                paginaActiva={props.paginaActiva}
                titulo={props.titulo}
            >
                <p className="texto-m aprendiendo-tarjeta-texto">
                    {props.texto}
                </p>
            </Tarjeta>
        </article>
    )
}

export default ConsejoNutricion
