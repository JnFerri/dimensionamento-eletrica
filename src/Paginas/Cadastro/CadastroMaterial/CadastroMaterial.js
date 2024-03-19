import styled from "styled-components";
import Header from "../../../Components/Header/Header";

const CadastroMaterialContainer = styled.section`
width:100%;
display:flex;
flex-direction:column;
height:100vh;
`

function CadastroMaterial(){
    return(
        <CadastroMaterialContainer>
            <Header/>
            <iframe title="Cadastro Material" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera *; microphone *" src="https://avioeste.jestor.com/public/1afc01b0626fb64d398f2153d973d075" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        </CadastroMaterialContainer>

    )
}

export default CadastroMaterial