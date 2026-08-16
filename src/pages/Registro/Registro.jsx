import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Tarjeta from "../../components/Tarjeta"
import Boton from "../../components/Boton"
import imagen from "../Login/assets/imagen-central.jpg"
import { registrarUsuario } from "../../services/authService"
import "./Registro.css"

function Registro() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (evento) => {
    evento.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    setCargando(true)

    try {
      await registrarUsuario(email, password)
      navigate("/")
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Este correo electrónico ya está registrado")
      } else if (err.code === "auth/invalid-email") {
        setError("El formato del correo no es válido")
      } else if (err.code === "auth/weak-password") {
        setError("La contraseña es muy débil")
      } else {
        setError("Ocurrió un error al crear la cuenta. Intenta de nuevo.")
      }
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="contenedor">
      <div className="registro-contenedor">
        <img src={imagen} alt="Registro Nutrición" />
        <Tarjeta titulo="CREAR CUENTA">
          <div className="formulario-contenedor">
            <div className="bienvenida">
              <h1>¡Únete a nosotros!</h1>
              <h3>Crea tu cuenta para empezar</h3>
            </div>

            <form onSubmit={handleSubmit} className="formulario-registro">
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
                  placeholder="Mínimo 6 caracteres"
                  className="input-login texto-m"
                />
              </div>

              <div className="campo">
                <label className="label texto-m">Confirmar contraseña:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(evento) => setConfirmPassword(evento.target.value)}
                  required
                  placeholder="Repite tu contraseña"
                  className="input-login texto-m"
                />
              </div>

              <div className="acciones-registro">
                <Boton
                  texto={cargando ? "Creando cuenta..." : "Registrarme"}
                  type="submit"
                />

                <p className="texto-s enlace-login-texto">
                  ¿Ya tienes una cuenta?{" "}
                  <Link to="/login" className="enlace-auth">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </Tarjeta>
      </div>
    </div>
  )
}

export default Registro