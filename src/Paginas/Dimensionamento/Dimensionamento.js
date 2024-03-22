import styled from "styled-components";
import Titulo2 from "../../Components/Titulo2/Titulo2";
import Header from "../../Components/Header/Header";
import DimensionamentoGalpao from "../../Components/DimensionamentoGalpao/DimensionamentoGalpao.js";
import { useEffect, useState } from "react";
import DimensionamentoVentilacao from "../../Components/DimensionamentoVentilacao/DimensionamentoVentilacao.js";
import Form from "../../Components/Form/Form.js"
import Input from "../../Components/Input/Input.js";
import DimensionamentoResfriamento from "../../Components/DimensionamentoResfriamento/DimensionamentoResfriamento.js";
import DimensionamentoAlimentacao from "../../Components/DimensionamentoAlimentacao/DimensionamentoAlimentacao.js";
import DimensionamentoAquecedores from "../../Components/DimensionamentoAquecedores/DimensionamentoAquecedores.js";
import DimensionamentoIluminacao from "../../Components/DimensionamentoIluminacao/DimensionamentoIluminacao.js";

const DimensionamentoContainer = styled.main`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
`
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
    const [QuantidadeLinhas, setQuantidadeLinhas] = useState('')
    const [PotenciaLinhas, setPotenciaLinhas] = useState('')
    const [QuantidadeComedouros, setQuantidadeComedouros] = useState('')
    const [PotenciaComedouros, setPotenciaComedouros] = useState('')
    const [QuantidadeAquecedor1, setQuantidadeAquecedor1] = useState('')
    const [PotenciaAquecedor1, setPotenciaAquecedor1] = useState('')
    const [QuantidadeAquecedor2, setQuantidadeAquecedor2] = useState('')
    const [PotenciaAquecedor2, setPotenciaAquecedor2] = useState('')
    const [QuantidadeFoguista, setQuantidadeFoguista] = useState('')
    const [PotenciaFoguista, setPotenciaFoguista] = useState('')
    const [FornoPossuiPainel, setFornoPossuiPainel] = useState(false)
    const [QuantidadeWY03, setQuantidadeWY03] = useState('')
    const [QuantidadeWY04, setQuantidadeWY04] = useState('')
    const [QuantidadeBocais, setQuantidadeBocais] = useState('')
    const [QuantidadeCircuitos, setQuantidadeCircuitos] = useState('')
    const [Dimerizavel, setDimerizavel] = useState(true)
    const [TodosOsDados, setTodosOsDados] = useState('')

    const todosDadosGalpao = {
        setComprimentoForm,setLarguraForm,setAlturaForm,setControladorForm,setRedeEletricaForm,setProtecaoMotorForm,setMarcaForm,setQuantidadeCaixaForm,setSegurancaForm,ComprimentoForm,LarguraForm,AlturaForm,ControladorForm,RedeEletricaForm,ProtecaoMotorForm,MarcaForm,QuantidadeCaixaForm,SegurancaForm
    }
    const todosDadosVentilacao = {
        setQuantidadeExaustoresForm,setPotenciaExaustoresForm,setQuantidadeAcCortinasForm,setPotenciaAcCortinasForm,setQuantidadeAcInletForm,setPotenciaAcInletForm,setPossuiAtuadorInlet,setQuantidadeVentiladoresForm,setPotenciaVentiladoresForm,QuantidadeExaustoresForm,PotenciaExaustoresForm,QuantidadeAcCortinasForm,PotenciaAcCortinasForm,QuantidadeAcInletForm,PotenciaAcInletForm,PossuiAtuadorInlet,QuantidadeVentiladoresForm,PotenciaVentiladoresForm
    }
    const todosDadosResfriamento = {
        setQuantidadeNebulizador,setPotenciaNebulizador,setQuantidadeCooling,setPotenciaCooling,QuantidadeNebulizador,PotenciaNebulizador,QuantidadeCooling,PotenciaCooling
    }
    const todosDadosAlimentacao ={
        setQuantidadeLinhas,setPotenciaLinhas,setQuantidadeComedouros,setPotenciaComedouros,QuantidadeLinhas,PotenciaLinhas,QuantidadeComedouros,PotenciaComedouros
    }
    const todosDadosAquecedores = {
        setQuantidadeAquecedor1,setPotenciaAquecedor1,setQuantidadeAquecedor2,setPotenciaAquecedor2,setQuantidadeFoguista,setPotenciaFoguista,setFornoPossuiPainel,QuantidadeAquecedor1,PotenciaAquecedor1,QuantidadeAquecedor2,PotenciaAquecedor2,QuantidadeFoguista,PotenciaFoguista,FornoPossuiPainel
    }
    const todosDadosIluminacao = {
        setQuantidadeWY03,setQuantidadeWY04,setQuantidadeBocais,setDimerizavel,setQuantidadeCircuitos,QuantidadeWY03,QuantidadeWY04,QuantidadeBocais,Dimerizavel,QuantidadeCircuitos
    }

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
            Segurança:SegurancaForm,
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
        exaustor:{quantidade:QuantidadeVentiladoresForm,potencia:PotenciaExaustoresForm},
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
        linhas:{quantidade:QuantidadeLinhas,potencia:PotenciaLinhas},
        comedouros:{quantidade:QuantidadeComedouros,potencia:PotenciaComedouros}
        })
        setQuantidadeLinhas('')
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
            lampadaWY03:QuantidadeWY03,
            lampadaWY04:QuantidadeWY04,
            bocais:QuantidadeBocais,
            circuitos:QuantidadeCircuitos,
            dimerizavel:Dimerizavel
        })
        setQuantidadeWY03('')
        setQuantidadeWY04('')
        setQuantidadeBocais('')
        setQuantidadeCircuitos('')
        setDimerizavel(true)
       }

       
       
       const [dadosGalpao,setDadosGalpao] = useState({})
    
    const [dadosVentilacao,setDadosVentilacao] = useState({})

    const [dadosResfriamento, setDadosResfriamento] = useState({})
    
    const [dadosAlimentacao, setDadosAlimentacao] = useState({})

    const [dadosAquecedores, setDadosAquecedores] = useState({})

    const [dadosIluminacao, setDadosIluminacao] = useState({})
    
    useEffect(() =>{
     setTodosOsDados({
         dadosGalpao ,
         dadosVentilacao,
         dadosResfriamento,
         dadosAlimentacao,
         dadosAquecedores,
         dadosIluminacao
     })
    },[dadosGalpao, dadosVentilacao, dadosResfriamento, dadosAlimentacao,dadosAquecedores,dadosIluminacao])

    useEffect(() =>{
        console.log(TodosOsDados)
    },[TodosOsDados])
    
    return(
        <DimensionamentoContainer>
            <Form width='100%' onSubmit={DefineDados}>
            <Header/>
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
            <Input type="Submit" color="black" padding='20px 0px' background_color='orange' border='white 0.5px solid' border_radius='10px' font_size='24px' width='30%' value='GERAR QUADRO'/>
            </Form>

        </DimensionamentoContainer>
        

    )
}

export default Dimensionamento