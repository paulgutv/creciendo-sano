import { useState, useEffect } from 'react';
import './CalculadoraNutricional.css';
import Hero from '../../components/Hero';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Tarjeta from '../../components/Tarjeta';
import Boton from '../../components/Boton';
import imagen from './assets/hero.png';
import imagenNav from './assets/icono-nav.png';

const BASE_URL = 'https://tablasperuanas.ins.gob.pe';

export default function CalculadoraNutricional(props) {
  const [busqueda, setBusqueda] = useState('');
  const [listaAlimentos, setListaAlimentos] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);

  // Cargar el catálogo de alimentos del INS 
  useEffect(() => {
    const cargarCatalogo = async () => {
      try {
        const res = await fetch(`${BASE_URL}/wsdl/tpca/alimentos.json`);
        const data = await res.json();
        setListaAlimentos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error al precargar alimentos del INS:', err);
      }
    };

    cargarCatalogo();
  }, []);

  const normalizarTexto = (str = '') => {
    return str
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  // Función para evitar la duplicación de unidades
  const formatearValor = (valor, unidad) => {
    if (valor === undefined || valor === null || valor === '') return '-';
    // Remueve letras y espacios si la API ya trae la unidad
    const valorLimpio = String(valor).replace(/[^0-9.,]/g, '').trim();
    return valorLimpio ? `${valorLimpio} ${unidad}` : '-';
  };


  // buscar los campos del API del INS
  const transformarDetalleAlimento = (item) => {
    return {
      nombre: item.nombre || item.alimento || busqueda,
      macro: [
        { label: 'Energía', val: formatearValor(item.energia_kcal ?? item.energia, 'kcal') },
        { label: 'Proteínas', val: formatearValor(item.proteinas_g ?? item.proteinas, 'g') },
        { label: 'Grasa total', val: formatearValor(item.grasa_total_g ?? item.lipidos, 'g') },
        { label: 'Carbohidratos', val: formatearValor(item.carbohidratos_totales_g ?? item.carbohidratos, 'g') },
        { label: 'Fibra dietaria', val: formatearValor(item.fibra_dietaria_g ?? item.fibra, 'g') }
      ],
      minerales: [
        { label: 'Calcio', val: formatearValor(item.calcio_mg ?? item.calcio, 'mg') },
        { label: 'Hierro', val: formatearValor(item.hierro_mg ?? item.hierro, 'mg') },
        { label: 'Fósforo', val: formatearValor(item.fosforo_mg ?? item.fosforo, 'mg') },
        { label: 'Zinc', val: formatearValor(item.zinc_mg ?? item.zinc, 'mg') },
        { label: 'Sodio', val: formatearValor(item.sodio_mg ?? item.sodio, 'mg') }
      ],
      vitaminas: [
        { label: 'Vitamina A', val: formatearValor(item.vitamina_a_ug_er ?? item.vitamina_a, 'µg') },
        { label: 'Tiamina (B1)', val: formatearValor(item.tiamina_mg ?? item.tiamina, 'mg') },
        { label: 'Riboflavina (B2)', val: formatearValor(item.riboflavina_mg ?? item.riboflavina, 'mg') },
        { label: 'Niacina (B3)', val: formatearValor(item.niacina_mg ?? item.niacina, 'mg') },
        { label: 'Vitamina C', val: formatearValor(item.vitamina_c_mg ?? item.vitamina_c, 'mg') }
      ]
    };
  };

  // Manejar la búsqueda
  const handleBuscar = async (e) => {
    e.preventDefault();
    if (!busqueda.trim()) return;

    setCargando(true);
    setError(false);
    setResultado(null);

    const query = normalizarTexto(busqueda);

    // Buscar coincidencia 
    const coincidencia = listaAlimentos.find((item) => {
      const nombreItem = item.nombre || item.alimento || item.titulo || '';
      return normalizarTexto(nombreItem).includes(query);
    });

    if (!coincidencia) {
      setError(true);
      setCargando(false);
      return;
    }

    try {
      const id = coincidencia.id || coincidencia.nid;
      const res = await fetch(`${BASE_URL}/wsdl/tpca/alimento/${id}/data.json/?_format=json`);
      const data = await res.json();
      
      const detalle = Array.isArray(data) ? data[0] : data;
      setResultado(transformarDetalleAlimento(detalle));
    } catch (err) {
      console.error('Error al consultar el detalle en el INS:', err);
      setError(true);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <Hero
        titulo="Descubre qué hay en cada alimento"
        descripcion="Busca un alimento y conoce su valor nutricional"
        alt="alt"
        imagen={imagen}
        paginaActiva={props.paginaActiva}
      />
      <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav} />

      <div className="contenedor">
        <Tarjeta paginaActiva={props.paginaActiva} titulo="BUSCADOR DE ALIMENTOS">
          <form onSubmit={handleBuscar} className="search-form">
            <label className="input-label texto-s">Escribe el alimento a examinar:</label>
            <input
              type="text"
              className="search-input texto-m"
              placeholder="Ej. zanahoria, manzana, huevo, pollo, palta..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <Boton 
              paginaActiva={props.paginaActiva} 
              texto={cargando ? 'Consultando INS...' : 'Calcular valor nutricional'} 
              type="submit" 
              disabled={cargando}
            />
          </form>

          {error && (
            <p className="error-msg texto-s">
              Alimento no encontrado en la base de datos del INS. Prueba con otro término.
            </p>
          )}

          {resultado && !cargando && (
            <div className="results-container">
              <h2 className="food-title">{resultado.nombre}</h2>

              <div className="nutritional-grid">
                <div className="nutrition-col">
                  <h3>Energía y macronutrientes</h3>
                  <ul>
                    {resultado.macro.map((item, idx) => (
                      <li key={idx} className="texto-s">
                        <strong>{item.label}:</strong> {item.val}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="nutrition-col">
                  <h3>Minerales</h3>
                  <ul>
                    {resultado.minerales.map((item, idx) => (
                      <li key={idx} className="texto-s">
                        <strong>{item.label}:</strong> {item.val}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="nutrition-col">
                  <h3>Vitaminas</h3>
                  <ul>
                    {resultado.vitaminas.map((item, idx) => (
                      <li key={idx} className="texto-s">
                        <strong>{item.label}:</strong> {item.val}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {!resultado && !error && !cargando && (
            <p className="info-text texto-s">
              Muchos padres no revisan la información nutricional porque no está a la mano.
              Saber qué aporta cada alimento, como el hierro de una espinaca o el calcio de un yogur,
              te ayuda a decidir mejor qué ponerle a tu hijo en el plato.
            </p>
          )}
        </Tarjeta>
      </div>

      <Footer paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} />
    </>
  );
}