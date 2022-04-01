import{W as D,s as a,c as y,a as m,b as g,u as x,d as S,j as r,F as p,e as s,r as R,f as I,R as L,P,g as j}from"./vendor.73f84f32.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};A();const U=D`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        background-color: #282c34;
    }`,E=a.div`
  min-height: 100vh;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`,F=a.h1`
    border-bottom: 4px solid #61dafb;
    font-size: calc(15px + 2vmin);
    text-align: center;
    padding-bottom: 10px;
`,N=a.header`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  font-size: calc(10px + 2vmin);
  color: white;
`,k=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 3rem;
`,z=a.img`
    width: 100%;
    max-width: 300px;
    height: auto;
`;var B="/crypto-quoting-app/assets/cryptos.c0430b0f.png";const b=y("coins/fetch",async()=>{var l,t;const e="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD",n=await g.get(e);return(t=(l=n==null?void 0:n.data)==null?void 0:l.Data)==null?void 0:t.map(o=>({id:o.CoinInfo.Name,name:o.CoinInfo.FullName}))}),v=y("coins/fetchResult",async e=>{const{currency:n,crypto:i}=e,l=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${i}&tsyms=${n}`;return(await g.get(l)).data.DISPLAY[i][n]}),H={currency:"USD",currencies:[{id:"USD",name:"United States Dollar"},{id:"MXN",name:"Mexican Peso"},{id:"EUR",name:"Euro"},{id:"GBP",name:"British Pound"}],crypto:"BTC",cryptos:[],result:{}},w=m({name:"coins",initialState:H,reducers:{setCurrency(e,n){e.currency=n.payload},setCrypto(e,n){e.crypto=n.payload},setResult(e,n){e.result=n.payload}},extraReducers:e=>{e.addCase(b.fulfilled,(n,i)=>{n.cryptos=i.payload}),e.addCase(v.fulfilled,(n,i)=>{n.result=i.payload})}}),{setResult:ee,setCrypto:O,setCurrency:M}=w.actions,C=e=>e.coins;var T=w.reducer;const G=a.form`
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
`,f=a.select`
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
`,$=a.button`
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
    `;function W(){const{currencies:e,cryptos:n,currency:i,crypto:l}=x(C),t=S();return r(p,{children:s(G,{onSubmit:c=>{c.preventDefault(),t(v({currency:i,crypto:l}))},children:[r(h,{children:"Select the currency"}),r(f,{value:i,onChange:c=>t(M(c.target.value)),children:e.map(c=>r("option",{value:c.id,children:c.id+" - "+c.name},c.id))}),r(h,{children:"Select the criptocurrency"}),r(f,{value:l,onChange:c=>t(O(c.target.value)),children:n.map(c=>r("option",{value:c.id,children:c.id+" - "+c.name},c.id))}),r($,{type:"submit",children:"Quote"})]})})}const Y=a.img`
    max-width: 40px;
    height: auto;
    object-fit: contain;
`,q=a.div`
    display: inline-flex;
    gap: 5px;
    `,d=a.span`
    color: ${e=>e.value!==void 0&&e.value<0?"red":"#61dafb"};
    font-weight: bold;
`,u=a.p`
    color: white;
    font-weight: bold;
`,Q=a.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(6px + 2vmin);
    color: white;
    `;function K(){const{result:e}=x(C),{PRICE:n,HIGHDAY:i,LOWDAY:l,CHANGEPCT24HOUR:t,IMAGEURL:o,LASTUPDATE:c}=e;return r(p,{children:n&&r(Q,{children:s("div",{children:[s(q,{children:[s(u,{children:["The actual price is: ",r(d,{children:n})]}),r(Y,{src:`https://cryptocompare.com/${o}`})]}),s(u,{children:["High price 24hs ",r(d,{children:i})]}),s(u,{children:["Low price 24hs ",r(d,{children:l})]}),s(u,{children:["Var % last 24hs: ",s(d,{value:Number(t),children:["%"," ",t]})]}),s(u,{children:["Last update: ",r(d,{children:c})]})]})})})}function V(){const e=S();return R.exports.useEffect(()=>{e(b())},[]),s(p,{children:[r(U,{}),s(E,{children:[s(k,{children:[s(N,{children:[r(F,{children:"Quote your Cryptocurrency Instantly"}),r(W,{})]}),r(K,{})]}),r(z,{src:B})]})]})}const X=m({name:"count",initialState:0,reducers:{increment:e=>e+1,decrement:e=>e-1}});var J=X.reducer;const Z=I({reducer:{count:J,coins:T}});L.render(r(P,{store:Z,children:r(j.StrictMode,{children:r(V,{})})}),document.getElementById("root"));
