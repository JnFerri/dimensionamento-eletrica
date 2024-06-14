import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
import Select from "../Select/Select"
import Option from "../Select/Option/Option"


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
 * Componente de formulário que pega os dados sobre a iluminação na pagina de dimensionamento.
 * @param {object} props Props do componente react.
 * @param {object} props.todosDadosIluminacao Objeto com os estados react utilizados neste componente que foram passados como propriedade deste componente a partir do componente dimensionamento.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosIluminacao.setQuantidadeLampadas Função responsável por definir novo valor para o estado QuantidadeLampadas.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosIluminacao.setPotenciaLampadas Função responsável por definir novo valor para o estado PotenciaLampadas.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosIluminacao.setCorLampadas Função responsável por definir novo valor para o estado CorLampadas.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.todosDadosIluminacao.setDimerizavel Função responsável por definir novo valor para o estado Dimerizavel.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosIluminacao.setQuantidadeCircuitos Função responsável por definir novo valor para o estado QuantidadeCircuitos.
 * @param {number} props.todosDadosIluminacao.QuantidadeLampadas Estado react que guarda o valor do input de quantidade de lampadas do formulário.
 * @param {number} props.todosDadosIluminacao.PotenciaLampadas Estado react que guarda o valor do input de potencia das lampadas do fomrulário.
 * @param {number} props.todosDadosIluminacao.CorLampadas Estado react que guarda o valor da option selecionada no select de cor das lampadas do formulário.
 * @param {boolean} props.todosDadosIluminacao.Dimerizavel Estado react que guarda o valor da option selecionada no select de dimerizável do formulário.
 * @param {number} props.todosDadosIluminacao.QuantidadeCircuitos Estado react que guarda o valor do input de quantidade de circuitos do formulário.
 * @returns {JSX.Element} Componente com inputs que captam informações sobre a iluminação.
 */
function DimensionamentoIluminacao({todosDadosIluminacao}){

    /** Caso o valor do input de quantidade de lampadas for um numero inteiro maior ou igual a 0, define o estado QuantidadeLampadas com o valor do input.  */
    function HandleQauntidadeLampadas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setQuantidadeLampadas(valor)
        }
    }

    /** Caso o valor do input de potencia das lampadas for um numero inteiro maior ou igual a 0, define o estado PotenciaLampadas com o valor do input. */
    function HandlePotenciaLampadas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setPotenciaLampadas(valor)
        }
    }

    /** Caso o valor do input de cor da lampada for um numero inteiro maior ou igual a 0, define o estado CorLampadas com o valor do input. */
    function HandleCorLampadas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setCorLampadas(valor)
        }
    }

    /** Caso o valor do input de quantidade de circuitos for um numero inteiro maior ou igual a 0, define o estado QuantidadeCircuitos com o valor do input. */
    function HandleQuantidadeCircuitos(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosIluminacao.setQuantidadeCircuitos(valor)
        }
    }

    /** Define o estado Dimerizavel com o valor da option selecionada no select de dimerizavel do formulário. */
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
                <Input  type="number"   required  onChange={HandleQauntidadeLampadas} onWheel={(e) => e.target.blur()} value={todosDadosIluminacao.QuantidadeLampadas} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Potencia Lampadas:</Label>
                <Input  type="number" required  onChange={HandlePotenciaLampadas} onWheel={(e) => e.target.blur()} value={todosDadosIluminacao.PotenciaLampadas} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Potencia"></Input>
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
                <Input  type="number"  required  onChange={HandleQuantidadeCircuitos} onWheel={(e) => e.target.blur()} value={todosDadosIluminacao.QuantidadeCircuitos} padding='20px 20px' width='100%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Circuitos"></Input>
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