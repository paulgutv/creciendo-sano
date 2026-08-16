import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

export function useAuth() {
    const [usuario, setUsuario] = useState(null)
    const [cargandoAuth, setCargandoAuth] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioActual) => {
            setUsuario(usuarioActual)
            setCargandoAuth(false)
        })
        return unsubscribe
    }, [])

    return { usuario, cargandoAuth }
}