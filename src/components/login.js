import React, {useState} from 'react';
import './login.css'

function Login () {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    document.title = 'Login'
    return (
        <div className='login'>
            <div className='login-logo'>
            </div>
            <div className='login-right'>
                <h1>Login</h1>
                <div className='loginInputEmail'>
                    <input
                    type='text'
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange = {e => setEmail(e.target.value)}
                    /> 
                </div>
                <div className='loginInputSenha'>
                    <input
                    type='password'
                    placeholder="Digite sua senha"
                    value = {senha}
                    onChange = {e => setSenha(e.target.value)}
                    /> 
                </div>
                <button type='submit'>
                    Entrar
                </button>
                <h4>Criar Conta</h4>
                <button type='submit'>
                    Cadastrar
                </button>
            </div>
           </div>
    )
}

export default Login