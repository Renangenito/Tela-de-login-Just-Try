import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import  {Link}  from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState("") //iniciando um estado
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)


    //essa função handleclick é responsável por inverter o valor do (show) para true ou false
    const handleClick = (e) =>{ 
        e.preventDefault();
        setShow(!show);
    }
    return (

        <form className="login" action="/">
            <h4>Log in</h4>

            <div className="div-input">
                <input
                    className="inputEmail"
                    type="email"
                    name="email"
                    value={email}//valor inicial do usestate
                    onChange={e => setEmail(console.log(e.target.value))} 
                    //capturando o valor do input quando digitado através do onchenge

                    id="" required
                    placeholder="  Type your email" />
                    
            </div>
            <div className="div-input">
                <input
                    className="inputSenha"
                    type={show ? "text" : "password"} //Aqui é a lógica para mostrar ou não a senha
                    name=""
                    maxLength="16"
                    minLength="6"
                    value={password}//valor inicial do usestate
                    onChange={e => setPassword(e.target.value)}
                     //capturando o valor do input quando digitado através do onchenge

                    id="" required
                    placeholder="  Type your password" />
                    

                {show ? <FaEye className="eye" onClick={handleClick}/> : //Aqui é a lógica para mostrar o icone eye
                <FaEyeSlash className="eye" onClick={handleClick}/>} 
            </div>

            <button className="botao" type="submit">Login</button>

            <div className="cadastre">
                <h3>don t have an account</h3>
                <div  className="botao-register"> 
               <p  className="texto-icone"><Link  to="/formulario" >REGISTER</Link></p>
            </div>
            
            </div>
            
          

        </form>
    )

}

export default Login;
