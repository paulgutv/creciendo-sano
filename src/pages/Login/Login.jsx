import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Tarjeta from "../../components/Tarjeta"
import Boton from "../../components/Boton"
import imagen from '../Login/assets/imagen-central.jpg'
import { iniciarSesion } from "../../services/authService"
import { Link } from "react-router-dom"
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (evento) => {
    evento.preventDefault()
    setError(null)
    setCargando(true)

    try {
      await iniciarSesion(email, password)
      if (email.toLowerCase() == 'admin@creciendosano.dev') {
        navigate('/dashboard')
      } else {
        navigate("/")
      }
    } catch (err) {
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setError("Correo o contraseña incorrectos")
      } else {
        setError("Ocurrió un error al iniciar sesión. Intenta de nuevo.")
      }
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="contenedor">
        <div className="login-contenedor">
            <img src={imagen}/>
            <Tarjeta titulo="INICIAR SESIÓN">
                <div className="formulario-contenedor">
                    <div className="bienvenida">
                        <h1>¡Hola de nuevo!</h1>
                        <h3>Introduce tus credenciales</h3>  
                    </div>
                    <form onSubmit={handleSubmit} className="formulario-login">
                        {error ? <div className="error-login texto-s">{error}</div> : null}
                        <div className="campo">
                            <label className="label texto-m">Correo electrónico:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(evento) => setEmail(evento.target.value)}
                                required
                                placeholder="tucorreo@correo.com"
                                className="input-login texto-m"
                            />
                        </div>
                        <div className="campo">
                            <label className="label texto-m">Contraseña:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(evento) => setPassword(evento.target.value)}
                                required
                                placeholder="******"
                                className="input-login texto-m"
                            />
                        </div>

                        <Boton
                            texto={cargando ? "Iniciando sesión..." : "Ingresar"}
                            type="submit"
                        />
                        <p className="texto-s enlace-registro-texto">
                          ¿No tienes cuenta? <Link to="/registro" className="enlace-auth">Regístrate aquí</Link>
                        </p>
                    </form>
                </div>
            </Tarjeta>
        </div>
    </div>
  )
}

export default Login