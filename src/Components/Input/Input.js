import styled from "styled-components"

const Input = styled.input.attrs(props => ({
    type: props.type || "text" // Define o tipo de input como texto por padrão
  }))`
    width: ${props => props.width || "100%"};
    padding: ${props => props.padding || "0px 0px"};
    margin: ${props => props.margin || '0px 0px'};
    border: ${props => props.border || '0px'};
    border-radius: ${props => props.border_radius || '0px'};
    text-align:${props => props.text_align || "center"};
    font-size: ${props => props.font_size || '14px'};
    background-color:${props => props.background_color || 'white'};
    cursor: ${props => props.cursor || 'auto'};
    onWhell:null;

    &[type=number] {
        -moz-appearance: textfield; /* Remove o botão de incremento/decremento no Firefox */
        -webkit-appearance: none; /* Remove os botões de incremento/decremento no Webkit (Chrome, Safari, etc.) */
        margin: 0; /* Corrige qualquer margem remanescente */
      }
    
      /* Estilos para remover o botão de incremento/decremento no Firefox */
      &[type=number]::-webkit-inner-spin-button,
      &[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none; /* Remove os botões de incremento/decremento no Webkit (Chrome, Safari, etc.) */
        margin: 0; /* Corrige qualquer margem remanescente */
      }
    
    }
`

export default Input