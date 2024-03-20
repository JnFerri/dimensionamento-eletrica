import styled from "styled-components";
import Titulo2 from "../../Components/Titulo2/Titulo2";
import Header from "../../Components/Header/Header";
import DimensionamentoGalpao from "../../Components/DimensionamentoGalpao/DimensionamentoGalpao.js";
import { useEffect, useState } from "react";
import DimensionamentoVentilacao from "../../Components/DimensionamentoVentilacao/DimensionamentoVentilacao.js";
import Botao from "../../Components/Botao/Botao.js";

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

    function DefineDados(){
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

   async function EnviarDados(){
        await DefineDados()
        setTodosOsDados({
            dadosGalpao ,
            dadosVentilacao
        })
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
        console.log(TodosOsDados)
    },[TodosOsDados])
    return(
        <DimensionamentoContainer>
            <Header/>
            <Titulo2 color="orange" font_size='40px' text_shadow='2px 2px 2px black'>COLETA DE DADOS DE DIMENSIONAMENTO:</Titulo2>
            <DimensionamentoGalpao 
           setComprimentoForm={setComprimentoForm}
            setLarguraForm={setLarguraForm}
            setAlturaForm={setAlturaForm}
            setControladorForm={setControladorForm}
            setRedeEletricaForm={setRedeEletricaForm}
            setProtecaoMotorForm={setProtecaoMotorForm}
            setMarcaForm={setMarcaForm}
            setQuantidadeCaixaForm={setQuantidadeCaixaForm}
            setSegurancaForm={setSegurancaForm}
            ComprimentoForm={ComprimentoForm}
            LarguraForm={LarguraForm}
            AlturaForm={AlturaForm}
            ControladorForm={ControladorForm}
            RedeEletricaForm={RedeEletricaForm}
            ProtecaoMotorForm={ProtecaoMotorForm}
            MarcaForm={MarcaForm}
            QuantidadeCaixaForm={QuantidadeCaixaForm}
            SegurancaForm={SegurancaForm}
            />
            <DimensionamentoVentilacao
            setQuantidadeExaustoresForm={setQuantidadeExaustoresForm}
            setPotenciaExaustoresForm={setPotenciaExaustoresForm}
            setQuantidadeAcCortinasForm={setQuantidadeAcCortinasForm}
            setPotenciaAcCortinasForm={setPotenciaAcCortinasForm}
            setQuantidadeAcInletForm={setQuantidadeAcInletForm}
            setPotenciaAcInletForm={setPotenciaAcInletForm}
            setQuantidadeVentiladoresForm={setQuantidadeVentiladoresForm}
            setPotenciaVentiladoresForm={setPotenciaVentiladoresForm}
            QuantidadeExaustoresForm={QuantidadeExaustoresForm}
            PotenciaExaustoresForm={PotenciaExaustoresForm}
            QuantidadeAcCortinasForm={QuantidadeAcCortinasForm}
            PotenciaAcCortinasForm={PotenciaAcCortinasForm}
            QuantidadeAcInletForm={QuantidadeAcInletForm}
            PotenciaAcInletForm={PotenciaAcInletForm}
            setPossuiAtuadorInlet={setPossuiAtuadorInlet}
            PossuiAtuadorInlet={PossuiAtuadorInlet}
            QuantidadeVentiladoresForm={QuantidadeVentiladoresForm}
            PotenciaVentiladoresForm={PotenciaVentiladoresForm}
            />
            <Botao onClick={EnviarDados} color="black" padding='20px 0px' width='30%'>AVANÇAR</Botao>
        </DimensionamentoContainer>
        

    )
}

export default Dimensionamento