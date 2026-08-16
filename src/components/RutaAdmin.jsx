import { Navigate } from "react-router-dom"
import { useAuth } from "../services/useAuth"

const CORREO_ADMIN = "admin@creciendosano.dev"

function RutaAdmin(props) {
    const { usuario, cargandoAuth } = useAuth()

    if (cargandoAuth) return <p>Verificando acceso...</p>

    if (!usuario || usuario.email != CORREO_ADMIN) {
        return <Navigate to="/" replace />
    }

    return props.children
}

export default RutaAdmin