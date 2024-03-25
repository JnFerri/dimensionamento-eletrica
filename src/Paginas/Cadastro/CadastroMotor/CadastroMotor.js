import styled from "styled-components";

const CadastroMotorContainer = styled.section`
width:100%;
display:flex;
flex-direction:column;
height:100vh;
`

function CadastroMotor(){
    return(
        <CadastroMotorContainer>
            <iframe title="Cadastro de Motor"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera *; microphone *" src="https://avioeste.jestor.com/public/f9a77bafb67cea4233d4c8b1aa3d055e" width="100%" height="100%" frameborder="0" allowFullScreen  ></iframe>
        </CadastroMotorContainer>

    )
}

export default CadastroMotor