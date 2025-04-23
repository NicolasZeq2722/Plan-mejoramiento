import './Inicio.css';
import { Link } from 'react-router-dom';

function Inicio() {

  return (
    <>

    <header className='Cabecera'>
    <div className='Titulo'>
        <h1>Titulo</h1>
        </div>
        <div className='Links'>
            <Link to="/PerfilEmpresa">Perfil Empresa</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/sobrenosotros">Sobre Nosotros</Link>
          </div>
        <div className='Button'>
          <Link to="/Login">Login</Link>
        </div>
    </header>
    
    
      <nav className='Navegacion'>
        <div className='Tx1'>
          <h2>Website Design</h2>
        </div>
        <div className='Tx2'>
          <h2>Template</h2>
        </div>
        <p>Loremipsumdolorsitametconsecteturadipisicingelit
        Loremipsumdolorsitametconsecteturadipisicingeli
        inciduntquorecusandaenequeilloinciduntquor</p>
        <p>Lorem ipsum dolor.</p>
      </nav>

      <main className='SeccionPrin'>
        <div className='Columna1'>
        <div className='circulo'><h3>Texto</h3></div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia Lorem ipsum incidunt quo recusandae, neque illo labore fugiat totam doloremque repellat cupiditae similique eveniet consequatur dolore 
          Lorem ipsum dolor sit ametadipisicing recusandae, neque illo labore fugiat totam simi
          </p>
          <p className='TxtBib'>Isaias 41:10</p>
        </div>
        <div className='Columna2'>
        <div className='circulo'><h3>Texto</h3></div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia Lorem ipsum incidunt quo recusandae, neque illo labore fugiat totam doloremque repellat cupiditae similique eveniet consequatur dolore 
          Lorem ipsum dolor sit ametadipisicing recusandae, neque illo labore fugiat totam simi
          </p>
          <p className='TxtBib'>Juan 14:6</p>
        </div>
          <div className='ImagePlaceHold'></div>
      </main>

      <section className='SeccionTxt'>
          <article className='Seccion2'>
            <h4>Texto</h4>
            <div className='Comentarios'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt quo recusandae, neque illo labore fugiat totam doloremque repellat ut cupiditate saepe similique eveniet consequatur dolore, ab placeat. Saepe, cum.</p>
            </div>
            <div className='CircTex'>
            <div className='Circle1'>
              <div className='Circ'></div>
              <h5>Lorem ipsum</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt quo recusandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt quo recusandae,</p>
            </div>
            <div className='Circle2'>
              <div className='Circ'></div>
              <h5>Lorem ipsum</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt quo recusandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt quo recusandae,</p>
            </div>
            </div>
          </article>
          <section className='CAJAS'>
          <div className='BOX'></div>
          <div className='Cajitas'>
            <div className='Caja'></div>
            <div className='Caja'></div>
            <div className='Caja'></div>
            <div className='Caja'></div>
            <div className='Caja'></div>
          </div>
        </section>
        </section>

        <section className='UltGenrl'>
        <section  className='UltSecc1'>
          <div className='BOX1'></div>
          <div className='BOX2'></div>
        </section>
        <section  className='UltSecc2'>
          <div className='BOX3'></div>
          <div className='BOX4'></div>
        </section>
        </section>

    </>
  )
}

export default Inicio







