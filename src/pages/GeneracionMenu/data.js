export const edades = [3, 4, 5, 6, 7, 8, 9, 10, 11]

export const restriccionesAlimentarias = [
  { id: 'lacteos', label: 'Lácteos' },
  { id: 'gluten', label: 'Gluten' },
  { id: 'huevo', label: 'Huevo' },
  { id: 'frutos secos', label: 'Frutos secos' },
  { id: 'pescado', label: 'Pescado y mariscos' },
];

export const diasSemana = [
  { id: 'lunes', dia: 'LUNES', razon: 'menestras', descripcion: 'Menestras y recarga de energía' },
  { id: 'martes', dia: 'MARTES', razon: 'hierro', descripcion: 'Gran aporte de hierro' },
  { id: 'miercoles', dia: 'MIÉRCOLES', razon: 'calcio', descripcion: 'Proteína para el crecimiento' },
  { id: 'jueves', dia: 'JUEVES', razon: 'fibra', descripcion: 'Nutrición familiar y economía' },
  { id: 'viernes', dia: 'VIERNES', razon: 'omega3', descripcion: 'Omega 3 para el cerebro' },
  { id: 'sabado', dia: 'SÁBADO', razon: 'proteinaMagra', descripcion: 'Proteína balanceada en familia' },
  { id: 'domingo', dia: 'DOMINGO', razon: 'variedad', descripcion: 'Menú de fácil preparación' },
];

