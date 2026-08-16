import './Nav.css'
import { paginas } from "../data/shared"
import { NavLink } from 'react-router-dom'

function Nav(props){
    return (
        <nav className="nav">
            <div className='contenedor'>
                {paginas
                    .filter((p)=> p.id != 'registro' && p.id != 'dashboard')
                    .map((p)=> (
                    <NavLink
                        key={p.id}
                        to={p.ruta}
                        style={{ backgroundColor: p.color }}
                        className={({ isActive }) =>
                        `nav-link texto-m ${isActive ? 'nav-link--activo' : ''}`
                        }
                    >
                        {({ isActive }) => (
                        <>
                            {isActive && props.imagenNav ? (
                            <div
                                className="imagenNav"
                                style={{ maskImage: `url(${props.imagenNav})` }}
                            />
                            ) : null}
                            {p.nombre}
                        </>
                        )}
                    </NavLink>
                ))}
            </div>
            
        </nav>
    )
}

export default Nav