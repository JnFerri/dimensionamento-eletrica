import styled from "styled-components"
import Botao from "../../Components/Botao/Botao"
import Imagem from "../../Components/Imagem/Imagem"
import ImagemMotor from "../../Images/motor.png"
import ImagemCabo from "../../Images/cabos.png"
import ImagemPecas from "../../Images/pecas.png"
import Titulo2 from "../../Components/Titulo2/Titulo2.js"
import { useNavigate } from "react-router-dom"

/** Styled-component main para servir de container dos outros componentes para centralizar e organizar. */
const CadastroBody = styled.main`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
`

/** Styled-component que serve como um container para as opções de cadastro.  */
const CadastroContainer = styled.section`
    display:flex;
    flex-direction: column;
    width: 60%;
    align-items:center;
    margin:20px 20px;
    background-color:black;
    padding:20px 0px;
    border:orange 0.2px solid;
    border-radius:30px;
`

/** Styled-component que serve de container para a imagem e botão das escolhas de cadastro. */
const CadastroItem = styled.div`
    display:flex;
    align-items:center;
    width:80%;
    background-color:white;
    border:orange 2px solid;
    border-radius:20px;
    padding:30px 30px;
    justify-content:space-around;
    margin: 1rem 0;

`

/**
 * Componente com lista de opções com botões para navegar aos formularios de cadastro de produtos de elétrica ou para a lista de opções de visualização dos produtos cadastrados.
 * @returns Componente com lista de opções para navegação na aplicação.
 */
function Cadastro(){

    // React Hook utilizado para navegar a outras rotas da aplicação.
    const navigate = useNavigate();

    /** Encaminha o usuario até a página onde está o formulário jestor para cadastro de motores. */
    const handleMotor = () => {
        navigate('/cadastro/motor')
    }

    /** Encaminha o usuario até a página onde está o formulário jestor para cadastro de cabos. */
    const handleCabos = () => {
        navigate('/cadastro/cabos')
    }

    /** Encaminha o usuario até a página onde está o formlário jestor para cadastrar materais */
    const handlePecas = () => {
        navigate('/cadastro/materiais')
    }

    /** Encaminha o usuario até a pagina onde esta a lista de opções para visualizar os produtos cadastrados. */
    const handleLista = () => {
        navigate('/listaComponentes')
    }

    return(
        <CadastroBody>
            <Titulo2 color="orange" font_size='40px' text_shadow='2px 2px 2px black' >CADASTRO DE NOVOS MATERIAIS:</Titulo2>
        <CadastroContainer>
            <CadastroItem>
            <Imagem width='15%' src={ImagemMotor}></Imagem>
            <Botao  onClick={handleMotor} padding='15px 0px' colorHover='white' font_size='24px' backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' >MOTORES</Botao>
            </CadastroItem>
            <CadastroItem>
            <Imagem width='15%' src={ImagemCabo}></Imagem>
            <Botao onClick={handleCabos} padding='15px 0px'  colorHover='white' font_size='24px' backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' >CABOS</Botao>
            </CadastroItem>
            <CadastroItem>
            <Imagem width='15%' src={ImagemPecas}></Imagem>
            <Botao onClick={handlePecas} padding='15px 0px'  colorHover='white' font_size='24px'  backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' >MATERIAIS</Botao>
            </CadastroItem>
            <CadastroItem>
            <Botao onClick={handleLista} padding='15px 0px'  colorHover='white' font_size='24px'  backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' >LISTA DE COMPONENTES</Botao>
            </CadastroItem>
        </CadastroContainer>
        </CadastroBody>
    )
}

export default Cadastro