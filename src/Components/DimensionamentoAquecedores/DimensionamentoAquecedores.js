import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
import { VerificaSeNumeroMaiorQueZero } from "../../Helpers/VerificaSeNumeroMaiorQueZero"
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

function DimensionamentoAquecedores({todosDadosAquecedores}){

    function HandleQuantidadeAquecedor1(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAquecedores.setQuantidadeAquecedor1(valor)
        }
    }

    function HandlePotenciaAquecedor1(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAquecedores.setPotenciaAquecedor1(valor)
        }
    }

    function HandleQuantidadeAquecedor2(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAquecedores.setQuantidadeAquecedor2(valor)
        }
    }

    function HandlePotenciaAquecedor2(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAquecedores.setPotenciaAquecedor2(valor)
        }
    }

    function HandleQuantidadeFoguista(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAquecedores.setQuantidadeFoguista(valor)
        }
    }

    function HandlePotenciaFoguista(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAquecedores.setPotenciaFoguista(valor)
        }
    }

    function HandleFornoPossuiPainel(event){
        todosDadosAquecedores.setFornoPossuiPainel(event.target.value)
    }



    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Aquecedores</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Aquecedor 1:</Label>
                <FormDivLinha>
                <Input  type="number"  required  onChange={HandleQuantidadeAquecedor1} value={todosDadosAquecedores.QuantidadeAquecedor1} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Aquecedores 1"></Input>
                <Input  type="number" required  onChange={HandlePotenciaAquecedor1} value={todosDadosAquecedores.PotenciaAquecedor1} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Aquecedor 2:</Label>
                <FormDivLinha>
                <Input  type="number"  required onChange={HandleQuantidadeAquecedor2} value={todosDadosAquecedores.QuantidadeAquecedor2} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Aquecedores 2"></Input>
                <Input  type="number" required  onChange={HandlePotenciaAquecedor2} value={todosDadosAquecedores.PotenciaAquecedor2} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Foguista:</Label>
                <FormDivLinha>
                <Input  type="number"  required  onChange={HandleQuantidadeFoguista} value={todosDadosAquecedores.QuantidadeFoguista} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Foguista"></Input>
                <Input  type="number" required  onChange={HandlePotenciaFoguista} value={todosDadosAquecedores.PotenciaFoguista} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Forno Possui Painel ?:</Label>
                <FormDivLinha>
                <Select value={todosDadosAquecedores.FornoPossuiPainel} onChange={HandleFornoPossuiPainel} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={false} color="#FF8C00" font_size='22px'>Forno não possui painel</Option>
                    <Option value={true} color="#FF8C00" font_size='22px'>Forno possui painel</Option>
                </Select>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                
            </DimensionamentoSection>
    )
}


export default DimensionamentoAquecedores