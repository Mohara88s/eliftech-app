(this["webpackJsonpeliftech-app"]=this["webpackJsonpeliftech-app"]||[]).push([[2],{110:function(e,r,t){"use strict";var a={getOrdersError:function(e){return e.orders.ordersError},getOrdersLoading:function(e){return e.orders.ordersLoading},getOrders:function(e){return e.orders.orders},getAddedOrder:function(e){return e.orders.addedOrder},getAddOrderErrors:function(e){return e.orders.addOrderErrors},getAddOrderLoading:function(e){return e.orders.addOrderLoading},getName:function(e){return e.orders.name},getEmail:function(e){return e.orders.email},getPhone:function(e){return e.orders.phone},getAddresss:function(e){return e.orders.address}};r.a=a},111:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"c",(function(){return l})),t.d(r,"b",(function(){return j}));var a=t(39),n=t.n(a),c=t(45),s=t(6),o=t(40),d=t.n(o),i=function(e){return function(){var r=Object(c.a)(n.a.mark((function r(t){var a,c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(s.b)()),r.prev=1,r.next=4,d.a.patch("/orders",e);case 4:a=r.sent,c=a.data,t(Object(s.c)(c.order)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),t(Object(s.a)(r.t0.response.data.message));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},l=function(e){var r=e.orderEmail,t=void 0===r?"":r,a=e.orderPhone,o=void 0===a?"":a;return function(){var e=Object(c.a)(n.a.mark((function e(r){var a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(Object(s.l)()),e.prev=1,e.next=4,d.a.get("/orders?page=1&limit=10&email=".concat(t,"&phone=").concat(o));case 4:a=e.sent,c=a.data,r(Object(s.m)(c.orders)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(Object(s.k)(e.t0.response.data.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}()},j=function(e){return function(){var r=Object(c.a)(n.a.mark((function r(t){var a,c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(s.i)()),r.prev=1,r.next=4,d.a.get("/orders/".concat(e));case 4:a=r.sent,c=a.data,t(Object(s.j)(c.order)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),t(Object(s.h)(r.t0.response.data.message));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}},117:function(e,r,t){e.exports={Form:"HistoryPage_Form__2sUCq",Form__Control:"HistoryPage_Form__Control__2QfKc",Form__Button:"HistoryPage_Form__Button___Js8Z",Table:"HistoryPage_Table__ysLhF",Table__tbody:"HistoryPage_Table__tbody__1Oha4"}},122:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return y}));var a=t(21),n=t(0),c=t(18),s=t(120),o=t(107),d=t(106),i=t(3),l=t(8),j=t(9),b=t.n(j),u=t(14),O=t(1),h=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],p=n.forwardRef((function(e,r){var t=e.bsPrefix,a=e.className,n=e.striped,c=e.bordered,s=e.borderless,o=e.hover,d=e.size,j=e.variant,p=e.responsive,m=Object(l.a)(e,h),f=Object(u.b)(t,"table"),x=b()(a,f,j&&"".concat(f,"-").concat(j),d&&"".concat(f,"-").concat(d),n&&"".concat(f,"-striped"),c&&"".concat(f,"-bordered"),s&&"".concat(f,"-borderless"),o&&"".concat(f,"-hover")),_=Object(O.jsx)("table",Object(i.a)(Object(i.a)({},m),{},{className:x,ref:r}));if(p){var v="".concat(f,"-responsive");return"string"===typeof p&&(v="".concat(v,"-").concat(p)),Object(O.jsx)("div",{className:v,children:_})}return _})),m=t(111),f=t(110),x=t(46),_=t(117),v=t.n(_);function g(){var e=Object(c.b)(),r=Object(n.useState)(""),t=Object(a.a)(r,2),i=t[0],l=t[1],j=Object(n.useState)(""),b=Object(a.a)(j,2),u=b[0],h=b[1],_=Object(n.useState)(""),g=Object(a.a)(_,2),y=g[0],F=g[1],N=Object(c.c)(f.a.getOrders),C=Object(c.c)(f.a.getOrdersError),k=Object(c.c)(f.a.getOrdersLoading),w=function(e){var r=e.target,t=r.name,a=r.value;switch(t){case"id":return l(a);case"email":return h(a);case"phone":return F(a);default:return}};return Object(O.jsxs)("div",{children:[Object(O.jsxs)(s.a,{className:v.a.Form,children:[Object(O.jsxs)(s.a.Group,{className:v.a.Form__Group,controlId:"id",children:[Object(O.jsx)(s.a.Label,{children:"Id"}),Object(O.jsx)(s.a.Control,{type:"text",name:"id",placeholder:"Enter orders id",value:i,onChange:w,className:v.a.Form__Control})]}),Object(O.jsxs)(o.a,{variant:"primary",onClick:function(){e(Object(m.b)(i))},name:"id",className:v.a.Form__Button,disabled:!i,children:[!k&&Object(O.jsx)("span",{children:"Search"}),k&&Object(O.jsx)(d.a,{animation:"border",as:"span",size:"sm"})]}),Object(O.jsxs)(s.a.Group,{className:v.a.Form__Group,controlId:"email",children:[Object(O.jsx)(s.a.Label,{children:"Email"}),Object(O.jsx)(s.a.Control,{type:"email",name:"email",placeholder:"Enter your email",value:u,onChange:w,className:v.a.Form__Control})]}),Object(O.jsxs)(o.a,{variant:"primary",onClick:function(){e(Object(m.c)({orderEmail:u}))},name:"email",className:v.a.Form__Button,disabled:!u,children:[!k&&Object(O.jsx)("span",{children:"Search"}),k&&Object(O.jsx)(d.a,{animation:"border",as:"span",size:"sm"})]}),Object(O.jsxs)(s.a.Group,{className:v.a.Form__Group,controlId:"phone",children:[Object(O.jsx)(s.a.Label,{children:"Phone"}),Object(O.jsx)(s.a.Control,{type:"tel",name:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",title:"XXX-XXX-XXXX",placeholder:"Enter your phone",value:y,onChange:w,className:v.a.Form__Control})]}),Object(O.jsxs)(o.a,{variant:"primary",onClick:function(r){r.preventDefault(),e(Object(m.c)({orderPhone:y}))},name:"phone",className:v.a.Form__Button,disabled:!y,type:"submit",children:[!k&&Object(O.jsx)("span",{children:"Search"}),k&&Object(O.jsx)(d.a,{animation:"border",as:"span",size:"sm"})]})]}),Object(O.jsxs)(p,{striped:!0,bordered:!0,hover:!0,className:v.a.Table,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"orders id"}),Object(O.jsx)("td",{children:"client"}),Object(O.jsx)("td",{children:"email"}),Object(O.jsx)("td",{children:"phone"}),Object(O.jsx)("td",{children:"total price"}),Object(O.jsx)("td",{children:"shop"}),Object(O.jsx)("td",{children:"date"})]})}),Object(O.jsx)("tbody",{className:v.a.Table__tbody,children:N.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e._id}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:e.phone}),Object(O.jsx)("td",{children:e.price}),Object(O.jsx)("td",{children:e.shop.name}),Object(O.jsxs)("td",{children:[new Date(e.createdAt).toLocaleTimeString()," ",new Date(e.createdAt).toLocaleDateString()]})]},e._id)}))})]}),C&&Object(O.jsx)(x.a,{message:"No data by your query"})]})}function y(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(g,{})})}}}]);
//# sourceMappingURL=HistoryView.09befead.chunk.js.map