import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        background-color: #282c34;
    }`

export const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const StyledH1 = styled.h1`
    border-bottom: 4px solid #61dafb;
    font-size: calc(15px + 2vmin);
    text-align: center;
    padding-bottom: 10px;
`

export const StyledHeader = styled.header`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const StyledFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 3rem;
`
export const CryptosImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
`