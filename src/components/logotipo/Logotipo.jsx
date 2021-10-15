import React from 'react';
import image from "../logotipo/logotipo.png"


const Logotipo = () =>{
    return(
        <div className="esquerda">
            <img className="imagem-logo" src={image} alt="" />
             {/* <h1 className="logotipo-texto">Between </h1> */}
        </div>
       
    )
}

export default Logotipo;

