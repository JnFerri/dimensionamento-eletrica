import styled from "styled-components";
import Titulo2 from "../../Components/Titulo2/Titulo2";
import DimensionamentoGalpao from "../../Components/DimensionamentoGalpao/DimensionamentoGalpao.js";
import { useEffect, useRef, useState } from "react";
import DimensionamentoVentilacao from "../../Components/DimensionamentoVentilacao/DimensionamentoVentilacao.js";
import Form from "../../Components/Form/Form.js"
import Input from "../../Components/Input/Input.js";
import DimensionamentoResfriamento from "../../Components/DimensionamentoResfriamento/DimensionamentoResfriamento.js";
import DimensionamentoAlimentacao from "../../Components/DimensionamentoAlimentacao/DimensionamentoAlimentacao.js";
import DimensionamentoAquecedores from "../../Components/DimensionamentoAquecedores/DimensionamentoAquecedores.js";
import DimensionamentoIluminacao from "../../Components/DimensionamentoIluminacao/DimensionamentoIluminacao.js";
import DimensionamentoDiversos from "../../Components/DimensionamentoDiversos/DimensionamentoDiversos.js";
import { CriaPdfDimensionamento } from "../../Services/CriaPdfDimensionamento.js";

/** Styled-component de main que serve de container para englobar todos os componentes do formulario completo de dimensionamento. */
const DimensionamentoContainer = styled.main`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
`

/**
 * Estado que guarda o valor do input de comprimento do formulario.
 * @typedef {EstadoReact} ComprimentoForm 
 * @property {number} ComprimentoForm Valor do input de comprimento do galpão do formulario.
 * @property {React.Dispatch<React.SetStateAction<number>>} setComprimentoForm Função responsável por definir novo valor para o estado ComprimentoForm.
 */

/**
 * Estado que guarda o valor do input de largura do formulario.
 * @typedef {EstadoReact} LarguraForm
 * @property {number} LarguraForm Valor do input de largura do galpão do formulario.
 * @property {React.Dispatch<React.SetStateAction<number>>} setLarguraForm Função responsável por definir novo valor para o estado LarguraForm.
 */

/**
 * Estado que guarda o valor do input de largura do formulário.
 * @typedef {EstadoReact} AlturaForm
 * @property {number} AlturaForm Valor do input de altura do galpão do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setAlturaForm Função responsável por definir novo valor para o estado AlturaForm.
 */

/**
 * Estado que guarda o valor da option selecionada no select de controlador.
 * @typedef {EstadoReact} ControladorForm
 * @property {string} ControladorForm Valor da option selecionada no select de controlador do formulario.
 * @property {React.Dispatch<React.SetStateAction<string>>} setControladorForm Função responsável por definir novo valor para o estado ControladorForm.
 */

/**
 * Estado que guarda o valor da option selecionada no select de rede elétrica.
 * @typedef {EstadoReact} RedeEletricaForm
 * @property {string} RedeEletricaForm Valor da option selecionada no select de rede elétrica do formulário.
 * @property {React.Dispatch<React.SetStateAction<string>>} setRedeEletricaForm Função responsável por definir novo valor para o estado RedeEletricaForm.
 */

/**
 * Estado que guarda o valor da option selecionada no select de protecao do motor.
 * @typedef {EstadoReact} ProtecaoMotorForm
 * @property {string} ProtecaoMotorForm Valor da option selecionada no select de protecao do motor do formulário.
 * @property {React.Dispatch<React.SetStateAction<string>>} setProtecaoMotorForm Função responsável por definir novo valor para o estado ProtecaoMotorForm.
 */

/**
 * Estado que guarda o valor da option selecionada no select de marca.
 * @typedef {EstadoReact} MarcaForm
 * @property {string} MarcaForm Valor da option selecionada no select de marca do formulário.
 * @property {React.Dispatch<React.SetStateAction<string>>} setMarcaForm Função responsável por definir novo valor para o estado MarcaForm.
 */

/**
 * Estado que guarda o valor da option selecionada no select de quantidade de caixas.
 * @typedef {EstadoReact} QuantidadeCaixaForm
 * @property {string} QuantidadeCaixaForm Valor da option selecionada no select de quantidade de caixa do formulário.
 * @property {React.Dispatch<React.SetStateAction<string>>} setQuantidadeCaixaForm Função responsável por definir novo valor para o estado QuantidadeCaixaForm.
 */

/**
 * Estado que guarda o valor da option selecionada no select de segurança.
 * @typedef {EstadoReact} SegurancaForm
 * @property {string} SegurancaForm Valor da option selecionada no select de segurança do formulário.
 * @property {React.Dispatch<React.SetStateAction<string>>} setSegurancaForm Função responsável por definir novo valor para o estado SegurancaForm.
 */

/**
 * Estado que guarda o valor do input de quantidade de exaustores.
 * @typedef {EstadoReact} QuantidadeExaustoresForm
 * @property {number} QuantidadeExaustoresForm Valor do input de quantidade de exaustores do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeExaustoresForm Função responsável por definir novo valor para o estado QuantidadeExaustoresForm.
 */

