
import styled from "styled-components";
import logo from "../../Images/logo.png"
import Titulo1 from "../Titulo1/Titulo1";
import Imagem from "../Imagem/Imagem";


const HeaderContainer = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
background-color:black;

`
const NavBarContainer = styled.nav`
display:flex;
align-items:center;
justify-content: space-around;
margin:20px 20px;
width:80%;
`

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

function Header(){
    return(
        <HeaderContainer>
            <Imagem width='5%' margin='20px 20px' src={logo}/>
            <Titulo1 font_size='42px' color="orange">Avioeste Painéis Elétricos</Titulo1>
            <NavBarContainer>
                <NavLink href="/dimensionamento">Dimensionamento</NavLink>
                <NavLink href="/cadastro" >Cadastrar Produto</NavLink>
            </NavBarContainer>
        </HeaderContainer>
    )
}

export default Header