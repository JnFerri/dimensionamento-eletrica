
import './App.css';
import Login from './Components/Login/Login.js';
import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Cadastro from './Paginas/Cadastro/Cadastro.js';
import CadastroMotor from './Paginas/Cadastro/CadastroMotor/CadastroMotor.js';
import CadastroCabos from './Paginas/Cadastro/CadastroCabos/CadastroCabos.js';
import CadastroMaterial from './Paginas/Cadastro/CadastroMaterial/CadastroMaterial.js';
import Dimensionamento from './Paginas/Dimensionamento/Dimensionamento.js';
import Header from './Components/Header/Header.js';

function App() {
  
  const [SituacaoLogin, setSituacaoLogin] = useState(false)
  const [LoginLocalStorage,setLoginLocalStorage] = useState(JSON.parse(localStorage.getItem('Login')) || [])

  

    useEffect(() => {
      
      console.log(LoginLocalStorage.usuario)
      async function confereLoginLocalStorage(){
        const loginStorage = JSON.parse(localStorage.getItem('Login'))
        if(loginStorage){
          await fetch('http://localhost:3000/autorizacao',{ method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json'
          },
          body : JSON.stringify({ usuario : loginStorage.usuario, senha: loginStorage.senha  })
          
      }).then(response => response.json())
      .then(data => {
        console.log(data)
        if(data === true) {
          setSituacaoLogin(true)
        }else{
          setSituacaoLogin(false)
        }
      });
        }
        }
      confereLoginLocalStorage()
    },[setSituacaoLogin, LoginLocalStorage])

  return (
    <div className="App">
      {
       SituacaoLogin === true ? <Header setSituacaoLogin={setSituacaoLogin}></Header>: ''
      }
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login setSituacaoLogin={setSituacaoLogin} setLoginLocalStorage={setLoginLocalStorage} LoginLocalStorage={LoginLocalStorage} SituacaoLogin ={SituacaoLogin} />} />
          <Route path="/cadastro" element={<ProtectedRoute component={Cadastro} isAuthenticated={SituacaoLogin} />} />
          <Route path="/cadastro/motor" element={<ProtectedRoute component={CadastroMotor} isAuthenticated={SituacaoLogin} />} />
          <Route path="/cadastro/cabos" element={<ProtectedRoute component={CadastroCabos} isAuthenticated={SituacaoLogin} />} />
          <Route path="/cadastro/materiais" element={<ProtectedRoute component={CadastroMaterial} isAuthenticated={SituacaoLogin} />} />
          <Route path="/dimensionamento" element={<ProtectedRoute component={Dimensionamento} isAuthenticated={SituacaoLogin} />} />
          {/* Outras rotas protegidas */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
