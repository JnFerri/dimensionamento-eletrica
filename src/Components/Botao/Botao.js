import styled from "styled-components";

/**
 * Styled-componente de botão estilizável com animação de mover 2px no eixo Y quando clicado e aumenta escala em 1.05 quando mouse esta em cima.
 * @property {object} props Props React
 * @property {string} props.color Define a cor da fonte. Valor padrão 'black'.
 * @property {string} props.backgroundcolor Define a cor de fundo do componente.Valor padrão 'white'.
 * @property {string} props.border_radius Define o raio de curvatura dos cantos do componente. Valor padrão '0px'.
 * @property {string} props.width Define o comprimento do componente. Valor padrão '100%'.
 * @property {string} props.border Define o estilo da borda do componente. Valor padrão '0px'.
 * @property {string} props.padding Define o espaçamento interno do componente. Valor padrão '0px 0px'.
 * @property {string} props.margin Define o espaçamento externo do componente. Valor padrão '0px 0px'. 
 * @property {string} props.font_size Define o tamanho da fonte. Valor padrão '14px'.
 * @property {string} props.boxshadow Define a sombra do componente. Valor padrão '0px 0px 0px'.
 * @property {string} props.colorHover Define a cor do texto quando o mouse esta em cima do componente.
 * 
 * @example
 * <Botao color='orange' backgroundcolor='blue' border='1px solid black' border_radius='2.5px' />
 */
const Botao = styled.button`
    color: ${props=> props.color || 'black'};
    background-color: ${props=> props.backgroundcolor || 'white'};
    border-radius: ${props=> props.border_radius || '0px'};
    width: ${props=> props.width ||'100%'};
    border: ${props=> props.border || '0px'};
    padding: ${props=> props.padding || '0px 0px'};
    margin: ${props => props.margin || '0px 0px'};
    font-size: ${props => props.font_size|| '14px'};
    box-shadow : ${props => props.boxshadow || '0px 0px 0px'};
    cursor:pointer;
    transition: transform 0.2s;
    &:active {
        transform: translateY(2px);
      }
    &:hover {
        transform: scale(1.05);
        color:${props=>props.colorHover || props.color}
    }
`

export default Botao