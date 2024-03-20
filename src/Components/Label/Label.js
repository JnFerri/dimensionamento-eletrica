import styled from "styled-components";


const Label = styled.label`
    font-size : ${props => props.font_size || '16px'};
    color : ${props => props.color || 'black'};
    transform: translateY(${props => props.translate || '0px'});
    background-color: ${props => props.background_color || ''};
    text-align:${props => props.text_align || 'center'};
    width:${props => props.width || '100%'};
`

export default Label