
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

/**
 * Estado que salva a informação se o usuario esta logado ou não para definir se o usuario pode ou não acessar as rotas.
 * @typedef {EstadoReact} SituacaoLogin
 * @property {boolean} SituacaoLogin True o usuario esta logado e false o usuario não esta logado.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setSituacaoLogin Função responsável por atualizar o valor do estado SituacaoLogin.
 */

/**
 * Estado que guarda o valor da localStorage 'Login'.
 * @typedef {EstadoReact} LoginLocalStorage
 * @property {object} LoginLocalStorage Objeto contendo os dados de usuario e senha do usuario logado que esta salvo no localStorage 'Login'.
 * @property {React.Dispatch<React.SetStateAction<object>>} setLoginLocalStorage Função responsável por definir novo valor par ao estado LoginLocalStorage.
 */

/**
 * Componente principal App responsavel por renderizar as outras rotas.
 * @returns {JSX.Element} Componente App responsavel por englobar todas as rotas da aplicação.
 */
function App() {
  
  const [SituacaoLogin, setSituacaoLogin] = useState(false)
  const [LoginLocalStorage,setLoginLocalStorage] = useState(JSON.parse(localStorage.getItem('Login')) || [])

  
  /** Toda vez que o estado LoginLocalStorage é alterado faz a conferencia dos dados da localStorage 'Login' para verificar se os dados condizem com as iformações de login que estão no backend, caso condiz retornara true e definira o estado SituacaoLogin como true informando que o usuario esta logado. */
    useEffect(() => {
      
      async function confereLoginLocalStorage(){
        const loginStorage = JSON.parse(localStorage.getItem('Login'))
        if(loginStorage){
          const url = process.env.REACT_APP_BACKEND_URL
          await fetch(`${url}/autorizacao/dimensionamentoEletrica`,{ method: 'POST',
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
          <Route path="/"  element={<Login setLoginLocalStorage={setLoginLocalStorage} LoginLocalStorage={LoginLocalStorage} SituacaoLogin ={SituacaoLogin} />} />
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
