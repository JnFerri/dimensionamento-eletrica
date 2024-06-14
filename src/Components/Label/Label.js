import styled from "styled-components";

/**
 * Styled-component de label estilizável.
 * @property {object} props Props React.
 * @property {string} props.font_size Define o tamanho da fonte . Valor padrão '16px'.
 * @property {string} props.color Define a cor do texto. Valor padrão 'black'.
 * @property {string} props.translate Define a quantidade de pixels que o componente esta deslocado no eixo vertical. Valor padrão '0px'.
 * @property {string} props.background_color Define a cor de fundo do componente. Valor padrão ''.
 * @property {string} props.text_align Define o alinhamento do texto. Valor padrão 'center'.
 * @property {string} props.width Define o comprimento do componente. Valor padrão '100%'.
 */
const Label = styled.label`
    font-size : ${props => props.font_size || '16px'};
    color : ${props => props.color || 'black'};
    transform: translateY(${props => props.translate || '0px'});
    background-color: ${props => props.background_color || ''};
    text-align:${props => props.text_align || 'center'};
    width:${props => props.width || '100%'};
`

export default Label