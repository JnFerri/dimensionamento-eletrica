import styled from "styled-components";

/**
 * Componente de select estilizável.
 * @property {object} props Props React.
 * @property {string} props.width Define o comprimento do componente. Valor padrão '100%'.
 * @property {string} props.margin Define o espaçamento externo do componente. Valor padrão '0px 0px'.
 * @property {string} props.padding Define o espaçamento interno do componente. Valor padrão '0px 0px'.
 * @property {string} props.heigth Define a altura do componente. Valor padrão '10px'.
 * @property {string} props.font_size Define o tamanho da fonte. Valor padrão '16px'. 
 * @property {string} props.border Define estilo da borda do componente. Valor padrão '0px'.
 * @property {string} props.border_radius Define raio da curvatura dos cantos do componente. Valor padrão '0px'.
 */
const Select = styled.select`
    width:${props=> props.width || '100%'};
    margin:${props=>props.margin || '0px 0px'};
    padding:${props => props.padding || '0px 0px'};
    heigth:${props => props.heigth || '10px'};
    font-size:${props => props.font_size || '16px'};
    border:${props => props.border || '0px'};
    border-radius:${props => props.border_radius || '0px'};
    
`

export default Select