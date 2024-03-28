import { motorInlet } from "../../Dados/motorInlet";
import { tiposFixacaoInlet } from "../../Dados/tipoFixacaoInlet";
import { tiposInlet } from "../../Dados/tiposInlet";
import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
import Select from "../Select/Select"
import Option from "../Select/Option/Option"



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

function DimensionamentoInlet({todosDadosInlet}){

    function HandleTipoInlet(event){
        const valor = event.target.value
        todosDadosInlet.setTipoInlet(valor)
    }

    function HandleFixacaoInlet(event){
        const valor = event.target.value
        todosDadosInlet.setFixacaoInlet(valor)
    }

    function HandleMotorInlet(event){
        const valor = event.target.value
        todosDadosInlet.setMotorInlet(valor)
    }

    function HandleQuantidadeInlet(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosInlet.setQuantidadeInlet(valor)
        }
    }


 

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Inlets</Titulo4>
                
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Inlet:</Label>
                <Select value={todosDadosInlet.TipoInlet} onChange={HandleTipoInlet} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
                    {
                        tiposInlet.map((inlet,index) => (
                            <Option key={index} color="#FF8C00" font_size='22px'>{inlet}</Option>
                        ))
                    }
                </Select>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Fixação:</Label>
                <Select value={todosDadosInlet.FixacaoInlet} onChange={HandleFixacaoInlet} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
                {
                        tiposFixacaoInlet.map((fixacao,index) => (
                            <Option key={index} color="#FF8C00" font_size='22px'>{fixacao}</Option>
                        ))
                    }
                </Select>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Motor Inlet:</Label>
                <Select value={todosDadosInlet.MotorInlet} onChange={HandleMotorInlet} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
                {
                        motorInlet.map((motor,index) => (
                            <Option key={index} color="#FF8C00" font_size='22px'>{motor}</Option>
                        ))
                    }
                </Select>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Quantidade de Inlets:</Label>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required onChange={HandleQuantidadeInlet} value={todosDadosInlet.QuantidadeInlet} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Inlets"></Input>
                </FormDiv>
                </FormDivLinha>
            </DimensionamentoSection>
    )
}


export default DimensionamentoInlet