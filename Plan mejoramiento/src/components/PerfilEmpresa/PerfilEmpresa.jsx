import './PerfilEmpresa.css'

function PerfilEmpresa() {

  return (
    <>
    <div className='TestimoniosContainer'>
      <h2>TESTIMONIOS <span>Que dicen de nosotros</span></h2>
      <div className='Testimonios'>
        <div className='SeccTestimonio'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, eaque odit quibusdam accusantium iste ipsam? Voluptatem, cum voluptatum. Repudiandae assumenda ipsa cupiditate quaerat voluptas! Doloribus maiores delectus libero quam a.</p>
          <div className='TestiAutor'>
          <div className='AutorIm'></div>
          <div className='AutorInfo'>
            <h3>Manuel</h3>
            <p>Ingeniero</p>
          </div>
          </div>
        </div>

        <div className='SeccTestimonio'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, eaque odit quibusdam accusantium iste ipsam? Voluptatem, cum voluptatum. Repudiandae assumenda ipsa cupiditate quaerat voluptas! Doloribus maiores delectus libero quam a.</p>
          <div className='TestiAutor'>
          <div className='AutorIm'></div>
          <div className='AutorInfo'>
            <h3>Andres</h3>
            <p>Arquitecto</p>
          </div>
          </div>
        </div>

        <div className='SeccTestimonio'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, eaque odit quibusdam accusantium iste ipsam? Voluptatem, cum voluptatum. Repudiandae assumenda ipsa cupiditate quaerat voluptas! Doloribus maiores delectus libero quam a.</p>
          <div className='TestiAutor'>
          <div className='AutorIm'></div>
          <div className='AutorInfo'>
            <h3>Carlos</h3>
            <p>Piloto</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default PerfilEmpresa
