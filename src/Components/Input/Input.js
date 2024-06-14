import styled from "styled-components"

/**
 * Componente de input estilizável.
 * @property {object} props Props do componente react.
 * @property {string} props.type Define o tipo do input. Valor padrão 'text'.
 * @property {string} props.width Define o comprimento do componente. Valor padrão '100%'.
 * @property {string} props.padding Define o espaçamento interno do componente. Valor padrão '0px 0px'.
 * @property {string} props.margin Define o espaçamento externo do componente. Valor padrão '0px 0px'.
 * @property {string} props.border Define estilo da borda do componente. Valor padrão '0px'.
 * @property {string} props.border_radius Define o raio da curvatura dos cantos do componente. Valor Padrão '0px'.
 * @property {string} props.text_align Define o alinhamento do texto. Valor padrão 'center'.
 * @property {string} props.font_size Define o tamanho da fonte. Valor padrão '14px'.
 * @property {string} props.background_color Define a cor de fundo do componente. Valor padrão 'white'.
 * @property {cursor} props.cursor Define estilo do cursor do mouse sobre o elemento. Valor padrão 'auto'.
 * 
 * @example
 * <Input type='number' padding='5px 0px' border='0.5px solid black'  border_radius='2.5px' />
 */
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