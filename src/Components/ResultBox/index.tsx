import { useSelector } from "react-redux";
import { selectCoins } from "../../features/coinsSlice";
import { StyledImage, StyledDiv, StyledSpan, StyledParagraph, StyledContainer } from "./styles";
import { FC } from "react";
import Loader from 'react-ts-loaders'

const ResultBox: FC = () => {
    const { result, loading } = useSelector(selectCoins)
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result

    if (loading){
        return <Loader type="spinner"/>   
    }

    return (
        <>
            {PRICE &&
                <StyledContainer>
                    <div>
                        <StyledDiv>
                            <StyledParagraph>The actual price is: <StyledSpan>{PRICE}</StyledSpan></StyledParagraph>
                            <StyledImage src={`https://cryptocompare.com/${IMAGEURL}`} />
                        </StyledDiv>
                        <StyledParagraph>High price 24hs <StyledSpan>{HIGHDAY}</StyledSpan></StyledParagraph>
                        <StyledParagraph>Low price 24hs <StyledSpan>{LOWDAY}</StyledSpan></StyledParagraph>
                        <StyledParagraph>Var % last 24hs: <StyledSpan value={Number(CHANGEPCT24HOUR)}>%{' '}{CHANGEPCT24HOUR}</StyledSpan></StyledParagraph>
                        <StyledParagraph>Last update: <StyledSpan>{LASTUPDATE}</StyledSpan></StyledParagraph>
                    </div>
                </StyledContainer>
            }
        </>
    );
}

export default ResultBox;