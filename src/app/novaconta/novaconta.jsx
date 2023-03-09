import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './novaconta.css';

function CadastrarUsuario() {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(" ");

  const auth = getAuth();

  const handleCadastro = (event) => {
    event.preventDefault();
    setMensagem('');

    if (!email || !telefone || !senha) {
      setMensagem('Informe todos os campos');
      setSucesso('N');
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        setMensagem('Usuario cadastrado com Sucesso!!!');
        setSucesso('S');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSucesso('N');
        setMensagem(`Ocorreu um erro ao cadastrar o usuário: ${errorCode} - ${errorMessage}`);
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            setMensagem('Esse email já está cadastrado');            
        }else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            setMensagem('A senha deve conter no mínimo 6 caracteres');  
        }
        else{
            setMensagem('Erro ao criar conta :'  + error.message);    
        }
      });
     
  };

  
  return<div className="d-flex align-items-center text-center form-container">
            <form className="form-signin" onSubmit={handleCadastro}>
     

                <img className="mb-4" src="/images/LogoDcontrol.png" width={100} alt="" />
                <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>
               
                <div className="form-floating">
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="user_Mail" placeholder="E-mail"/>
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <div className="form-floating">
                <input value={telefone} onChange={(event) => setTelefone(event.target.value)} type="tel" className="form-control" id="user_phone" placeholder="Telefone"/>
                <label htmlFor="floatingInput">Telefone</label>
                </div>


                <div className="form-floating">
                <input value={senha} onChange={(event) => setSenha(event.target.value)} type="password" className="form-control" id="user_Pass" placeholder="Senha"/>
                <label htmlFor="floatingInput">Senha</label>
                </div>


                <button className="w-100 btn btn-lg btn-primary" type="submit" >Criar Conta</button>
               {mensagem.length > 0  ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
               {sucesso === 'S' ? <Navigate to='/app/home'/> : null}
                <div className="login-links mt-5">
                    <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
                    <Link to="/app" className="mx-3">login</Link>
                </div>
                <p className="mt-5 mb-3 text-muted">© Desenvolvido por Dcontrol Software</p>
            </form>
        </div>
;
}

export default CadastrarUsuario;
