import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import GeneracionMenu from "./pages/GeneracionMenu/GeneracionMenu"
import AprendiendoNutricion from "./pages/AprendiendoNutricion/AprendiendoNutricion"
import CalculadoraNutricional from "./pages/CalculadoraNutricional/CalculadoraNutricional"
import SobreProyecto from "./pages/SobreProyecto/SobreProyecto"
import Login from "./pages/Login/Login"
import Registro from "./pages/Registro/Registro"
import RutaAdmin from "./components/RutaAdmin"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <div className="app-contenedor">
        <Routes>
          <Route path="/" element={<GeneracionMenu />} />

          <Route path="/login" element={<Login/>}/>
          <Route path="/aprendiendo-nutricion" element={<AprendiendoNutricion />} />
          <Route path="/calculadora-nutricional" element={<CalculadoraNutricional />} />
          <Route path="/sobre-proyecto" element={<SobreProyecto />} />

          <Route path="/registro" element={<Registro />} />

          <Route path="/dashboard" element={
            <RutaAdmin>
                <Dashboard />
            </RutaAdmin>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App