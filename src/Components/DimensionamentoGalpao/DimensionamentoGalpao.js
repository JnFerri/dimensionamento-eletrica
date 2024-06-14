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
import { VerificaSeNumeroMaiorQueZero } from "../../Helpers/VerificaSeNumeroMaiorQueZero"



/** Styled-component de section que engloba componentes do formulario de dados sobre alimentação do galpão. */
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

/** Styled-component de div que organiza os componentes em linha um ao lado do outro. */
const FormDivLinha = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 0.5rem 0px;
    width:100%;
`
/** Styled-component de div que engloba cada item do formulario com Label da pergunta e inputs abaixo. */
const FormDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    margin:0 1rem;
    width:100%;
`

/**
 * Componente de formulario que pega os dados sobre o galpão na pagina de dimensionamento.
 * @param {object} props Props do componente react. 
 * @param {object} props.todosDadosGalpao Objeto com os estados react utilizados neste componente que foram passados como propriedade deste componente a partir do componente dimensionamento.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosGalpao.setComprimentoForm Função responsável por definir novo valor para o estado ComprimentoForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosGalpao.setLarguraForm Função responsável por definir novo valor para o estado LarguraForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosGalpao.setAlturaForm Função responsável por definir novo valor para o estado AlturaForm.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.todosDadosGalpao.setControladorForm Função responsável por definir novo valor para o estado ControladorForm.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.todosDadosGalpao.setRedeEletricaForm Função responsável por definir novo valor para o estado RedeEletricaForm.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.todosDadosGalpao.setProtecaoMotorForm Função responsável por definir novo valor para o estado ProtecaoMotorForm.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.todosDadosGalpao.setMarcaForm Função responsável por definir novo valor para o estado MarcaForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosGalpao.setQuantidadeCaixaForm Função responsável por definir novo valor para o estado QuantidadeCaixaForm.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.todosDadosGalpao.setSegurancaForm Função responsável por definir novo valor para o estado SegurancaForm.
 * @param {number} props.todosDadosGalpao.ComprimentoForm Estado react que guarda o valor do input de comprimento do galpao.
 * @param {number} props.todosDadosGalpao.LarguraForm Estado react que guarda o valor do input de largura do galpao.
 * @param {number} props.todosDadosGalpao.AlturaForm Estado react que guarda o valor do input de altura do galpao.
 * @param {string} props.todosDadosGalpao.ControladorForm Estado react que guarda o valor da option selecionada no select de controlador.
 * @param {string} props.todosDadosGalpao.RedeEletricaForm Estado react que guarda o valor da oprtion selecionada no select de rede elétrica.
 * @param {string} props.todosDadosGalpao.ProtecaoMotorForm Estado react que guarda o valor da option selecionada no select de protecao do motor.
 * @param {string} props.todosDadosGalpao.MarcaForm Estado react que guarda o valor da option selecionada no select de marca.
 * @param {number} props.todosDadosGalpao.QuantidadeCaixaForm Estado react que guarda o valor da option selecionada no select de quantidade de caixas.
 * @param {string} props.todosDadosGalpao.SegurancaForm Estado react que guarda o valor da option selecionada no select de segurança.
 * @returns {JSX.Element} Componente com inputs que captam informações sobre o galpão.
 */
