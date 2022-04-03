import{W as L,s as a,a as g,c as x,b as R,u as S,d as b,j as o,F as h,e as l,r as I,f as P,R as A,P as U,g as j}from"./vendor.e9fe61e3.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}};B();const E=L`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        background-color: #282c34;
    }`,F=a.div`
  min-height: 100vh;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`,N=a.h1`
    border-bottom: 4px solid #61dafb;
    font-size: calc(15px + 2vmin);
    text-align: center;
    padding-bottom: 10px;
`,k=a.header`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  font-size: calc(10px + 2vmin);
  color: white;
`,z=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 3rem;
`,H=a.img`
    width: 100%;
    max-width: 300px;
    height: auto;
`;var O="/crypto-quoting-app/assets/cryptos.c0430b0f.png";async function M(){const e="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";return await g.get(e)}async function T(e){const{crypto:t,currency:c}=e,s=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${t}&tsyms=${c}`;return await g.get(s)}const v=x("coins/fetch",async(e,{dispatch:t})=>{var n;t(p(!0));const{data:c}=await M(),s=(n=c==null?void 0:c.Data)==null?void 0:n.map(i=>{const{Name:r,FullName:y}=i.CoinInfo;return{id:r,name:y}});return t(p(!1)),s}),w=x("coins/fetchResult",async(e,{dispatch:t})=>{const{currency:c,crypto:s}=e;t(p(!0));const{data:n}=await T(e);return t(p(!1)),n.DISPLAY[s][c]}),G={currency:"USD",currencies:[{id:"USD",name:"United States Dollar"},{id:"MXN",name:"Mexican Peso"},{id:"EUR",name:"Euro"},{id:"GBP",name:"British Pound"}],crypto:"BTC",cryptos:[],result:{},loading:!1},C=R({name:"coins",initialState:G,reducers:{setCurrency(e,t){e.currency=t.payload},setCrypto(e,t){e.crypto=t.payload},setResult(e,t){e.result=t.payload},setLoading(e,t){e.loading=t.payload}},extraReducers:e=>{e.addCase(v.fulfilled,(t,c)=>{t.cryptos=c.payload}),e.addCase(w.fulfilled,(t,c)=>{t.result=c.payload})}}),{setResult:ne,setCrypto:$,setCurrency:W,setLoading:p}=C.actions,D=e=>e.coins;var Y=C.reducer;const q=a.form`
  display: flex;  
  flex-direction: column;
  
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  gap: 15px;
  padding: 10px;
`,f=a.label`
    color: white;
    font-size: calc(10px + 2vmin);
    font-weight: 500;
`,m=a.select`
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
`,Q=a.button`
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
    `,K=()=>{const{currencies:e,cryptos:t,currency:c,crypto:s}=S(D),n=b();return o(h,{children:l(q,{onSubmit:r=>{r.preventDefault(),n(w({currency:c,crypto:s}))},children:[o(f,{children:"Select the currency"}),o(m,{value:c,onChange:r=>n(W(r.target.value)),children:e.map(r=>o("option",{value:r.id,children:r.id+" - "+r.name},r.id))}),o(f,{children:"Select the criptocurrency"}),o(m,{value:s,onChange:r=>n($(r.target.value)),children:t.map(r=>o("option",{value:r.id,children:r.id+" - "+r.name},r.id))}),o(Q,{type:"submit",children:"Quote"})]})})},V=a.img`
    max-width: 40px;
    height: auto;
    object-fit: contain;
`,X=a.div`
    display: inline-flex;
    gap: 5px;
    `,d=a.span`
    color: ${e=>e.value!==void 0&&e.value<0?"red":"#61dafb"};
    font-weight: bold;
`,u=a.p`
    color: white;
    font-weight: bold;
`,J=a.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(6px + 2vmin);
    color: white;
    `,Z=()=>{const{result:e,loading:t}=S(D),{PRICE:c,HIGHDAY:s,LOWDAY:n,CHANGEPCT24HOUR:i,IMAGEURL:r,LASTUPDATE:y}=e;return t?o("h2",{children:"Loading..."}):o(h,{children:c&&o(J,{children:l("div",{children:[l(X,{children:[l(u,{children:["The actual price is: ",o(d,{children:c})]}),o(V,{src:`https://cryptocompare.com/${r}`})]}),l(u,{children:["High price 24hs ",o(d,{children:s})]}),l(u,{children:["Low price 24hs ",o(d,{children:n})]}),l(u,{children:["Var % last 24hs: ",l(d,{value:Number(i),children:["%"," ",i]})]}),l(u,{children:["Last update: ",o(d,{children:y})]})]})})})},_=()=>{const e=b();return I.exports.useEffect(()=>{e(v())},[]),l(h,{children:[o(E,{}),l(F,{children:[l(z,{children:[l(k,{children:[o(N,{children:"Quote your Cryptocurrency Instantly"}),o(K,{})]}),o(Z,{})]}),o(H,{src:O})]})]})},ee=P({reducer:{coins:Y}});A.render(o(U,{store:ee,children:o(j.StrictMode,{children:o(_,{})})}),document.getElementById("root"));
