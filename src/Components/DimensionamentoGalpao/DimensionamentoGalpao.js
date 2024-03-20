import styled from "styled-components"
import seguranca from "../../Dados/seguranca"
import caixas from "../../Dados/caixas"
import marcaComponentes from "../../Dados/marcaComponentes"
import Option from "../Select/Option/Option"
import Select from "../Select/Select"
import Label from "../Label/Label"
import protecaoMotores from "../../Dados/protecaoMotores"
import redeEletrica from "../../Dados/redeEletrica"
import controladores from "../../Dados/controladores"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"



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
`

function DimensionamentoGalpao({setComprimentoForm, setLarguraForm, setAlturaForm, setControladorForm, setRedeEletricaForm,setProtecaoMotorForm,setMarcaForm,setQuantidadeCaixaForm,setSegurancaForm,ComprimentoForm,LarguraForm,AlturaForm,ControladorForm,RedeEletricaForm,ProtecaoMotorForm,MarcaForm,QuantidadeCaixaForm,SegurancaForm}){
    
    

   function HandleComprimentoForm(event){
    setComprimentoForm(event.target.value)
   }
   function HandleLarguraForm(event){
    setLarguraForm(event.target.value)
   }
   function HandleAlturaForm(event){
    setAlturaForm(event.target.value)
   }
   function HandleControladorForm(event){
    setControladorForm(event.target.value)
   }
   function HandleRedeEletricaForm(event){
    setRedeEletricaForm(event.target.value)
   }
   function HandleProtecaoMotorForm(event){
    setProtecaoMotorForm(event.target.value)
   }
   function HandleMarcaForm(event){
    setMarcaForm(event.target.value)
   }
   function HandleQuantidadeCaixaForm(event){
    setQuantidadeCaixaForm(event.target.value)
   }
   function HandleSegurancaForm(event){
    setSegurancaForm(event.target.value)
   }

   
   
   

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Dados do Galpão</Titulo4>
                    <Label color="white">Dimensões do Galpão (m)</Label>
                <FormDivLinha>
                    <Input onChange={HandleComprimentoForm} required  value={ComprimentoForm} type="number" padding='20px 20px' width='25%' border='orange 0.5px solid' border_radius='10px' placeholder="Comprimento"></Input>
                    <Input onChange={HandleLarguraForm} required  value={LarguraForm} type="number" padding='20px 20px' width='25%' border='orange 0.5px solid' border_radius='10px' placeholder="Largura"></Input>
                    <Input onChange={HandleAlturaForm} required  value={AlturaForm} type="number" padding='20px 20px' width='25%' border='orange 0.5px solid' border_radius='10px' placeholder="Altura"></Input>
                </FormDivLinha>
                    <FormDivLinha>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Controlador:</Label>
                    <Select onChange={HandleControladorForm} required  value={ControladorForm} padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled selected hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            controladores.map((controlador,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px'>{controlador}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Rede Elétrica:</Label>
                    <Select onChange={HandleRedeEletricaForm} required  value={RedeEletricaForm} padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled selected hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            redeEletrica.map((rede,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px' border='2px solid black'>{rede}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    </FormDivLinha>
                    <FormDivLinha>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Proteção dos Motores:</Label>
                    <Select onChange={HandleProtecaoMotorForm} required  value={ProtecaoMotorForm} padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled selected hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            protecaoMotores.map((protecao,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px'>{protecao}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Marca dos Componentes:</Label>
                    <Select onChange={HandleMarcaForm} required  value={MarcaForm} padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled selected hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            marcaComponentes.map((marca,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px' border='2px solid black'>{marca}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    </FormDivLinha>
                    <FormDivLinha>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Montagem em Quantas Caixas ?</Label>
                    <Select onChange={HandleQuantidadeCaixaForm} required  value={QuantidadeCaixaForm} padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled selected hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            caixas.map((caixa,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px' border='2px solid black'>{caixa}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%' >Segurança:</Label>
                    <Select onChange={HandleSegurancaForm} required  value={SegurancaForm} padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled selected hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            seguranca.map((item,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px' border='2px solid black'>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    </FormDivLinha>
               
                        
            </DimensionamentoSection>
    )
}

export default DimensionamentoGalpao