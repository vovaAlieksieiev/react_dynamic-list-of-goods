(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(3),i=e(1),s=(e(9),e(0)),a=function(t){var n=t.goods;return Object(s.jsx)("ul",{children:n.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",className:"".concat(t.color,"--item"),children:t.name},t.id)}))})};function u(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d;!function(t){t.AllGoods="ALL",t.FiveFirst="FiveFirst",t.OnlyRed="OnlyRed"}(d||(d={}));var l=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(i.useState)(null),l=Object(r.a)(c,2),b=l[0],f=l[1];return Object(i.useEffect)((function(){switch(b){case d.AllGoods:u().then(o);break;case d.FiveFirst:u().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then(o);break;case d.OnlyRed:u().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o)}}),[b]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return f(d.AllGoods)},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return f(d.FiveFirst)},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return f(d.OnlyRed)},children:"Load red goods"}),null!==b&&Object(s.jsx)(a,{goods:e})]})};c.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.30abd8b3.chunk.js.map