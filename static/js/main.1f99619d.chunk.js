(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(7),a=s.n(n),i=(s(12),s(6)),o=s(2),b=s(0);function j(e){return e.isGame?Object(b.jsxs)("div",{className:"game-desktop",children:[Object(b.jsx)("div",{className:"box box1"}),Object(b.jsx)("div",{className:"box box2"}),Object(b.jsx)("div",{className:"box box3"}),Object(b.jsx)("div",{className:"box box4"}),Object(b.jsx)("div",{className:"box box5"}),Object(b.jsx)("div",{className:"box box6"}),Object(b.jsx)("div",{className:"box box7"}),Object(b.jsx)("div",{className:"box box8"}),Object(b.jsx)("div",{className:"box box9"})]}):null}function x(e){var t=e.isWin,s=e.winner;e.isgame,e.valuesOfBoxes;return console.log(s),t?Object(b.jsxs)("div",{className:"victory-window",children:[Object(b.jsxs)("h1",{children:["WIN: ",s]}),Object(b.jsx)("button",{className:"go-to-menu-btn",onClick:function(){e.setIsGame(!1),e.setIsWin(t=!1),e.setWinner(s=null),e.setValuesOfBoxes([[],[],[],[],[],[],[],[],[]])},children:"Back to menu"})]}):null}function r(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)("\u0425"),r=Object(o.a)(a,2),l=r[0],u=r[1],O=Object(c.useState)([[],[],[],[],[],[],[],[],[]]),m=Object(o.a)(O,2),d=m[0],v=m[1],N=Object(c.useState)(!1),f=Object(o.a)(N,2),g=f[0],h=f[1],p=Object(c.useState)(null),w=Object(o.a)(p,2),k=w[0],W=w[1];return Object(b.jsxs)("div",{className:"main-container",onClick:function(e){if("\u0425"!==e.target.innerText&&"\u041e"!==e.target.innerText&&""===e.target.innerText){e.target.innerText=l;var t=Number(e.target.className.slice(7))-1;u("\u041e"===l?"\u0425":"\u041e"),v(Object(i.a)(d),"\u041e"===l?d[t].push("\u041e"):d[t].push("\u0425")),function(e,t,s,c,n){for(var a=["","","","","","","","",""],i=0;i<9;i++)"\u041e"!==e[i][0]&&"\u0425"!==e[i][0]||(a[i]=e[i][0]);a[0]===a[1]&&a[0]===a[2]&&a[1]===a[2]&&(a[0],a[1],""!==a[2])?(s(!0),n(a[0]),a=["","","","","","","","",""]):a[3]===a[4]&&a[4]===a[5]&&a[3]===a[5]&&(a[3],a[4],""!==a[5])?(s(!0),n(a[3]),a=["","","","","","","","",""]):a[6]===a[7]&&a[6]===a[8]&&a[7]===a[8]&&(a[6],a[7],""!==a[8])?(s(!0),n(a[6]),a=["","","","","","","","",""]):a[0]===a[3]&&a[0]===a[6]&&a[6]===a[3]&&(a[0],a[6],""!==a[3])?(s(!0),n(a[0]),a=["","","","","","","","",""]):a[1]===a[4]&&a[1]===a[7]&&a[4]===a[7]&&(a[1],a[4],""!==a[7])?(s(!0),n(a[1]),a=["","","","","","","","",""]):a[2]===a[5]&&a[2]===a[8]&&a[5]===a[8]&&(a[2],a[5],""!==a[8])?(s(!0),n(a[2]),a=["","","","","","","","",""]):a[0]===a[4]&&a[0]===a[8]&&a[4]===a[8]&&(a[0],a[4],""!==a[8])?(s(!0),n(a[0]),a=["","","","","","","","",""]):a[2]===a[4]&&a[2]===a[6]&&a[6]===a[4]&&(a[2],a[6],""!==a[4])&&(s(!0),n(a[2]),a=["","","","","","","","",""])}(d,0,h,0,W)}},children:[Object(b.jsx)("button",{className:"new-game-btn",onClick:function(){return n((function(e){return!e}))},children:"New Game"}),Object(b.jsx)(j,{isGame:s}),Object(b.jsx)(x,{isWin:g,winner:k,setIsWin:h,setWinner:W,isgame:s,setIsGame:n,valuesOfBoxes:d,setValuesOfBoxes:v})]})}a.a.render(Object(b.jsx)(r,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1f99619d.chunk.js.map