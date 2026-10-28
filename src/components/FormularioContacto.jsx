import { useState } from 'react'

function FormularioContacto() {
  const [valores, setValores] = useState({ nombre: '', correo: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setValores({ ...valores, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nuevos = {}
    if (!valores.nombre.trim()) nuevos.nombre = 'El nombre es obligatorio'
    if (!valores.correo.trim()) nuevos.correo = 'El correo es obligatorio'
    else if (!/\S+@\S+\.\S+/.test(valores.correo)) nuevos.correo = 'Correo no válido'
    if (!valores.mensaje.trim()) nuevos.mensaje = 'El mensaje es obligatorio'
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) {
      setEnviado(false)
      return
    }
    setEnviado(true)
    setValores({ nombre: '', correo: '', mensaje: '' })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input id="nombre" name="nombre" value={valores.nombre} onChange={handleChange} />
      {errores.nombre && <p>{errores.nombre}</p>}

      <label htmlFor="correo">Correo</label>
      <input id="correo" name="correo" value={valores.correo} onChange={handleChange} />
      {errores.correo && <p>{errores.correo}</p>}

      <label htmlFor="mensaje">Mensaje</label>
      <textarea id="mensaje" name="mensaje" value={valores.mensaje} onChange={handleChange} />
      {errores.mensaje && <p>{errores.mensaje}</p>}

      <button type="submit">Enviar</button>
      {enviado && <p>¡Mensaje enviado con éxito!</p>}
    </form>
  )
}

export default FormularioContacto