/**
 * Estado que guarda o valor do input de potencia dos exaustores.
 * @typedef {EstadoReact} PotenciaExaustoresForm
 * @property {number} PotenciaExaustoresForm Valor do input de quantidade de exaustores do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaExaustoresForm Função responsável por definir novo valor para o estado PotenciaExaustoresForm.
 */

/**
 * Estado que guarda o valor do input de quantidade de acionamentos de cortinas.
 * @typedef {EstadoReact} QuantidadeAcCortinasForm 
 * @property {number} QuantidadeAcCortinasForm Valor do input de quantidade de acionamento de cortinas do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeAcCortinasForm Função responsável por definir novo valor para o estado QuantidadeAcCortinasForm.
 */

/**
 * Estado que guarda o valor do input de potencia dos acionamentos de cortinas.
 * @typedef {EstadoReact} PotenciaAcCortinasForm
 * @property {number} PotenciaAcCortinasForm Valor do input de potencia do acionamento das cortinas do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaAcCortinasForm Função responsável por definir novo valor para o estado PotenciaAcCortinasForm.
 */

/**
 * Estado que guarda o valor do input de quantidade de acionamentos de inlet.
 * @typedef {EstadoReact} QuantidadeAcInletForm
 * @property {number} QuantidadeAcInletForm Valor do input de quantidade de acionamento de inlet do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeAcInletForm Função responsável por definir novo valor para o estado QuantidadeAcInletForm.
 */

/**
 * Estado que guarda o valor do input de potência dos acionamentos de inlet.
 * @typedef {EstadoReact} PotenciaAcInletForm 
 * @property {number} PotenciaAcInletForm Valor do input de potencia dos acionamentos de inlet do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaAcInletForm Função responsável por definir novo valor para o estado PotenciaAcInletForm.
 */

/**
 * Estado que guarda valor do input do tipo checkout que demonstra se possui atuador de inlet.
 * @typedef {EstadoReact} PossuiAtuadorInlet
 * @property {boolean} PossuiAtuadorInlet Valor do input de tipo checkout que demonstra se possui atuador de inlet, caso esteja marcado é true e desmarcado é false.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setPossuiAtuadorInlet Função responsável por definir o novo valor para o estado PossuiAtuadorInlet.
 */

/**
 * Estado que guarda o valor do input de quantidade de ventiladores.
 * @typedef {EstadoReact} QuantidadeVentiladoresForm
 * @property {number} QuantidadeVentiladoresForm Valor do input de quantidade de ventiladores do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeVentiladoresForm Função responsável por definir novo valor para o estado QauntidadeVentiladoresForm.
 */

/**
 * Estado que guarda o valor do input de potencia dos ventiladores.
 * @typedef {EstadoReact} PotenciaVentiladoresForm
 * @property {number} PotenciaVentiladoresForm Valor do input de potencia dos ventiladores do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaVentiladoresForm Função responsável por definir novo valor para o estado PotenciaVentiladoresForm.
 */

/**
 * Estado que guarda o valor do input de quantidade de nebulizadores.
 * @typedef {EstadoReact} QuantidadeNebulizador
 * @property {number} QuantidadeNebulizador Valor do input de quantidade de nebulizadores do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeNebulizador Função responsável por definir novo valor para o estado QuantidadeNebulizador.
 */

/**
 * Estado que guarda o valor do input de potencia dos nebulizadores.
 * @typedef {EstadoReact} PotenciaNebulizador
 * @property {number} PotenciaNebulizador Valor do input de potencia dos nebulizadores do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaNebulizador Função responsável por definir novo valor para o estado PotenciaNebulizador.
 */

/**
 * Estado que guarda o valor do input de quantidade de cooling.
 * @typedef {EstadoReact} QuantidadeCooling
 * @property {number} QuantidadeCooling Valor do input de quantidade de cooling do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeCooling Função responsável por definir novo valor para o estado QuantidadeCooling.
 */

/**
 * Estado que guarda o valor do input de potencia do cooling.
 * @typedef {EstadoReact} PotenciaCooling
 * @property {number} PotenciaCooling Valor do input de potencia do cooling do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaCooling Função responsável por definir novo valor para o estado PotenciaCooling.
 */

/**
 * Estado que guarda o valor do input de quantidade de linhas primarias. 
 * @typedef {EstadoReact} QuantidadeLinhasPrimarias
 * @property {number} QuantidadeLinhasPrimarias Valor do input de quantidade de linhas primarias do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeLinhasPrimarias Função responsável por definir novo valor para o estado QuantidadeLinhasPrimarias.
 */

/**
 * Estado que guarda o valor do input de potencia das linhas .
 * @typedef {EstadoReact} PotenciaLinhas
 * @property {number} PotenciaLinhas Valor do input de potencia das linhas do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaLinhas Função responsável por definir novo valor para o estado PotenciaLinhas.
 */

