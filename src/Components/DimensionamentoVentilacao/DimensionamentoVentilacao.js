import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import Form from "../Form/Form"

const DimensionamentoSection = styled.section`
display:flex;
flex-direction:column;
width:70%;
padding:1rem 0;
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

function DimensionamentoVentilacao({setQuantidadeExaustoresForm,setPotenciaExaustoresForm,setQuantidadeAcCortinasForm,setPotenciaAcCortinasForm,setQuantidadeAcInletForm,setPotenciaAcInletForm,setQuantidadeVentiladoresForm,setPotenciaVentiladoresForm,QuantidadeExaustoresForm,PotenciaExaustoresForm,QuantidadeAcCortinasForm,PotenciaAcCortinasForm,QuantidadeAcInletForm,PotenciaAcInletForm,setPossuiAtuadorInlet,PossuiAtuadorInlet,QuantidadeVentiladoresForm,PotenciaVentiladoresForm}){
    
    function HandleQuantidadeExaustores(event){
    setQuantidadeExaustoresForm(event.target.value)
    }

    function HandlePotenciaExaustores(event){
        setPotenciaExaustoresForm(event.target.value)
    }

    function HandleQuantidadeAcCortinas(event){
        setQuantidadeAcCortinasForm(event.target.value)
    }

    function HandlePotenciaAcCortinas(event){
        setPotenciaAcCortinasForm(event.target.value)
    }

    function HandleQuantidadeAcInlet(event){
        setQuantidadeAcInletForm(event.target.value)
    }

    function HandlePotenciaAcInlet(event){
        setPotenciaAcInletForm(event.target.value)
    }

    function HandlePossuiAtuador(event){
        setPossuiAtuadorInlet(event.target.checked)
    }

    function HandleQuantidadeVentiladores(event){
        setQuantidadeVentiladoresForm(event.target.value)
    }

    function HandlePotenciaVentiladores(event){
        setPotenciaVentiladoresForm(event.target.value)
    }

    

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Ventilação</Titulo4>
                <Form width='90%'>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Exaustores:</Label>
                <FormDivLinha>
                <Input  type="number" onChange={HandleQuantidadeExaustores} value={QuantidadeExaustoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Exaustores"></Input>
                <Input  type="number" onChange={HandlePotenciaExaustores} value={PotenciaExaustoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Cortinas:</Label>
                <FormDivLinha>
                <Input  type="number" onChange={HandleQuantidadeAcCortinas} value={QuantidadeAcCortinasForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ac. Cortinas"></Input>
                <Input  type="number" onChange={HandlePotenciaAcCortinas} value={PotenciaAcCortinasForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>


                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Inlet:</Label>
                <FormDivLinha>
                <Input  type="number" onChange={HandleQuantidadeAcInlet} value={QuantidadeAcInletForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ac. Inlet"></Input>
                <Input  type="number" onChange={HandlePotenciaAcInlet} value={PotenciaAcInletForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='center' width='100%'>Assinale caso possua atuador</Label>
                <Input type="checkbox" onChange={HandlePossuiAtuador} checked={PossuiAtuadorInlet} width='100%'></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Ventiladores:</Label>
                <FormDivLinha>
                <Input  type="number" onChange={HandleQuantidadeVentiladores} value={QuantidadeVentiladoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ventiladores"></Input>
                <Input  type="number" onChange={HandlePotenciaVentiladores} value={PotenciaVentiladoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                </Form>
            </DimensionamentoSection>
    )
}

export default DimensionamentoVentilacao