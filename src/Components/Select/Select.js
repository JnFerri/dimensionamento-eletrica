import styled from "styled-components";


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