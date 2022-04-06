
import Coin from "./Coin";
import Result from "./Result";

export default interface CoinsState { 
    currencies: ReadonlyArray<Coin>, 
    cryptos: Array<Coin>, 
    result: Result, 
    currency: string, 
    crypto: string, 
    loading: boolean 
}
