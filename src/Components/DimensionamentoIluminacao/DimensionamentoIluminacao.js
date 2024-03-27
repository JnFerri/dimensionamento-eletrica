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

function DimensionamentoIluminacao({todosDadosIluminacao}){

    function HandleQauntidadeLampadas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setQuantidadeLampadas(valor)
        }
    }

    function HandlePotenciaLampadas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setPotenciaLampadas(valor)
        }
    }

    function HandleCorLampadas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setCorLampadas(valor)
        }
    }
    function HandleQuantidadeCircuitos(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setQuantidadeCircuitos(valor)
        }
    }
    function HandleDimerizavel(event){
        todosDadosIluminacao.setDimerizavel(event.target.value)
    }
    

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Iluminação</Titulo4>

                <FormDivLinha>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Quantidade Lampadas:</Label>
                <Input  type="number"  required  onChange={HandleQauntidadeLampadas} value={todosDadosIluminacao.QuantidadeLampadas} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Potencia Lampadas:</Label>
                <Input  type="number" required  onChange={HandlePotenciaLampadas} value={todosDadosIluminacao.PotenciaLampadas} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Cor das Lampadas:</Label>
                <Select value={todosDadosIluminacao.CorLampadas} onChange={HandleCorLampadas} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} color="#FF8C00" font_size='22px'></Option>
                    <Option value={2700} color="#FF8C00" font_size='22px'>2700k</Option>
                    <Option value={4500} color="#FF8C00" font_size='22px'>4500k</Option>
                </Select>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>

                <FormDivLinha>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='50%'>Circuitos:</Label>
                <Input  type="number"  required  onChange={HandleQuantidadeCircuitos} value={todosDadosIluminacao.QuantidadeCircuitos} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Circuitos"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='50%'>Dimerizável:</Label>
                <Select value={todosDadosIluminacao.Dimerizavel} onChange={HandleDimerizavel} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={true} color="#FF8C00" font_size='22px'>Dimerizável - Sim</Option>
                    <Option value={false} color="#FF8C00" font_size='22px'>Dimerizável - Não</Option>
                </Select>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                
            </DimensionamentoSection>
    )
}


export default DimensionamentoIluminacao