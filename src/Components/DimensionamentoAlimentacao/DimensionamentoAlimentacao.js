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
 * Componente de formulario que pega os dados sobre alimentação na pagina de dimensionamento.
 * @param {object} props Props do componente React
 * @param {object} props.todosDadosAlimentacao Objeto com os estados react utilizados neste componente que foram passados como propriedade deste componente a partir do componente dimensionamento.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAlimentacao.setQuantidadeLinhasPrimarias Função responsável por definir novo valor para o estado QuantidadeLinhasPrimarias.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAlimentacao.setPotenciaLinhas Função responsável por definir novo valor para o estado PotenciaLinhas.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAlimentacao.setQuantidadeComedouros Função responsável por definir novo valor para o estado QuantidadeComedouros.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAlimentacao.setPotenciaComedouros Função responsável por definir novo valor para o estado PotenciaComedouros.
 * @param {number} props.todosDadosAlimentacao.QuantidadeLinhasPrimarias Estado responsável por guardar o valor do input de quantidade de linhas primarias.
 * @param {number} props.todosDadosAlimentacao.PotenciaLinhas Estado responsável por guardar o valor do input de potencia das linhas primarias.
 * @param {number} props.todosDadosAlimentacao.QuantidadeComedouros Estado responsável por guardar o valor do input de quantidade de comedouros.
 * @param {number} props.todosDadosAlimentacao.PotenciaComedouros Estado responsável pro guardar o valor do input de potencia dos comedouros.
 * @returns {JSX.Element}  Componente com inputs que captam informações sobre alimentação do galpão.
 */
function DimensionamentoAlimentacao({todosDadosAlimentacao}){

    /** Caso o valor do input de quantidade de linhas primarias sejá inteiro e maior ou igual a 0 define o estado QuantidadeLinhasPrimarias com o valor do input. */
    function HandleQuantidadeLinhasPrimarias(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAlimentacao.setQuantidadeLinhasPrimarias(valor)
        }
    }

    /** Caso o valor do input de potencia das linhas seja maior ou igual a 0 define o valor do estado PotenciaLinhas com o valor do input. */
    function HandlePotenciaLinhas(event){
        const valor = event.target.value.replace(',','.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAlimentacao.setPotenciaLinhas(valor)
        }
    }

    /** Caso o valor do input de quantidade de comedouros seja inteiro e maior ou igual a 0 define o estado QuantidadeComedouros com o valor do input. */
    function HandleQuantidadeComedouros(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAlimentacao.setQuantidadeComedouros(valor)
        }
    }

    /** Caso o valor do input de potencia dos comedouros sejá maior ou igual a 0 define o estado PotenciaComedouros com o valor do input. */
    function HandlePotenciaComedouros(event){
        const valor = event.target.value.replace(',','.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAlimentacao.setPotenciaComedouros(valor)
        }
    }


    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Alimentação</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Linha Primária:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandleQuantidadeLinhasPrimarias} value={todosDadosAlimentacao.QuantidadeLinhasPrimarias} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Linhas"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaLinhas} value={todosDadosAlimentacao.PotenciaLinhas} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Comedouros:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required onChange={HandleQuantidadeComedouros} value={todosDadosAlimentacao.QuantidadeComedouros} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Comedouros"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaComedouros} value={todosDadosAlimentacao.PotenciaComedouros} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                
            </DimensionamentoSection>
    )
}


export default DimensionamentoAlimentacao