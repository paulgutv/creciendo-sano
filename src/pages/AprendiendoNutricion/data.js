import imagenConsejo1 from './assets/1.png'
import imagenConsejo2 from './assets/2.png'
import imagenConsejo3 from './assets/3.png'
import imagenConsejo4 from './assets/4.png'
import imagenConsejo5 from './assets/5.png'
import imagenConsejo6 from './assets/6.png'
import imagenConsejo7 from './assets/7.png'
import imagenConsejo8 from './assets/8.png'
import imagenConsejo9 from './assets/9.png'
import imagenConsejo10 from './assets/10.png'
import imagenConsejo11 from './assets/11.png'
import imagenConsejo12 from './assets/12.png'
import imagenConsejo13 from './assets/13.png'
import imagenConsejo14 from './assets/14.png'
import imagenConsejo15 from './assets/15.png'
import imagenConsejo16 from './assets/16.png'
import imagenConsejo17 from './assets/17.png'
import imagenConsejo18 from './assets/18.png'
import imagenConsejo19 from './assets/19.png'
import imagenConsejo20 from './assets/20.png'
import imagenConsejo21 from './assets/21.png'
import imagenConsejo22 from './assets/22.png'
import imagenConsejo23 from './assets/23.png'
import imagenConsejo24 from './assets/24.png'
import imagenConsejo25 from './assets/25.png'
import imagenConsejo26 from './assets/26.png'
import imagenConsejo27 from './assets/27.png'
import imagenConsejo28 from './assets/28.png'
import imagenConsejo29 from './assets/29.png'
import imagenConsejo30 from './assets/30.png'
import imagenConsejo31 from './assets/31.png'
import imagenConsejo32 from './assets/32.png'
import imagenConsejo33 from './assets/33.png'
import imagenConsejo34 from './assets/34.png'
import imagenConsejo35 from './assets/35.png'
import imagenConsejo36 from './assets/36.png'
import imagenConsejo37 from './assets/37.png'
import imagenConsejo38 from './assets/nino-comiendo.png'
import imagenConsejo39 from './assets/nino-plato-grande.png'
import imagenConsejo40 from './assets/nino-vegetales.png'

// Nombres para mostrar en los botones de filtros pe
export const categorias = [
    { key: 'todas', label: 'Todas' },
    { key: 'selectividad', label: 'Selectividad' },
    { key: 'proteina', label: 'Proteína y Crecimiento' },
    { key: 'menestras', label: 'Menestras' },
    { key: 'frutas_verduras', label: 'Frutas y Verduras' },
    { key: 'azucar_sal', label: 'Azúcar y Sal' },
    { key: 'estilo_vida', label: 'Estilo de Vida' },
    { key: 'mitos', label: 'Mitos Comunes' },
    { key: 'complementos', label: 'Tips y Complementos' },
    { key: 'edad', label: 'Según la Edad' },
    { key: 'procesados', label: 'Ultraprocesados' },
    { key: 'porciones', label: 'Porciones del Plato' }
]

