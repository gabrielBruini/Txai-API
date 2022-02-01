import React, { useState } from "react";


function Produtos () {
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });

    const [itens, setItens] = useState({
        nome:'',
        valor:'',
        quantidade: ''
    })

    const valueInput = e => setItens ({...itens, [e.target.name]: e.target.value})

    const addItem = async e => {
        e.preventDefault();
    
        if(!validate()) return;
    
        const saveDataForm = true;
    
        if (saveDataForm) {
          setStatus({
            type: 'success',
            mensagem: "Produto cadastrado com sucesso!"
          });
          setItens({
            nome:'',
            valor:'',
            quantidade: ''
          });
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Produto não cadastrado com sucesso!"
          });
        }
      }
    
      function validate(){
        if(!itens.nome) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
        if(!itens.valor) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo valor'});
        if(itens.valor > 99999) return setStatus({type: 'error', mensagem: 'O valor máximo é 99999 '});
        if(!itens.quantidade) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo quantidade'});
        if(itens.quantidade > 9999) return setStatus({type: 'error', mensagem: 'O limite de quantidade é 9999'});
        
        return true;
      }

    return (
        <div className='produtos'>           
            <div className='login-right'>
                <h1>Cadastro de Produtos</h1>
                {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                 {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
            
                <form onSubmit={addItem}>
            
                <div className='loginInputEmail'>
                    <input
                    type='text'
                    placeholder="Nome do Produto"
                    name="nome"
                    onChange={valueInput}
                    value={itens.nome}                   
                    /> 
                </div>
                <div className='loginInputEmail'>
                    <input
                    type='number'
                    placeholder="Valor do Produto"
                    name="valor"
                    onChange={valueInput}
                    value={itens.valor}
                   
                    /> 
                </div>
                <div className='loginInputSenha'>
                <input
                    type='number'
                    placeholder="Quantidade"
                    name="quantidade"
                    onChange={valueInput}
                    value={itens.quantidade}
                   
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



export default Produtos