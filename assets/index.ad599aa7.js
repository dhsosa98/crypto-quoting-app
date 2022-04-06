import{W as D,s as a,a as g,c as x,b as R,u as S,d as b,j as r,F as f,e as l,L as I,r as P,f as A,R as U,P as j,g as B}from"./vendor.46e219d8.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}};E();const F=D`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        background-color: #282c34;
    }`,N=a.div`
  min-height: 100vh;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`,k=a.h1`
    border-bottom: 4px solid #61dafb;
    font-size: calc(15px + 2vmin);
    text-align: center;
    padding-bottom: 10px;
`,z=a.header`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  font-size: calc(10px + 2vmin);
  color: white;
`,H=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 3rem;
`,O=a.img`
    width: 100%;
    max-width: 300px;
    height: auto;
`;var M="/crypto-quoting-app/assets/cryptos.c0430b0f.png";async function T(){const e="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";return await g.get(e)}async function G(e){const{crypto:t,currency:c}=e,s=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${t}&tsyms=${c}`;return await g.get(s)}const v=x("coins/fetch",async(e,{dispatch:t})=>{var n;t(p(!0));const{data:c}=await T(),s=(n=c==null?void 0:c.Data)==null?void 0:n.map(i=>{const{Name:o,FullName:y}=i.CoinInfo;return{id:o,name:y}});return t(p(!1)),s}),w=x("coins/fetchResult",async(e,{dispatch:t})=>{const{currency:c,crypto:s}=e;t(p(!0));const{data:n}=await G(e);return t(p(!1)),n.DISPLAY[s][c]}),$={currency:"USD",currencies:[{id:"USD",name:"United States Dollar"},{id:"MXN",name:"Mexican Peso"},{id:"EUR",name:"Euro"},{id:"GBP",name:"British Pound"}],crypto:"BTC",cryptos:[],result:{},loading:!1},C=R({name:"coins",initialState:$,reducers:{setCurrency(e,t){e.currency=t.payload},setCrypto(e,t){e.crypto=t.payload},setResult(e,t){e.result=t.payload},setLoading(e,t){e.loading=t.payload}},extraReducers:e=>{e.addCase(v.fulfilled,(t,c)=>{t.cryptos=c.payload}),e.addCase(w.fulfilled,(t,c)=>{t.result=c.payload})}}),{setResult:re,setCrypto:W,setCurrency:Y,setLoading:p}=C.actions,L=e=>e.coins;var q=C.reducer;const Q=a.form`
  display: flex;  
  flex-direction: column;
  
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  gap: 15px;
  padding: 10px;
`,h=a.label`
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
`,K=a.button`
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
    `,V=()=>{const{currencies:e,cryptos:t,currency:c,crypto:s}=S(L),n=b();return r(f,{children:l(Q,{onSubmit:o=>{o.preventDefault(),n(w({currency:c,crypto:s}))},children:[r(h,{children:"Select the currency"}),r(m,{value:c,onChange:o=>n(Y(o.target.value)),children:e.map(o=>r("option",{value:o.id,children:o.id+" - "+o.name},o.id))}),r(h,{children:"Select the criptocurrency"}),r(m,{value:s,onChange:o=>n(W(o.target.value)),children:t.map(o=>r("option",{value:o.id,children:o.id+" - "+o.name},o.id))}),r(K,{type:"submit",children:"Quote"})]})})},X=a.img`
    max-width: 40px;
    height: auto;
    object-fit: contain;
`,J=a.div`
    display: inline-flex;
    gap: 5px;
    `,d=a.span`
    color: ${e=>e.value!==void 0&&e.value<0?"red":"#61dafb"};
    font-weight: bold;
`,u=a.p`
    color: white;
    font-weight: bold;
`,Z=a.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(6px + 2vmin);
    color: white;
    `,_=()=>{const{result:e,loading:t}=S(L),{PRICE:c,HIGHDAY:s,LOWDAY:n,CHANGEPCT24HOUR:i,IMAGEURL:o,LASTUPDATE:y}=e;return t?r(I,{type:"spinner"}):r(f,{children:c&&r(Z,{children:l("div",{children:[l(J,{children:[l(u,{children:["The actual price is: ",r(d,{children:c})]}),r(X,{src:`https://cryptocompare.com/${o}`})]}),l(u,{children:["High price 24hs ",r(d,{children:s})]}),l(u,{children:["Low price 24hs ",r(d,{children:n})]}),l(u,{children:["Var % last 24hs: ",l(d,{value:Number(i),children:["%"," ",i]})]}),l(u,{children:["Last update: ",r(d,{children:y})]})]})})})},ee=()=>{const e=b();return P.exports.useEffect(()=>{e(v())},[]),l(f,{children:[r(F,{}),l(N,{children:[l(H,{children:[l(z,{children:[r(k,{children:"Quote your Cryptocurrency Instantly"}),r(V,{})]}),r(_,{})]}),r(O,{src:M})]})]})},te=A({reducer:{coins:q}});U.render(r(j,{store:te,children:r(B.StrictMode,{children:r(ee,{})})}),document.getElementById("root"));
