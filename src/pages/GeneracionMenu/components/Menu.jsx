import Tarjeta from "../../../components/Tarjeta"
import './Menu.css'

function Menu() {
    return(
        <div>
            <Tarjeta
                titulo = 'MENÚ SEMANAL'               
            >
                <div className="menu-inicial">
                    <div className="icono-plato"></div>
                    <p className="texto-m">Agrega un presupuesto semanal y los datos de tu peque para obtener recomendaciones de menús</p>
                </div>
            </Tarjeta>
        </div>
    )
}

export default Menu