import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
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

function DimensionamentoCalculoInlet({todosDadosCalculoInlet}){



    function HandleCapacidadeExaustor(event){
        const valor = event.target.value.replace(',','.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosCalculoInlet.setCapacidadeExaustor(valor)
        }
    }

    function HandlePercentualExaustor(event){
        const valor = event.target.value.replace(',','.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosCalculoInlet.setPercentualExaustor(valor)
        }
    }

 

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Calcular Inlets</Titulo4>
                
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Capacidade do exaustor em 37,5PA:</Label>
                <Input  type="number"  required onChange={HandleCapacidadeExaustor} value={todosDadosCalculoInlet.CapacidadeExaustor} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Capacidade do exaustor em 37,5PA"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Porcentagem dos exaustores para transição:</Label>
                <Input  type="number"  required onChange={HandlePercentualExaustor} value={todosDadosCalculoInlet.PercentualExaustor} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Porcentagem dos exaustores para transição"></Input>
                </FormDiv>
                </FormDivLinha>
            </DimensionamentoSection>
    )
}


export default DimensionamentoCalculoInlet