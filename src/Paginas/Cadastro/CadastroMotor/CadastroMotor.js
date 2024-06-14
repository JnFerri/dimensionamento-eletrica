import styled from "styled-components";

/** Styled-component de section para servir de container para pagina publica do formulario jestor para cadastro de motores. */
const CadastroMotorContainer = styled.section`
width:100%;
display:flex;
flex-direction:column;
height:100vh;
`

/**
 * Componente com iframe da pagina do formulario publico de cadastro de motores na tabela de motores da eletrica do jestor.
 * @returns {JSX.Element} Componente com pagina de formulario do jestor.
 */
function CadastroMotor(){
    return(
        <CadastroMotorContainer>
            <iframe title="Cadastro de Motor"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera *; microphone *" src="https://avioeste.jestor.com/public/f9a77bafb67cea4233d4c8b1aa3d055e" width="100%" height="100%" frameborder="0" allowFullScreen  ></iframe>
        </CadastroMotorContainer>

    )
}

export default CadastroMotor