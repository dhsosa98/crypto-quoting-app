import styled from "styled-components";
import  PropsSpan  from "../../models/PropsSpan";

export const StyledImage = styled.img`
    max-width: 40px;
    height: auto;
    object-fit: contain;
`;

export const StyledDiv = styled.div`
    display: inline-flex;
    gap: 5px;
    `;

export const StyledSpan = styled.span<PropsSpan>`
    color: ${(props)=> props.value!==undefined && props.value<0 ? "red" : "#61dafb"};
    font-weight: bold;
`

export const StyledParagraph = styled.p`
    color: white;
    font-weight: bold;
`

export const StyledContainer = styled.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(6px + 2vmin);
    color: white;
    `;