/**
 * Estado que guarda o valor do input de quantidade de comedouros.
 * @typedef {EstadoReact} QuantidadeComedouros
 * @property {number} QuantidadeComedouros Valor do input de quantidade de comedouros do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeComedouros Função responsável por definir novo valor para o estado QuantidadeComedouros.
 */

/**
 * Estado que guarda o valor do input de potencia dos comedouros.
 * @typedef {EstadoReact} PotenciaComedouros
 * @property {number} PotenciaComedouros Valor do input de potencia dos comedouros do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaComedouros Função responsável por definir novo valor para o estado PotenciaComedouros.
 */

/**
 * Estado que guarda o valor do input de quantidade de aquecedores 1.
 * @typedef {EstadoReact} QuantidadeAquecedor1
 * @property {number} QuantidadeAquecedor1 Valor do input de quantidade de aquecedores 1 do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeAquecedores1 Função responsável por definir novo valor para o estado QuantidadeAquecedores1.
 */

/**
 * Estado que guarda o valor do input de potencia dos aquecedores 1.
 * @typedef {EstadoReact} PotenciaAquecedor1
 * @property {number} PotenciaAquecedor1 Valor do input de potencia dos aquecedores 1 do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaAquecedores1 Função responsável por definir novo valor para o estado PotenciaAquecedores1.
 */

/**
 * Estado que guarda o valor do input de quantidade de aquecedores 2.
 * @typedef {EstadoReact} QuantidadeAquecedor2
 * @property {number} QuantidadeAquecedor2 Valor do input de quantidade de aquecedores 2 do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeAquecedor2 Função responsável por definir novo valor para o estado QuantidadeAquecedores2.
 */

/**
 * Estado que guarda o valor do input de potencia dos aquecedores 2.
 * @typedef {EstadoReact} PotenciaAquecedor2
 * @property {number} PotenciaAquecedores2 Valor do input de potencia dos aquecedores 2 do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaAquecedores2 Função responsável por definir novo valor para o estado PotenciaAquecedores2.
 */

/**
 * Estado que guarda o valor do input de quantidade de foguista.
 * @typedef {EstadoReact} QuantidadeFoguista
 * @property {number} QuantidadeFoguista Valor do input de quantidade de foguista do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeFoguista Função resçponsável por definir novo valor para o estado QuantidadeFoguista. 
 */

/**
 * Estado que guarda o valor do input de potencia dos foguistas.
 * @typedef {EstadoReact} PotenciaFoguista
 * @property {number} PotenciaFoguista Valor do input de potencia do foguista do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaFoguista Função responsavel por definir novo valor para o estado PotenciaFoguista.
 */

/**
 * Estado que guarda o valor da option selecionada no select de forno possui painel.
 * @typedef {EstadoReact} FornoPossuiPainel
 * @property {boolean} FornoPossuiPainel Valor da option selecionada no select de forno possui painel ? do formulário. Caso possua é true e caso não possui é false.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setFornoPossuiPainel Função responsável por definir novo valor para o estado FornoPossuiPainel.
 */

/**
 * Estado que guarda o valor do input de quantidade de lampadas.
 * @typedef {EstadoReact} QuantidadeLampadas
 * @property {number} QuantidadeLampadas Valor do input de quantidade de lampadas do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeLampadas Função responsável por definir novo valor para o estado QuantidadeLampadas.
 */

/**
 * Estado que guarda o valor do input de potencia das lampadas.
 * @typedef {EstadoReact} PotenciaLampadas
 * @property {number} PotenciaLampadas Valor do input de potencia das lampadas do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setPotenciaLampadas Função responsável por definir novo valor para o estado PotenciaLampadas.
 */

/**
 * Estado que guarda o valor da option selecionada no select de cor das lampadas.
 * @typedef {EstadoReact} CorLampadas
 * @property {number} CorLampadas Valor da option selecionada no select de cor das lampadas do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setCorLampadas Função responsável por definir novo valor para o estado CorLampadas.
 */

/**
 * Estado que guarda o valor do input de quantidade de circuitos.
 * @typedef {EstadoReact} QuantidadeCircuitos
 * @property {number} QuantidadeCircuitos Valor do input de quantidade de circuitos do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeCircuitos Função responsável por definir novo valor para o estado QuantidadeCircuitos.
 */

/**
 * Estado que guarda o valor da option selecionada no select de dimerizavel.
 * @typedef {EstadoReact} Dimerizavel
 * @property {boolean} Dimerizavel Valor da option selecionada no select de dimerizavel do formulário. True é dimerizavel e false não é dimerizavel.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setDimerizavel Função responsável por definir novo valor para o estado Dimerizavel.
 */

/**
 * Estado que guarda o valor do input de quantidade de sonda T.
 * @typedef {ÈstadoReact} QuantidadeSondaT
 * @property {number} QuantidadeSondaT Valor do input de quantidade de sonda T do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeSondaT Função responsável por definir novo valor para o estado QuantidadeSondaT.
 */

