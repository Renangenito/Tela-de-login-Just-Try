import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FormularioCadastro = () =>{
    return(
        <form className="formulario" action="">
            <h4>Log in</h4>
        <input className="inputEmail" type="email" name="email" id="" required placeholder="   Digíte o seu email"/>
        <input className="inputSenha" type="password" name="" id="" required placeholder="  Digíte a sua senha"/>
        <button className="botao" type="submit">Login</button>
        
        <div className="botao-linkedin">
        <FaLinkedinIn className="icones"/>  <p className="texto-icone">SIGN IN WITH LINKEDIN</p>
        </div>
       <div className="botao-instagram">
        <FaGithub className="icones"/> <p className="texto-icone">SIGN IN WITH GITHUB</p>
       </div>
      
    </form>
    )
    
}

export default FormularioCadastro;
