(window.webpackJsonprocketshoes=window.webpackJsonprocketshoes||[]).push([[0],{113:function(n,e,t){n.exports=t.p+"static/media/loader.8be1cc4f.svg"},116:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"addToCartRequest",function(){return v}),t.d(r,"addToCartSuccess",function(){return j}),t.d(r,"removeFromCart",function(){return w}),t.d(r,"updateAmountRequest",function(){return k}),t.d(r,"updateAmountSuccess",function(){return P});var a=t(0),c=t.n(a),o=t(17),i=t.n(o),u=t(19),l=t(18),s=t(28),p=(t(82),t(94),t(95),t(13)),d=t.n(p),f=t(22),b=t(58),m=t(59),g=t(60),O=t(69),E=t(32),x=t(61),h=t(16),y=t(10);function v(n){return{type:"@cart/ADD_REQUEST",id:n}}function j(n){return{type:"@cart/ADD_SUCCESS",product:n}}function w(n){return{type:"@cart/REMOVE",id:n}}function k(n,e){return{type:"@cart/UPDATE_AMOUNT_REQUEST",id:n,amount:e}}function P(n,e){return{type:"@cart/UPDATE_AMOUNT_SUCCESS",id:n,amount:e}}var S=t(62),D=t.n(S).a.create({baseURL:"http://localhost:3333"}),C=new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format,A=t(11),T=t(12),U=t(33);function z(){var n=Object(A.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n        svg {\n          margin-right: 5px;\n        }\n      }\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n        text-transform: uppercase;\n      }\n    }\n  }\n"]);return z=function(){return n},n}function R(){var n=Object(A.a)(["\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  span {\n    border: 5px solid #333;\n    border-radius: 50%;\n    border-top: 5px solid #7159c1;\n    width: 100px;\n    height: 100px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n  }\n\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return R=function(){return n},n}var _=T.b.div(R()),F=T.b.ul(z(),Object(U.a)(.03,"#7159c1"));t(113);function M(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function N(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?M(t,!0).forEach(function(e){Object(f.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):M(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var Q=function(n){function e(){var n,t;Object(m.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(O.a)(this,(n=Object(E.a)(e)).call.apply(n,[this].concat(a)))).state={products:[]},t.handleAddProduct=function(n){(0,t.props.addToCartRequest)(n)},t}return Object(x.a)(e,n),Object(g.a)(e,[{key:"componentDidMount",value:function(){var n=Object(b.a)(d.a.mark(function n(){var e,t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.get("http://localhost:3333/products");case 2:e=n.sent,t=e.data.map(function(n){return N({},n,{priceFormatted:C(n.price)})}),this.setState({products:t});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,e=this.state.products,t=this.props.amount;return e.length>0?c.a.createElement(F,null,e.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("img",{src:e.image,alt:e.title}),c.a.createElement("strong",null,e.title),c.a.createElement("span",null,e.priceFormatted),c.a.createElement("button",{type:"button",onClick:function(){return n.handleAddProduct(e.id)}},c.a.createElement("div",null,c.a.createElement(h.b,{size:16,color:"#fff"})," ",t[e.id]||0),c.a.createElement("span",null,"Adicionar ao carrinho")))})):c.a.createElement(_,null,c.a.createElement("span",null))}}]),e}(a.Component),q=Object(l.b)(function(n){return{amount:n.cart.reduce(function(n,e){return n[e.id]=e.amount,n},{})}},function(n){return Object(y.b)(r,n)})(Q);function I(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  span {\n    font-size: 18px;\n    color: #7159c1;\n  }\n  svg {\n    margin-top: 10px;\n  }\n"]);return I=function(){return n},n}function L(){var n=Object(A.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]);return L=function(){return n},n}function B(){var n=Object(A.a)(["\n  width: 100%;\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n  tbody td {\n    padding: 30px;\n    border-bottom: 1px solid #eee;\n  }\n  img {\n    height: 100px;\n  }\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n  div {\n    display: flex;\n    align-items: center;\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(A.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return J=function(){return n},n}var V=T.b.div(J(),Object(U.a)(.03,"#7159c1")),G=T.b.table(B()),H=T.b.div(L()),K=T.b.div(I());function W(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}var X=Object(l.b)(function(n){return{cart:n.cart.map(function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?W(t,!0).forEach(function(e){Object(f.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):W(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},n,{subTotal:C(n.price*n.amount)})}),total:C(n.cart.reduce(function(n,e){return n+e.price*e.amount},0))}},function(n){return Object(y.b)(r,n)})(function(n){var e=n.cart,t=n.removeFromCart,r=n.updateAmountRequest,a=n.total;return c.a.createElement(V,null,e.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(G,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",null,"Nome"),c.a.createElement("th",null,"Quantidade"),c.a.createElement("th",null,"Subtotal"),c.a.createElement("th",null," "))),c.a.createElement("tbody",null,e.map(function(n){return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("img",{src:n.image,alt:"Produto"})),c.a.createElement("td",null,c.a.createElement("strong",null,n.title),c.a.createElement("span",null,n.priceFormatted)),c.a.createElement("td",null,c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){return r(n.id,n.amount-1)}},c.a.createElement(h.d,{size:20,color:"#7159c1"})),c.a.createElement("input",{type:"number",readOnly:!0,value:n.amount}),c.a.createElement("button",{type:"button",onClick:function(){return r(n.id,n.amount+1)}},c.a.createElement(h.a,{size:20,color:"#7159c1"})))),c.a.createElement("td",null,c.a.createElement("strong",null,n.subTotal)),c.a.createElement("td",null,c.a.createElement("button",{type:"button",onClick:function(){return t(n.id)}},c.a.createElement(h.c,{size:20,color:"#7159c1"}))))}))),c.a.createElement("footer",null,c.a.createElement("button",{type:"button"},"Finalizar pedido"),c.a.createElement(H,null,c.a.createElement("span",null,"Total"),c.a.createElement("strong",null,a)))):c.a.createElement(K,null,c.a.createElement("span",null,"Sem produtos no carrinho"),c.a.createElement(h.e,{size:20,color:"#7159c1"})))});function Y(){return c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",component:q,exact:!0}),c.a.createElement(u.a,{path:"/cart",component:X}))}var Z=t(67),$=t(34);var nn=Object(y.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"@cart/ADD_SUCCESS":return Object($.a)(n,function(n){var t=e.product;n.push(t)});case"@cart/REMOVE":return Object($.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&n.splice(t,1)});case"@cart/UPDATE_AMOUNT_SUCCESS":return Object($.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&(n[t].amount=Number(e.amount))});default:return n}}}),en=t(8),tn=t(68),rn=Object(tn.a)(),an=d.a.mark(ln),cn=d.a.mark(sn);function on(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function un(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?on(t,!0).forEach(function(e){Object(f.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):on(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function ln(n){var e,t,r,a,c,o,i,u;return d.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return e=n.id,l.next=3,Object(en.select)(function(n){return n.cart.find(function(n){return n.id===e})});case 3:return t=l.sent,l.next=6,Object(en.call)(D.get,"/stock/".concat(e));case 6:if(r=l.sent,a=r.data.amount,c=t?t.amount:0,!((o=c+1)>a)){l.next=13;break}return s.b.error("Quantidade solicitada fora de estoque"),l.abrupt("return");case 13:if(!t){l.next=18;break}return l.next=16,Object(en.put)(P(e,o));case 16:l.next=25;break;case 18:return l.next=20,Object(en.call)(D.get,"/products/".concat(e));case 20:return i=l.sent,u=un({},i.data,{amount:1,priceFormatted:C(i.data.price)}),l.next=24,Object(en.put)(j(u));case 24:rn.push("/cart");case 25:case"end":return l.stop()}},an)}function sn(n){var e,t,r,a;return d.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(e=n.id,!((t=n.amount)<=0)){c.next=3;break}return c.abrupt("return");case 3:return c.next=5,Object(en.call)(D.get,"/stock/".concat(e));case 5:if(r=c.sent,a=r.data.amount,!(t>a)){c.next=10;break}return s.b.error("Quantidade solicitada fora de estoque"),c.abrupt("return");case 10:return c.next=12,Object(en.put)(P(e,t));case 12:case"end":return c.stop()}},cn)}var pn=Object(en.all)([Object(en.takeLatest)("@cart/ADD_REQUEST",ln),Object(en.takeLatest)("@cart/UPDATE_AMOUNT_REQUEST",sn)]),dn=d.a.mark(fn);function fn(){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(en.all)([pn]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},dn)}var bn=Object(Z.a)({sagaMonitor:null}),mn=Object(y.a)(bn),gn=Object(y.e)(nn,mn);bn.run(fn);var On=gn,En=(t(115),t(66)),xn=t.n(En);function hn(){var n=Object(A.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #202020 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n  #root {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n  button {\n    cursor: pointer;\n  }\n\n"]);return hn=function(){return n},n}var yn=Object(T.a)(hn(),xn.a),vn=t(20);function jn(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return jn=function(){return n},n}function wn(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 50px 0;\n"]);return wn=function(){return n},n}var kn=T.b.header(wn()),Pn=Object(T.b)(vn.a)(jn()),Sn="https://skylab.rocketseat.com.br/api/files/1562597403849.svg";var Dn=Object(l.b)(function(n){return{cartSize:n.cart.length}})(function(n){var e=n.cartSize;return c.a.createElement(c.a.Fragment,null,c.a.createElement(kn,null,c.a.createElement(vn.a,{to:"/"},c.a.createElement("img",{src:Sn,alt:"Rocketshoes"})),c.a.createElement(Pn,{to:"/cart"},c.a.createElement("div",null,c.a.createElement("strong",null,"Meu Carrinho"),c.a.createElement("span",null,e," itens")),c.a.createElement(h.f,{size:36,color:"#fff"}))))});var Cn=function(){return c.a.createElement(l.a,{store:On},c.a.createElement(u.b,{history:rn},c.a.createElement(Dn,null),c.a.createElement(Y,null),c.a.createElement(yn,null),c.a.createElement(s.a,{autoClose:3e3})))};i.a.render(c.a.createElement(Cn,null),document.getElementById("root"))},66:function(n,e,t){n.exports=t.p+"static/media/background.3c9a1ce5.svg"},72:function(n,e,t){n.exports=t(116)}},[[72,1,2]]]);
//# sourceMappingURL=main.66f51325.chunk.js.map