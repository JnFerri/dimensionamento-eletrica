import styled from "styled-components";
import Titulo2 from "../../Components/Titulo2/Titulo2";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Titulo4 from "../../Components/Titulo4/Titulo4.js"
import Label from "../../Components/Label/Label";
import Select from "../../Components/Select/Select.js"
import Option from "../../Components/Select/Option/Option.js"

const DimensionamentoContainer = styled.body`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
`

const DimensionamentoSection = styled.section`
display:flex;
flex-direction:column;
width:80%;
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
    margin: 1rem 0px;
    width:100%;
`

function Dimensionamento(){
    return(
        <DimensionamentoContainer>
            <Header/>
            <Titulo2 color="orange" font_size='40px' text_shadow='2px 2px 2px black'>COLETA DE DADOS DE DIMENSIONAMENTO:</Titulo2>
            <DimensionamentoSection>
                <Titulo4>Dados do Galpão</Titulo4>
                <Form width='90%' >
                    <Label color="white">Dimensões do Galpão (m)</Label>
                <FormDivLinha>
                    <Input padding='20px 20px' width='30%' border='orange 0.5px solid' border_radius='10px' placeholder="Comprimento"></Input>
                    <Input padding='20px 20px' width='30%' border='orange 0.5px solid' border_radius='10px' placeholder="Largura"></Input>
                    <Input padding='20px 20px' width='30%' border='orange 0.5px solid' border_radius='10px' placeholder="Altura"></Input>
                </FormDivLinha>
                    
                </Form>
            </DimensionamentoSection>
        </DimensionamentoContainer>

    )
}

export default Dimensionamento