/**
 * Estado que guarda o valor do input de quantidade de sonda TU.
 * @typedef {EstadoReact} QuantidadeSondaTU
 * @property {number} QuantidadeSondaTU Valor do input de quantidade de sonda TU do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeSondaTU Função responsável por definir novo valor para o estado QuantidadeSondaTU.
 */

/**
 * Estado que guarda o valor do input de quantidade de sonda PE.
 * @typedef {EstadoReact} QuantidadeSondaPE
 * @property {number} QuantidadeSondaPE Valor do input de quantidade de sonda PE do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeSondaPE Função responsável por definir novo valor para o estado QuantidadeSondaPE.
 */

/**
 * Estado que guarda o valor do input de quantidade de sonda Co2. 
 * @typedef {EstadoReact} QuantidadeSondaCo2
 * @property {number} QuantidadeSondaCo2 Valor do input de quantidade de sonda Co2 do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeSondaCo2 Função responsável por definir novo valor para o estado QuantidadeSondaCo2.
 */

/**
 * Estado que guarda o valor do input de quantidade de sonda H2O.
 * @typedef {EstadoReact} QuantidadeSondaH2O
 * @property {number} QuantidadeSondaH2O Valor do input de quantidade de sonda h2o do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeSondaH2O Função responsável por definir novo valor para o estado QuantidadeSondaH2O.
 */

/**
 * Estado que guarda o valor da option selecionada no select de motorredutor de cortina.
 * @typedef {EstadoReact} MotorRedutorCortina
 * @property {boolean} MotorRedutorCortina Valor da option selecionada no select de motorredutor de cortina do formulario, true possui motorredutor e false não possui.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setMotorRedutorCortina Função responsável or definir novo valor para o estado MotorRedutorCortina.
 */

/**
 * Estado que guarda o valor da option selecionada no select de gatilho.
 * @typedef {EstadoReact} Gatilho
 * @property {boolean} Gatilho Valor da option selecionada no select de gatilho do formulário, true possui gatilho e false não possui.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setGatilho Função responsável por definir novo valor para o estado Gatilho.
 */

/**
 * Estado que guarda o valor da option selecionada no select de flushing.
 * @typedef {EstadoReact} Flushing
 * @property {boolean} Flushing Valor da option selecionada no select de gatilho do formulário, true possui flushing e false não possui.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setFlushing Função responsável por definir novo valor par ao estado Flushing.
 */

/**
 * Estado que guarda o valor do input de quantidade de linhas.
 * @typedef {EstadoReact} QuantidadeLinhas
 * @property {number} QuantidadeLinhas Valor do input de quantidade de linhas do formulário.
 * @property {React.Dispatch<React.SetStateAction<number>>} setQuantidadeLinhas Função responsável por definir novo valor para o estado QuantidadeLinhas.
 */

/**
 * Estado que guarda o valor da option selecionada no select de tipo de animal.
 * @typedef {EstadoReact} TipoAnimalGalpao
 * @property {string} TipoAnimalGalpao Valor da option selecionada no select de tipo de animal do formulário. Tipos são 'Suinos' ou 'Aves'.
 * @property {React.Dispatch<React.SetStateAction<string>>} setTipoAnimalGalpao Função responsável por definir novo valor para o estado TipoAnimalGalpao.
 */

/**
 * Estado que guarda o valor da option selecionada no select de tipo de criação animal.
 * @typedef {EstadoReact} TipoCriacaoAnimal
 * @property {string} TipoCriacaoAnimal Valor da option selecionada no select de tipo de criação animal do formulário. Tipos são 'Frango de Corte', 'Recria', 'Produção', 'Gestacao', 'Maternidade','Creche' e 'Terminacao'.
 * @property {React.Dispatch<React.SetStateAction<string>>} setTipoCriacaoAnimal Função responsável por definir novo valor para o estado TipoCriacaoAnimal.
 */

/**
 * Estado que guarda todos os dados captados na parte de dados do galpão do formulário.
 * @typedef {EstadoReact} dadosGalpao
 * @property {object} DadosGalpao Objeto com os dados coletados nos inputs do formulário na parte de dados do galpão.
 * @property {React.Dispatch<React.SetStateAction<object>>} setDadosGalpao Função responsável por definir novo valor para o estado DadosGalpao.
 */

/**
 * Estado que guarda todos os dados captados na parte de ventilação do formulário.
 * @typedef {EstadoReact} DadosVentilacao
 * @property {object} DadosVentilacao Objeto com os dados coletados nos inputs do formulário na parte de ventilação.
 * @property {React.Dispatch<React.SetStateAction<object>>} setDadosVentilacao Função responsável por definir novo valor para o estado DadosVentilacao.
 */

