import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section>
      <h1>Tu Nombre</h1>
      <p>Estudiante de Ingeniería en Informática</p>
      <p>Bienvenido a mi portafolio.</p>
      <Link to="/proyectos">Explorar</Link>
    </section>
  )
}

export default Inicio
