
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
import ListaComponentes from './Paginas/ListaComponentes/ListaComponentes.js';
import ListaComponentesMotor from './Paginas/ListaComponentes/ListaComponentesMotor/ListaComponentesMotor.js';
import ListaComponentesCabos from './Paginas/ListaComponentes/ListaComponentesCabos/ListaComponentesCabos.js';
import ListaComponentesMaterial from './Paginas/ListaComponentes/ListaComponentesMateriais/ListaComponentesMateriais.js';

function App() {
  
  const [SituacaoLogin, setSituacaoLogin] = useState(false)
  const [LoginLocalStorage,setLoginLocalStorage] = useState(JSON.parse(localStorage.getItem('Login')) || [])

  

    useEffect(() => {
      
      async function confereLoginLocalStorage(){
        const loginStorage = JSON.parse(localStorage.getItem('Login'))
        if(loginStorage){
          await fetch(`${process.env.REACT_APP_BACKEND_URL}/autorizacao/dimensionamentoEletrica`,{ method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json'
          },
          body : JSON.stringify({ usuario : loginStorage.usuario, senha: loginStorage.senha  })
          
      }).then(response => response.json())
      .then(data => {
        if(data === true) {
          setSituacaoLogin(true)
        }else{
          setSituacaoLogin(false)
          window.alert('Login incorreto, caso esqueceu a senha contatar o administrador.')
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
          <Route path="/listaComponentes" element={<ProtectedRoute component={ListaComponentes} isAuthenticated={SituacaoLogin} />} />
          <Route path="/listaComponentes/motor" element={<ProtectedRoute component={ListaComponentesMotor} isAuthenticated={SituacaoLogin} />} />
          <Route path="/listaComponentes/cabos" element={<ProtectedRoute component={ListaComponentesCabos} isAuthenticated={SituacaoLogin} />} />
          <Route path="/listaComponentes/materiais" element={<ProtectedRoute component={ListaComponentesMaterial} isAuthenticated={SituacaoLogin} />} />
          <Route path="/dimensionamento" element={<ProtectedRoute component={Dimensionamento} isAuthenticated={SituacaoLogin} />} />
          {/* Outras rotas protegidas */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
