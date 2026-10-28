const habilidades = [
  { nombre: 'HTML', nivel: 'Avanzado' },
  { nombre: 'CSS', nivel: 'Intermedio' },
  { nombre: 'JavaScript', nivel: 'Intermedio' },
  { nombre: 'React', nivel: 'Básico' },
]

function Habilidades() {
  return (
    <section>
      <h1>Habilidades</h1>
      {habilidades.map((h) => (
        <div key={h.nombre}>
          <h2>{h.nombre}</h2>
          <p>{h.nivel}</p>
        </div>
      ))}

      <h2>Herramientas</h2>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>VS Code</li>
      </ul>
    </section>
  )
}

export default Habilidades
