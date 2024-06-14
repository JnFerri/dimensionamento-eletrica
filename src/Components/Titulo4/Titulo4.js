import styled from "styled-components";

/**
 * Styled-component de titulo h4 estilizável.
 * @property {object} props Props React.
 * @property {string} props.width Define o comprimento do componente. Valor padrão '100%'.
 * @property {string} props.margin Define o espaçamento externo do componente. Valor padrão '0px 0px'.
 * @property {string} props.font_size Define o tamanho da fonte. Valor padrão '14px'.
 * @property {string} props.text_align Define o alinhamento do texto. Valor padrão 'center'.
 * @property {string} props.color Define a cor do texto. Valor padrão 'black'.
 * @property {string} props.backgroundcolor Define a cor de fundo do componente. Valor padrão ''.
 * @property {string} props.border_radius Define o raio da curvatura dos cantos do componente. Valor padrão '0px'.
 */
const Titulo4 = styled.h4`
width:${props => props.width || "100%"};
margin: ${props => props.margin || "0px 0px"};
font-size: ${props => props.font_size || "14px"};
text-align: ${props => props.text_align || "center"};
color: ${props => props.color || "black"};
background-color: ${props => props.backgroundcolor || ""};
border-radius: ${props => props.border_radius || "0px"};
`

export default Titulo4