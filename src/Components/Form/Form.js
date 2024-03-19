import styled from "styled-components";

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