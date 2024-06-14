import styled from "styled-components"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Titulo4 from "../Titulo4/Titulo4"
import { VerificaSeNumeroInteiroEMaiorQueZero } from "../../Helpers/VerificaSeNumeroInteiroEMaiorQueZero"
import { VerificaSeNumeroMaiorQueZero } from "../../Helpers/VerificaSeNumeroMaiorQueZero"
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
 * Componente de formulario que pega os dados sobre aquecedores na pagina de dimensionamento.
 * @param {object} props Props do componente react.
 * @param {object} props.todosDadosAquecedores  Objeto com os estados react utilizados neste componente que foram passados como propriedade deste componente a partir do componente dimensionamento.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAquecedores.setQuantidadeAquecedor1 Função responsável por definir novo valor para o estado QuantidadeAqeucedor1.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAquecedores.setPotenciaAquecedor1 Funcao responsável por definir novo valor para o estado PotenciaAquecedor1.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAquecedores.setQuantidadeAquecedor2 Função responsável por definir novo valor para o estado QuantidadeAquecedor2.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAquecedores.setPotenciaAquecedor2 Função responsavel por definir novo valor para o estado PotenciaAquecedor2.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAquecedores.setQuantidadeFoguista Função reponsável por definir novo valor para o estado QuantidadeFoguista.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosAquecedores.setPotenciaFoguista Função responsável por definir novo valor para o estado PotenciaFoguista.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.todosDadosAquecedores.setFornoPossuiPainel Função responsável por definir novo valor para o estado FornoPossuiPainel.
 * @param {number} props.todosDadosAquecedores.QuantidadeAquecedor1 Estado react que guarda o valor do input de quantidade de aquecedores 1. 
 * @param {number} props.todosDadosAquecedores.PotenciaAquecedor1 Estado react que guarda o valor do input de potencia dos aquecedores 1.
 * @param {number} props.todosDadosAquecedores.QuantidadeAquecedor2 Estado react que guarda o valor do input de quantidade de aquecedores 2.
 * @param {number} props.todosDadosAquecedores.PotenciaAquecedor2 Estado react que guarda o valor do input de potencia dos aquecedores 2.
 * @param {number} props.todosDadosAquecedores.QuantidadeFoguista Estado react que guarda o valor do input de quantidade de foguista.
 * @param {number} props.todosDadosAquecedores.PotenciaFoguista Estado react que guarda o valor do input de potencia do foguista.
 * @param {boolean} props.todosDadosAquecedores.FornoPossuiPainel Estado react que guarda o valor da option selecionada no select de forno possui painel.
 * @returns {JSX.Element} Componente com inputs que captam informações sobre aquecimento do galpão.
 */
function DimensionamentoAquecedores({todosDadosAquecedores}){

    /** Caso o valor do input de quantidade de aquecedores 1 for inteiro e maior ou igual a 0, define o estado QuantidadeAquecedor1 com o valor do input. */
    function HandleQuantidadeAquecedor1(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAquecedores.setQuantidadeAquecedor1(valor)
        }
    }

    /** Caso o valor do input de potencia dos aquecedores 1 for maior ou igual a 0, define o estado PotenciaAquecedor1 com o valor do input. */
    function HandlePotenciaAquecedor1(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAquecedores.setPotenciaAquecedor1(valor)
        }
    }

    /** Caso o valor do input de quantidade de aquecedores 2 for inteiro e maior ou igual a 0, define o estado QuantidadeAqecedor2 com o valor do input. */
    function HandleQuantidadeAquecedor2(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAquecedores.setQuantidadeAquecedor2(valor)
        }
    }

    /** Caso o valor do input de potencia dos aquecedores 2 for maior ou igual a 0, define o estado PotenciaAquecedor2 com o valor do input. */
    function HandlePotenciaAquecedor2(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAquecedores.setPotenciaAquecedor2(valor)
        }
    }

    /** Caso o valor do input de quantidade de foguista seja inteiro e maior ou igual a 0, define o estado QuantidadeFoguista com o valor do input. */
    function HandleQuantidadeFoguista(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosAquecedores.setQuantidadeFoguista(valor)
        }
    }

    /** Caso o valor do input de potencia dos foguista seja maior ou igual a 0, define o estado PotenciaFoguista com o valor do input. */
    function HandlePotenciaFoguista(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosAquecedores.setPotenciaFoguista(valor)
        }
    }

    /** Define o estado FornoPossuiPainel com o valor do option selecionado no select de forno possui painel. */
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
                <Input  type="number" onWheel={(e) => e.target.blur()}  required  onChange={HandleQuantidadeAquecedor1} value={todosDadosAquecedores.QuantidadeAquecedor1} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Aquecedores 1"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaAquecedor1} value={todosDadosAquecedores.PotenciaAquecedor1} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Aquecedor 2:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required onChange={HandleQuantidadeAquecedor2} value={todosDadosAquecedores.QuantidadeAquecedor2} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Aquecedores 2"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaAquecedor2} value={todosDadosAquecedores.PotenciaAquecedor2} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Foguista:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()}  required  onChange={HandleQuantidadeFoguista} value={todosDadosAquecedores.QuantidadeFoguista} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Foguista"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaFoguista} value={todosDadosAquecedores.PotenciaFoguista} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
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