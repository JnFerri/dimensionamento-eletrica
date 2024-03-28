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

function DimensionamentoResfriamento({todosDadosResfriamento}){

    function HandleQuantidadeNebulizadores(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosResfriamento.setQuantidadeNebulizador(valor)
        }
    }
    function HandlePotenciaNebulizadores(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosResfriamento.setPotenciaNebulizador(valor)
        }
    }

    function HandleQuantidadeCooling(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosResfriamento.setQuantidadeCooling(valor)
        }
    }
    
    function HandlePotenciaCooling(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosResfriamento.setPotenciaCooling(valor)
        }
    }


    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Resfriamento</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Nebulizador:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandleQuantidadeNebulizadores} value={todosDadosResfriamento.QuantidadeNebulizador} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Nebulizadores"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaNebulizadores} value={todosDadosResfriamento.PotenciaNebulizador} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Pad Cooling:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required onChange={HandleQuantidadeCooling} value={todosDadosResfriamento.QuantidadeCooling} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Pad Cooling"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaCooling} value={todosDadosResfriamento.PotenciaCooling} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                
            </DimensionamentoSection>
    )
}


export default DimensionamentoResfriamento