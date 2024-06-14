import styled from "styled-components";

/** Styled-component de section que serve de container para a pagina do jestor. */
const CadastroCabosContainer = styled.section`
width:100%;
display:flex;
flex-direction:column;
height:100vh;
`
/**
 * Componente com um iframe da pagina publica do formulario jestor para cadastrar novos cabos. Utilizado para cadastrar novos cabos na tabela jestor.
 * @returns {JSX.Element} Componente com pagina do formulario publico do jestor.
 */
function CadastroCabos(){
    return(
        <CadastroCabosContainer>
            <iframe title="Cadastro Cabos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera *; microphone *" src="https://avioeste.jestor.com/public/373909ca1dbf8c109eb6c59a6cc673c1" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        </CadastroCabosContainer>

    )
}

export default CadastroCabos