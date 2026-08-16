import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

export async function obtenerColeccion(nombreColeccion) {
    const snapshot = await getDocs(collection(db, nombreColeccion))
    return snapshot.docs.map((documento) => documento.data())
}

export async function obtenerDocumento(nombreColeccion, idDocumento) {
    const referencia = doc(db, nombreColeccion, idDocumento)
    const snapshot = await getDoc(referencia)
    return snapshot.exists() ? snapshot.data() : null
}