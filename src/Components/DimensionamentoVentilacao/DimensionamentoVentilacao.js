import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
import { VerificaSeNumeroMaiorQueZero } from "../../Helpers/VerificaSeNumeroMaiorQueZero"


const DimensionamentoSection = styled.section`
display:flex;
flex-direction:column;
width:70%;
padding:1rem 1rem;
background-color:black;
border:0.5px orange solid;
border-radius:30px;
align-items:center;
margin: 1rem 0px;
`
const FormDivLinha = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 0.5rem 0px;
    width:100%;
`
const FormDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    margin:0 1rem;
    width:100%;
    border:orange 0.1px solid;
    border-radius:10px;
    padding:10px 10px;
`

function DimensionamentoVentilacao({todosDadosVentilacao}){
    
    function HandleQuantidadeExaustores(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
                todosDadosVentilacao.setQuantidadeExaustoresForm(valor)
        }
    }

    function HandlePotenciaExaustores(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaExaustoresForm(valor)
        }
    }

    function HandleQuantidadeAcCortinas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosVentilacao.setQuantidadeAcCortinasForm(valor)
        }
    }

    function HandlePotenciaAcCortinas(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaAcCortinasForm(valor)
        }
    }

    function HandleQuantidadeAcInlet(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosVentilacao.setQuantidadeAcInletForm(valor)
        }
    }

    function HandlePotenciaAcInlet(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaAcInletForm(valor)
        }
    }

    function HandlePossuiAtuador(event){
        todosDadosVentilacao.setPossuiAtuadorInlet(event.target.checked)
    }

    function HandleQuantidadeVentiladores(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosVentilacao.setQuantidadeVentiladoresForm(valor)
        }
    }

    function HandlePotenciaVentiladores(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaVentiladoresForm(valor)
        }
    }

    

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Ventilação</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Exaustores:</Label>
                <FormDivLinha>
                <Input  type="number" required  onChange={HandleQuantidadeExaustores} value={todosDadosVentilacao.QuantidadeExaustoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Exaustores"></Input>
                <Input  type="number" required  onChange={HandlePotenciaExaustores} value={todosDadosVentilacao.PotenciaExaustoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Cortinas:</Label>
                <FormDivLinha>
                <Input  type="number" required onChange={HandleQuantidadeAcCortinas} value={todosDadosVentilacao.QuantidadeAcCortinasForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ac. Cortinas"></Input>
                <Input  type="number" required  onChange={HandlePotenciaAcCortinas} value={todosDadosVentilacao.PotenciaAcCortinasForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Inlet:</Label>
                <FormDivLinha>
                <Input  type="number" required  onChange={HandleQuantidadeAcInlet} value={todosDadosVentilacao.QuantidadeAcInletForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ac. Inlet"></Input>
                <Input  type="number" required  onChange={HandlePotenciaAcInlet} value={todosDadosVentilacao.PotenciaAcInletForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='center' width='100%'>Assinale caso possua atuador</Label>
                <Input type="checkbox" onChange={HandlePossuiAtuador} checked={todosDadosVentilacao.PossuiAtuadorInlet} width='100%'></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Ventiladores:</Label>
                <FormDivLinha>
                <Input  type="number" required  onChange={HandleQuantidadeVentiladores} value={todosDadosVentilacao.QuantidadeVentiladoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ventiladores"></Input>
                <Input  type="number" required  onChange={HandlePotenciaVentiladores} value={todosDadosVentilacao.PotenciaVentiladoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
            </DimensionamentoSection>
    )
}

export default DimensionamentoVentilacao