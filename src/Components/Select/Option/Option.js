import styled from "styled-components";


const Option = styled.option`
    font-size:${props => props.font_size || '16px'};
    color:${props => props.color || 'black'};
    padding:${props => props.padding || '0px 0px'};
    background-color:${props => props.background_color || 'white'};
    border:${props => props.border || '0px'};
    margin:${props => props.margin || '0px'};
   
`

export default Option