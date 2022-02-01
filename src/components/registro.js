import React, {useState} from 'react';
import './registro.css'

function Registro () {
    const [user, setUser] = useState({
        nome:'',
        email:'',
        senha:''
    })
    const [status, setStatus] = useState({
        type: '',
        mensagem:''
    })
    document.title = 'Registro'
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value})
 

    const addUser = async e => {
        e.preventDefault();
    
        if(!validate()) return;
    
        const saveDataForm = true;
    
        if (saveDataForm) {
          setStatus({
            type: 'success',
            mensagem: "Usuário cadastrado com sucesso!"
          });          

          setUser({
            nome: '',
            email: '',
            senha: ''
          });
          window.location.href = "/";
         
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
          });
        }
      }
      function validate() {
        if(!user.nome) return setStatus({type: 'error', mensagem: 'Necessário preencher o campo nome!'});
        if(!user.email) return setStatus({type: 'error', mensagem: 'Necessário preencher o campo email!'});
        if(!user.senha) return setStatus({type: 'error', mensagem: 'Necessário preencher o campo senha!'});
        return true
      }


    return (
        
        <div className='login'>            
             
            <div className='login-right'>            
                {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}  
                <form onSubmit={addUser}>   
               

                <h1>Registro</h1>
               

                <div className='InputNome'>
                    <input
                    type='text'
                    name='nome'
                    placeholder="Digite seu nome"
                    value={user.nome}
                    onChange = {valueInput}
                    /> 
                </div>
                <div className='InputEmail'>
                    <input
                    type='text'
                    name='email'
                    placeholder="Digite seu e-mail"
                    value={user.email}
                    onChange = {valueInput}
                    /> 
                </div>
                <div className='InputSenha'>
                    <input
                    type='password'
                    name='senha'
                    placeholder="Digite sua senha"
                    value = {user.senha}
                    onChange = {valueInput}
                    /> 
                </div>                              
                
                <button type='submit'>
                    Cadastrar
                </button>


                </form>

           
            </div>
           </div>
    )
}

export default Registro