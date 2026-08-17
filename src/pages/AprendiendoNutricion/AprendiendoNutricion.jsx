import { useState } from 'react'
import Hero from "../../components/Hero"
import imagen from './assets/hero.png'
import Nav from "../../components/Nav"
import imagenNav from './assets/icono-nav.png'
import Footer from "../../components/Footer"
import ConsejoNutricion from './components/ConsejoNutricion'
import { consejosNutricion, categorias } from './data'
import './AprendiendoNutricion.css'

function AprendiendoNutricion(){
    const [categoriaActiva, setCategoriaActiva] = useState('todas')

    // Filtrado de consejos según la categoría seleccionda
    const consejosFiltrados = categoriaActiva === 'todas'
        ? consejosNutricion
        : consejosNutricion.filter(item => item.categoria === categoriaActiva)

    return (
        <>
        <Hero
            titulo = 'Entiende lo que come tu peque, y por qué importa'
            descripcion = 'Explicaciones simples y sin tecnicismos'
            alt = 'Libro abierto sobre nutrición infantil'
            imagen = {imagen}
        />

        <Nav imagenNav={imagenNav}/>

        <main className="contenedor aprendiendo-contenido">

            {/* Seccción de Filtros x Categoría*/}
            <section className="filtros-categoria">
                {categorias.map((cat) => (
                    <button
                        key={cat.key}
                        className={`btn-filtro ${categoriaActiva === cat.key ? 'activo' : ''}`}
                        onClick={() => setCategoriaActiva(cat.key)}
                    >
                        {cat.label}
                    </button>
                ))}
            </section>

            {/* GridContenido Filtrado */}
            <section className="aprendiendo-grid">
                {consejosFiltrados.map((consejo) => (
                    <ConsejoNutricion
                        key={consejo.id}
                        titulo={consejo.titulo}
                        texto={consejo.texto}
                        imagen={consejo.imagen}
                        alt={consejo.alt}
                    />
                ))}
            </section>
        </main>

        <Footer/>
        </>
    )
}

export default AprendiendoNutricion