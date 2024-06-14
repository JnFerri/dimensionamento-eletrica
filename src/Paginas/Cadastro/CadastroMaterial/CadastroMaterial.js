import styled from "styled-components";

/** Styled-component de section para servir de container para pagina publica do formulario jestor para cadastro de materiais de elétrica. */
const CadastroMaterialContainer = styled.section`
width:100%;
display:flex;
flex-direction:column;
height:100vh;
`

/**
 * Componente com iframe da pagina do formulario publico de cadastro de materiais na tabela de materiais da eletrica do jestor.
 * @returns {JSX.Element} Componente com pagina de formulario do jestor.
 */
function CadastroMaterial(){
    return(
        <CadastroMaterialContainer>
            <iframe title="Cadastro Material" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera *; microphone *" src="https://avioeste.jestor.com/public/1afc01b0626fb64d398f2153d973d075" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        </CadastroMaterialContainer>

    )
}

export default CadastroMaterial