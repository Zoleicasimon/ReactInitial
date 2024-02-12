import { useState } from 'react'
import reactLogo from './assets/react.svg' //las imagenes se deben importar
import viteLogo from '/vite.svg' //lo que este dentro de la carpeta imagen no hace falta./
// 



//en un componente (en este caso el componente es la funcion), la lógica siempre va antes del return
function App() {
  const [count, setCount] = useState(0) //[nombre de la constante o estado inicial, funcion p q se cumpla]
  const [nombre, setNombre]=useState("ZOLEICA")

  return (
    //<> </> esto es un fragment , seria como un div. Si se quiere aplicar clase hay que convertir a div
    //las clases se usan como ClassName (creado por meta)
    <>
      <div className='bg-dark'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" /> 
        
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <button onClick={() => {
          setCount((count) => count + 1)
          setNombre((nombre)=> nombre + "A")
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>Hola mundo react {nombre} </h1>
    </>
  )
}

export default App
