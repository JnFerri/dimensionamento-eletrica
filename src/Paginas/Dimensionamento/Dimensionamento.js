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
    const [FornoPossuiPainel, setFornoPossuiPainel] = useState(false)
    const [QuantidadeLampadas, setQuantidadeLampadas] = useState('')
    const [PotenciaLampadas, setPotenciaLampadas] = useState('')
    const [CorLampadas, setCorLampadas] = useState('')
    const [QuantidadeCircuitos, setQuantidadeCircuitos] = useState('')
    const [Dimerizavel, setDimerizavel] = useState(true)
    const [QuantidadeSondaT, setQuantidadeSondaT] = useState('')
    const [QuantidadeSondaTU, setQuantidadeSondaTU] = useState('')
    const [QuantidadeSondaPE, setQuantidadeSondaPE] = useState('')
    const [QuantidadeSondaCo2, setQuantidadeSondaCo2] = useState('')
    const [QuantidadeSondaH2O, setQuantidadeSondaH2O] = useState('')
    const [MotorRedutorCortina, setMotorRedutorCortina] = useState(true)
    const [Gatilho, setGatilho] = useState(true)
    const [Flushing, setFlushing] = useState(true)
    const [QuantidadeLinhas, setQuantidadeLinhas] = useState('')
    const [TipoAnimalGalpao, setTipoAnimalGalpao] = useState('')
    const [TipoCriacaoAnimal, setTipoCriacaoAnimal] = useState('')
    const [TodosOsDados, setTodosOsDados] = useState(null)
    const todosOsDadosDefinidos = useRef(false)

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
        setQuantidadeLinhasPrimarias,setPotenciaLinhas,setQuantidadeComedouros,setPotenciaComedouros,QuantidadeLinhasPrimarias,PotenciaLinhas,QuantidadeComedouros,PotenciaComedouros
    }
    const todosDadosAquecedores = {
        setQuantidadeAquecedor1,setPotenciaAquecedor1,setQuantidadeAquecedor2,setPotenciaAquecedor2,setQuantidadeFoguista,setPotenciaFoguista,setFornoPossuiPainel,QuantidadeAquecedor1,PotenciaAquecedor1,QuantidadeAquecedor2,PotenciaAquecedor2,QuantidadeFoguista,PotenciaFoguista,FornoPossuiPainel
    }
    const todosDadosIluminacao = {
        setQuantidadeLampadas,setPotenciaLampadas,setCorLampadas,setDimerizavel,setQuantidadeCircuitos,QuantidadeLampadas,PotenciaLampadas,CorLampadas,Dimerizavel,QuantidadeCircuitos
    }
    const todosDadosDiversos = {
        setQuantidadeSondaT,setQuantidadeSondaTU,setQuantidadeSondaPE,setQuantidadeSondaCo2,setQuantidadeSondaH2O,setMotorRedutorCortina,setGatilho,setFlushing,setTipoAnimalGalpao,setTipoCriacaoAnimal,setQuantidadeLinhas,QuantidadeLinhas,QuantidadeSondaT,QuantidadeSondaTU,QuantidadeSondaPE,QuantidadeSondaCo2,QuantidadeSondaH2O,MotorRedutorCortina,Gatilho,Flushing,TipoAnimalGalpao,TipoCriacaoAnimal
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

       
       
    const [dadosGalpao,setDadosGalpao] = useState(null)
    
    const [dadosVentilacao,setDadosVentilacao] = useState(null)

    const [dadosResfriamento, setDadosResfriamento] = useState(null)
    
    const [dadosAlimentacao, setDadosAlimentacao] = useState(null)

    const [dadosAquecedores, setDadosAquecedores] = useState(null)

    const [dadosIluminacao, setDadosIluminacao] = useState(null)

    const [dadosDiversos, setDadosDiversos] = useState(null)


    
    useEffect(() =>{
     setTodosOsDados({
         dadosGalpao ,
         dadosVentilacao,
         dadosResfriamento,
         dadosAlimentacao,
         dadosAquecedores,
         dadosIluminacao,
         dadosDiversos,
        
     })
     todosOsDadosDefinidos.current = true
    },[dadosGalpao, dadosVentilacao, dadosResfriamento, dadosAlimentacao,dadosAquecedores,dadosIluminacao,dadosDiversos,])

    useEffect(() =>{
        async function MostraResultado(){
            if (TodosOsDados && todosOsDadosDefinidos.current === true){
                console.log(TodosOsDados)
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
    
            const options={
                method: 'POST',
                    headers: {
                      accept: 'application/json',
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify(TodosOsDados)
                
                }
                
               const resposta = await fetch('http://localhost:5000/enviaDimensionamento', options)
                console.log( await resposta.json())
                }
            
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