(this["webpackJsonpeliftech-app"]=this["webpackJsonpeliftech-app"]||[]).push([[5],{107:function(e,a,t){"use strict";var c=t(0),s=c.createContext({});a.a=s},108:function(e,a,t){"use strict";var c=t(2),s=t(7),i=t(8),r=t.n(i),o=t(0),l=t(107),n=t(14),b=t(1),d=["id","bsPrefix","className","type","isValid","isInvalid","as"],j=o.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,j=e.className,f=e.type,O=void 0===f?"checkbox":f,m=e.isValid,u=void 0!==m&&m,v=e.isInvalid,p=void 0!==v&&v,x=e.as,h=void 0===x?"input":x,N=Object(s.a)(e,d),y=Object(o.useContext)(l.a).controlId;return i=Object(n.b)(i,"form-check-input"),Object(b.jsx)(h,Object(c.a)(Object(c.a)({},N),{},{ref:a,type:O,id:t||y,className:r()(j,i,u&&"is-valid",p&&"is-invalid")}))}));j.displayName="FormCheckInput",a.a=j},109:function(e,a,t){"use strict";var c=function(){};e.exports=c},114:function(e,a,t){"use strict";var c=t(2),s=t(7),i=t(8),r=t.n(i),o=t(31),l=t.n(o),n=t(0),b=t(1),d=["as","className","type","tooltip"],j={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},f=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,l=e.type,n=void 0===l?"valid":l,j=e.tooltip,f=void 0!==j&&j,O=Object(s.a)(e,d);return Object(b.jsx)(i,Object(c.a)(Object(c.a)({},O),{},{ref:a,className:r()(o,"".concat(n,"-").concat(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=j;var O=f,m=t(108),u=t(107),v=t(14),p=["bsPrefix","className","htmlFor"],x=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.htmlFor,l=Object(s.a)(e,p),d=Object(n.useContext)(u.a).controlId;return t=Object(v.b)(t,"form-check-label"),Object(b.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:a,htmlFor:o||d,className:r()(i,t)}))}));x.displayName="FormCheckLabel";var h=x;var N=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],y=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,d=void 0!==l&&l,j=e.disabled,f=void 0!==j&&j,p=e.isValid,x=void 0!==p&&p,y=e.isInvalid,P=void 0!==y&&y,I=e.feedbackTooltip,w=void 0!==I&&I,F=e.feedback,k=e.feedbackType,g=e.className,C=e.style,R=e.title,z=void 0===R?"":R,V=e.type,T=void 0===V?"checkbox":V,S=e.label,L=e.children,G=e.as,H=void 0===G?"input":G,M=Object(s.a)(e,N);i=Object(v.b)(i,"form-check"),o=Object(v.b)(o,"form-switch");var E=Object(n.useContext)(u.a).controlId,J=Object(n.useMemo)((function(){return{controlId:t||E}}),[E,t]),A=!L&&null!=S&&!1!==S||function(e,a){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===a}))}(L,h),_=Object(b.jsx)(m.a,Object(c.a)(Object(c.a)({},M),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:x,isInvalid:P,disabled:f,as:H}));return Object(b.jsx)(u.a.Provider,{value:J,children:Object(b.jsx)("div",{style:C,className:r()(g,A&&i,d&&"".concat(i,"-inline"),"switch"===T&&o),children:L||Object(b.jsxs)(b.Fragment,{children:[_,A&&Object(b.jsx)(h,{title:z,children:S}),F&&Object(b.jsx)(O,{type:k,tooltip:w,children:F})]})})})}));y.displayName="FormCheck";var P=Object.assign(y,{Input:m.a,Label:h}),I=t(5),w=(t(109),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=n.forwardRef((function(e,a){var t,i,o=e.bsPrefix,l=e.type,d=e.size,j=e.htmlSize,f=e.id,O=e.className,m=e.isValid,p=void 0!==m&&m,x=e.isInvalid,h=void 0!==x&&x,N=e.plaintext,y=e.readOnly,P=e.as,F=void 0===P?"input":P,k=Object(s.a)(e,w),g=Object(n.useContext)(u.a).controlId;(o=Object(v.b)(o,"form-control"),N)?t=Object(I.a)({},"".concat(o,"-plaintext"),!0):(i={},Object(I.a)(i,o,!0),Object(I.a)(i,"".concat(o,"-").concat(d),d),t=i);return Object(b.jsx)(F,Object(c.a)(Object(c.a)({},k),{},{type:l,size:j,ref:a,readOnly:y,id:f||g,className:r()(O,t,p&&"is-valid",h&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));F.displayName="FormControl";var k=Object.assign(F,{Feedback:O}),g=t(19),C=Object(g.a)("form-floating"),R=["controlId","as"],z=n.forwardRef((function(e,a){var t=e.controlId,i=e.as,r=void 0===i?"div":i,o=Object(s.a)(e,R),l=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(b.jsx)(u.a.Provider,{value:l,children:Object(b.jsx)(r,Object(c.a)(Object(c.a)({},o),{},{ref:a}))})}));z.displayName="FormGroup";var V=z,T=t(21),S=["as","bsPrefix","className"],L=["className"];var G=n.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,i=e.className,o=Object(s.a)(e,S);t=Object(v.b)(t,"col");var l=Object(v.a)(),n=[],b=[];return l.forEach((function(e){var a,c,s,i=o[e];delete o[e],"object"===typeof i&&null!=i?(a=i.span,c=i.offset,s=i.order):a=i;var r="xs"!==e?"-".concat(e):"";a&&n.push(!0===a?"".concat(t).concat(r):"".concat(t).concat(r,"-").concat(a)),null!=s&&b.push("order".concat(r,"-").concat(s)),null!=c&&b.push("offset".concat(r,"-").concat(c))})),[Object(c.a)(Object(c.a)({},o),{},{className:r.a.apply(void 0,[i].concat(n,b))}),{as:a,bsPrefix:t,spans:n}]}(e),i=Object(T.a)(t,2),o=i[0],l=o.className,n=Object(s.a)(o,L),d=i[1],j=d.as,f=void 0===j?"div":j,O=d.bsPrefix,m=d.spans;return Object(b.jsx)(f,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:r()(l,!m.length&&O)}))}));G.displayName="Col";var H=G,M=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],E=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,o=e.bsPrefix,l=e.column,d=e.visuallyHidden,j=e.className,f=e.htmlFor,O=Object(s.a)(e,M),m=Object(n.useContext)(u.a).controlId;o=Object(v.b)(o,"form-label");var p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));var x=r()(j,o,d&&"visually-hidden",l&&p);return f=f||m,l?Object(b.jsx)(H,Object(c.a)({ref:a,as:"label",className:x,htmlFor:f},O)):Object(b.jsx)(i,Object(c.a)({ref:a,className:x,htmlFor:f},O))}));E.displayName="FormLabel",E.defaultProps={column:!1,visuallyHidden:!1};var J=E,A=["bsPrefix","className","id"],_=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.id,l=Object(s.a)(e,A),d=Object(n.useContext)(u.a).controlId;return t=Object(v.b)(t,"form-range"),Object(b.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:a,className:r()(i,t),id:o||d}))}));_.displayName="FormRange";var q=_,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],D=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,d=e.isValid,j=void 0!==d&&d,f=e.isInvalid,O=void 0!==f&&f,m=e.id,p=Object(s.a)(e,B),x=Object(n.useContext)(u.a).controlId;return t=Object(v.b)(t,"form-select"),Object(b.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:o,ref:a,className:r()(l,t,i&&"".concat(t,"-").concat(i),j&&"is-valid",O&&"is-invalid"),id:m||x}))}));D.displayName="FormSelect";var K=D,Q=["bsPrefix","className","as","muted"],U=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,n=e.muted,d=Object(s.a)(e,Q);return t=Object(v.b)(t,"form-text"),Object(b.jsx)(l,Object(c.a)(Object(c.a)({},d),{},{ref:a,className:r()(i,t,n&&"text-muted")}))}));U.displayName="FormText";var W=U,X=n.forwardRef((function(e,a){return Object(b.jsx)(P,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));X.displayName="Switch";var Y=Object.assign(X,{Input:P.Input,Label:P.Label}),Z=["bsPrefix","className","children","controlId","label"],$=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,n=e.label,d=Object(s.a)(e,Z);return t=Object(v.b)(t,"form-floating"),Object(b.jsxs)(V,Object(c.a)(Object(c.a)({ref:a,className:r()(i,t),controlId:l},d),{},{children:[o,Object(b.jsx)("label",{htmlFor:l,children:n})]}))}));$.displayName="FloatingLabel";var ee=$,ae=["className","validated","as"],te={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},ce=n.forwardRef((function(e,a){var t=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,n=Object(s.a)(e,ae);return Object(b.jsx)(l,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:r()(t,i&&"was-validated")}))}));ce.displayName="Form",ce.propTypes=te;a.a=Object.assign(ce,{Group:V,Control:k,Floating:C,Check:P,Switch:Y,Label:J,Text:W,Range:q,Select:K,FloatingLabel:ee})},117:function(e,a,t){"use strict";var c=t(7),s=t(2),i=t(8),r=t.n(i),o=t(0),l=t(19),n=t(14),b=t(108),d=o.createContext(null);d.displayName="InputGroupContext";var j=d,f=t(1),O=["bsPrefix","size","hasValidation","className","as"],m=Object(l.a)("input-group-text",{Component:"span"}),u=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,l=e.hasValidation,b=e.className,d=e.as,m=void 0===d?"div":d,u=Object(c.a)(e,O);t=Object(n.b)(t,"input-group");var v=Object(o.useMemo)((function(){return{}}),[]);return Object(f.jsx)(j.Provider,{value:v,children:Object(f.jsx)(m,Object(s.a)(Object(s.a)({ref:a},u),{},{className:r()(b,t,i&&"".concat(t,"-").concat(i),l&&"has-validation")}))})}));u.displayName="InputGroup";a.a=Object.assign(u,{Text:m,Radio:function(e){return Object(f.jsx)(m,{children:Object(f.jsx)(b.a,Object(s.a)({type:"radio"},e))})},Checkbox:function(e){return Object(f.jsx)(m,{children:Object(f.jsx)(b.a,Object(s.a)({type:"checkbox"},e))})}})}}]);
//# sourceMappingURL=5.bba6a2c2.chunk.js.map