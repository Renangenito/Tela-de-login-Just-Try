import React, { useState } from 'react';



const Formulario = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmSenha, setConfirmSenha] = useState("")
   

   

    const pagina = () => {

        if (senha === confirmSenha) {
            return "/";
        } else {
            return "";

        }


    }

    return (

        <div className="formulario">
            <form className="formulario-cadastro" name="form" action={pagina()} >

                <h2>Registration</h2>
                <div className="div-inputs">
                    <label htmlFor="nome">Name</label>
                    <input className="formulario-cadastro-nome"
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required placeholder="  Type your name" />
                </div>
                <div className="div-inputs">
                    <label htmlFor="email">Email</label>
                    <input className="formulario-cadastro-email"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required placeholder="  Type your email" />
                </div>
                <div className="div-inputs">
                    <label htmlFor="password">Password</label>
                    
                    <input className="formulario-cadastro-senha"
                        type="password"
                        name="senha"
                        id="password"
                        minLength="6"
                        maxLength="16"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required placeholder="  Type your password" />
                    
                </div>
                <div className="div-inputs">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input className="formulario-cadastro-senha"
                        type="password"
                        name="confirmaSenha"
                        id="confirm-password"
                        minLength="6"
                        maxLength="16"
                        value={confirmSenha}
                        onChange={e => setConfirmSenha(e.target.value)}
                        required placeholder="  Enter your password again" />
                    <span id="erro"></span>

                    <button type="submit" className="formulario-cadastro-botao" >Register</button>
                  

                </div>

               
            </form>

        </div>

    )

}


export default Formulario;