/**
 * Estado que guarda todos os dados captados na parte de resfriamento do formulário.
 * @typedef {EstadoReact} DadosResfriamento
 * @property {object} DadosResfriamento Objeto com os dados coletados nos inputs do formulário na parte de resfriamento.
 * @property {React.Dispatch<React.SetStateAction<object>>} setDadosResfriamento Função responsável por definir novo valor para o estado DadosResfriamento. 
 */

/**
 * Estado que guarda todos os dados captados na parte de Alimentação do formulário.
 * @typedef {EstadoReact} DadosAlimentacao
 * @property {object} DadosAlimentacao Objeto com os dados coletados nos inputs do formulário na parte de alimentação.
 * @property {React.Dispatch<React.SetStateAction<object>>} setDadosAlimentacao Função responsável por definir novo valor para o estado DadosAlimentacao.
 */

/**
 * Estado que guarda todos os dados captados na parte de aquecedores do formulário.
 * @typedef {EstadoReact} DadosAquecedores
 * @property {object} DadosAquecedores Objeto com os dados coletados nos inputs do formulário na parte de aquecedores.
 * @property {React.Dispatch<React.SetStateAction<object>>} setDadosAquecedores Função responsável por definir novo valor para o estado DadosAquecedores.
 */

/**
 * Estado que guarda todos os dados captados na parte de iluminação do formulário.
 * @typedef {EstadoReact} DadosIluminacao
 * @property {object} DadosIluminacao Objeto com os dados coletados nos inputs do formulário na parte de iluminação.
 * @property {React.Dispatch<React.SetStateAction<object>>} setDadosIluminacao Função responsável por definir novo valor para o estado DadosIluminacao.
 */

/**
 * Estado que guarda todos os dados captados na parte de Diversos do formulário.
 * @typedef {EstadoReact} DadosDiversos 
 * @property {object} DadosDiversos Objeto com os dados coletados nos inputs do formulário na parte de diversos.
 * @property {React.Dispatch<React.SetStateAction<object>>} setDadosDiversos Função responsável por definir novo valor para o estado DadosDiversos.
 */

/**
 * Estado que guarda todos os dados coletados pelo formulário que serão enviados para o backend fazer os calculos.
 * @typedef {EstadoReact} TodosOsDados
 * @property {object} TodosOsDados Objeto com os valores dos estados DadosGalpao, DadosVentilacao, DadosResfriamento, DadosAlimentacao, DadosAquecedores, DadosIluminacao, DadosDiversos que foram coletados no formulário.
 * @property {React.Dispatch<React.SetStateAction<object>>} setTodosOsDados Função reponsável por definir novo valor para o estado TodosOsDados.
 */

/**
 * Componente com formulario completo que pega todas as informações a respeito do galpao e equipamentos.
 * @returns {JSX.Element} Componente com formulario.
 */
