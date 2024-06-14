
import styled from "styled-components";
import logo from "../../Images/logo.png"
import Titulo1 from "../Titulo1/Titulo1";
import Imagem from "../Imagem/Imagem";

/** Styled-component de header que serve de container para os componentes de logo e barra de navegação. */
const HeaderContainer = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
background-color:black;

`

/** Styled-component de Barra de navegação. */
const NavBarContainer = styled.nav`
display:flex;
align-items:center;
justify-content: space-around;
margin:20px 20px;
width:80%;
`

/** Styled-component de link que serve de botao da barra de navegação para navegar aos outros caminhos da aplicação.  */
const NavLink = styled.a`
    font-size: 25px;
    margin: 0 10px;
    text-decoration: none;
    color: white;
    text-shadow:2px 2px 2px black;
    text-transform:uppercase;
    padding: 10px 10px;
    background-color:orange;
    border-radius:10px;
    border:white 1px solid;
    transition: transform 0.2s;
    &:active {
        transform: translateY(2px);
      }
    &:hover {
        transform: scale(1.05);
        color:black;
        text-shadow:2px 2px 2px white;
        box-shadow:2px 2px 2px grey;
    }
`

/**
 * 
 * @param {object} props Props React.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setSituacaoLogin Função que define novo valor para o estado SituaçãoLogin que é responsavel por dizer se o usuario esta logado ou não.
 * @returns {JSX.Element} Componente React de Header com logo e barra de navegação.
 */
function Header({setSituacaoLogin}){

    /** Sai da aplicação e retorna a pagina de login.  */
    function Deslogar(event){
        event.preventDefault()
        setSituacaoLogin(false)
        localStorage.clear('Login')
    }

    return(
        <HeaderContainer>
            <Imagem width='5%' margin='20px 20px' src={logo}/>
            <Titulo1 font_size='42px' color="orange">Avioeste Painéis Elétricos</Titulo1>
            <NavBarContainer>
                <NavLink href="/dimensionamento">Dimensionamento</NavLink>
                <NavLink href="/cadastro" >Cadastrar Produto</NavLink>
                <NavLink href="/" onClick={Deslogar} >Sair</NavLink>
            </NavBarContainer>
        </HeaderContainer>
    )
}

export default Header