import { useState, useEffect } from "react"
import Hero from "../../components/Hero"
import imagen from './assets/hero.png'
import Nav from "../../components/Nav"
import imagenNav from './assets/icono-nav.png'
import Footer from "../../components/Footer"
import Perfil from "./components/Perfil"
import Menu from "./components/Menu"
import MenuGenerado from "./components/MenuGenerado"
import Info from "./components/Info"
//import { menus, diasSemana } from "./data"
import { obtenerColeccion } from "../../services/firestoreService"
import './GeneracionMenu.css'


function GeneracionMenu(props){
    const [menuFueGenerado, setMenuFueGenerado] = useState(false)
    const [menuSemana, setMenuSemana] = useState([])
    const [datosPerfil, setDatosPerfil] = useState(null)

    const [datosCargados, setDatosCargados] = useState(false)
    const [menus, setMenus] = useState([])
    const [diasSemana, setDiasSemana] = useState([])

    useEffect(() => {
        const cargarTodo = async () => {
            const [listaMenus, listaDias] = await Promise.all([
                obtenerColeccion('menus'),
                obtenerColeccion('diasSemana'),
            ])

            const ordenDias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
            const listaDiasOrdenada = [...listaDias].sort(
                (a, b) => ordenDias.indexOf(a.id) - ordenDias.indexOf(b.id)
            )

            setMenus(listaMenus)
            setDiasSemana(listaDiasOrdenada)
            setDatosCargados(true)
        }
        cargarTodo()
    }, [])

    // Crea un array de opciones de menús para un día que encajan con la razon, la edad recomendada y la ausencia de ingredientes seleccionados
    const generarPlatosValidosDia = (razon, edad, evitar) => {
        return menus.filter((menu) =>
            menu.razon == razon &&
            edad >= menu.edadRecomendada[0] &&
            edad <= menu.edadRecomendada[1] &&
            !menu.ingredientesSensibles.some((ingredienteSensible) => evitar.includes(ingredienteSensible))
        )
    }

    // Función recursiva para encontrar la combinacion mas cara de menú y que no se pase del presupuesto
    const buscarMejorMenuSemanal = (contador, combinacionActual, sumaActual, presupuestoTotal, datos) => {

        if (sumaActual > presupuestoTotal) {
            return null
        }

        if (contador == diasSemana.length) {
            return {
                semana: [...combinacionActual],
                total: sumaActual
            }
        }

        const diaActual = diasSemana[contador]
        const opcionesPlatoDia = generarPlatosValidosDia(diaActual.razon, datos.edad, datos.evitar)

        if (opcionesPlatoDia.length == 0) {
            return null
        }

        const opcionesOrdenadas = [...opcionesPlatoDia].sort((a, b) => b.precio - a.precio)

        let mejorResultado = null

        for (const plato of opcionesOrdenadas) {
            const itemDia = {
                id: diaActual.id,
                dia: diaActual.dia,
                razonDescripcion: diaActual.descripcion,
                razon: diaActual.razon,
                plato: plato
            }

            combinacionActual.push(itemDia)

            const resultado = buscarMejorMenuSemanal(
                contador + 1,
                combinacionActual,
                sumaActual + plato.precio,
                presupuestoTotal,
                datos
            )

            if (resultado) {
                if (!mejorResultado || resultado.total > mejorResultado.total) {
                    mejorResultado = resultado
                }
            }

            combinacionActual.pop()
        }

        return mejorResultado
    }

    // Guadar los datos de perfil del niño y llama a la funcion buscarMejorMenuSemanal. El resultado lo manda a menuSemana y actualiza el menuFueGenerado
    const generarMenuSemanal = (datos) => {
        setDatosPerfil(datos)

        const resultadoOptimo = buscarMejorMenuSemanal(0, [], 0, datos.presupuesto, datos)

        if (resultadoOptimo) {
            setMenuSemana(resultadoOptimo.semana)
            setMenuFueGenerado(true)
        } else {
            setMenuSemana(resultadoOptimo)
            setMenuFueGenerado(true)
        }

        if (!datosCargados) {
            return <p>Cargando...</p>
        }
    }

    // Calcula el presupuesto disponible para el dia
    const calcularPresupuestoDisponibleDia = (indexDia) => {
        let costoTotalOtrosDias = 0
        menuSemana.forEach((diaActual, index) => {
            if (index != indexDia && diaActual.plato) {
                costoTotalOtrosDias += diaActual.plato.precio
            }
        })
        return datosPerfil.presupuesto - costoTotalOtrosDias
    }

    // Crea un nuevo array del menú semanal con otra opción de plato para el día escogido (la más cara) y calculando que no se pase del presupuesto semanal
    const cambiarPlatoDelDia = (indexDia) => {
        const dia = menuSemana[indexDia]
        const opciones = generarPlatosValidosDia(dia.razon, datosPerfil.edad, datosPerfil.evitar)
        const presupuestoDisponible = calcularPresupuestoDisponibleDia(indexDia)

        const opcionesOrdenadasMayorMenor = opciones.sort((a, b) => b.precio - a.precio)

        const opcionesQueCaben = opcionesOrdenadasMayorMenor.filter((plato) => plato.precio <= presupuestoDisponible)

        if (opcionesQueCaben.length === 0) return

        const indexPlatoActual = opcionesQueCaben.findIndex((plato) => plato.id == dia.plato.id)

        const siguienteIndexPlato = (indexPlatoActual + 1) % opcionesQueCaben.length
        const nuevoPlato = opcionesQueCaben[siguienteIndexPlato]

        const nuevoMenuSemana = [...menuSemana]
        nuevoMenuSemana[indexDia].plato = nuevoPlato
        setMenuSemana(nuevoMenuSemana)
    }

    // Devuelve un true o false dependiendo de si hay más opciones de plato disponibles para ese día y sin salirse del presupuesto
    const puedeCambiar = (indexDia) => {
        const dia = menuSemana[indexDia]
        const opciones = generarPlatosValidosDia(dia.razon, datosPerfil.edad, datosPerfil.evitar)
        const presupuestoDisponible = calcularPresupuestoDisponibleDia(indexDia)

        const opcionesQueCaben = opciones.filter((plato) => plato.precio <= presupuestoDisponible)
        return opcionesQueCaben.length > 1
    }

    return(
        <>
            <Hero
                titulo='Arma el almuerzo de tu peque en segundos'
                descripcion='Con consejos prácticos y ajustados a tu presupuesto'
                alt='alt'
                imagen={imagen}
                paginaActiva={props.paginaActiva}
            />
            <Nav
                paginaActiva={props.paginaActiva}
                onCambiarPagina={props.onCambiarPagina}
                imagenNav={imagenNav}
            />
            <div className="contenedor contenedor-secciones">
                <div className="contenedor-secciones-izquierda">
                    <section className="contenedor-perfil">
                        <Perfil
                            paginaActiva={props.paginaActiva}
                            onGenerarMenu={generarMenuSemanal}
                        />
                    </section>
                    {menuFueGenerado && (
                        <section className="contenedor-info">
                            <Info
                                paginaActiva={props.paginaActiva}
                                evitar={datosPerfil.evitar}
                                edad={datosPerfil.edad}
                            />
                        </section>
                    )}
                </div>
                <section className="contenedor-menu">
                    {menuFueGenerado
                        ? <MenuGenerado
                            paginaActiva={props.paginaActiva}
                            menuSemana={menuSemana}
                            onCambiarPlato={cambiarPlatoDelDia}
                            presupuesto={datosPerfil.presupuesto}
                            puedeCambiar={puedeCambiar}
                        />
                        : <Menu
                            paginaActiva={props.paginaActiva}
                        />
                    }
                </section>               
            </div>
            <Footer
                paginaActiva={props.paginaActiva}
                onCambiarPagina={props.onCambiarPagina}
            />
        </>
    )
}

export default GeneracionMenu