function Dimensionamento(){
    const [ComprimentoForm, setComprimentoForm] = useState('')
    const [LarguraForm, setLarguraForm] = useState('')
    const [AlturaForm, setAlturaForm] = useState('')
    const [ControladorForm, setControladorForm] = useState('')
    const [RedeEletricaForm, setRedeEletricaForm] = useState('')
    const [ProtecaoMotorForm, setProtecaoMotorForm] = useState('')
    const [MarcaForm, setMarcaForm] = useState('')
    const [QuantidadeCaixaForm, setQuantidadeCaixaForm] = useState('')
    const [SegurancaForm, setSegurancaForm] = useState('')
    const [QuantidadeExaustoresForm,setQuantidadeExaustoresForm] = useState('')
    const [PotenciaExaustoresForm,setPotenciaExaustoresForm] = useState('')
    const [QuantidadeAcCortinasForm, setQuantidadeAcCortinasForm] = useState('')
    const [PotenciaAcCortinasForm,setPotenciaAcCortinasForm] = useState('')
    const [QuantidadeAcInletForm, setQuantidadeAcInletForm] = useState('')
    const [PotenciaAcInletForm,setPotenciaAcInletForm] = useState('')
    const [PossuiAtuadorInlet, setPossuiAtuadorInlet] = useState(false)
    const [QuantidadeVentiladoresForm, setQuantidadeVentiladoresForm] = useState('')
    const [PotenciaVentiladoresForm,setPotenciaVentiladoresForm] = useState('')
    const [QuantidadeNebulizador, setQuantidadeNebulizador] = useState('')
    const [PotenciaNebulizador, setPotenciaNebulizador] = useState('')
    const [QuantidadeCooling, setQuantidadeCooling] = useState('')
    const [PotenciaCooling, setPotenciaCooling] = useState('')
    const [QuantidadeLinhasPrimarias, setQuantidadeLinhasPrimarias] = useState('')
    const [PotenciaLinhas, setPotenciaLinhas] = useState('')
    const [QuantidadeComedouros, setQuantidadeComedouros] = useState('')
    const [PotenciaComedouros, setPotenciaComedouros] = useState('')
    const [QuantidadeAquecedor1, setQuantidadeAquecedor1] = useState('')
    const [PotenciaAquecedor1, setPotenciaAquecedor1] = useState('')
    const [QuantidadeAquecedor2, setQuantidadeAquecedor2] = useState('')
    const [PotenciaAquecedor2, setPotenciaAquecedor2] = useState('')
    const [QuantidadeFoguista, setQuantidadeFoguista] = useState('')
    const [PotenciaFoguista, setPotenciaFoguista] = useState('')
    const [FornoPossuiPainel, setFornoPossuiPainel] = useState('false')
    const [QuantidadeLampadas, setQuantidadeLampadas] = useState('')
    const [PotenciaLampadas, setPotenciaLampadas] = useState('')
    const [CorLampadas, setCorLampadas] = useState('')
    const [QuantidadeCircuitos, setQuantidadeCircuitos] = useState('')
    const [Dimerizavel, setDimerizavel] = useState('true')
    const [QuantidadeSondaT, setQuantidadeSondaT] = useState('')
    const [QuantidadeSondaTU, setQuantidadeSondaTU] = useState('')
    const [QuantidadeSondaPE, setQuantidadeSondaPE] = useState('')
    const [QuantidadeSondaCo2, setQuantidadeSondaCo2] = useState('')
    const [QuantidadeSondaH2O, setQuantidadeSondaH2O] = useState('')
    const [MotorRedutorCortina, setMotorRedutorCortina] = useState('true')
    const [Gatilho, setGatilho] = useState('false')
    const [Flushing, setFlushing] = useState('false')
    const [QuantidadeLinhas, setQuantidadeLinhas] = useState('')
    const [TipoAnimalGalpao, setTipoAnimalGalpao] = useState('')
    const [TipoCriacaoAnimal, setTipoCriacaoAnimal] = useState('')

    const [DadosGalpao,setDadosGalpao] = useState(null)
    const [DadosVentilacao,setDadosVentilacao] = useState(null)
    const [DadosResfriamento, setDadosResfriamento] = useState(null)
    const [DadosAlimentacao, setDadosAlimentacao] = useState(null)
    const [DadosAquecedores, setDadosAquecedores] = useState(null)
    const [DadosIluminacao, setDadosIluminacao] = useState(null)
    const [DadosDiversos, setDadosDiversos] = useState(null)

    const [TodosOsDados, setTodosOsDados] = useState(null)

    //React hook que não renderiza a pagina quando tem seu valor alterado, utilizado para confirmar quando todos os dados no estado TodosOsDados foram definidos para então mostrar o resultado apartir da função MostraResultado.
    const todosOsDadosDefinidos = useRef(false)

    // Estados React que serão definidos como propriedade do componente DimensionamentoGalpao.
    const todosDadosGalpao = {
        setComprimentoForm,setLarguraForm,setAlturaForm,setControladorForm,setRedeEletricaForm,setProtecaoMotorForm,setMarcaForm,setQuantidadeCaixaForm,setSegurancaForm,ComprimentoForm,LarguraForm,AlturaForm,ControladorForm,RedeEletricaForm,ProtecaoMotorForm,MarcaForm,QuantidadeCaixaForm,SegurancaForm
    }

    // Estados React que serão definidos como propriedade do componente DimensionamentoVentilacao.
    const todosDadosVentilacao = {
        setQuantidadeExaustoresForm,setPotenciaExaustoresForm,setQuantidadeAcCortinasForm,setPotenciaAcCortinasForm,setQuantidadeAcInletForm,setPotenciaAcInletForm,setPossuiAtuadorInlet,setQuantidadeVentiladoresForm,setPotenciaVentiladoresForm,QuantidadeExaustoresForm,PotenciaExaustoresForm,QuantidadeAcCortinasForm,PotenciaAcCortinasForm,QuantidadeAcInletForm,PotenciaAcInletForm,PossuiAtuadorInlet,QuantidadeVentiladoresForm,PotenciaVentiladoresForm
    }

    // Estados React que serão definidos como propriedade do componente DimensionamentoResfriamento.
    const todosDadosResfriamento = {
        setQuantidadeNebulizador,setPotenciaNebulizador,setQuantidadeCooling,setPotenciaCooling,QuantidadeNebulizador,PotenciaNebulizador,QuantidadeCooling,PotenciaCooling
    }

    // Estados React que serão definidos como propriedade do componente DimensionamentoAlimentacao.
    const todosDadosAlimentacao ={
        setQuantidadeLinhasPrimarias,setPotenciaLinhas,setQuantidadeComedouros,setPotenciaComedouros,QuantidadeLinhasPrimarias,PotenciaLinhas,QuantidadeComedouros,PotenciaComedouros
    }

    // Estados React que serão definidos como propriedade do componente DimensionamentoAquecedores.
    const todosDadosAquecedores = {
        setQuantidadeAquecedor1,setPotenciaAquecedor1,setQuantidadeAquecedor2,setPotenciaAquecedor2,setQuantidadeFoguista,setPotenciaFoguista,setFornoPossuiPainel,QuantidadeAquecedor1,PotenciaAquecedor1,QuantidadeAquecedor2,PotenciaAquecedor2,QuantidadeFoguista,PotenciaFoguista,FornoPossuiPainel
    }

    // Estado React que serão definidos como propriedade do componente DimensionamentoIluminacao.
    const todosDadosIluminacao = {
        setQuantidadeLampadas,setPotenciaLampadas,setCorLampadas,setDimerizavel,setQuantidadeCircuitos,QuantidadeLampadas,PotenciaLampadas,CorLampadas,Dimerizavel,QuantidadeCircuitos
    }

    // Estado React que serão definidos como propriedade do componente DimensionamentoDiversos.
    const todosDadosDiversos = {
        setQuantidadeSondaT,setQuantidadeSondaTU,setQuantidadeSondaPE,setQuantidadeSondaCo2,setQuantidadeSondaH2O,setMotorRedutorCortina,setGatilho,setFlushing,setTipoAnimalGalpao,setTipoCriacaoAnimal,setQuantidadeLinhas,QuantidadeLinhas,QuantidadeSondaT,QuantidadeSondaTU,QuantidadeSondaPE,QuantidadeSondaCo2,QuantidadeSondaH2O,MotorRedutorCortina,Gatilho,Flushing,TipoAnimalGalpao,TipoCriacaoAnimal
    }

    
    // Define o valor dos estados de dados de cada parte do formulario com os valores dos estados que guardam os valores dos inputs e selects do formulário. Após todos definidos define todosOsDadosDefinidos.current como true para simbolizar para o useEffect que possui a funcao MostraResultado que todos os dados foram definidos.
    async function DefineDados(event){
        event.preventDefault()
      setDadosGalpao({
            comprimento:ComprimentoForm,
            largura:LarguraForm,
            altura:AlturaForm,
            controlador:ControladorForm,
            redeEletrica:RedeEletricaForm,
            protecaoMotor:ProtecaoMotorForm,
            marcaComponentes:MarcaForm,
            quantidadeCaixas:QuantidadeCaixaForm,
            seguranca:SegurancaForm,
        })
        setComprimentoForm('')
        setLarguraForm('')
        setAlturaForm('')
        setControladorForm('')
        setRedeEletricaForm('')
        setProtecaoMotorForm('')
        setMarcaForm('')
        setQuantidadeCaixaForm('')
        setSegurancaForm('')

        setDadosVentilacao({
        exaustor:{quantidade:QuantidadeExaustoresForm,potencia:PotenciaExaustoresForm},
        acCortina:{quantidade:QuantidadeAcCortinasForm,potencia:PotenciaAcCortinasForm},
        acInlet:{quantidade:QuantidadeAcInletForm,potencia:PotenciaAcInletForm,atuador:PossuiAtuadorInlet},
        ventilador:{quantidade:QuantidadeVentiladoresForm,potencia:PotenciaVentiladoresForm},
        })
        setQuantidadeExaustoresForm('')
        setPotenciaExaustoresForm('')
        setQuantidadeAcCortinasForm('')
        setPotenciaAcCortinasForm('')
        setQuantidadeAcInletForm('')
        setPotenciaAcInletForm('')
        setPossuiAtuadorInlet(false)
        setQuantidadeVentiladoresForm('')
        setPotenciaVentiladoresForm('')

        setDadosResfriamento({
        nebulizadores:{quantidade:QuantidadeNebulizador,potencia:PotenciaNebulizador},
        cooling:{quantidade:QuantidadeCooling,potencia:PotenciaCooling}
        })
        setQuantidadeCooling('')
        setPotenciaCooling('')
        setQuantidadeNebulizador('')
        setPotenciaNebulizador('')

        setDadosAlimentacao({
        linhas:{quantidade:QuantidadeLinhasPrimarias,potencia:PotenciaLinhas},
        comedouros:{quantidade:QuantidadeComedouros,potencia:PotenciaComedouros}
        })
        setQuantidadeLinhasPrimarias('')
        setPotenciaLinhas('')
        setQuantidadeComedouros('')
        setPotenciaComedouros('')

        setDadosAquecedores({
        aquecedor1:{quantidade:QuantidadeAquecedor1,potencia:PotenciaAquecedor1},
        aquecedor2:{quantidade:QuantidadeAquecedor2,potencia:PotenciaAquecedor2},
        foguista:{quantidade:QuantidadeFoguista,potencia:PotenciaFoguista},
        fornoPossuiPainel:FornoPossuiPainel
        })
        setQuantidadeAquecedor1('')
        setPotenciaAquecedor1('')
        setQuantidadeAquecedor2('')
        setPotenciaAquecedor2('')
        setQuantidadeFoguista('')
        setPotenciaFoguista('')
        setFornoPossuiPainel(false)

        setDadosIluminacao({
            quantidadeLampadas:QuantidadeLampadas,
            potenciaLampadas:PotenciaLampadas,
            corLampadas:CorLampadas,
            circuitos:QuantidadeCircuitos,
            dimerizavel:Dimerizavel
        })
        setQuantidadeLampadas('')
        setPotenciaLampadas('')
        setCorLampadas('')
        setQuantidadeCircuitos('')
        setDimerizavel(true)

        setDadosDiversos({
            sondaT:QuantidadeSondaT,
            sondaTU:QuantidadeSondaTU,
            sondaPE:QuantidadeSondaPE,
            sondaCo2:QuantidadeSondaCo2,
            sondaH2O:QuantidadeSondaH2O,
            motorRedutorCortina:MotorRedutorCortina,
            gatilho:Gatilho,
            flushing:Flushing,
            linhas:QuantidadeLinhas,
            tipoAnimalGalpao:TipoAnimalGalpao,
            tipoCriacaoAnimal:TipoCriacaoAnimal
        })
        setQuantidadeSondaT('')
        setQuantidadeSondaTU('')
        setQuantidadeSondaPE('')
        setQuantidadeSondaCo2('')
        setQuantidadeSondaH2O('')
        setMotorRedutorCortina(true)
        setGatilho('')
        setFlushing('')
        setQuantidadeLinhas('')
        setTipoAnimalGalpao('Aves')
        setTipoCriacaoAnimal('')
       }

       
       


    // Quando alterado os valores dos estados que guardam os dados de cada parte do formulario, atualiza o estado que guarda todos os dados com os novos valores.
    useEffect(() =>{
     setTodosOsDados({
         DadosGalpao ,
         DadosVentilacao,
         DadosResfriamento,
         DadosAlimentacao,
         DadosAquecedores,
         DadosIluminacao,
         DadosDiversos,
        
     })
     todosOsDadosDefinidos.current = true
    },[DadosGalpao, DadosVentilacao, DadosResfriamento, DadosAlimentacao,DadosAquecedores,DadosIluminacao,DadosDiversos,])

    // Quando o estado TodosOsDados é atualizado e o hook todosOsDadosDefinidos esta definido como true, Envia os dados para o backend calcular e cria pdf com o resultado. No momento servidor backend de calculos não foi criado e apenas pega os valores de TodosOsDados para criar um pdf com os dados coletados no formulário e baixa arquivo json com os dados.
    useEffect(() =>{
        async function MostraResultado(){
            if (TodosOsDados && todosOsDadosDefinidos.current === true){
                //console.log(TodosOsDados)
            
                //faz download do arquivo json
                const dadosString = JSON.stringify(TodosOsDados,null, 2)
                const blob = new Blob([dadosString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const linkDownload = document.createElement('a');
                linkDownload.href = url;
                linkDownload.download = 'exemploArquivoDimensionamento.json';
                document.body.appendChild(linkDownload);
                linkDownload.click();
                document.body.removeChild(linkDownload);
                URL.revokeObjectURL(url);
                
                // Envia para o servidor python " Aguardando servidor Real "
               /* const options={
                    method: 'POST',
                        headers: {
                        accept: 'application/json',
                        'content-type': 'application/json'
                        },
                        body: JSON.stringify(TodosOsDados)
                    
                    }
                    
                const resposta = await fetch('http://localhost:5000/enviaDimensionamento', options)*/
                
                // Função que cria o PDF e faz Download.
                 CriaPdfDimensionamento(TodosOsDados,/*await resposta.json()*/)
                
                }

                
            // Define como false para simbolizar que ja foi mostrado o resultado.
            todosOsDadosDefinidos.current = false

        }
        MostraResultado()
    },[TodosOsDados])
    
    return(
        <DimensionamentoContainer>
            <Form width='100%' onSubmit={DefineDados} >
            <Titulo2 color="orange" font_size='40px' text_shadow='2px 2px 2px black'>COLETA DE DADOS DE DIMENSIONAMENTO:</Titulo2>
            <DimensionamentoGalpao 
            todosDadosGalpao = {{...todosDadosGalpao}}
            />
            <DimensionamentoVentilacao
            todosDadosVentilacao = {{...todosDadosVentilacao}}
            />
            <DimensionamentoResfriamento
            todosDadosResfriamento= {{...todosDadosResfriamento}}
            />
            <DimensionamentoAlimentacao
            todosDadosAlimentacao={{...todosDadosAlimentacao}}
            />
            <DimensionamentoAquecedores
            todosDadosAquecedores={{...todosDadosAquecedores}}
            />
            <DimensionamentoIluminacao
            todosDadosIluminacao={{...todosDadosIluminacao}}
            />
            <DimensionamentoDiversos
            todosDadosDiversos={{...todosDadosDiversos}}
            />
            <Input type="Submit"  color="black" padding='20px 0px' background_color='orange' border='white 0.5px solid' border_radius='10px' font_size='24px' width='30%' value='GERAR QUADRO' cursor='pointer' readOnly/>
            
            </Form>

        </DimensionamentoContainer>
        

    )
}

export default Dimensionamento