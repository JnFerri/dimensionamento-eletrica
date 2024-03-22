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

    function HandleQauntidadeWY03(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setQuantidadeWY03(valor)
        }
    }

    function HandleQauntidadeWY04(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setQuantidadeWY04(valor)
        }
    }

    function HandleQuantidadeBocais(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setQuantidadeBocais(valor)
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
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>WY-03 (4500K):</Label>
                <Input  type="number"  required  onChange={HandleQauntidadeWY03} value={todosDadosIluminacao.QuantidadeWY03} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>WY-04 (2700K):</Label>
                <Input  type="number" required  onChange={HandleQauntidadeWY04} value={todosDadosIluminacao.QuantidadeWY04} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Bocais:</Label>
                <Input  type="number"  required onChange={HandleQuantidadeBocais} value={todosDadosIluminacao.QuantidadeBocais} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>

                <FormDivLinha>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Circuitos:</Label>
                <Input  type="number"  required  onChange={HandleQuantidadeCircuitos} value={todosDadosIluminacao.QuantidadeCircuitos} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Circuitos"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Dimerizável ?</Label>
                <FormDivLinha>
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