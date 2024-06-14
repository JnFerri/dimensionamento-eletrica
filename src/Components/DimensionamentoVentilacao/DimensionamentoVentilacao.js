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
 * Componente de formulário que pega os dados sobre ventilação na pagina de dimensionamento.
 * @param {object} props Props do componente react. 
 * @param {object} props.todosDadosVentilacao Objeto com os estados react utilizados neste componente que foram passados como propriedade deste componente a partir do componente dimensionamento.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setQuantidadeExaustoresForm Função responsável por definir novo valor para o estado QuantidadeExaustoresForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setPotenciaExaustoresForm Funçao responsável por definir novo valor para o estado PotenciaExaustoresForm
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setQuantidadeAcCortinasForm Função responsável por definir novo valor para o estado QuantidadeAcCortinasForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setPotenciaAcCortinasForm Função responsável por definir novo valor para o estado PotenciaAcCortinasForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setQuantidadeAcInletForm Função responsável por definir novo valor para o estado QuantidadeAcInletForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setPotenciaAcInletForm Função responsável por definir novo valor para o estado PotenciaAcInletForm.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.todosDadosVentilacao.setPossuiAtuadorInlet Função responsável por definir novo valor para o estado PossuiAtuadorInlet.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setQuantidadeVentiladoresForm Função responsável por definir novo valor para o estado QuantidadeVentiladoresForm.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.todosDadosVentilacao.setPotenciaVentiladoresForm Função responsável por definir novo valor para o estado PotenciaVentiladoresForm.
 * @param {number} props.todosDadosVentilacao.QuantidadeExaustoresForm Estado que guarda o valor do input de quantidade de exaustores.
 * @param {number} props.todosDadosVentilacao.PotenciaExaustoresForm Estado que guarda o valor do input de potencia dos exaustores.
 * @param {number} props.todosDadosVentilacao.QuantidadeAcCortinasForm Estado que guarda o valor do input de quantidade de acionamentos de cortinas.
 * @param {number} props.todosDadosVentilacao.PotenciaAcCortinasForm Estado que guarda o valor do input de potencia do acionamento das cortinas.
 * @param {number} props.todosDadosVentilacao.QuantidadeAcInletForm Estado que guarda o valor do input de quantidade de acionamento de inlet.
 * @param {number} props.todosDadosVentilacao.PotenciaAcInlerForm Estado que guarda o valor do input de potencia dos acionamentos dos inlets.
 * @param {boolean} props.todosDadosVentilacao.PossuiAtuadorInlet Valor do campo checkbox do formulario que pergunta se possui atuador, caso esteja marcado = true, caso esteja desmarcano é false.
 * @param {number} props.todosDadosVentilacao.QuantidadeVentiladoresForm Estado que guarda o valor do input de quantidade de ventiladores.
 * @param {number} props.todosDadosVentilacao.PotenciaVentiladoresForm Estado que guarda o valor do input de potencia dos ventiladores.
 * @returns {JSX.Element} Componente com inputs que captam informações sobre a ventilação.
 */
function DimensionamentoVentilacao({todosDadosVentilacao}){
    
    /** Caso o valor do input seja um numero inteiro e maior ou igual a 0, define o estado QuantidadeExasutoresForm com o valor do input. */
    function HandleQuantidadeExaustores(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
                todosDadosVentilacao.setQuantidadeExaustoresForm(valor)
        }
    }

    /** Caso o valor do input seja um numero maior ou igual a 0, define o estado PotenciaExaustoresForm com o valor do input. */
    function HandlePotenciaExaustores(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaExaustoresForm(valor)
        }
    }

    /** Caso o valor do input seja um numero inteiro e maior ou igual a 0, define o estado QuantidadeAcCortinasForm com o valor do input. */
    function HandleQuantidadeAcCortinas(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosVentilacao.setQuantidadeAcCortinasForm(valor)
        }
    }

    /** Caso o valor do input seja um numero maior ou igual a 0, define o estado PotenciaAcCortinasForm com o valor do input. */
    function HandlePotenciaAcCortinas(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaAcCortinasForm(valor)
        }
    }

    /** Caso o valor do input seja um numero inteiro e maior ou igual a 0, define o estado QuantidadeAcInletForm com o valor do input. */
    function HandleQuantidadeAcInlet(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosVentilacao.setQuantidadeAcInletForm(valor)
        }
    }

    /** Caso o valor do input seja um numero maior ou igual a 0, define o estado PotenciaAcInletForm com o valor do input. */
    function HandlePotenciaAcInlet(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaAcInletForm(valor)
        }
    }

    /** Define o valor do estado PossuiAtuadorInlet conforme input de checkbox que pergunta se possui atuador. */
    function HandlePossuiAtuador(event){
        todosDadosVentilacao.setPossuiAtuadorInlet(event.target.checked)
    }

    /** Caso o valor do input for um numero inteiro e maior ou igual a 0, define o estado QuantidadeVentiladoresForm com o valor do input. */
    function HandleQuantidadeVentiladores(event){
        const valor = event.target.value
        if(VerificaSeNumeroInteiroEMaiorQueZero(valor)){
            todosDadosVentilacao.setQuantidadeVentiladoresForm(valor)
        }
    }

    /** Caso o valor do input for um numero maior ou igual a 0, define o estado PotenciaVentiladoresForm com o valor do input. */
    function HandlePotenciaVentiladores(event){
        const valor = event.target.value.replace(',', '.')
        if(VerificaSeNumeroMaiorQueZero(valor)){
            todosDadosVentilacao.setPotenciaVentiladoresForm(valor)
        }
    }

    

    return(
        <DimensionamentoSection>
                <Titulo4 color="orange" font_size='32px'>Ventilação</Titulo4>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Exaustores:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandleQuantidadeExaustores} value={todosDadosVentilacao.QuantidadeExaustoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Exaustores"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaExaustores} value={todosDadosVentilacao.PotenciaExaustoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Cortinas:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required onChange={HandleQuantidadeAcCortinas} value={todosDadosVentilacao.QuantidadeAcCortinasForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ac. Cortinas"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaAcCortinas} value={todosDadosVentilacao.PotenciaAcCortinasForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
                <FormDivLinha>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Inlet:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandleQuantidadeAcInlet} value={todosDadosVentilacao.QuantidadeAcInletForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ac. Inlet"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaAcInlet} value={todosDadosVentilacao.PotenciaAcInletForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                <FormDivLinha>
                <Label font_size='16px' translate="0px" color="orange" text_align='center' width='100%'>Assinale caso possua atuador</Label>
                <Input type="checkbox" onWheel={(e) => e.target.blur()} onChange={HandlePossuiAtuador} checked={todosDadosVentilacao.PossuiAtuadorInlet} width='100%'></Input>
                </FormDivLinha>
                </FormDiv>
                <FormDiv>
                <Label font_size='16px' translate="0px" color="orange" text_align='left' width='100%'>Ventiladores:</Label>
                <FormDivLinha>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandleQuantidadeVentiladores} value={todosDadosVentilacao.QuantidadeVentiladoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Quantidade Ventiladores"></Input>
                <Input  type="number" onWheel={(e) => e.target.blur()} required  onChange={HandlePotenciaVentiladores} value={todosDadosVentilacao.PotenciaVentiladoresForm} padding='20px 20px' width='40%' border='orange 0.5px solid' border_radius='10px' placeholder="Potência em CV"></Input>
                </FormDivLinha>
                </FormDiv>
                </FormDivLinha>
            </DimensionamentoSection>
    )
}

export default DimensionamentoVentilacao