function DimensionamentoGalpao({todosDadosGalpao}){
    
    
    /** Caso o valor do input de comprimento for maior ou igual a 0, define o estado ComprimentoForm com o valor do input.*/
   function HandleComprimentoForm(event){
    const valor = event.target.value.replace(',','.')
    if(VerificaSeNumeroMaiorQueZero(valor)){
        todosDadosGalpao.setComprimentoForm(valor)
    }
   }

   /** Caso o valor do input de largura for maior ou igual a 0, define o estado LarguraForm com o valor do input. */
   function HandleLarguraForm(event){
    const valor = event.target.value.replace(',','.')
    if(VerificaSeNumeroMaiorQueZero(valor)){
    todosDadosGalpao.setLarguraForm(valor)
    }
   }

   /** Caso o valor do input de altura for maior ou igual a 0, define o estado AlturaForm com o valor do input. */
   function HandleAlturaForm(event){
    const valor = event.target.value.replace(',','.')
    if(VerificaSeNumeroMaiorQueZero(valor)){
        todosDadosGalpao.setAlturaForm(valor)
    }
   }

   /** Define o estado ControladorForm com o valor da option selecionada no select de controlador do formulário. */
   function HandleControladorForm(event){
        todosDadosGalpao.setControladorForm(event.target.value)
   }

   /** Define o estado RedeEletricaForm com o valor da option selecionada no select de rede eletrica do formulário. */
   function HandleRedeEletricaForm(event){
    todosDadosGalpao.setRedeEletricaForm(event.target.value)
   }

   /** Define o estado ProtecaoMotorForm com o valor da option selecionada no select de protecao do motor do formulário. */
   function HandleProtecaoMotorForm(event){
    todosDadosGalpao.setProtecaoMotorForm(event.target.value)
   }

   /** Define o estado MarcaForm com o valor da option selecionada no select de marca do formulário. */
   function HandleMarcaForm(event){
    todosDadosGalpao.setMarcaForm(event.target.value)
   }

   /** Define o estado QuantidadeCaixaForm com o valor da option selecionada no select de quantidade de caixa do formulário. */
   function HandleQuantidadeCaixaForm(event){
    todosDadosGalpao.setQuantidadeCaixaForm(event.target.value)
   }

   /** Define o estado SegurancaForm com o valor da option selecionada no select de segurança do formulario. */
   function HandleSegurancaForm(event){
    todosDadosGalpao.setSegurancaForm(event.target.value)
   }

   
  
   

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Dados do Galpão</Titulo4>
                    <Label color="white">Dimensões do Galpão (m)</Label>
                <FormDivLinha>
                    <Input value={todosDadosGalpao.ComprimentoForm} onChange={HandleComprimentoForm} required onWheel={(e) => e.target.blur()}  type="number" padding='20px 20px' width='25%' border='orange 0.5px solid' border_radius='10px' placeholder="Comprimento"></Input>
                    <Input value={todosDadosGalpao.LarguraForm} onChange={HandleLarguraForm} required  onWheel={(e) => e.target.blur()}  type="number" padding='20px 20px' width='25%' border='orange 0.5px solid' border_radius='10px' placeholder="Largura"></Input>
                    <Input value={todosDadosGalpao.AlturaForm} onChange={HandleAlturaForm} required  onWheel={(e) => e.target.blur()}  type="number" padding='20px 20px' width='25%' border='orange 0.5px solid' border_radius='10px' placeholder="Altura"></Input>
                </FormDivLinha>
                    <FormDivLinha>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Controlador:</Label>
                    <Select value={todosDadosGalpao.ControladorForm} onChange={HandleControladorForm} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            controladores.map((controlador,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px'>{controlador}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Rede Elétrica:</Label>
                    <Select value={todosDadosGalpao.RedeEletricaForm} onChange={HandleRedeEletricaForm} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
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
                    <Select value={todosDadosGalpao.ProtecaoMotorForm} onChange={HandleProtecaoMotorForm} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            protecaoMotores.map((protecao,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px'>{protecao}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%'>Marca dos Componentes:</Label>
                    <Select value={todosDadosGalpao.MarcaForm} onChange={HandleMarcaForm} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled  hidden  color="#FF8C00" font_size='22px'></Option>
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
                    <Select value={todosDadosGalpao.QuantidadeCaixaForm} onChange={HandleQuantidadeCaixaForm} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
                        {
                            caixas.map((caixa,index) => (
                                <Option key={index}  color="#FF8C00" font_size='18px' border='2px solid black'>{caixa}</Option>
                            ))
                        }
                    </Select>
                    </FormDiv>
                    <FormDiv>
                    <Label font_size='16px' translate="10px" background_color='black' color="orange" text_align='left' width='100%' >Segurança:</Label>
                    <Select value={todosDadosGalpao.SegurancaForm} onChange={HandleSegurancaForm} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled  hidden  color="#FF8C00" font_size='22px'></Option>
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