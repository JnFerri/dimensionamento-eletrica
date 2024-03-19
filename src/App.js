
import './App.css';
import Login from './Components/Login/Login';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Cadastro from './Paginas/Cadastro/Cadastro.js';
import CadastroMotor from './Paginas/Cadastro/CadastroMotor/CadastroMotor.js';
import CadastroCabos from './Paginas/Cadastro/CadastroCabos/CadastroCabos.js';
import CadastroMaterial from './Paginas/Cadastro/CadastroMaterial/CadastroMaterial.js';
import Dimensionamento from './Paginas/Dimensionamento/Dimensionamento.js';

function App() {
  const [SituacaoLogin, setSituacaoLogin] = useState('false')


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setSituacaoLogin={setSituacaoLogin} />} />
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
