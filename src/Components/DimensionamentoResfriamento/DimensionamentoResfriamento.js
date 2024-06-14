import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
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
    border:orange 0.1px solid;
    border-radius:10px;
    padding:10px 10px;
`

/**
 * Componente de formulário que pega os dados sobre resfriamento na pagina de dimensionamento.
 * @param {object} props Props do componente react. 
 * @param {object} props.todosDadosResfriamento Objeto com os estados react utilizados neste componente que foram passados como propriedade deste componente a partir do componente dimensionamento.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosResfriamento.setQuantidadeNebulizador Função responsável por definir novo valor para o estado QuantidadeNebulizador.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosResfriamento.setPotenciaNebulizador Função responsável por definir novo valor para o estado PotenciaNebulizador.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosResfriamento.setQuantidadeCooling Função responsável por definir novo valor para o estado QuantidadeCooling.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosResfriamento.setPotenciaCooling Função responsável por definir novo valor para o estado PotenciaCooling.
 * @param {number} props.todosDadosResfriamento.QuantidadeNebulizador Estado que guarda o valor do input de quantidade de nebulizador.
 * @param {number} props.todosDadosResfriamento.PotenciaNebulizador Estado que guarda o valor do input de potencia do nebulizador.
 * @param {number} props.todosDadosResfriamento.QuantidadeCooling Estado que guarda o valor do input de quantidade de cooling.
 * @param {number} props.todosDadosresfriamento.PotenciaCooling Estado que guarda o valor do input de pontecia cooling.
 * @returns {JSX.Element} Componente com inputs que captam informações sobre a resfriamento.
 */
function DimensionamentoResfriamento({todosDadosResfriamento}){

    /** Caso o valor do input seja um numero inteiro e maior ou igual a 0, define o estado QuantidadeNebulizador com o valor do input. */
    function HandleQuantidadeNebulizadores(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosResfriamento.setQuantidadeNebulizador(valor)
        }
    }

    /** Caso o valor do input seja um numero maior ou igual a 0, define o estado PotenciaNebulizadores com o valor do input. */
    function HandlePotenciaNebulizadores(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosResfriamento.setPotenciaNebulizador(valor)
        }
    }

    /** Caso o valor do input seja um numero inteiro e maior ou igual a 0, define o estado QuantidadeCooling com o valor do input. */
    function HandleQuantidadeCooling(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosResfriamento.setQuantidadeCooling(valor)
        }
    }
    
    /** Caso o valor do input seja um numero maior ou igual a 0, define o estado PotenciaCooling com o valor do input. */
    function HandlePotenciaCooling(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosResfriamento.setPotenciaCooling(valor)
        }
    }


    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Resfriamento</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Nebulizador:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandleQuantidadeNebulizadores} value={todosDadosResfriamento.QuantidadeNebulizador} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Nebulizadores"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaNebulizadores} value={todosDadosResfriamento.PotenciaNebulizador} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Pad Cooling:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required onChange={HandleQuantidadeCooling} value={todosDadosResfriamento.QuantidadeCooling} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Pad Cooling"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaCooling} value={todosDadosResfriamento.PotenciaCooling} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                
            </DimensionamentoSection>
    )
}


export default DimensionamentoResfriamento