export const menus = [
    { id: 1, razon: 'menestras', menu: 'Lentejas con arroz', precio: 15, tag: 'Proteína vegetal + Hierro', consejo: 'Complementa con 2 huevos pequeños o una porción de pollo, y un cítrico para absorber mejor el hierro', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 2, razon: 'menestras', menu: 'Frejoles con seco de pollo', precio: 22, tag: 'Proteína vegetal + Hierro', consejo: 'Sirve el pollo bien deshilachado para que sea más fácil de masticar para el niño', ingredientesSensibles: [], edadRecomendada: [5, 11] },
    { id: 3, razon: 'menestras', menu: 'Pallares con arroz y huevo frito', precio: 16, tag: 'Proteína vegetal + Hierro', consejo: 'Usa 2 huevos pequeños por porción y córtalos en trozos pequeños', ingredientesSensibles: ['huevo'], edadRecomendada: [3, 11] },
    { id: 4, razon: 'hierro', menu: 'Sangrecita con arroz', precio: 14, tag: 'Combate la anemia', consejo: 'Preséntala mezclada con el arroz para disimular el sabor fuerte si el niño es selectivo', ingredientesSensibles: [], edadRecomendada: [6, 11] },
    { id: 5, razon: 'hierro', menu: 'Hígado a la jardinera', precio: 18, tag: 'Combate la anemia', consejo: 'Consúmelo con moderación (no más de una vez por semana) y córtalo en trozos pequeños y suaves', ingredientesSensibles: [], edadRecomendada: [5, 11] },
    { id: 6, razon: 'hierro', menu: 'Bistec de res con arroz', precio: 30, tag: 'Combate la anemia', consejo: 'Corta la carne en trozos pequeños y blandos para facilitar la masticación', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 7, razon: 'calcio', menu: 'Tortilla de huevo con queso y arroz', precio: 16, tag: 'Aporte de Calcio y Vitamina D', consejo: 'Usa 2 huevos pequeños junto con el queso para el calcio', ingredientesSensibles: ['huevo', 'lacteos'], edadRecomendada: [3, 11] },
    { id: 8, razon: 'calcio', menu: 'Sopa de pescado con leche y verduras', precio: 24, tag: 'Aporte de Calcio y Vitamina D', consejo: 'Retira bien las espinas antes de servir y desmenuza el pescado en trozos pequeños', ingredientesSensibles: ['pescado', 'lacteos'], edadRecomendada: [4, 11] },
    { id: 9, razon: 'calcio', menu: 'Arroz con huevo y queso fresco', precio: 15, tag: 'Aporte de Calcio y Vitamina D', consejo: 'Usa 2 huevos pequeños; complementa con una fruta para redondear la comida', ingredientesSensibles: ['huevo', 'lacteos'], edadRecomendada: [3, 11] },
    { id: 10, razon: 'fibra', menu: 'Puré de camote con pollo desmenuzado', precio: 18, tag: 'Fibra y Carbohidratos Complejos', consejo: 'Sirve el pollo bien desmenuzado mezclado con el puré para facilitar la comida', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 11, razon: 'fibra', menu: 'Yuca sancochada con ensalada de verduras', precio: 12, tag: 'Fibra y Carbohidratos Complejos', consejo: 'Complementa con 2 huevos pequeños o ½ filete de pollo para cubrir la proteína del almuerzo', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 12, razon: 'fibra', menu: 'Arroz integral con menestra y verduras salteadas', precio: 14, tag: 'Fibra y Carbohidratos Complejos', consejo: 'Agrega 2 huevos pequeños para reforzar el aporte de proteína', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 13, razon: 'omega3', menu: 'Jurel al horno con arroz', precio: 24, tag: 'Desarrollo cerebral y cardiovascular', consejo: 'Retira bien las espinas y sírvelo en trozos pequeños para evitar riesgos', ingredientesSensibles: ['pescado'], edadRecomendada: [4, 11] },
    { id: 14, razon: 'omega3', menu: 'Caballa guisada con arroz', precio: 24, tag: 'Desarrollo cerebral y cardiovascular', consejo: 'Desmenuza bien el pescado y revisa que no queden espinas', ingredientesSensibles: ['pescado'], edadRecomendada: [4, 11] },
    { id: 15, razon: 'omega3', menu: 'Bonito sudado con arroz', precio: 32, tag: 'Desarrollo cerebral y cardiovascular', consejo: 'Prefiere pescados blancos como lenguado o cojinova si el niño es más pequeño o sensible', ingredientesSensibles: ['pescado'], edadRecomendada: [5, 11] },
    { id: 16, razon: 'proteinaMagra', menu: 'Pollo al horno con ensalada', precio: 20, tag: 'Crecimiento y regeneración muscular', consejo: 'Retira la piel antes de servir y corta el pollo en trozos pequeños', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 17, razon: 'proteinaMagra', menu: 'Pavita saltada con verduras y arroz', precio: 28, tag: 'Crecimiento y regeneración muscular', consejo: 'Corta la pavita en trozos pequeños; es una carne magra y de fácil digestión', ingredientesSensibles: [], edadRecomendada: [4, 11] },
    { id: 18, razon: 'proteinaMagra', menu: 'Pechuga de pollo a la plancha con arroz', precio: 20, tag: 'Crecimiento y regeneración muscular', consejo: 'Córtala en tiras finas para que sea más fácil de comer para el niño', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 19, razon: 'variedad', menu: 'Puré de papa con pollo desmenuzado', precio: 20, tag: 'Fácil preparación en familia', consejo: 'Mezcla bien el pollo desmenuzado con el puré para una textura más fácil de comer', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 20, razon: 'variedad', menu: 'Tallarines con pollo y verduras', precio: 20, tag: 'Fácil preparación en familia', consejo: 'Corta los tallarines y el pollo en trozos pequeños para niños más chicos', ingredientesSensibles: ['gluten'], edadRecomendada: [3, 11] },
    { id: 21, razon: 'variedad', menu: 'Sopa de verduras con fideos y huevo', precio: 12, tag: 'Fácil preparación en familia', consejo: 'Usa 2 huevos pequeños para que la sopa aporte suficiente proteína', ingredientesSensibles: ['gluten', 'huevo'], edadRecomendada: [3, 11] },
    { id: 22, razon: 'omega3', menu: 'Ensalada de palta con huevo', precio: 14, tag: 'Fuente vegetal de Omega 3', consejo: 'Usa 2 huevos pequeños junto con la palta para grasas saludables', ingredientesSensibles: ['huevo'], edadRecomendada: [3, 11] },
    { id: 23, razon: 'proteinaMagra', menu: 'Menudencias de pollo salteadas con arroz', precio: 15, tag: 'Crecimiento y regeneración muscular', consejo: 'Córtalas en trozos pequeños; es una opción económica de proteína de pollo', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 24, razon: 'hierro', menu: 'Picadillo de carne molida con arroz', precio: 16, tag: 'Combate la anemia', consejo: 'La carne molida es más fácil de masticar que un bistec entero para los más pequeños', ingredientesSensibles: [], edadRecomendada: [3, 11] },
]


