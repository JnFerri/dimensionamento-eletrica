import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
import Select from "../Select/Select"
import Option from "../Select/Option/Option"
import { tiposGalpaoSuino } from "../../Dados/tiposGalpaoSuino.js"
import { tiposGalpaoAves } from "../../Dados/tiposGalpaoAves.js"

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
    border:orange 0.1px solid;
    border-radius:10px;
    padding:10px 10px;
`

/**
 * Componente de formulario que pega os dados diversos na pagina de dimensionamento.
 * @param {object} props Props do componente React.
 * @param {object} props.todosDadosDiversos  Objeto com os estados react utilizados neste componente que foram passados como propriedade deste componente a partir do componente dimensionamento.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosDiversos.setQuantidadeSondaT Função responsável por definir novo valor para o estado QuantidadeSondaT.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosDiversos.setQuantidadeSondaTU Função responsável por definir novo valor para o estado QuantidadeSondaTU.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosDiversos.setQuantidadeSondaPE Função responsável por definir novo valor para o estado QuantidadeSondaPE.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosDiversos.setQuantidadeSondaCo2 Função responsável por definir novo valor para o estado QuantidadeSondaCo2.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosDiversos.setQuantidadeSondaH2O Função responsável por definir novo valor para o estado QuantidadeSondaH2O.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.todosDadosDiversos.setMotorRedutorCortina Função responsável por definir novo valor para o estado MotorRedutorCortina.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.todosDadosDiversos.setGatilho Função responsável por definir novo valor para o estado Gatilho.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.todosDadosDiversos.setFlushing Função responsável por definir novo valor para o estado Flushing.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosDiversos.setQuantidadeLinhas Função responsável por definir novo valor para o estado QuantidadeLinhas.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.todosDadosDiversos.setTipoAnimalGalpao Função responsável por definir novo valor para o estado TipoAnimalGalpao.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.todosDadosdiversos.setTipoCriacaoAnimal Função responsável por definir novo valor para o estado TipoCriacaoAnimal.
 * @param {number} props.todosDadosDiversos.QuantidadeSontaT Estado react que guarda o valor do input de quantidade de sonta T.
 * @param {number} props.todosDadosDiversos.QuantidadeSondaTU Estado react que guarda o valor do input de quantidade de sonda TU.
 * @param {number} props.todosDadosDiversos.QuantidadeSondaPE Estado react que guarda o valor do input de quantidade de Sonda PE.
 * @param {number} props.todosDadosDiversos.QuantidadeSondaCo2 Estado react que guarda o valor do input de quantidade de sonda Co2.
 * @param {number} props.todosDadosDiversos.QuantidadeSondaH2O Estado react que guarda o valor do input de quantidade de sonda h2o.
 * @param {boolean} props.todosDadosDiversos.MotorRedutorCortina Estado react que guarda o valor da option selecionada no select de motorredutor cortina.
 * @param {boolean} props.todosDadosDiversos.Gatilho Estado react que guarda o valor da option selecionada no select de gatilho. 
 * @param {boolean} props.todosDadosDiversos.Flushing Estado react que guarda o valor da option selecionada no select de flushing.
 * @param {number} props.todosDadosDiversos.QuantidadeLinhas Estado react que guarda o valor do input de quantidade linhas.
 * @param {string} props.todosDadosDiversos.TipoAnimalGalpao Estado react que guarda o valor da option do select de tipo de animal.
 * @param {string} props.todosDadosDiversos.TipoCriacaoAnimal Estado react que guarda o valor da option do select de tipo de galpão.
 * @returns {JSX.Element} Componente com inputs que captam informações sobre dados diversos do galpão.
 */
function DimensionamentoDiversos({todosDadosDiversos}){

    /** Caso o valor do input de quantidade de sonda T for inteiro e maior ou igual a 0, define o estado QuantidadeSondaT com o valor do input. */
    function HandleQuantidadeSondaT(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaT(valor)
        }
    }

    /** Caso o valor do input de quantidade de sonta TU for inteiro e maior ou igual a 0, define o estado QuantidadeSondaTU com o valor do input. */
    function HandleQuantidadeSondaTU(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaTU(valor)
        }
    }

    /** Caso o valor do input de quantidade de sonda PE for inteiro e maior ou igual a 0, define o estado QuantidadeSondaPE com o valor do input. */
    function HandleQuantidadeSondaPE(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaPE(valor)
        }
    }

    /** Caso o valor do input de quantidade de sonda Co2 for inteiro e maior ou igual a 0, define o estado QuantidadeSondaCo2 com o valor do input. */
    function HandleQuantidadeSondaCo2(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaCo2(valor)
        }
    }

    /** Caso o valor do input de quantidade de sonda H2O for inteiro e maior ou igual a 0, define o estado QuantidadeSondaH2O com o valor do input.  */
    function HandleQuantidadeSondaH2O(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeSondaH2O(valor)
        }
    }

    /** Define o estado MotorRedutorCortina com o valor da option selecionada no select de motorredutor de cortina do formulario. */
    function HandleMotorRedutorCortina(event){
            todosDadosDiversos.setMotorRedutorCortina(event.target.value)
    }

    /** Define o estado Gatilho com o valor da option selecionada no select de gatilho do formulario.  */
    function HandleGatilho(event){
            todosDadosDiversos.setGatilho(event.target.value)
    }

    /** Define o estado Flushing com o valor da option selecionada no select de flushing do formulario. */
    function HandleFlushing(event){
        const valor = event.target.value
        todosDadosDiversos.setFlushing(valor)
    }
    
    /** Caso o valor do input de quantidade de linhas seja inteiro e maior ou igual a 0, define o estado QuantidadeLinhas com o valor do input. */
    function HandleQuantidadeLinhas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosDiversos.setQuantidadeLinhas(valor)
        }
    }

    /** Define o estado TipoAnimalGalpao com o valor da option do select de tipo de animal do formulario. */
    function HandleTipoAnimalGalpao(event){
        const valor = event.target.value
        todosDadosDiversos.setTipoAnimalGalpao(valor)
        
    }

    /** Define o estado TipoCriacaoAnimal com o valor da option do select de tipo de galpão do formulario. */
    function HandleTipoCriacaoAnimal(event){
        const valor = event.target.value
        todosDadosDiversos.setTipoCriacaoAnimal(valor)
    }

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Diversos</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Temperatura:</Label>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required  onChange={HandleQuantidadeSondaT} value={todosDadosDiversos.QuantidadeSondaT} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda T"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Umidade:</Label>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required onChange={HandleQuantidadeSondaTU} value={todosDadosDiversos.QuantidadeSondaTU} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda T/U"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Pressão:</Label>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandleQuantidadeSondaPE} value={todosDadosDiversos.QuantidadeSondaPE} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda PE"></Input>
                </FormDiv>
                </FormDivLinha>

                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Sonda Co2:</Label>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required  onChange={HandleQuantidadeSondaCo2} value={todosDadosDiversos.QuantidadeSondaCo2} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda Co2"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Hidrometro:</Label>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required onChange={HandleQuantidadeSondaH2O} value={todosDadosDiversos.QuantidadeSondaH2O} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Sonda H2O"></Input>
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
                <Select value={todosDadosDiversos.Gatilho} onChange={HandleGatilho} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={true} color="#FF8C00" font_size='22px'>Sim</Option>
                    <Option value={false} color="#FF8C00" font_size='22px'>Não</Option>
                </Select>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Flushing:</Label>
                <Select value={todosDadosDiversos.Flushing} onChange={HandleFlushing} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={true} color="#FF8C00" font_size='22px'>Sim</Option>
                    <Option value={false} color="#FF8C00" font_size='22px'>Não</Option>
                </Select>
                </FormDiv>
                </FormDivLinha>

                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>N° Linhas:</Label>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required onChange={HandleQuantidadeLinhas} value={todosDadosDiversos.QuantidadeLinhas} padding='20px 20px' width='80%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Linhas"></Input>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Galpão de:</Label>
                <Select value={todosDadosDiversos.TipoAnimalGalpao} onChange={HandleTipoAnimalGalpao} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                    <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
                    <Option value={'Suinos'} color="#FF8C00" font_size='22px'>Suínos</Option>
                    <Option value={'Aves'} color="#FF8C00" font_size='22px'>Aves</Option>
                </Select>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Tipo de Galpão:</Label>
                <Select value={todosDadosDiversos.TipoCriacaoAnimal} onChange={HandleTipoCriacaoAnimal} required   padding='20px 20px' border='orange 0.5px solid' border_radius='10px' >
                <Option value={''} disabled hidden  color="#FF8C00" font_size='22px'></Option>
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