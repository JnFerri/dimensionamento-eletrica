import styled from "styled-components";
import Label from "../Label/Label.js";
import Input from "../Input/Input.js"
import Botao from "../Botao/Botao.js"
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/** Styled-component de section que serve de container para o formulario de login. */
const LoginContainer = styled.section`
display:flex;
align-items:center;
justify-content:space-around;
background-color:white;
flex-direction:column;
border-radius:20px;
border:orange 1px solid;
padding:1rem 1rem;
width:70%;
margin-top:5%;
`

/**
 * Estado que guarda o valor do input de Usuario do formulario de login.
 * @typedef {EstadoReact} Usuario
 * @property {string} Usuario Valor do input de usuario do formulario.
 * @property {React.Dispatch<React.SetStateAction<string>>} setUsuario Função utilizada para definir novo valor para o estado Usuario.
 */

/**
 * Estado que guarda o valor do input de senha do formulario de login.
 * @typedef {EstadoReact} Senha
 * @property {string} Senha Valor do input de senha do formulario.
 * @property {React.Dispatch<React.SetStateAction<string>>} setSenha Função utilizada para definir novo valor para o estado Senha.
 */

/**
 * Componente de pagina de login da aplicação.
 * @param {object} props Props do componente React.
 * @param {React.Dispatch<React.SetStateAction<object>>} props.setLoginLocalStorage Função responsavel por definir novo valor para o estado LoginLocalStorage.
 * @param {object} props.LoginLocalStorage Estado contendo objeto com os dados do usuario que estão na localStorage 'Login'.
 * @param {boolean} props.SituacaoLogin Estado que define se o usuario esta logado ou não. 
 * @returns {JSX.Element} Componente responsavel pelo login.
 */ 
function Login({setLoginLocalStorage, LoginLocalStorage, SituacaoLogin}){
    
  // React Hook responsavel por navegar para outras rotas da aplicação.
    const navigate = useNavigate();

  
    const [Usuario, setUsuario] = useState('')
    const [Senha, setSenha] = useState('')

    /** Caso o estado SituacaoLogin for true o usuario é redirecionado a rota do formulario /dimensionamento. Verificação feita sempre que os Estados LoginLocalStorage e SituacaoLogin tem seus valores alterados. */
    useEffect(() => {
      const handleRetornaLogin = () => {
        navigate("/dimensionamento");
      }
      if(SituacaoLogin === true){
        handleRetornaLogin()
      }
    },[LoginLocalStorage, SituacaoLogin,navigate])

    
    /** Salva os dados dos inputs de login na localStorage 'Login' e define o estado LoginLocalStorage com o valor da localStorage. Ao alterar este estado, no componente principal App é feito a verificação com o backend e definido se o usuario esta logado ou não. */
    const confereLogin = async() => {
      localStorage.setItem('Login',JSON.stringify({ usuario : Usuario, senha: Senha  }))
      setLoginLocalStorage(JSON.parse(localStorage.getItem('Login')))
}

  /** Define valor do estado Usuario com o valor do input de usuario do formulario. */
    const HandleUsuario = (event) => {
        setUsuario(event.target.value)
    }

  /** Define valor do estado Senha com o valor do input de senha do formulario. */
    const HandleSenha = (event) => {
        setSenha(event.target.value)
        }
  
  /** Ao apertar enter no formulario identifica que foi clicado o botão de entrar do formulario. */
    const HandlePressEnter = (event) => {
      if (event.key === 'Enter'){
        confereLogin()
      }
    }

    return(
        <LoginContainer>
            <Label width='60%' font_size='38px'>USUARIO:</Label>
            <Input type="text" width='60%' onKeyDown={HandlePressEnter} value={Usuario} onChange={HandleUsuario} placeholder="Coloque o Nome do Usuario..." border='0.7px black solid' padding='15px 15px' border_radius='10px' margin='10px 10px'></Input>
            <Label width='60%' font_size='38px'>SENHA:</Label>
            <Input type="password" width='60%' onKeyDown={HandlePressEnter} value={Senha} onChange={HandleSenha} placeholder="Coloque a Senha do Usuario..." border='0.7px black solid' padding='15px 15px' border_radius='10px' margin='10px 10px'></Input>
            <Botao onClick={confereLogin}  backgroundcolor='orange' border='0.75px black solid' width='40%' padding='20px 20px' border_radius='20px' font_size='24px'>ENTRAR</Botao>
        </LoginContainer>
    )
}

export default Login