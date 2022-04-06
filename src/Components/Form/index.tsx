import { FC, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResult, selectCoins, setCrypto, setCurrency } from "../../features/coinsSlice";
import Coin from "../../models/Coin";
import { StyledForm, StyledSelect, StyledButton, StyledLabel } from "./styles";

const Form: FC = () =>{
    const { currencies, cryptos, currency, crypto } = useSelector(selectCoins)
    const dispatch = useDispatch()

    const handleSubmit= (event: SyntheticEvent ) => {
        event.preventDefault()
        dispatch(fetchResult({ currency, crypto }))
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>Select the currency</StyledLabel>
                <StyledSelect value={currency} onChange={(e) => dispatch(setCurrency(e.target.value))} >
                    {currencies.map((elem: Coin ) => (
                        <option key={elem.id} value={elem.id}>{elem.id + " - " + elem.name}</option>))}
                </StyledSelect>
                <StyledLabel>Select the criptocurrency</StyledLabel>
                <StyledSelect value={crypto} onChange={(e) => dispatch(setCrypto(e.target.value))} >
                    {cryptos.map((elem: Coin) => (
                        <option key={elem.id} value={elem.id}>{elem.id + " - " + elem.name}</option>))}
                </StyledSelect>
                <StyledButton type="submit">Quote</StyledButton>
            </StyledForm>
        </>
    );
}

export default Form;