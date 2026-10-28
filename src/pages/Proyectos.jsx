import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  { titulo: 'Mini Portafolio', descripcion: 'Portafolio hecho con React.', enlace: 'https://github.com/AlonsolfDev/mini-portafolio' },
  { titulo: 'API de Reservas', descripcion: 'API REST con FastAPI.', enlace: 'https://github.com/TU-USUARIO/tu-repo' },
]

function Proyectos() {
  return (
    <section>
      <h1>Proyectos</h1>
      {proyectos.map((p) => (
        <TarjetaProyecto
          key={p.titulo}
          titulo={p.titulo}
          descripcion={p.descripcion}
          enlace={p.enlace}
        />
      ))}
    </section>
  )
}

export default Proyectos