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
/** Styled-component que serve como um container para as opções de lista.  */
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

/** Styled-component que serve de container para a imagem e botão das escolhas de lista. */
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
 * Componente com lista de opções com botões para navegar para as listas dos produtos cadastrados.
 * @returns Componente com lista de opções para navegação na aplicação.
 */
function ListaComponentes(){

    // React Hook utilizado para navegar a outras rotas da aplicação.
    const navigate = useNavigate();

    /** Encaminha o usuario para a rota onde esta a lista dos motores cadastrados.  */
    const handleMotor = () => {
        navigate('/listaComponentes/motor')
    }

    /** Ecaminha o usuario para a rota onde esta a lista de cabos cadastrados. */
    const handleCabos = () => {
        navigate('/listaComponentes/cabos')
    }

    /** Encaminha o usuario para a rota onde esta a lista de materiais cadastrados. */
    const handlePecas = () => {
        navigate('/listaComponentes/materiais')
    }

    /**Encaminha o usuario para a pagina onde esta as opções de cadastro de produtos. */
    const handleVoltar = () => {
        navigate('/cadastro')
    }
    

    return(
        <CadastroBody>
            <Titulo2 color="orange" font_size='40px' text_shadow='2px 2px 2px black' >Lista de Componentes Cadastrados:</Titulo2>
        <CadastroContainer>
            <CadastroItem>
            <Imagem width='15%' src={ImagemMotor}></Imagem>
            <Botao  onClick={handleMotor} padding='15px 0px' colorHover='white' font_size='24px' backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' >TODOS OS MOTORES</Botao>
            </CadastroItem>
            <CadastroItem>
            <Imagem width='15%' src={ImagemCabo}></Imagem>
            <Botao onClick={handleCabos} padding='15px 0px'  colorHover='white' font_size='24px' backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' >TODOS OS CABOS</Botao>
            </CadastroItem>
            <CadastroItem>
            <Imagem width='15%' src={ImagemPecas}></Imagem>
            <Botao onClick={handlePecas} padding='15px 0px'  colorHover='white' font_size='24px'  backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' > TODOS OS MATERIAIS</Botao>
            </CadastroItem>
            <Botao onClick={handleVoltar} padding='15px 0px'  colorHover='white' font_size='24px'  backgroundcolor='orange' width='50% ' border='0.5px black solid' border_radius='10px' > VOLTAR</Botao>
        </CadastroContainer>
        </CadastroBody>
    )
}

export default ListaComponentes