(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(7),a=n.n(c),o=(n(12),n(4)),i=n(2),r=n(0);function b(e){return e.isGame?Object(r.jsxs)("div",{className:"game-desktop",children:[Object(r.jsx)("div",{className:"box box1"}),Object(r.jsx)("div",{className:"box box2"}),Object(r.jsx)("div",{className:"box box3"}),Object(r.jsx)("div",{className:"box box4"}),Object(r.jsx)("div",{className:"box box5"}),Object(r.jsx)("div",{className:"box box6"}),Object(r.jsx)("div",{className:"box box7"}),Object(r.jsx)("div",{className:"box box8"}),Object(r.jsx)("div",{className:"box box9"})]}):null}function l(e,t,n,s,c){for(var a=["","","","","","","","",""],o=0;o<9;o++)"\u041e"!==e[o][0]&&"\u0425"!==e[o][0]||(a[o]=e[o][0]);a[0]===a[1]&&a[0]===a[2]&&a[1]===a[2]&&(a[0],a[1],""!==a[2])?(n(!0),c(a[0]),a=["","","","","","","","",""]):a[3]===a[4]&&a[4]===a[5]&&a[3]===a[5]&&(a[3],a[4],""!==a[5])?(n(!0),c(a[3]),a=["","","","","","","","",""]):a[6]===a[7]&&a[6]===a[8]&&a[7]===a[8]&&(a[6],a[7],""!==a[8])?(n(!0),c(a[6]),a=["","","","","","","","",""]):a[0]===a[3]&&a[0]===a[6]&&a[6]===a[3]&&(a[0],a[6],""!==a[3])?(n(!0),c(a[0]),a=["","","","","","","","",""]):a[1]===a[4]&&a[1]===a[7]&&a[4]===a[7]&&(a[1],a[4],""!==a[7])?(n(!0),c(a[1]),a=["","","","","","","","",""]):a[2]===a[5]&&a[2]===a[8]&&a[5]===a[8]&&(a[2],a[5],""!==a[8])?(n(!0),c(a[2]),a=["","","","","","","","",""]):a[0]===a[4]&&a[0]===a[8]&&a[4]===a[8]&&(a[0],a[4],""!==a[8])?(n(!0),c(a[0]),a=["","","","","","","","",""]):a[2]===a[4]&&a[2]===a[6]&&a[6]===a[4]&&(a[2],a[6],""!==a[4])?(n(!0),c(a[2]),a=["","","","","","","","",""]):""!==a[0]&&""!==a[1]&&""!==a[2]&&""!==a[3]&&""!==a[4]&&""!==a[5]&&""!==a[6]&&""!==a[7]&&""!==a[8]&&(n(!0),c("DRAW"),a=["","","","","","","","",""])}function u(e){var t=e.isWin,n=e.winner;e.isgame,e.valuesOfBoxes,e.isAI;return t?Object(r.jsxs)("div",{className:"victory-window",children:[Object(r.jsxs)("h1",{children:["WIN: ",n]}),Object(r.jsx)("button",{className:"go-to-menu-btn",onClick:function(){e.setIsGame(!1),e.setIsWin(t=!1),e.setWinner(n=null),e.setValuesOfBoxes([[],[],[],[],[],[],[],[],[]]),e.setIsAI(!1),e.setTicTac("\u0425")},children:"Back to menu"})]}):null}function x(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)("\u0425"),x=Object(i.a)(a,2),j=x[0],O=x[1],m=Object(s.useState)([[],[],[],[],[],[],[],[],[]]),d=Object(i.a)(m,2),f=d[0],g=d[1],v=Object(s.useState)(!1),h=Object(i.a)(v,2),N=h[0],T=h[1],I=Object(s.useState)(null),p=Object(i.a)(I,2),S=p[0],w=p[1],k=Object(s.useState)(!1),W=Object(i.a)(k,2),y=W[0],A=W[1];Object(s.useEffect)((function(){document.querySelector(".add-ai-btn").classList.toggle("ai-enabled")}),[y]);return Object(r.jsxs)("div",{className:"main-container",onClick:function(e){if(y){if("\u0425"===e.target.innerText||"\u041e"===e.target.innerText)return;if(""===e.target.innerText){for(var t=!1,n=0,s=0;s<f.length;s++)0!==f[s].length&&n++;8===n&&(t=!0),e.target.innerText=j;var c=Number(e.target.className.slice(7))-1;g(Object(o.a)(f),f[c].push("\u0425")),l(f,0,T,0,w),t||function(){var e,t,n,s;do{n=0,s=9,n=Math.ceil(n),s=Math.floor(s),0===(e=Math.floor(Math.random()*(s-n+1))+n)?(e++,t=0):t=9===e?8:e-1}while("\u0425"===document.querySelector(".box".concat(e)).innerText||"\u041e"===document.querySelector(".box".concat(e)).innerText);console.log(e),console.log(t),document.querySelector(".box".concat(e)).innerText="\u041e",g(Object(o.a)(f),f[t].push("\u041e")),console.log(f)}(),l(f,0,T,0,w)}}else{if("\u0425"===e.target.innerText||"\u041e"===e.target.innerText)return;if(""===e.target.innerText){e.target.innerText=j;var a=Number(e.target.className.slice(7))-1;O("\u041e"===j?"\u0425":"\u041e"),g(Object(o.a)(f),"\u041e"===j?f[a].push("\u041e"):f[a].push("\u0425")),l(f,0,T,0,w)}}},children:[Object(r.jsx)("button",{className:"new-game-btn",onClick:function(){return c((function(e){return!e}))},children:"New Game"}),Object(r.jsx)("button",{className:"add-ai-btn",onClick:function(){A((function(e){return!e}))},children:"Add AI"}),Object(r.jsx)(b,{isGame:n}),Object(r.jsx)(u,{isWin:N,winner:S,setIsWin:T,setWinner:w,isgame:n,setIsGame:c,valuesOfBoxes:f,setValuesOfBoxes:g,setIsAI:A,setTicTac:O})]})}a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d6837f6f.chunk.js.map