import { db } from "./firebase"
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore"

const coleccionOpiniones = collection(db, "opiniones")

// Obtener opiniones ordenadas de la más reciente a la más antigua
export const obtenerOpiniones = async () => {
  const consulta = query(coleccionOpiniones, orderBy("fecha", "desc"))
  const snapshot = await getDocs(consulta)
  return snapshot.docs.map((documento) => ({
    id: documento.id,
    ...documento.data()
  }))
}

// Guardar una nueva opinión
export const guardarOpinion = async (nuevaOpinion) => {
  const docRef = await addDoc(coleccionOpiniones, {
    ...nuevaOpinion,
    fecha: serverTimestamp()
  })
  return { id: docRef.id, ...nuevaOpinion }
}