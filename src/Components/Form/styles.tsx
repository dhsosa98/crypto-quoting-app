import styled from 'styled-components'


export const StyledForm = styled.form`
  display: flex;  
  flex-direction: column;
  
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  gap: 15px;
  padding: 10px;
`

export const StyledLabel = styled.label`
    color: white;
    font-size: calc(10px + 2vmin);
    font-weight: 500;
`

export const StyledSelect = styled.select`
    color: black;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-size: calc(7px + 2vmin);
    padding: 10px;
    width: 100%;
    :hover{
        background-color: #e4ecf1;
    }
`

export const StyledButton = styled.button`
    background-color: #61dafb;
    border-radius: 8px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);	
    :hover{
        background-color: #5fcae7;
    }
    width: 100%;
    padding: 10px;
    color: white;
    font-size: calc(7px + 2vmin);
    cursor: pointer;
    margin-top: 10px;
    font-weight: bold;
    `
