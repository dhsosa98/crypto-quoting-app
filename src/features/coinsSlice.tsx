import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import ArgFetchResultCoins from "../models/ArgFetchResultCoins";
import CoinInfo from "../models/CoinInfoAPI";
import CoinsState from "../models/CoinsState";
import Coin from "../models/Coin";
import Result from "../models/Result";
import { getAllCryptos, getCryptoInfo } from "../services/cryptos";

export const fetchCoins = createAsyncThunk<Coin[]>("coins/fetch", async (e, { dispatch }) => {
    dispatch(setLoading(true))
    const {data} = await getAllCryptos()
    const arrayCryptos = data?.Data?.map((crypto: CoinInfo) => {
        const { Name: id, FullName: name } = crypto.CoinInfo
        return { id, name }
    })
    dispatch(setLoading(false))
    return (arrayCryptos) as Coin[]
});

export const fetchResult = createAsyncThunk<Result, ArgFetchResultCoins>("coins/fetchResult", async (args, { dispatch }) => {
    const { currency, crypto } = args
    dispatch(setLoading(true))
    const {data} = await getCryptoInfo(args)
    dispatch(setLoading(false))
    return (data.DISPLAY[crypto][currency]) as Result
});

const initialState: CoinsState = {
    currency: "USD",
    currencies: [
        { id: 'USD', name: 'United States Dollar' },
        { id: 'MXN', name: 'Mexican Peso' },
        { id: 'EUR', name: 'Euro' },
        { id: 'GBP', name: 'British Pound' }],
    crypto: "BTC",
    cryptos: [],
    result: {},
    loading: false
}

const coinsSlice = createSlice({
    name: "coins",
    initialState: initialState,
    reducers: {
        setCurrency(state, action: PayloadAction<string>) {
            state.currency = action.payload
        },
        setCrypto(state, action: PayloadAction<string>) {
            state.crypto = action.payload
        },
        setResult(state, action: PayloadAction<Result>) {
            state.result = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCoins.fulfilled, (state, action: PayloadAction<Coin[]>) => {
            state.cryptos = action.payload
        }),
        builder.addCase(fetchResult.fulfilled, (state, action: PayloadAction<Result>) => {
            state.result = action.payload
        })
    }
});

export const { setResult, setCrypto, setCurrency, setLoading } = coinsSlice.actions;

export const selectCoins = (state: RootState) => state.coins;

export default coinsSlice.reducer