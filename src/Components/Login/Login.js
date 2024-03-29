import styled from "styled-components";
import Label from "../Label/Label.js";
import Input from "../Input/Input.js"
import Botao from "../Botao/Botao.js"
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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


function Login({setSituacaoLogin, setLoginLocalStorage, LoginLocalStorage, SituacaoLogin}){
    
    const navigate = useNavigate();

    const [Usuario, setUsuario] = useState('')
    const [Senha, setSenha] = useState('')

    useEffect(() => {
      const handleRetornaLogin = () => {
        navigate("/dimensionamento");
      }
      if(SituacaoLogin === true){
        handleRetornaLogin()
      }
    },[LoginLocalStorage, SituacaoLogin,navigate])

    

    const confereLogin = async() => {
        /*await fetch('http://localhost:3000/autorizacao',{ method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        body : JSON.stringify({ usuario : Usuario, senha: Senha  })
        
    }).then(response => response.json())
    .then(data => {
      if(data === true) {
        setSituacaoLogin(true)
        localStorage.setItem('Login',JSON.stringify({ usuario : Usuario, senha: Senha  }) )
        setLogin(JSON.parse(localStorage.getItem('Login')))
        handleRetornaLogin()
      }else{
        window.alert('Login incorreto, caso esqueceu a senha contatar o administrador.')
      }*/
      localStorage.setItem('Login',JSON.stringify({ usuario : Usuario, senha: Senha  }))
      setLoginLocalStorage(JSON.parse(localStorage.getItem('Login')))
}
    const HandleUsuario = (event) => {
        setUsuario(event.target.value)
    }

    const HandleSenha = (event) => {
        setSenha(event.target.value)
        }

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