import React, { useState } from 'react';

const Formulario = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <div className="formulario">
            <form className="formulario-cadastro" action="">
                <h2>Registration</h2>
                <div className="div-inputs">
                    <label htmlFor="nome">Name</label>
                    <input className="formulario-cadastro-nome" 
                    type="text"
                     name="nome" 
                     id="nome" 
                     value={nome} 
                     onChange={e => setNome(console.log(e.target.value))}
                     required placeholder="  Type your name" />
                </div>
                <div className="div-inputs">
                    <label htmlFor="email">Email</label>
                    <input className="formulario-cadastro-email"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(console.log(e.target.value))}
                        required placeholder="  Type your email" />
                </div>
                <div className="div-inputs">
                    <label htmlFor="password">Password</label>
                    <input className="formulario-cadastro-senha"
                        type="password"
                        name=""
                        id="password"
                        value={password}
                        onChange={e => setPassword(console.log(e.target.value))}
                        required placeholder="  Type your password" />
                </div>
                <div className="div-inputs">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input className="formulario-cadastro-senha"
                        type="password"
                        name=""
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(console.log(e.target.value))}
                        required placeholder="  Enter your password again" />
                </div>



                <button className="formulario-cadastro-botao" type="submit">Register</button>

            </form>
        </div>

    )
}

export default Formulario;