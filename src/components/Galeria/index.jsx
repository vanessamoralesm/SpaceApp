import Tag from "./Tags"
import Titulo from "../Titulo"
import styled from "styled-components"
import Populares from "./Populares"
import Imagen from "./Imagen"

const GaleriaContainer= styled.div`
    display: flex;
`
const SeccionFluida= styled.section`
    flex-grow:1;
`

const ImagenesConteiner= styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`

const Galeria=({fotos=[], alSeleccionarFoto, alAlternarFavorito, setTag})=>{
    return (<>
        <Tag setTag={setTag}/>
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo>Navegue por la galeria</Titulo>
                <ImagenesConteiner>
                    {fotos.map(foto=><Imagen 
                    alAlternarFavorito={alAlternarFavorito}
                    alSolicitarZoom={alSeleccionarFoto}
                    key={foto.id} foto={foto}/>)}
                </ImagenesConteiner>

            </SeccionFluida>
            <Populares/>

        </GaleriaContainer>
        
    </>)
}

export default Galeria