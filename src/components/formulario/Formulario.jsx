import React, { useState } from 'react';


const Formulario = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (

        <div className="formulario">
            <form className="formulario-cadastro" name="form" action="/" >
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required placeholder="  Enter your password again" />
                    <button className="formulario-cadastro-botao" >Register</button>

                </div>


            </form>

        </div>

    )

}


export default Formulario;