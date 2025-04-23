import './Registro.css';

function Registro() {
  return (
    <body>
      <div className="register-container">
      <div className="welcome-section">
        <h1>Bienvenido</h1>
        <p>Para unirte a nuestra comunidad por favor inicia sesión con tus datos.</p>
        <button className="welcome-button">Iniciar Sesión</button>
      </div>
      <div className="form-section">
        <h2>Crear una Cuenta</h2>
        <div className="social-buttons">
          <button className="social-btn">
          </button>
          <button className="social-btn">
          </button>
          <button className="social-btn">
          </button>
        </div>
        <p className="or-text">o usa tu email para registrarte</p>
        <div className="form-wrapper">
          <div className="input-group">
            <input type="text" placeholder="Nombre completo" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Correo electrónico" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Contraseña" />
          </div>
          <button type="submit" className="register-button">Registrarse</button>
        </div>
      </div>
    </div>
    </body>
    
  );
}

export default Registro;