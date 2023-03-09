import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {Link}  from "react-router-dom"; 
import firebase from '../config/firebase'; // importar as configurações do Firebase
import './resetsenha.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('');
        setSucesso('E-mail de redefinição de senha enviado.');
      })
      .catch((error) => {
        setMessage('Erro ao enviar e-mail de redefinição de senha:' + error.message);
        setSucesso('');
      });
  };

  return (
    <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin" onSubmit={handleResetPassword}>
    <img className="mb-4" src="/images/LogoDcontrol.png" width={100} alt="" />
      <h1 className="h3 mb-3 fw-normal">Esqueci a Senha</h1>
      

      <div className="form-floating">
      <input type="email" className="form-control" id="user_Mail" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
         <label htmlFor="floatingInput">E-mail</label>
     </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>
      {sucesso.length > 0 ? <div className="alert alert-success" role="alert">{sucesso}</div> : null}
      {message.length > 0 ? <div className="alert alert-danger" role="alert">{message}</div> : null}
      <div className="login-links mt-5">
                   <Link to="/app" className="mx-3">login</Link>
      </div>
      <p className="mt-5 mb-3 text-muted">© Desenvolvido por Dcontrol Software</p>
    </form>
    </div> );
}

export default ResetPassword;
