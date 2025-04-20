import './Contacto.css';

function Contacto() {
  return (
    <>
    <div className='ContactoContainer'>
        <h1>CONTACTANOS</h1>
        <form className='ContactoForm'>
            <div className='Form'>
                <div className='GrupoInput'>
                    <label className='Nombre'>Nombre</label>
                    <input type="text" className='PrimerNomb' placeholder='Nombre'/>
                </div>
                <div className='GrupoInput'>
                    <label className='Apellido'>Apellido</label>
                    <input type="text" className='Apellido' placeholder='Apellido'/>
                </div>
            </div>
                <div className='GrupoInput'>
                    <label className='Email'>Email</label>
                    <input type="email" className='Email' placeholder='Email'/>
                </div>
                <div className='GrupoInput'>
                    <label className='Mensaje'>Mensaje</label>
                    <textarea id="Mensaje" placeholder='Mensaje' required></textarea>
                </div>
                <button type='submit' className='Enviar'>Enviar mensaje</button>
        </form>
    </div>
    </>
    );
}

export default Contacto;