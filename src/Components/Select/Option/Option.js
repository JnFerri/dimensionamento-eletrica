import styled from "styled-components";

/**
 * Styled-component de option estilizavel.
 * @property {object} props Props React.
 * @property {string} props.font_size Define o tamanho da fonte. Valor padrão '16px'.
 * @property {string} props.color Define a cor do texto. Valor padrão 'black'.
 * @property {string} props.padding Define o espaçamento interno do componente. Valor padrão '0px 0px'.
 * @property {string} props.background_color Define a cor de fundo do componente. Valor padrão 'white'.
 * @property {string} props.border Define o estilo da borda do componente. Valor padrão '0px'.
 * @property {string} props.margin Define o espaçamento externo do componente. Valor padrão '0px'.
 */
const Option = styled.option`
    font-size:${props => props.font_size || '16px'};
    color:${props => props.color || 'black'};
    padding:${props => props.padding || '0px 0px'};
    background-color:${props => props.background_color || 'white'};
    border:${props => props.border || '0px'};
    margin:${props => props.margin || '0px'};
   
`

export default Option