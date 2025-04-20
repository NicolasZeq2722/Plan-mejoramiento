import './App.css'

function App() {


  return (
    <>
    <body>
    <div className='Container'>
      <div className='Nav'>
        <div className='Titulo'>
          <h1>Titulo</h1>
        </div>
        <div className='Menu'>
          <p>Texto</p>
          <p>Texto</p>
          <p>Texto</p>
        </div>
        <button className='Boton1'>Registrarse</button>
        <button className='Boton'>Login</button>
      </div>
      <header>
        <div className='TituloHeader'>
          <h2>Sobre nosotros</h2>
        </div>
        <div className='ContentImag'>
          <img src="https://blog.bonda.com/hubfs/Imported_Blog_Media/amistad.jpeg" alt="ImagenTrabajo"/>
        </div>
        <h3>¿Quienes somos?</h3>
        <div className='Texto'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cum sint aut praesentium voluptas, veniam repudiandae quo sunt, aliquid blanditiis officiis numquam quasi minus, ab nam eligendi voluptatem distinctio assumenda.</p>
        </div>
      </header>
    </div>
    </body>
    </>
  )
}

export default App
