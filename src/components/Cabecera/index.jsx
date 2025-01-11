import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado =styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    .logo{
        width: 212px;
    }
`

const Cabecera =()=>{
    return <HeaderEstilizado>
        <img  className= "logo"src="imagenes/logo.png" alt="Logo de Space-app" />
        <CampoTexto/>
    </HeaderEstilizado>
}

export default Cabecera