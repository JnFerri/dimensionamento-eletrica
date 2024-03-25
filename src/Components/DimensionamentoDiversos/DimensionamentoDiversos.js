import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
import Select from "../Select/Select"
import Option from "../Select/Option/Option"
import { tiposGalpaoSuino } from "../../Dados/tiposGalpaoSuino.js"
import { tiposGalpaoAves } from "../../Dados/tiposGalpaoAves.js"


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

function DimensionamentoDiversos({todosDadosDiversos}){

    function HandleQuantidadeSondaT(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaT(valor)
        }
    }

    function HandleQuantidadeSondaTU(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaTU(valor)
        }
    }

    function HandleQuantidadeSondaPE(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaPE(valor)
        }
    }

    function HandleQuantidadeSondaCo2(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaCo2(valor)
        }
    }

    function HandleQuantidadeSondaH2O(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaH2O(valor)
        }
    }

    function HandleMotorRedutorCortina(event){
            todosDadosDiversos.setMotorRedutorCortina(event.target.value)
    }

    function HandleQuantidadeGatilho(event){
            todosDadosDiversos.setQuantidadeGatilho(event.target.value)
    }

    function HandleQuantidadePPs(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadePPs(valor)
        }
    }

    function HandleQuantidadeFlushing(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeFlushing(valor)
        }
    }
    function HandleQuantidadeLinhas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeLinhas(valor)
        }
    }
    function HandleTipoAnimalGalpao(event){
        const valor = event.target.value
        todosDadosDiversos.setTipoAnimalGalpao(valor)
        
    }

    function HandleTipoCriacaoAnimal(event){
        const valor = event.target.value
        todosDadosDiversos.setTipoCriacaoAnimal(valor)
    }

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Diversos</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Sonda T:</Label>
                <Input  type="number"  required  onChange={HandleQuantidadeSondaT} value={todosDadosDiversos.QuantidadeSondaT} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda T"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Sonda T/U:</Label>
                <Input  type="number"  required onChange={HandleQuantidadeSondaTU} value={todosDadosDiversos.QuantidadeSondaTU} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda T/U"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Sonda PE:</Label>
                <Input  type="number"  required  onChange={HandleQuantidadeSondaPE} value={todosDadosDiversos.QuantidadeSondaPE} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda PE"></Input>
                </FormDiv>
                </FormDivLinha>

                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Sonda Co2:</Label>
                <Input  type="number"  required  onChange={HandleQuantidadeSondaCo2} value={todosDadosDiversos.QuantidadeSondaCo2} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda Co2"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Sonda H2O:</Label>
                <Input  type="number"  required onChange={HandleQuantidadeSondaH2O} value={todosDadosDiversos.QuantidadeSondaH2O} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda H2O"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Motorredutor cortina:</Label>
                <Select value={todosDadosDiversos.MotorRedutorCortina} onChange={HandleMotorRedutorCortina} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={true} color="#FF8C00" font_size='22px'>Motorredutor - Sim</Option>
                    <Option value={false} color="#FF8C00" font_size='22px'>Motorredutor - Não</Option>
                </Select>
                </FormDiv>
                </FormDivLinha>

                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Gatilhos:</Label>
                <Select value={todosDadosDiversos.QuantidadeGatilho} onChange={HandleQuantidadeGatilho} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={0} color="#FF8C00" font_size='22px'>Gatilhos - Não</Option>
                    <Option value={2} color="#FF8C00" font_size='22px'>02 Gatilhos</Option>
                    <Option value={4} color="#FF8C00" font_size='22px'>04 Gatilhos</Option>
                </Select>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>PPs:</Label>
                <Input  type="number"  required onChange={HandleQuantidadePPs} value={todosDadosDiversos.QuantidadePPs} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade PPs"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Flushing:</Label>
                <Input  type="number"  required onChange={HandleQuantidadeFlushing} value={todosDadosDiversos.QuantidadeFlushing} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Flushing"></Input>
                </FormDiv>
                </FormDivLinha>

                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>N° Linhas:</Label>
                <Input  type="number"  required onChange={HandleQuantidadeLinhas} value={todosDadosDiversos.QuantidadeLinhas} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Linhas"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Galpão de:</Label>
                <Select value={todosDadosDiversos.TipoAnimalGalpao} onChange={HandleTipoAnimalGalpao} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={'Suinos'} color="#FF8C00" font_size='22px'>Suínos</Option>
                    <Option value={'Aves'} color="#FF8C00" font_size='22px'>Aves</Option>
                </Select>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Tipo de Galpão:</Label>
                <Select value={todosDadosDiversos.TipoCriacaoAnimal} onChange={HandleTipoCriacaoAnimal} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    {todosDadosDiversos.TipoAnimalGalpao === 'Aves' ?
                     tiposGalpaoAves.map((tipo,index) => (
                     <Option key={index} color="#FF8C00" font_size='22px'>{tipo}</Option>
                    ))
                    :
                    tiposGalpaoSuino.map((tipo,index) => (
                        <Option key={index} color="#FF8C00" font_size='22px'>{tipo}</Option>
                    ))
                    }
                </Select>
                </FormDiv>
                </FormDivLinha>
                
            </DimensionamentoSection>
    )
}


export default DimensionamentoDiversos