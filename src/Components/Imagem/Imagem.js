import styled from "styled-components"

/** 
 * Styled-component de imagem com comprimento e margem estilizável.
 * @property {object} props Props react.
 * @property {string} props.width Define comprimento do componente. Valor padrão '100%'.
 * @property {string} props.margin Define espaçamento externo do componente. Valor padrão ' 0px 0px '.
 */
const Imagem = styled.img`
width: ${props=> props.width || "100%"};
margin: ${props => props.margin || "0px 0px"};
`

export default Imagem