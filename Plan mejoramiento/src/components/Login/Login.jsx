import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="ContainerLogin">
      <div className="LoginBox">
        <h2>Login</h2>
        <div className="Grupoinput">
          <input type="text" placeholder="Username" />
        </div>
        <div className="Grupoinput">
          <input type="password" placeholder="Password" />
        </div>
        <div className="Chexboxgrupo">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Recordarme la proxima vez</label>
        </div>
        <button className="BottonLogin">Iniciar sesion</button>
        <a href="#" className="OlviContra">¿Olvidaste tu contraseña?</a>
        <p className="TextIniciar">
          Eres nuevo?
        </p>
        <Link to="/registro">Registrarse</Link>
      </div>
    </div>
  );
}

export default Login;