export const consejosNutricion = [
    // ===== SELECTIVIDAD =====
    {
        id: 1,
        categoria: 'selectividad',
        titulo: '¿No quiere comer las menestras?',
        texto: 'Es más común de lo que crees y no significa que estés haciendo algo mal. Prueba mezclarlas con algo que ya come, como el arroz. Si las rechaza al inicio, no te preocupes: a veces toma varios intentos antes de que un niño acepte un sabor nuevo. Sigue ofreciéndolas sin forzarlo. Un poco de limón o tomate en el plato también ayuda a aprovechar mejor su hierro.',
        imagen: imagenConsejo1,
        alt: 'Niño comiendo un plato de menestras'
    },
    {
        id: 2,
        categoria: 'selectividad',
        titulo: '¿No quiere comer verduras?',
        texto: 'Puedes comenzar con porciones pequeñas y acompañarlas con un alimento que ya le guste. Cambiar la forma de presentarlas también ayuda: cocidas, picadas o mezcladas en una preparación familiar. No es necesario obligarlo a terminar; lo importante es seguir ofreciendo variedad con paciencia para que se acostumbre poco a poco.',
        imagen: imagenConsejo2,
        alt: 'Niño probando alimentos durante una comida'
    },
    {
        id: 3,
        categoria: 'selectividad',
        titulo: '¿Sientes que está comiendo muy poco?',
        texto: 'El apetito de los niños puede variar de un día a otro. Sirve una porción pequeña y permite que pida un poco más si todavía tiene hambre. Mantener horarios de comida y evitar picar constantemente puede ayudar a que llegue con apetito. Observa su alimentación a lo largo de varios días y no solo en una comida.',
        imagen: imagenConsejo3,
        alt: 'Niño sentado frente a su plato de comida'
    },
    {
        id: 4,
        categoria: 'selectividad',
        titulo: '¿Solo quiere comer lo mismo?',
        texto: 'Es normal que algunos niños tengan alimentos favoritos. Una opción sencilla es colocar en el plato algo que ya acepta junto con una pequeña porción de un alimento diferente. Deja que lo conozca, lo toque y lo pruebe a su ritmo. La exposición repetida y sin presión puede hacer que poco a poco acepte nuevos sabores.',
        imagen: imagenConsejo4,
        alt: 'Niño aprendiendo a probar alimentos nuevos'
    },

    // ===== PROTEÍNA Y CRECIMIENTO =====
    {
        id: 5,
        categoria: 'proteina',
        titulo: '¿Por qué la proteína es tan importante?',
        texto: 'Según el MINSA, los alimentos de origen animal como carnes, vísceras, sangrecita, pescado, huevos y lácteos ayudan a la formación, crecimiento y mantenimiento del cuerpo, sobre todo en niños. Hasta los 6 años es una etapa clave para el desarrollo del sistema nervioso, así que procura incluir una fuente de proteína en el almuerzo diario.',
        imagen: imagenConsejo5,
        alt: 'Plato con carne, huevo y arroz'
    },
    {
        id: 6,
        categoria: 'proteina',
        titulo: '¿Cuánta carne necesita mi hijo?',
        texto: 'El MINSA recomienda consumir carnes rojas, vísceras o sangrecita al menos tres veces por semana, pescado al menos dos veces, y carne de aves (pollo, pavo, pavita) dos veces por semana. A medida que el niño crece y aumenta su actividad física, su requerimiento de proteína también sube.',
        imagen: imagenConsejo6,
        alt: 'Calendario semanal de comidas con proteína'
    },
    {
        id: 7,
        categoria: 'proteina',
        titulo: '¿Qué pescado le doy si es más chico?',
        texto: 'Si tu hijo es pequeño o sensible, prefiere pescados blancos como el lenguado o la cojinova en lugar de pescados oscuros como el bonito; suelen ser mejor tolerados. El pescado, gracias a su aporte de omega-3, es recomendable integrarlo a la dieta familiar dos veces o más a la semana.',
        imagen: imagenConsejo7,
        alt: 'Filete de pescado blanco en un plato'
    },
    {
        id: 8,
        categoria: 'proteina',
        titulo: '¿Con qué frecuencia darle hígado?',
        texto: 'El hígado es una excelente fuente de hierro, pero conviene consumirlo con moderación, no más de una vez por semana. Antes de cocinar, retira la grasa visible de las carnes rojas y el pellejo de las aves para preparaciones más ligeras.',
        imagen: imagenConsejo8,
        alt: 'Plato de hígado a la jardinera'
    },
    {
        id: 9,
        categoria: 'proteina',
        titulo: '¿Frituras sí o no?',
        texto: 'Consume menos frituras y prefiere preparaciones guisadas, a la plancha, al horno o al vapor. El exceso de grasa en las comidas puede resultar pesado para la digestión de un niño pequeño.',
        imagen: imagenConsejo9,
        alt: 'Comparación entre comida frita y comida al horno'
    },

    // ===== MENESTRAS =====
    {
        id: 10,
        categoria: 'menestras',
        titulo: '¿Cuántas veces a la semana debo dar menestras?',
        texto: 'El MINSA recomienda que las menestras no falten en la dieta familiar; son sabrosas, muy saludables y se pueden preparar de muchas formas. Su consumo resulta recomendable en todos los grupos de edad, especialmente en niños en etapa de crecimiento.',
        imagen: imagenConsejo10,
        alt: 'Variedad de menestras: lentejas, frejoles, pallares'
    },
    {
        id: 11,
        categoria: 'menestras',
        titulo: '¿Cómo aprovechar mejor el hierro de las menestras?',
        texto: 'Acompaña tu preparación de menestras con un cereal, como arroz o quinua, y sírvela con pequeñas porciones de alimento de origen animal, como carne, pollo, pescado o huevo. Acompaña el consumo de menestras con frutas o jugos naturales ricos en vitamina C, como la limonada, para absorber mejor el hierro.',
        imagen: imagenConsejo11,
        alt: 'Lentejas con arroz acompañadas de limón'
    },

    // ===== FRUTAS Y VERDURAS =====
    {
        id: 12,
        categoria: 'frutas_verduras',
        titulo: '¿Cuántas frutas y verduras necesita al día?',
        texto: 'La OMS recomienda consumir diariamente un mínimo de 400 gramos de frutas y verduras. Una buena forma de lograrlo: medio plato de verduras en el almuerzo, medio plato de verduras en la cena, y tres frutas durante el día.',
        imagen: imagenConsejo12,
        alt: 'Plato dividido con verduras y frutas de colores'
    },
    {
        id: 13,
        categoria: 'frutas_verduras',
        titulo: '¿Cómo animarlo a comer más verduras?',
        texto: 'Cuando vayas de compras, elige frutas y verduras de distintos colores y, de preferencia, de la estación. Anímate a añadir una fruta en su desayuno, almuerzo y cena, y prueba con él frutas y verduras que usualmente no consumen en casa.',
        imagen: imagenConsejo13,
        alt: 'Niño ayudando a lavar verduras'
    },

    // ===== AZÚCAR Y SAL =====
    {
        id: 14,
        categoria: 'azucar_sal',
        titulo: '¿Cuánta azúcar es demasiada?',
        texto: 'Según la OMS, el consumo de azúcares debería reducirse a menos del 10% del total de energía diaria, lo que equivale a unas 10 cucharaditas al día. Reemplaza las gaseosas y jugos envasados por agua o jugos naturales sin azúcar, y prefiere frutas al natural en vez de postres envasados.',
        imagen: imagenConsejo14,
        alt: 'Vaso de agua junto a frutas frescas'
    },
    {
        id: 15,
        categoria: 'azucar_sal',
        titulo: '¿Cómo cuidar el consumo de sal en casa?',
        texto: 'Sazona las preparaciones con ingredientes naturales como orégano, ajíes o ajo, en lugar de sazonadores comerciales con mucho sodio. Evita agregar más sal a las comidas ya servidas y prefiere alimentos frescos en vez de sopas instantáneas o embutidos.',
        imagen: imagenConsejo15,
        alt: 'Hierbas y especias naturales para cocinar'
    },

    // ===== ESTILO DE VIDA =====
    {
        id: 16,
        categoria: 'estilo_vida',
        titulo: '¿Cuánta agua debe tomar al día?',
        texto: 'Se recomienda un consumo diario de 2 a 2.5 litros de agua, aproximadamente de 6 a 8 vasos, que puede provenir de agua pura, infusiones o jugos naturales sin azúcar. No esperes a que tenga sed para ofrecerle agua.',
        imagen: imagenConsejo16,
        alt: 'Niño tomando agua de una botella'
    },
    {
        id: 17,
        categoria: 'estilo_vida',
        titulo: '¿Comer en familia realmente ayuda?',
        texto: 'Está demostrado que compartir las comidas familiares disminuye la probabilidad de padecer sobrepeso y favorece el consumo de alimentos saludables. Evita comer frente al televisor o celular, y promueve que los niños participen en la planificación y preparación de las comidas: cocinar es una habilidad que todo niño debería aprender.',
        imagen: imagenConsejo17,
        alt: 'Familia comiendo junta en la mesa'
    },
    {
        id: 39,
        categoria: 'estilo_vida',
        titulo: '¿Cuánta actividad física necesita al día?',
        texto: 'La OMS recomienda mantener niveles adecuados de actividad física en todas las etapas de vida, con al menos 30 minutos diarios. No hace falta ir a un lugar especial: caminar, jugar en el parque, bailar o andar en bicicleta con la familia también cuenta.',
        imagen: imagenConsejo39,
        alt: 'Niño jugando activamente al aire libre con su familia'
    },

    // ===== MITOS COMUNES =====
    {
        id: 18,
        categoria: 'mitos',
        titulo: '¿Un niño "gordito" está bien nutrido?',
        texto: 'No necesariamente. El MINSA explica que en el Perú coexisten dos problemas: la desnutrición y anemia, y también el sobrepeso y la obesidad por alimentos de alto contenido energético pero bajo valor nutricional. Un niño puede tener sobrepeso y aun así estar mal nutrido si su dieta no incluye suficientes proteínas, hierro y otros nutrientes esenciales.',
        imagen: imagenConsejo18,
        alt: 'Balanza y plato de comida balanceado'
    },
    {
        id: 19,
        categoria: 'mitos',
        titulo: '¿El caldo de pollo sin pollo alimenta igual?',
        texto: 'El caldo aporta líquido y algo de sabor, pero la mayor parte del valor nutricional (proteína, hierro, zinc) está en la carne del pollo, no en el caldo. Si el niño solo toma el caldo y deja la presa, no está recibiendo el aporte proteico que su cuerpo necesita para crecer.',
        imagen: imagenConsejo19,
        alt: 'Plato de sopa con presa de pollo'
    },
    {
        id: 20,
        categoria: 'mitos',
        titulo: '¿Comer grasas siempre está bien?',
        texto: 'No toda grasa es igual. El MINSA recomienda consumir menos frituras y preferir preparaciones guisadas, a la plancha, al horno o al vapor. Las grasas saturadas y trans, presentes en frituras y alimentos ultraprocesados, aumentan el riesgo de enfermedades cardiovasculares incluso desde la infancia.',
        imagen: imagenConsejo20,
        alt: 'Comparación entre preparación frita y al horno'
    },
    {
        id: 21,
        categoria: 'mitos',
        titulo: '¿Las verduras no importan tanto?',
        texto: 'Al contrario: la OMS recomienda un mínimo de 400 gramos de frutas y verduras al día, y el MINSA sugiere que medio plato del almuerzo y la cena sea de verduras. Contribuyen a prevenir el sobrepeso y reducen el riesgo de enfermedades cardiovasculares, hipertensión y diabetes, además de aportar vitaminas y minerales que otros grupos de alimentos no cubren.',
        imagen: imagenConsejo21,
        alt: 'Plato con la mitad de verduras variadas'
    },
    {
        id: 22,
        categoria: 'mitos',
        titulo: '¿La anemia solo le da a familias de bajos recursos?',
        texto: 'La anemia por deficiencia de hierro es el principal problema de salud pública infantil en el país, y puede afectar a niños de cualquier nivel socioeconómico si su dieta no incluye suficiente hierro. La sangrecita, el hígado y otras vísceras son fuentes accesibles y económicas de hierro que ayudan a prevenirla, sin importar el presupuesto familiar.',
        imagen: imagenConsejo22,
        alt: 'Alimentos ricos en hierro: sangrecita, hígado, menestras'
    },
    {
        id: 23,
        categoria: 'mitos',
        titulo: '¿El sobrepeso en la niñez no es grave?',
        texto: 'El consumo excesivo de azúcares, alimentos ultraprocesados y porciones grandes contribuye al sobrepeso desde edades tempranas, incrementando el riesgo de diabetes, hipertensión y enfermedades cardiovasculares en el futuro. Cuidar la alimentación desde la niñez es una forma de prevenir estos problemas antes de que aparezcan.',
        imagen: imagenConsejo23,
        alt: 'Niño jugando activamente al aire libre'
    },

    // ===== TIPS PARA COMPLEMENTAR LA ALIMENTACIÓN =====
    {
        id: 24,
        categoria: 'complementos',
        titulo: '¿Cómo mejorar un plato con pocos recursos?',
        texto: 'Si el presupuesto está ajustado, el huevo es una excelente opción: aporta proteína de alto valor biológico a bajo costo. El MINSA señala que se puede consumir un huevo al día, de preferencia sancochado. Agregar 1 o 2 huevos a un plato de menestras o arroz ya mejora bastante su aporte proteico.',
        imagen: imagenConsejo24,
        alt: 'Huevos sancochados junto a un plato de arroz'
    },
    {
        id: 25,
        categoria: 'complementos',
        titulo: '¿Cómo aprovechar mejor el hierro de las menestras?',
        texto: 'El hierro de origen vegetal (como el de las lentejas o pallares) se absorbe mejor si se acompaña con vitamina C. Un vaso de jugo de naranja, limonada o una fruta cítrica junto al plato ayuda a que el cuerpo aproveche mucho más ese hierro.',
        imagen: imagenConsejo25,
        alt: 'Vaso de jugo de naranja junto a un plato de menestras'
    },
    {
        id: 26,
        categoria: 'complementos',
        titulo: '¿Qué agregar si no alcanza para carne todos los días?',
        texto: 'La sangrecita y el hígado son de las fuentes de hierro más económicas y potentes que existen, más accesibles que un bistec o pechuga de pollo. Incluir uno de estos una vez por semana es una forma eficiente de cubrir el hierro sin gastar de más en el resto de la semana.',
        imagen: imagenConsejo26,
        alt: 'Plato de sangrecita con arroz'
    },
    {
        id: 27,
        categoria: 'complementos',
        titulo: '¿Cómo completar un plato de solo verduras o tubérculos?',
        texto: 'Un plato de yuca, camote o solo verduras es una buena base de energía, pero le falta proteína. Complétalo con 2 huevos pequeños o una porción chica de pollo desmenuzado — así el almuerzo queda más completo sin necesitar un plato aparte.',
        imagen: imagenConsejo27,
        alt: 'Plato de verduras con huevo agregado'
    },
    {
        id: 28,
        categoria: 'complementos',
        titulo: '¿Cómo reemplazar el pescado si no hay o es caro?',
        texto: 'Cuando el pescado sube de precio o no es fácil de conseguir, la palta, el aceite de oliva o la linaza molida son buenas fuentes alternativas de omega 3. El huevo y las carnes rojas también aportan una buena proteína como alternativa cuando el pescado no está disponible.',
        imagen: imagenConsejo28,
        alt: 'Palta y aceite de oliva como alternativa al pescado'
    },
    {
        id: 29,
        categoria: 'complementos',
        titulo: '¿Un plato de fideos solos alcanza?',
        texto: 'Los fideos o el arroz solos aportan sobre todo energía, pero poca proteína. Agregar un huevo, un trozo de pollo o incorporar menestras a la preparación ayuda a balancear mejor el plato sin necesitar ingredientes caros.',
        imagen: imagenConsejo29,
        alt: 'Plato de fideos con huevo agregado'
    },
    {
        id: 40,
        categoria: 'complementos',
        titulo: '¿Por qué los lácteos son importantes en el crecimiento?',
        texto: 'Los lácteos son una buena fuente de proteínas y calcio, esenciales para fortalecer huesos y dientes durante el crecimiento. Si el niño evita los lácteos, se puede reforzar el calcio con menestras, brócoli o bebidas vegetales fortificadas.',
        imagen: imagenConsejo40,
        alt: 'Vaso de leche y queso fresco junto a verduras verdes'
    },

    // ===== NECESIDADES SEGÚN LA EDAD =====
    {
        id: 30,
        categoria: 'edad',
        titulo: '¿Por qué los niños no comen "como adultos en pequeño"?',
        texto: 'Los niños están en pleno crecimiento y desarrollo, por lo que sus necesidades de energía, proteína, hierro y otros nutrientes son distintas a las de un adulto en proporción a su peso. Un niño necesita relativamente más nutrientes por kilo de peso que un adulto, porque su cuerpo está construyendo tejidos, huesos y su sistema nervioso al mismo tiempo.',
        imagen: imagenConsejo30,
        alt: 'Comparación de porciones entre un niño y un adulto'
    },
    {
        id: 31,
        categoria: 'edad',
        titulo: '¿Por qué los primeros años son tan importantes?',
        texto: 'Hasta los 6 años es una etapa clave para el desarrollo del sistema nervioso, por lo que una alimentación adecuada en esta etapa tiene un impacto que puede durar toda la vida. Vale la pena hacer un esfuerzo extra en la calidad de la alimentación durante estos primeros años, incluso si el presupuesto es ajustado.',
        imagen: imagenConsejo31,
        alt: 'Niño pequeño comiendo con atención de un adulto'
    },
    {
        id: 32,
        categoria: 'edad',
        titulo: '¿Las porciones deben ser iguales para todas las edades?',
        texto: 'No. Según el INS, un niño de 3 a 5 años necesita alrededor de 1250 kcal al día, uno de 6 a 8 años unas 1400 kcal, y uno de 9 a 11 años hasta 1750 kcal. A medida que el niño crece y aumenta su actividad física, también aumenta su necesidad de energía y de proteína.',
        imagen: imagenConsejo32,
        alt: 'Tabla comparativa de porciones por edad'
    },
    {
        id: 33,
        categoria: 'edad',
        titulo: '¿Cuándo empieza a necesitar más proteína?',
        texto: 'A medida que el niño se acerca a la pubertad, alrededor de los 9 a 11 años, su cuerpo requiere mayor aporte de hierro y proteína para sostener el crecimiento acelerado propio de esa etapa. Es un buen momento para reforzar aún más las porciones de carnes, pescado o menestras bien combinadas.',
        imagen: imagenConsejo33,
        alt: 'Niño mayor comiendo un plato con proteína'
    },
    {
        id: 34,
        categoria: 'edad',
        titulo: '¿Por qué mi hijo pequeño no debe comer todo lo que come un adulto?',
        texto: 'Algunos alimentos, como el hígado o ciertas vísceras, deben darse con moderación por su alto contenido de vitamina A, que en exceso puede no ser adecuado para niños pequeños. Adaptar las porciones y la frecuencia según la edad ayuda a que la alimentación sea segura además de nutritiva.',
        imagen: imagenConsejo34,
        alt: 'Porciones adecuadas de hígado según la edad'
    },

    // ===== ALIMENTOS ULTRAPROCESADOS =====
    {
        id: 35,
        categoria: 'procesados',
        titulo: '¿Qué evitar en la lonchera?',
        texto: 'El MINSA recomienda evitar productos ultraprocesados como embutidos, galletas rellenas y bocaditos dulces o salados envasados en la lonchera. También es mejor no incluir mayonesa ni salsas envasadas, ya que contienen altos niveles de sal y grasas trans. Prefiere opciones caseras como fruta picada, pan con huevo o queso fresco.',
        imagen: imagenConsejo35,
        alt: 'Lonchera saludable con alimentos naturales'
    },
    {
        id: 36,
        categoria: 'procesados',
        titulo: '¿Y las bebidas de la lonchera?',
        texto: 'Al preparar la bebida para la lonchera, considera opciones como agua, refrescos naturales a base de frutas, chicha morada o infusiones, todos bajos en azúcar o sin azúcar, en lugar de jugos envasados o gaseosas.',
        imagen: imagenConsejo36,
        alt: 'Botella de agua y refresco natural para la lonchera'
    },

    // ===== PORCIONES DEL PLATO =====
    {
        id: 37,
        categoria: 'porciones',
        titulo: '¿Cómo debe verse un plato balanceado?',
        texto: 'El MINSA recomienda dividir el plato en: la mitad con verduras, un cuarto con cereales o tubérculos (arroz, papa, camote), y un cuarto con alimentos de origen animal (carne, pollo, pescado o huevo). Visualizarlo así ayuda a servir porciones más equilibradas sin necesidad de pasar los alimentos.',
        imagen: imagenConsejo37,
        alt: 'Plato dividido en secciones de verduras, cereales y proteína'
    },
    {
        id: 38,
        categoria: 'porciones',
        titulo: '¿Arroz, pan y fideos en la misma comida?',
        texto: 'Es mejor evitar juntar arroz, fideos y pan en un mismo plato, ya que el consumo excesivo de estos productos contribuye al sobrepeso. Elige solo uno de estos como acompañamiento principal en el almuerzo o la cena.',
        imagen: imagenConsejo38,
        alt: 'Plato con una sola fuente de carbohidrato'
    }
]