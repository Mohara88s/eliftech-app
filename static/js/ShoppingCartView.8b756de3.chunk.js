(this["webpackJsonpeliftech-app"]=this["webpackJsonpeliftech-app"]||[]).push([[1],{110:function(e,r,t){e.exports={CartGoodsList:"CartGoods_CartGoodsList__2CTEb",CartGoodsList__Item:"CartGoods_CartGoodsList__Item__1XO1_",Card:"CartGoods_Card__2vfOB",Card__Img:"CartGoods_Card__Img__gUTvL",Card__Body:"CartGoods_Card__Body__3V8-c"}},111:function(e,r,t){e.exports={form:"OrderForm_form__3RPaI",label:"OrderForm_label__3bC13",button:"OrderForm_button__2ddSD"}},112:function(e,r,t){e.exports={AreasList:"ShoppingCartPage_AreasList__PvlgA",AreasList__Item:"ShoppingCartPage_AreasList__Item__180yO"}},115:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return S}));var a=t(21),n=t(106),s=t(117),c=t(114),o=t(103),d=t(18),i=t(0),l={getOrdersError:function(e){return e.orders.ordersError},getOrdersLoading:function(e){return e.orders.ordersLoading},getOrders:function(e){return e.orders.orders},getAddOrderErrors:function(e){return e.orders.addOrderErrors},getAddOrderLoading:function(e){return e.orders.addOrderLoading},getName:function(e){return e.orders.name},getEmail:function(e){return e.orders.email},getPhone:function(e){return e.orders.phone},getAddresss:function(e){return e.orders.address}},u=t(46),j=t(26),b=t(24),m=t(41),O=t.n(m),_=t(49),h=t(12),p=t(42),g=t.n(p),f=function(e){return function(){var r=Object(_.a)(O.a.mark((function r(t){var a,n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(h.b)()),r.prev=1,r.next=4,g.a.patch("/orders",e);case 4:a=r.sent,n=a.data,t(Object(h.c)(n.order)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),t(Object(h.a)(r.t0.response.data.message));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},x=t(48),C=t(110),v=t.n(C),L=t(1);function N(){var e=Object(d.b)(),r=Object(i.useState)(0),t=Object(a.a)(r,2),m=t[0],O=t[1],_=Object(d.c)(l.getName),h=Object(d.c)(l.getEmail),p=Object(d.c)(l.getPhone),g=Object(d.c)(l.getAddresss),C=Object(d.c)(u.a.getCart),N=Object(d.c)(j.a.getActualShop),y=function(r){var t=r.target,a=t.name,n=t.value,s=Number(n);console.log(n),e(0===s?Object(b.c)({_id:a}):Object(b.d)({_id:a,quantity:s}))};Object(i.useEffect)((function(){O(C.reduce((function(e,r){return e+r.quantity*r.good.price}),0).toFixed(2))}),[C]);return Object(L.jsxs)("div",{children:[Object(L.jsx)("ul",{className:v.a.CartGoodsList,children:C.map((function(e){return Object(L.jsx)("li",{className:v.a.CartGoodsList__Item,children:Object(L.jsxs)(n.a,{className:v.a.Card,border:"primary",children:[Object(L.jsx)(n.a.Img,{src:x.a,className:v.a.Card__Img}),Object(L.jsxs)(n.a.Body,{className:v.a.Card__Body,children:[Object(L.jsx)(n.a.Title,{className:v.a.Card__Title,children:e.good.name}),Object(L.jsxs)(n.a.Text,{children:["Price: ",e.good.price]}),Object(L.jsx)(s.a,{children:Object(L.jsx)(c.a.Control,{value:e.quantity,name:e.good._id,type:"number",onChange:y})})]})]})},e.good._id)}))}),Object(L.jsxs)("h3",{children:["Total price: ",m]}),Object(L.jsx)(o.a,{className:v.a.button,onClick:function(r){r.preventDefault(),e(f({name:_,email:h,phone:p,address:g,shop:N,price:m,cart:C}))},children:"Submit"})]})}var y=t(111),I=t.n(y);function A(){var e=Object(d.b)(),r=Object(d.c)(l.getName),t=Object(d.c)(l.getEmail),a=Object(d.c)(l.getPhone),n=Object(d.c)(l.getAddresss),s=function(r){var t=r.target,a=t.name,n=t.value;switch(a){case"name":return e(Object(h.f)(n));case"email":return e(Object(h.e)(n));case"phone":return e(Object(h.g)(n));case"address":return e(Object(h.d)(n));default:return}};return Object(L.jsx)("div",{children:Object(L.jsxs)(c.a,{className:I.a.form,onSubmit:function(e){e.preventDefault()},children:[Object(L.jsxs)(c.a.Group,{className:"mb-3",controlId:"name",children:[Object(L.jsx)(c.a.Label,{children:"Name"}),Object(L.jsx)(c.a.Control,{type:"text",name:"name",placeholder:"Enter your name",value:r,onChange:s})]}),Object(L.jsxs)(c.a.Group,{className:"mb-3",controlId:"email",children:[Object(L.jsx)(c.a.Label,{children:"Email"}),Object(L.jsx)(c.a.Control,{type:"email",name:"email",placeholder:"Enter your email",value:t,onChange:s})]}),Object(L.jsxs)(c.a.Group,{className:"mb-3",controlId:"phone",children:[Object(L.jsx)(c.a.Label,{children:"Phone"}),Object(L.jsx)(c.a.Control,{type:"phone",name:"phone",placeholder:"Enter your phone",value:a,onChange:s})]}),Object(L.jsxs)(c.a.Group,{className:"mb-3",controlId:"address",children:[Object(L.jsx)(c.a.Label,{children:"Address"}),Object(L.jsx)(c.a.Control,{type:"address",name:"address",placeholder:"Enter your address",value:n,onChange:s})]})]})})}var G=t(112),E=t.n(G);function P(){return Object(L.jsx)("div",{children:Object(L.jsxs)("ul",{className:E.a.AreasList,children:[Object(L.jsx)("li",{className:E.a.AreasList__Item,children:Object(L.jsx)(A,{})}),Object(L.jsx)("li",{className:E.a.AreasList__Item,children:Object(L.jsx)(N,{})})]})})}function S(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(P,{})})}}}]);
//# sourceMappingURL=ShoppingCartView.8b756de3.chunk.js.map