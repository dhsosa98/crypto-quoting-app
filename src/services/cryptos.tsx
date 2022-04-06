import axios from "axios"
import ArgFetchResultCoins from "../models/ArgFetchResultCoins"

export async function getAllCryptos(){
    const BaseUrl = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
    return await axios.get(BaseUrl)
}

export async function getCryptoInfo(coins: ArgFetchResultCoins){
    const {crypto, currency} = coins
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
    return await axios.get(url)
}