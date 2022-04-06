import { useDispatch } from 'react-redux'
import { StyledDiv, StyledHeader, StyledFlexBox, GlobalStyle, CryptosImage, StyledH1 } from './styles'
import cryptos from '../../assets/cryptos.png'
import { useEffect } from 'react'
import { fetchCoins } from '../../features/coinsSlice'
import Form from '../Form'
import ResultBox from '../ResultBox'
import { FC } from 'react'

const App: FC = () =>{
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoins())
  }, [])

  return (
    <>
      <GlobalStyle />
      <StyledDiv >
        <StyledFlexBox >
          <StyledHeader>
            <StyledH1>Quote your Cryptocurrency Instantly</StyledH1>
            <Form />
          </StyledHeader>
          <ResultBox />
        </StyledFlexBox>
        <CryptosImage src={cryptos} />
      </StyledDiv>
    </>
  )
}

export default App

