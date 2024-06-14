import styled from "styled-components";

/**
 * Componente de formulario estilizável.
 * @property {object} props Props componente React.
 * @property {string} props.width Define o comprimento do componente. Valor padrão '100%'.
 * @property {string} props.padding Define o espaçamento interno do componente. Valor padrão '0px'.
 * @property {string} props.border Define estilo da borda do componente. Valor padrão '0px'.
 * @property {string} props.border_radius Define raio de curvatura dos cantos do componente. Valor padrão '0px'.
 */
const Form = styled.form`
    width:${props => props.width || '100%'};
    padding:${props => props.padding || '0px'};
    border:${props => props.border || '0px'};
    border-radius:${props => props.border_radius || '0px'};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`

export default Form