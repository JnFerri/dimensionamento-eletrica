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

function DimensionamentoAlimentacao({todosDadosAlimentacao}){

    function HandleQuantidadeLinhas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAlimentacao.setQuantidadeLinhas(valor)
        }
    }
    function HandlePotenciaLinhas(event){
        const valor = event.target.value.replace(',','.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAlimentacao.setPotenciaLinhas(valor)
        }
    }

    function HandleQuantidadeComedouros(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAlimentacao.setQuantidadeComedouros(valor)
        }
    }
    function HandlePotenciaComedouros(event){
        const valor = event.target.value.replace(',','.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAlimentacao.setPotenciaComedouros(valor)
        }
    }


    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Alimentação</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Linha Primária:</Label>
                <FormDivLinha>
                <Input  type="number" required  onChange={HandleQuantidadeLinhas} value={todosDadosAlimentacao.QuantidadeLinhas} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Nebulizadores"></Input>
                <Input  type="number" required  onChange={HandlePotenciaLinhas} value={todosDadosAlimentacao.PotenciaLinhas} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Comedouros:</Label>
                <FormDivLinha>
                <Input  type="number" required onChange={HandleQuantidadeComedouros} value={todosDadosAlimentacao.QuantidadeComedouros} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Pad Cooling"></Input>
                <Input  type="number" required  onChange={HandlePotenciaComedouros} value={todosDadosAlimentacao.PotenciaComedouros} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                
            </DimensionamentoSection>
    )
}


export default DimensionamentoAlimentacao