export const consejos = [
    { id: 1, categoria: 'general', texto: 'Ofrece porciones pequeñas y deja que el niño pida más si aún tiene hambre.' },
    { id: 2, categoria: 'general', texto: 'Introduce alimentos nuevos de a pocos, combinados con otros que ya le gusten.' },
    { id: 3, categoria: 'general', texto: 'Evita distraer con pantallas durante las comidas para que reconozca cuándo está satisfecho.' },
    { id: 4, categoria: 'general', texto: 'Mantén horarios de comida regulares para ayudar a su digestión.' },
    { id: 5, categoria: 'lacteos', texto: 'Si evitas lácteos, refuerza el calcio con menestras, brócoli o bebidas vegetales fortificadas.' },
    { id: 6, categoria: 'lacteos', texto: 'Las bebidas de avena o almendra fortificadas son una buena alternativa a la leche de vaca.' },
    { id: 7, categoria: 'gluten', texto: 'Reemplaza el trigo por arroz, quinua o papa como fuente de carbohidratos.' },
    { id: 8, categoria: 'gluten', texto: 'Revisa etiquetas de salsas y embutidos, ya que muchas contienen trazas de gluten.' },
    { id: 9, categoria: 'huevo', texto: 'Sustituye el huevo por más porciones de menestras o carnes magras para mantener la proteína.' },
    { id: 10, categoria: 'huevo', texto: 'El plátano o la compota de manzana pueden reemplazar al huevo en preparaciones horneadas.' },
    { id: 11, categoria: 'frutos secos', texto: 'Evita también aceites o galletas que puedan contener trazas de frutos secos.' },
    { id: 12, categoria: 'frutos secos', texto: 'Las semillas de girasol o zapallo son una alternativa sin frutos secos para snacks.' },
    { id: 13, categoria: 'pescado', texto: 'Si evitas pescado, obtén omega 3 de la palta, aceite de oliva o linaza molida.' },
    { id: 14, categoria: 'pescado', texto: 'El huevo y las carnes rojas también aportan buena proteína como alternativa al pescado.' },
    { id: 15, categoria: 'general', texto: 'No es necesario dar carne todos los días. Se recomienda incluir menestras 2 a 3 veces por semana, combinadas con un alimento animal rico en hierro para mejorar su absorción.' },
    { id: 16, categoria: 'general', texto: 'A medida que el niño crece y aumenta su actividad física, su requerimiento de proteína también sube. Ajusta las porciones según su edad y nivel de actividad.' },
    { id: 17, categoria: 'pescado', texto: 'Prefiere pescados blancos como el lenguado o la cojinova en niños pequeños; suelen ser mejor tolerados que los pescados oscuros.' },
    { id: 18, categoria: 'general', texto: 'Evita las frituras con frecuencia; prefiere preparaciones al horno, sudadas o a la plancha para una digestión más ligera.' },
]

export const recomendacionesPorEdad = [
    {
        id: 'edad-3-5',
        edadMin: 3,
        edadMax: 5,
        texto: 'Para niños de 3 a 5 años, es la etapa de formar hábitos y probar nuevos sabores. Asegura 2 porciones diarias de origen animal (huevo, pollo, pescado) y sirve los alimentos en trozos seguros.'
    },
    {
        id: 'edad-6-8',
        edadMin: 6,
        edadMax: 8,
        texto: 'Para niños de 6 a 8 años, con mayor actividad escolar y física, se necesita energía sostenida. Prioriza el hierro de la sangrecita, hígado o pescado azul para prevenir la anemia y apoyar su aprendizaje.'
    },
    {
        id: 'edad-9-11',
        edadMin: 9,
        edadMax: 11,
        texto: 'Para niños de 9 a 11 años, próximos al estirón puberal, aumentan las necesidades de energía y proteína. Para un plato balanceado, sirve la mitad con verduras, un cuarto con carne/huevo y un cuarto con arroz/tubérculos.'
    },
];
