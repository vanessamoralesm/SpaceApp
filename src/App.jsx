import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import banner from "./assets/banner.png"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import ModalZoom from "./components/ModalZoom"
import { useEffect, useState } from "react"

import Pie from "./components/Pie"

const FondoGradiente = styled.div `background: 
  linear-gradient(174.61deg, #041833 4.16%, 
  #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer= styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer =styled.main`
  display: flex;
  gap: 24px;
`

const ContenidoGaleria= styled.section`
  display: flex;
  flex-direction: column;
  flex-grow:1;
`

const App=()=> {
  const [fotosDeGaleria, setFotosDeGaleria]=useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada]= useState(null)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])

  const alAlternarFavorito = (foto)=>{

    if(foto.id === fotoSeleccionada?.id){
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita:!foto.favorita
      })
    }
    console.log(foto);
    
    setFotosDeGaleria(fotosDeGaleria.map(fotosDeGaleria=>{
      return {
        ...fotosDeGaleria,
        favorita:fotosDeGaleria.id===foto.id? !foto.favorita: fotosDeGaleria.favorita
      }
    }))

  }
  return (
    <>
    <FondoGradiente>
      <GlobalStyle/>
      <AppContainer>
        <Cabecera filtro={filtro} setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral/>
          <ContenidoGaleria>
            <Banner texto="La galeria mas completa del espacio" backgroundImage={banner}/>
            <Galeria alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} fotos={fotosDeGaleria} alAlternarFavorito={alAlternarFavorito} setTag={setTag}/>
          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSeleccionada} alCerrar={()=>setFotoSeleccionada(null) } alAlternarFavorito={alAlternarFavorito}/>
      <Pie/>
    </FondoGradiente>
    </>
  )
}

export default App
