import { paginas, datos, ayuda } from "../data/shared"
import './Footer.css'

import { Link, useLocation, useNavigate } from 'react-router-dom'


function Footer() {
    const location = useLocation()
    const navigate = useNavigate()

    // Detecta la sección activa según la ruta de la URL actual
    const seccion = paginas.find((e) => e.ruta === location.pathname) || paginas[0]

    // Redirige a /sobre-proyecto y hace scroll suave a la sección
    const irASeccionAyuda = (idSeccion) => {
        navigate('/sobre-proyecto')
        setTimeout(() => {
            document.getElementById(idSeccion)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return (
        <footer className="footer">
            <div className="contenedor" style={{ backgroundColor: seccion.color }}>
                <div className="contenedor-info">
                    <div className="contenedor-proyecto">
                        <div className="contenedor-logo">
                            <div className="logo"></div>
                            <p className="logo-texto logotipo-s">Creciendo sano</p>
                        </div>
                        <p className="descripcion texto-s-multi">
                            Menús infantiles saludables, ajustados al presupuesto y la realidad de cada familia peruana
                        </p>
                    </div>

                    <div className="contenedor-navegacion">
                        <h5 style={{ color: seccion.colorClaro }}>NAVEGACIÓN</h5>
                        {paginas.map((e) => (
                            <Link
                                key={e.id}
                                to={e.ruta}
                                className="enlace texto-s"
                            >
                                {e.nombre}
                            </Link>
                        ))}
                    </div>

                    <div className="contenedor-datos">
                        <h5 style={{ color: seccion.colorClaro }}>FUENTE DE DATOS</h5>
                        {datos.map((e) => (
                            <a
                                key={e.id}
                                href={e.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="enlace texto-s"
                            >
                                {e.nombre}
                            </a>
                        ))}
                    </div>

                    <div className="contenedor-ayuda">
                        <h5 style={{ color: seccion.colorClaro }}>AYUDA</h5>
                        {ayuda.map((e) => (
                            <button
                                key={e.id}
                                className="enlace texto-s"
                                onClick={() => irASeccionAyuda(e.id)}
                            >
                                {e.nombre}
                            </button>
                        ))}
                    </div>
                </div>

                <hr style={{ border: `1px solid ${seccion.colorClaro}` }} />
                <p style={{ color: seccion.colorClaro }} className="advertencia texto-xs">
                    © 2026 Creciendo Sano. Proyecto académico, no reemplaza la evaluación de un profesional de la salud.
                </p>
            </div>
        </footer>
    )
}

export default Footer