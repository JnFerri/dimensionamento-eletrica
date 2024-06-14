import styled from "styled-components";

/**
 * Styled-component de titulo h1 estilizável.
 * @property {object} props Props React.
 * @property {string} props.width Define o comprimento do componente. Valor padrão '100%'.
 * @property {string} props.margin Define o espaçamento externo do componente. Valor padrão '0px 0px'.
 * @property {string} props.font_size Define o tamanho da fonte. Valor padrão '42px'.
 * @property {string} props.text_align Define o alinhamento do texto. Valor padrão 'center'.
 * @property {string} props.color Define a cor do texto. Valor padrão 'black'.
 */
const Titulo1 = styled.h1`
width:${props => props.width || "100%"};
margin: ${props => props.margin || "0px 0px"};
font-size: ${props => props.font_size || "42px"};
text-align: ${props => props.text_align || "center"};
color: ${props => props.color || "black"};

`

export default Titulo1