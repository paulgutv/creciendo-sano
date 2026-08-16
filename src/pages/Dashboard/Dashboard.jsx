import { useState, useEffect } from "react"
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import "./Dashboard.css"
import Boton from "../../components/Boton"

function Dashboard() {
    const [platos, setPlatos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [editandoId, setEditandoId] = useState(null)

    const [form, setForm] = useState({
        razon: '', menu: '', precio: '', tag: '', consejo: '',
        ingredientesSensibles: '', edadMin: '', edadMax: ''
    })

    const cargarPlatos = async () => {
        const snapshot = await getDocs(collection(db, 'menus'))
        const lista = snapshot.docs.map((d) => ({ firestoreId: d.id, ...d.data() }))
        setPlatos(lista)
        setCargando(false)
    }

    useEffect(() => { cargarPlatos() }, [])

    const limpiarForm = () => {
        setForm({ razon: '', menu: '', precio: '', tag: '', consejo: '', ingredientesSensibles: '', edadMin: '', edadMax: '' })
        setEditandoId(null)
    }

    const guardarPlato = async (e) => {
        e.preventDefault()

        const datosPlato = {
            razon: form.razon,
            menu: form.menu,
            precio: Number(form.precio),
            tag: form.tag,
            consejo: form.consejo,
            ingredientesSensibles: form.ingredientesSensibles.split(',').map(s => s.trim()).filter(Boolean),
            edadRecomendada: [Number(form.edadMin), Number(form.edadMax)],
        }

        if (editandoId) {
            await updateDoc(doc(db, 'menus', editandoId), datosPlato)
        } else {
            await addDoc(collection(db, 'menus'), datosPlato)
        }

        limpiarForm()
        cargarPlatos()
    }

    const editarPlato = (plato) => {
        setForm({
            razon: plato.razon,
            menu: plato.menu,
            precio: plato.precio,
            tag: plato.tag,
            consejo: plato.consejo,
            ingredientesSensibles: plato.ingredientesSensibles.join(', '),
            edadMin: plato.edadRecomendada[0],
            edadMax: plato.edadRecomendada[1],
        })
        setEditandoId(plato.firestoreId)
    }

    const borrarPlato = async (firestoreId) => {
        if (!confirm('¿Seguro que quieres borrar este plato?')) return
        await deleteDoc(doc(db, 'menus', firestoreId))
        cargarPlatos()
    }

    if (cargando) return <p>Cargando platos...</p>

    return (
        <div className="contenedor dashboard">
            <h1>Panel de administración — Platos</h1>
            <div className="dashboard-contenedor">
                <table className="dashboard-tabla">
                    <thead>
                        <tr>
                            <th>Plato</th><th>Razón</th><th>Precio</th><th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {platos.map((plato) => (
                            <tr key={plato.firestoreId}>
                                <td>{plato.menu}</td>
                                <td>{plato.razon}</td>
                                <td>S/{plato.precio}</td>
                                <td>
                                    <button onClick={() => editarPlato(plato)}>Editar</button>
                                    <button onClick={() => borrarPlato(plato.firestoreId)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <form onSubmit={guardarPlato} className="dashboard-form">
                    <label className="texto-m">Razon:</label>
                    <input placeholder="Razón" value={form.razon} onChange={(e) => setForm({...form, razon: e.target.value})} required />
                    <label className="texto-m">Nombre del plato:</label>
                    <input placeholder="Nombre del plato" value={form.menu} onChange={(e) => setForm({...form, menu: e.target.value})} required />
                    <label className="texto-m">Precio:</label>
                    <input type="number" placeholder="Precio" value={form.precio} onChange={(e) => setForm({...form, precio: e.target.value})} required />
                    <label className="texto-m">Tag:</label>
                    <input placeholder="Tag" value={form.tag} onChange={(e) => setForm({...form, tag: e.target.value})} required />
                    <label className="texto-m">Consejo:</label>
                    <textarea placeholder="Consejo" value={form.consejo} onChange={(e) => setForm({...form, consejo: e.target.value})} required />
                    <label className="texto-m">Ingredientes sensibles:</label>
                    <input placeholder="Ingredientes sensibles (separados por coma)" value={form.ingredientesSensibles} onChange={(e) => setForm({...form, ingredientesSensibles: e.target.value})} />
                    <label className="texto-m">Edad mínima:</label>
                    <input type="number" placeholder="Edad mínima" value={form.edadMin} onChange={(e) => setForm({...form, edadMin: e.target.value})} required />
                    <label className="texto-m">Edad máxima:</label>
                    <input type="number" placeholder="Edad máxima" value={form.edadMax} onChange={(e) => setForm({...form, edadMax: e.target.value})} required />

                    <Boton type="submit">{editandoId ? 'Guardar cambios' : 'Agregar plato'}</Boton>
                    {editandoId && <button type="button" onClick={limpiarForm}>Cancelar edición</button>}
                </form>
            </div>

        </div>
    )
}

export default Dashboard