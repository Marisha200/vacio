import { useState } from 'react';

function ExploradorDelVacio() {
  const [seccionSeleccionada, setSeccionSeleccionada] = useState('intro');
  const [mostrarDetalles, setMostrarDetalles] = useState({});
  
  const toggleDetalles = (id) => {
    setMostrarDetalles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const secciones = {
    intro: {
      titulo: "El Concepto del Vacío",
      contenido: "El vacío ha fascinado a la humanidad desde tiempos inmemoriales. Filosóficamente inquietante, espiritualmente profundo y científicamente enigmático, el concepto de 'nada' ha sido explorado por múltiples culturas y disciplinas.",
      imagen: "filosofia",
      color: "bg-indigo-100"
    },
    oriental: {
      titulo: "Tradiciones Orientales",
      contenido: "Las tradiciones orientales han profundizado en el concepto del vacío como un aspecto fundamental de la realidad.",
      imagen: "oriental",
      color: "bg-amber-100",
      subsecciones: [
        {
          id: "budismo",
          titulo: "Budismo: Śūnyatā",
          contenido: "La vacuidad (śūnyatā) no es nihilismo sino la ausencia de existencia inherente e independiente. 'La forma es vacío, el vacío es forma'."
        },
        {
          id: "taoismo",
          titulo: "Taoísmo: Wu (无)",
          contenido: "El wu o 'no-ser' es potencialidad pura. El vacío no es ausencia sino el origen de todas las cosas manifestadas."
        },
        {
          id: "hinduismo",
          titulo: "Hinduismo: Śūnya y Ākāśa",
          contenido: "El hinduismo desarrolló conceptos como Śūnya (vacío) y Ākāśa (éter o espacio), uno de los cinco elementos fundamentales."
        }
      ]
    },
    occidental: {
      titulo: "Tradición Occidental",
      contenido: "La tradición occidental ha mantenido una relación compleja con el concepto del vacío a lo largo de su historia.",
      imagen: "occidental",
      color: "bg-emerald-100",
      subsecciones: [
        {
          id: "griegos",
          titulo: "Filosofía Griega",
          contenido: "Desde Parménides que negaba su posibilidad hasta los atomistas como Demócrito que lo consideraban necesario para el movimiento."
        },
        {
          id: "medieval",
          titulo: "Medieval y Renacimiento",
          contenido: "El principio 'horror vacui' dominó este período, aunque pensadores como Pascal realizaron experimentos que sugerían la existencia del vacío."
        },
        {
          id: "contemporanea",
          titulo: "Filosofía Contemporánea",
          contenido: "Heidegger exploró la 'nada' como reveladora del ser, mientras Sartre la vio como intrínseca a la consciencia humana."
        }
      ]
    },
    metafisica: {
      titulo: "Perspectiva Metafísica",
      contenido: "La metafísica ha abordado el vacío como un problema fundamental sobre la naturaleza de la realidad.",
      imagen: "metafisica",
      color: "bg-violet-100",
      subsecciones: [
        {
          id: "ontologia",
          titulo: "Ontología del Vacío",
          contenido: "¿Cómo puede 'existir' el no-ser? La paradoja de hablar sobre el vacío ha desafiado a filósofos durante milenios."
        },
        {
          id: "divinidad",
          titulo: "El Vacío y la Divinidad",
          contenido: "Desde la teología negativa hasta conceptos como Ain Soph en la Cábala, el vacío se ha relacionado con lo divino e inefable."
        }
      ]
    },
    cuantica: {
      titulo: "Mecánica Cuántica",
      contenido: "La física cuántica ha revolucionado nuestra comprensión del vacío, transformándolo de un espacio 'vacío' a un medio dinámico y complejo.",
      imagen: "cuantica",
      color: "bg-rose-100",
      subsecciones: [
        {
          id: "vacio-cuantico",
          titulo: "El Vacío Cuántico",
          contenido: "Fluctuaciones del vacío, energía del punto cero y el efecto Casimir demuestran que el vacío cuántico está lejos de ser 'nada'."
        },
        {
          id: "campos",
          titulo: "Campos Cuánticos",
          contenido: "El vacío como estado fundamental de mínima energía, no como ausencia. El campo de Higgs permea todo el espacio."
        },
        {
          id: "cosmologia",
          titulo: "Implicaciones Cosmológicas",
          contenido: "Energía oscura, inflación cósmica y teorías del multiverso tienen su origen en propiedades del vacío cuántico."
        }
      ]
    },
    convergencias: {
      titulo: "Convergencias",
      contenido: "A pesar de sus diferencias, estas diversas concepciones del vacío presentan fascinantes puntos de encuentro.",
      imagen: "convergencia",
      color: "bg-blue-100",
      subsecciones: [
        {
          id: "fertilidad",
          titulo: "El Vacío como Fertilidad",
          contenido: "Tanto tradiciones espirituales como la física moderna ven el vacío como generativo, no como mera ausencia."
        },
        {
          id: "dualidades",
          titulo: "Superación de Dualidades",
          contenido: "El vacío como concepto que trasciende las oposiciones binarias comunes en nuestro pensamiento."
        }
      ]
    }
  };

  const IconosSecciones = {
    filosofia: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-indigo-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
      </svg>
    ),
    oriental: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-amber-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
      </svg>
    ),
    occidental: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-emerald-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10h2v6h-2z" />
      </svg>
    ),
    metafisica: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-violet-600">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
      </svg>
    ),
    cuantica: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-rose-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    convergencia: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-blue-600">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    )
  };

  return (
    <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto">
      <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <h1 className="text-3xl font-bold mb-2 text-center">Explorador Interactivo del Concepto del Vacío</h1>
        <p className="text-center opacity-90">Una exploración visual de las distintas concepciones del vacío a través de culturas y disciplinas</p>
      </div>
      
      <div className="flex flex-wrap">
        {/* Panel de navegación */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4">
          <div className="sticky top-0">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Perspectivas del Vacío</h2>
            <ul>
              {Object.keys(secciones).map(key => (
                <li key={key} className="mb-2">
                  <button
                    onClick={() => setSeccionSeleccionada(key)}
                    className={`w-full text-left p-2 rounded transition-colors ${
                      seccionSeleccionada === key 
                        ? 'bg-indigo-600 text-white font-medium' 
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {secciones[key].titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Panel de contenido */}
        <div className="w-full md:w-3/4 p-6">
          <div className={`rounded-xl p-6 mb-6 ${secciones[seccionSeleccionada].color}`}>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <div className="md:w-1/4 mb-4 md:mb-0">
                {IconosSecciones[secciones[seccionSeleccionada].imagen]}
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h2 className="text-2xl font-bold mb-2">{secciones[seccionSeleccionada].titulo}</h2>
                <p className="text-gray-700">{secciones[seccionSeleccionada].contenido}</p>
              </div>
            </div>
          </div>
          
          {/* Subsecciones si existen */}
          {secciones[seccionSeleccionada].subsecciones && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {secciones[seccionSeleccionada].subsecciones.map(subseccion => (
                <div 
                  key={subseccion.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div 
                    className="bg-white p-4 cursor-pointer"
                    onClick={() => toggleDetalles(subseccion.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{subseccion.titulo}</h3>
                      <span className="text-indigo-600">
                        {mostrarDetalles[subseccion.id] ? '▲' : '▼'}
                      </span>
                    </div>
                    
                    {mostrarDetalles[subseccion.id] && (
                      <div className="mt-3 pt-3 border-t text-gray-600">
                        <p>{subseccion.contenido}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Cita relacionada */}
          <div className="mt-8 bg-gray-50 border-l-4 border-indigo-500 p-4 italic text-gray-600">
            {seccionSeleccionada === 'intro' && 
              '"El vacío no es meramente la ausencia de algo, sino un aspecto fundamental y generativo de la realidad."'}
            {seccionSeleccionada === 'oriental' && 
              '"La forma es vacío, el vacío es forma." — Sutra del Corazón'}
            {seccionSeleccionada === 'occidental' && 
              '"La naturaleza aborrece el vacío." — Principio aristotélico'}
            {seccionSeleccionada === 'metafisica' && 
              '"Lo que no puede nombrarse es el origen del cielo y la tierra." — Tao Te Ching'}
            {seccionSeleccionada === 'cuantica' && 
              '"El vacío es la cosa más sustancial del cosmos." — Frank Wilczek'}
            {seccionSeleccionada === 'convergencias' && 
              '"Nada que no esté allí y nada que sí lo esté." — Wallace Stevens'}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 text-gray-300 p-4 text-center text-sm">
        Explorador Interactivo del Concepto del Vacío © 2025
      </div>
    </div>
  );
}

export default ExploradorDelVacio;
