(this["webpackJsonp38.autofill"]=this["webpackJsonp38.autofill"]||[]).push([[0],{1292:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(6),i=n.n(s),o=(n(13),n(3)),u=n(2),l=n.n(u),j=function(){for(var e=[],t=0;t<500;t++)e.push(l.a.commerce.product());for(var n=0;n<500;n++)e.push(l.a.random.word());return e}(),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return""===e?t:t.filter((function(t){return t.toLowerCase().includes(e.toLowerCase())}))},h=n(7),b=function(){var e=Object(r.useState)({prev:0,next:50}),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!0),i=Object(o.a)(s,2),u=i[0],l=i[1],b=Object(r.useState)(j.slice(n.prev,n.next)),x=Object(o.a)(b,2),p=x[0],O=x[1],f=function(){p.length!==j.length?(O(p.concat(j.slice(n.prev+10,n.next+10))),a({prev:n.prev+10,next:n.next+10})):l(!1)};return Object(c.jsxs)("div",{className:"ui three column centered grid",children:[Object(c.jsx)("header",{className:"row",children:Object(c.jsx)("h1",{className:"ui header",children:"AutoFilter for AutoFill"})}),Object(c.jsx)("section",{className:"row",children:Object(c.jsx)("input",{type:"text",onChange:function(e){O(d(e.target.value))}})}),Object(c.jsx)("section",{className:"row",children:Object(c.jsx)(h.a,{dataLength:p.length,next:f,hasMore:u,children:p.map((function(e){return Object(c.jsx)("article",{children:e})}))})})]})};var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(b,{})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))},13:function(e,t,n){}},[[1292,1,2]]]);
//# sourceMappingURL=main.28eeb228.chunk.js.map