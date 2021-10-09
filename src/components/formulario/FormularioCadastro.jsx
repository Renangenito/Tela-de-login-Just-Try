import React from 'react';

   
const FormularioCadastro = () =>{
    return(
        <form className="formulario" action="">
        <input className="inputEmail" type="email" name="email" id="" required placeholder="Digíte o seu email"/>
        <input className="inputSenha" type="password" name="" id="" required placeholder="Digíte a sua senha"/>
        <button className="botao" type="submit">Login</button>
    </form>
    )
    
}

export default FormularioCadastro;