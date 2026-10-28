# Mini Portafolio

Portafolio personal hecho con React y Vite. Tiene cinco secciones: Inicio, Sobre mí, Habilidades, Proyectos y Contacto.

## Requisitos e instalación

Node 20.19+ o 22.12+.

```bash
npm install
```

## Cómo ejecutarlo

```bash
npm run dev
```

Abre http://localhost:5173

## Estructura de carpetas

```
src/
  components/   Header, Footer, Layout, TarjetaProyecto, FormularioContacto
  pages/        Inicio, SobreMi, Habilidades, Proyectos, Contacto
  App.jsx       rutas
  main.jsx      punto de entrada
  index.css     estilos
```

## Rutas

| Ruta | Muestra |
|---|---|
| `/` | Presentación y botón Explorar |
| `/sobre-mi` | Estudios, intereses y metas |
| `/habilidades` | Habilidades y herramientas |
| `/proyectos` | Tarjetas de proyectos |
| `/contacto` | Formulario con validación |

## Dificultades y soluciones

- Ejecuté `git init` en la carpeta equivocada y Git daba error. Lo resolví borrando ese `.git` y trabajando dentro de `mini-portafolio`.
- `mkdir` con dos rutas falló en PowerShell. Lo resolví separándolas con coma.
- El commit decía "nothing to commit" porque no había guardado los archivos. Lo resolví guardando todo antes del `git add`.
- La app mostraba un error de importación porque faltaban los archivos de `src/pages`. Los creé y se resolvió.