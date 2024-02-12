import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"


//Forma de montar un componente de React en el DOM utilizando la función ReactDOM.createRoot() que es parte de la API de ReactDOM. Aquí está el desglose paso a paso:

// ReactDOM.createRoot(document.getElementById('root')): Esto obtiene un elemento del DOM con el id "root" utilizando document.getElementById('root'). Luego, la función ReactDOM.createRoot() crea un nuevo "root" (raíz) para la aplicación React, que es donde se montarán los componentes de React. Si el elemento con el id "root" no existe en el DOM, se generará un error.

// .render(...): Esta es una llamada al método .render() del objeto creado por ReactDOM.createRoot(). La función .render() toma dos argumentos:

// El primer argumento es el JSX que define el componente que se va a renderizar. En este caso, <React.StrictMode><App /></React.StrictMode> envuelve al componente App con <React.StrictMode>. <React.StrictMode> es un componente proporcionado por React que ayuda a detectar problemas potenciales en la aplicación durante el desarrollo y en el modo de producción realiza optimizaciones específicas.

// El segundo argumento es el contenedor en el DOM donde se montará el componente. En este caso, se utiliza el elemento obtenido anteriormente con document.getElementById('root').

//captura para trabajarlo en app.jsx, por lo tanto mail es el componente padre de app.jsx


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
