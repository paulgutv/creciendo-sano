import { useState, useEffect } from "react"
import Boton from "../../../components/Boton"
import Tarjeta from "../../../components/Tarjeta"
//import { edades, restriccionesAlimentarias } from "../data"
import './Perfil.css'
import { obtenerColeccion, obtenerDocumento } from "../../../services/firestoreService"
import { useAuth } from "../../../services/useAuth"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../../services/firebase"

function Perfil(props) {
    const { usuario } = useAuth(null)

    const [edad, setEdad] = useState(null)
    const [presupuesto, setPresupuesto] = useState(150)
    const [evitar, setEvitar] = useState([])
    const [errorEdad, setErrorEdad] = useState(false)

    const [edades, setEdades] = useState([])
    const [restriccionesAlimentarias, setRestriccionesAlimentarias] = useState([])
    const [datosCargados, setDatosCargados] = useState(false)

    useEffect(() => {
        const cargarTodo = async () => {
            const [listaEdades, listaRestriccionesAlimentarias] = await Promise.all([
                obtenerDocumento('configuracion', 'edades'),
                obtenerColeccion('restriccionesAlimentarias'),
            ])

            setEdades(listaEdades.lista)
            setRestriccionesAlimentarias(listaRestriccionesAlimentarias)
            setDatosCargados(true)
        }
        cargarTodo()
    }, [])

    useEffect(() => {
        const cargarPerfilGuardado = async () => {
            if (!usuario) return
            const perfilGuardado = await obtenerDocumento('perfiles', usuario.uid)
            if (perfilGuardado) {
                setEdad(String(perfilGuardado.edad))
                setPresupuesto(perfilGuardado.presupuesto)
                setEvitar(perfilGuardado.evitar || [])
            }
        }
        cargarPerfilGuardado()
    }, [usuario])

    // Actualiza el array de alimentos a evitar
    const actualizarEvitar = (id, estaMarcado) => {
        if (estaMarcado) {
            setEvitar([...evitar, id])
        } else {
            setEvitar(evitar.filter((alimentoEvitado) => alimentoEvitado !== id))
        }
    }

    // Envía los datos del formulario a GeneracionMenu, previene la recarga de la página y lanza una advertencia si no hay edad seleccionada
    const enviarFormulario = async (evento) => {
        evento.preventDefault()

        if (!edad) {
            setErrorEdad(true)
            return
        } else {
            setErrorEdad(false)
        }

        const datos = {
            edad: Number(edad),
            presupuesto: Number(presupuesto),
            evitar,
        }

        if (usuario) {
            await setDoc(doc(db, 'perfiles', usuario.uid), datos)
        }

        props.onGenerarMenu(datos)

    }

    if (!datosCargados) {
        return <p>Cargando...</p>
    }
    
    return(
        <div>
            <Tarjeta
                paginaActiva={props.paginaActiva}
                titulo='PERFIL Y PRESUPUESTO'
            >
                <form className="formulario-menu" onSubmit={enviarFormulario}>
                    {errorEdad ? <div className="error-edad texto-s">Por favor, selecciona la edad</div> : null}                    
                    <label className="texto-m">Edad:</label>
                    <div className="edad-selector">
                        {edades.map((edadOpcion)=>(
                            <label key={edadOpcion} className="edad-opcion">
                                <input
                                    type="radio"
                                    name="edad"
                                    value={edadOpcion}
                                    checked={edad === String(edadOpcion)}
                                    onChange={(evento) => setEdad(evento.target.value)}
                                />
                                <span className="edad-circulo texto-m">{edadOpcion}</span>
                            </label>
                        ))}
                    </div>

                    <label className="texto-m">Presupuesto semanal:</label>
                    <div className="tarjeta-barra">
                        <input
                            type="range"
                            className="slider"
                            min="100"
                            max="200"
                            step='10'
                            value={presupuesto}
                            onChange={(evento)=> setPresupuesto(evento.target.value)}
                        />
                        <h2>S/.{presupuesto}</h2>
                    </div>

                    <label className="texto-m">Evitar / no le gusta:</label>
                    <div className="checks-evitar">
                        {restriccionesAlimentarias.map((restriccion) => (
                            <label key={restriccion.id} className="check-opcion texto-s">
                                <input
                                    className="check-input"
                                    type="checkbox"
                                    checked={evitar.includes(restriccion.id)}
                                    onChange={(evento) => actualizarEvitar(restriccion.id, evento.target.checked)}
                                />
                                {restriccion.label}
                            </label>
                        ))}
                    </div>

                    <Boton
                        paginaActiva={props.paginaActiva}
                        texto='Generar menú semanal'
                        type='submit'
                    />
                </form>
            </Tarjeta>
        </div>
    )
}

export default Perfil