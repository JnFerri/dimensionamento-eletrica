import styled from "styled-components";
import Titulo2 from "../../Components/Titulo2/Titulo2";
import Header from "../../Components/Header/Header";
import DimensionamentoGalpao from "../../Components/DimensionamentoGalpao/DimensionamentoGalpao.js";
import { useEffect, useState } from "react";
import DimensionamentoVentilacao from "../../Components/DimensionamentoVentilacao/DimensionamentoVentilacao.js";
import Form from "../../Components/Form/Form.js"
import Input from "../../Components/Input/Input.js";

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
    const [TodosOsDados, setTodosOsDados] = useState('')

    const todosDadosGalpao = {
        setComprimentoForm,setLarguraForm,setAlturaForm,setControladorForm,setRedeEletricaForm,setProtecaoMotorForm,setMarcaForm,setQuantidadeCaixaForm,setSegurancaForm,ComprimentoForm,LarguraForm,AlturaForm,ControladorForm,RedeEletricaForm,ProtecaoMotorForm,MarcaForm,QuantidadeCaixaForm,SegurancaForm
    }
    const todosDadosVentilacao = {
        setQuantidadeExaustoresForm,setPotenciaExaustoresForm,setQuantidadeAcCortinasForm,setPotenciaAcCortinasForm,setQuantidadeAcInletForm,setPotenciaAcInletForm,setPossuiAtuadorInlet,setQuantidadeVentiladoresForm,setPotenciaVentiladoresForm,QuantidadeExaustoresForm,PotenciaExaustoresForm,QuantidadeAcCortinasForm,PotenciaAcCortinasForm,QuantidadeAcInletForm,PotenciaAcInletForm,PossuiAtuadorInlet,QuantidadeVentiladoresForm,PotenciaVentiladoresForm
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
       }

       
       
       const [dadosGalpao,setDadosGalpao] = useState({
           comprimento:0,
        largura:0,
        altura:0,
        controlador:'',
        redeEletrica:'',
        protecaoMotor:'',
        marcaComponentes:'',
        quantidadeCaixas:'',
        Segurança:''
    })
    
    const [dadosVentilacao,setDadosVentilacao] = useState({
        exaustor:{quantidade:0,potencia:0},
        acCortina:{quantidade:0,potencia:0},
        acInlet:{quantidade:0,potencia:0,atuador:false},
        ventilador:{quantidade:0,potencia:0},
    })
    
    
    useEffect(() =>{
     setTodosOsDados({
         dadosGalpao ,
         dadosVentilacao
     })
 },[dadosGalpao, dadosVentilacao])

    useEffect(() =>{
        console.log(TodosOsDados)
    },[TodosOsDados])
    
    return(
        <DimensionamentoContainer>
            <Form width='100%' onSubmit={DefineDados}>
            <Header/>
            <Titulo2 color="orange" font_size='40px' text_shadow='2px 2px 2px black'>COLETA DE DADOS DE DIMENSIONAMENTO:</Titulo2>
            <DimensionamentoGalpao 
            {...todosDadosGalpao}
            />
            <DimensionamentoVentilacao
            {...todosDadosVentilacao}
            />
            <Input type="Submit" color="black" padding='20px 0px' background_color='orange' border='white 0.5px solid' border_radius='10px' font_size='24px' width='30%' value='GERAR QUADRO'/>
            </Form>

        </DimensionamentoContainer>
        

    )
}

export default Dimensionamento