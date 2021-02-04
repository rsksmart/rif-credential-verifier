(this["webpackJsonprif-credential-manager"]=this["webpackJsonprif-credential-manager"]||[]).push([[0],{172:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},177:function(e,t,c){},251:function(e,t){},252:function(e,t){},291:function(e,t){},293:function(e,t){},303:function(e,t){},305:function(e,t){},334:function(e,t){},336:function(e,t){},343:function(e,t){},344:function(e,t){},367:function(e,t,c){"use strict";c.r(t);var a,n=c(4),s=c.n(n),i=c(168),r=c.n(i),l=c(5),j=c(9),d=c.p+"static/media/rif-credential-viewer.5cd41cae.svg";c(177);!function(e){e.START="START",e.LOADING="LOADING",e.ERROR="ERROR",e.DECODED="DECODED"}(a||(a={}));var b={status:a.START,message:"",jwt:void 0,credential:void 0},o=c(0),u=function(e){var t=e.disabled,c=e.handleDecode,a=e.initialText,s=Object(n.useState)(a||""),i=Object(j.a)(s,2),r=i[0],d=i[1],b=Object(n.useState)(!0),u=Object(j.a)(b,2),O=u[0],h=u[1],v={disabled:t};return Object(o.jsxs)("div",{children:[Object(o.jsx)("textarea",Object(l.a)(Object(l.a)({},v),{},{value:r,onChange:function(e){return d(e.target.value)},className:"userInput"})),Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",Object(l.a)(Object(l.a)({},v),{},{type:"checkbox",checked:O,className:"ethSignCheck",onChange:function(e){return h(e.target.checked)}})),"Use ethSign"]})}),Object(o.jsx)("button",Object(l.a)(Object(l.a)({},v),{},{onClick:function(){return c(r.trim().replace(/\n/g," "),O)},className:"submit",children:"Decode JWT"}))]})},O=function(e){var t=e.message;return Object(o.jsx)("p",{className:"alert",children:t})},h=c(171),v=c(169),x=c(91),f=c(170),m=new h.a(Object(v.getResolver)({networks:[{name:"rsk:testnet",rpcUrl:"https://did.testnet.rsk.co:4444",registry:"0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"},{name:"rsk",rpcUrl:"https://did.rsk.co:4444",registry:"0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"},{name:"mainnet",rpcUrl:"https://mainnet.infura.io/v3/8c2e55bc61b94ad781c4deae786c4f58",registry:"0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"}]})),p=function(e,t){return Object(x.verifyJWT)(e,{ethSign:t,resolver:m})},g=function(){return Object(o.jsx)("div",{className:"panel",style:{textAlign:"center"},children:Object(o.jsx)("div",{className:"loader",children:" "})})},N="Signature invalid for JWT",w=function(e){var t=e.label,c=e.value,a=e.validation;if(!c)return Object(o.jsx)(o.Fragment,{});var n=new Date(1e3*c),s=n.toLocaleString(),i="datetime";return("PAST"===a&&n<new Date||"FUTURE"===a&&n>new Date)&&(i+=" alert"),Object(o.jsx)(y,{className:i,label:t,value:s})},y=function(e){var t=e.label,c=e.value,a=e.className;return c?Object(o.jsxs)("div",{className:a?"container ".concat(a):"container",children:[Object(o.jsx)("div",{className:"column-3 label",children:Object(o.jsx)("p",{children:t})}),Object(o.jsx)("div",{className:"column-9 value",children:Object(o.jsx)("p",{children:c})})]}):Object(o.jsx)(o.Fragment,{})},S=function(e){var t,c,a=e.payload;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{label:"Issued At",value:(null===a||void 0===a?void 0:a.iat)||null}),Object(o.jsx)(w,{label:"Expires",value:(null===(t=a.vp)||void 0===t?void 0:t.exp)||(null===(c=a.vc)||void 0===c?void 0:c.exp)||null,validation:"PAST"}),Object(o.jsx)(w,{label:"Not Valid Before",value:(null===a||void 0===a?void 0:a.nbf)||null,validation:"FUTURE"})]})},R=function(e){var t=e.jwt;try{var c=function(e){return Object(x.decodeJWT)(e)}(t);return Object(o.jsx)("pre",{className:"raw",children:JSON.stringify(c,null,2)})}catch(a){return Object(o.jsx)("div",{className:"alert",children:a.message})}},D=function(e){var t=e.payload,c=Object(n.useState)(null),a=Object(j.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(null),l=Object(j.a)(r,2),d=l[0],b=l[1],u=t.vc.type[1];return Object(n.useEffect)((function(){try{var e=function(e,t){return Object(f.parseVerifiableCredential)(e,t)}(u,t.vc);b(e)}catch(c){i(c.message)}}),[t]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Contents"}),s&&Object(o.jsxs)("div",{className:"invalid",children:[Object(o.jsx)("p",{className:"alert",children:Object(o.jsx)("strong",{children:s})}),Object.keys(t.vc.credentialSubject).map((function(e){return Object(o.jsx)(y,{value:t.vc.credentialSubject[e],label:e},e)}))]}),d&&Object(o.jsx)(y,{value:d[u].text,label:d[u].prefix.en})]})},k=function(e){var t,c=e.jwt,a=e.credential,s=e.verifyVerifiableJwt,i=Object(n.useState)(!1),r=Object(j.a)(i,2),l=r[0],d=r[1],b=Object(n.useState)(null),u=Object(j.a)(b,2),h=u[0],v=u[1],x=Object(n.useState)(null),f=Object(j.a)(x,2),m=f[0],p=f[1],w=Object(n.useState)(!1),k=Object(j.a)(w,2),I=k[0],C=k[1],T=function(e){v(null),d(e),s&&c&&s(c,e).then((function(e){return p(e)})).catch((function(e){return v(e.message)}))};if(Object(n.useEffect)((function(){a?p(a):T(l)}),[c]),h)return Object(o.jsxs)("div",{className:"panel error",children:[Object(o.jsx)("h3",{children:"VerifiableCredential"}),Object(o.jsx)(O,{message:h}),h===N&&Object(o.jsxs)("button",{onClick:function(){T(!l)},children:["Try again ",Object(o.jsx)("strong",{children:l?"without":"with"})," eth sign."]})]});if(!m)return Object(o.jsx)(g,{});var E=m.payload;return Object(o.jsxs)("div",{className:"panel credential",children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h3",{children:null===(t=E.vc.type)||void 0===t?void 0:t.join(": ")})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsxs)("button",{className:"raw link",onClick:function(){return C(!I)},children:[I?"Hide":"Show"," Raw"]})})]}),I&&c&&Object(o.jsx)(R,{jwt:c}),Object(o.jsx)(y,{className:"did",label:"Issuer",value:E.iss}),Object(o.jsx)(y,{className:"did",label:"Subject",value:E.sub}),Object(o.jsx)(S,{payload:E}),Object(o.jsx)(D,{payload:m.payload})]})},I=function(e){var t,c=e.jwt,a=e.presentation,s=e.verifyVerifiableJwt,i=Object(n.useState)(!1),r=Object(j.a)(i,2),l=r[0],d=r[1];return Object(o.jsxs)("div",{className:"panel presentation",children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h3",{children:null===(t=a.payload.vp.type)||void 0===t?void 0:t.join(": ")})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsxs)("button",{className:"raw link",onClick:function(){return d(!l)},children:[l?"Hide":"Show"," Raw"]})})]}),c&&l&&Object(o.jsx)(R,{jwt:c}),Object(o.jsx)(y,{className:"did",label:"Issuer",value:a.issuer}),Object(o.jsx)(S,{payload:a.payload}),a.payload.vp.verifiableCredential.map((function(e){return Object(o.jsx)(k,{jwt:e,verifyVerifiableJwt:s},e)}))]})},C=c.p+"static/media/powered-by-iov.5db81567.svg",T=c(172),E=function(){var e={rel:"noreferrer",target:"_blank"};return Object(o.jsxs)("div",{className:"container footer",children:[Object(o.jsxs)("div",{className:"column-4",children:[Object(o.jsx)("img",{src:C,alt:"Powered By RIF"}),Object(o.jsx)("p",{children:"Copyright \xa9 2021 IOV Labs. All rights reserved."}),Object(o.jsxs)("p",{children:["Version ",T.a]})]}),Object(o.jsxs)("div",{className:"column-4",children:[Object(o.jsx)("h2",{children:"RIF Identity Products"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",Object(l.a)(Object(l.a)({href:"https://rsksmart.github.io/rif-identity-manager/"},e),{},{children:"RIF Identity Manager"}))}),Object(o.jsx)("li",{children:Object(o.jsx)("a",Object(l.a)(Object(l.a)({href:"https://rsksmart.github.io/email-vc-issuer/"},e),{},{children:"Email Verifiable Credential Issuer"}))}),Object(o.jsx)("li",{children:Object(o.jsx)("a",Object(l.a)(Object(l.a)({href:"https://developers.rsk.co/rif/identity/"},e),{},{children:"RIF Identity Documentation"}))})]})]}),Object(o.jsxs)("div",{className:"column-4",children:[Object(o.jsx)("h2",{children:"RNS Products"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",Object(l.a)(Object(l.a)({href:"https://manager.rns.rifos.org/"},e),{},{children:"RNS Domain Manager"}))}),Object(o.jsx)("li",{children:Object(o.jsx)("a",Object(l.a)(Object(l.a)({href:"https://developers.rsk.co/rif/rns/"},e),{},{children:"RNS Documentation"}))})]})]})]})};var A=function(){var e=Object(n.useState)(b),t=Object(j.a)(e,2),c=t[0],s=t[1],i=function(e,t){s(Object(l.a)(Object(l.a)({},b),{},{status:a.LOADING})),p(e,t).then((function(t){return s(Object(l.a)(Object(l.a)({},c),{},{jwt:e,credential:t,status:a.DECODED}))})).catch((function(e){var t=e.message===N?"".concat(e.message,", try toggling 'Use ethSign'."):e.message;s(Object(l.a)(Object(l.a)({},b),{},{message:t,status:a.ERROR}))}))},r=window.location.search.startsWith("?jwt=")?window.location.search.replace("?jwt=",""):"";return Object(n.useEffect)((function(){""!==r&&i(r,!0)}),[window.location.search]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"container header",children:Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("img",{src:d,alt:"RIF Credential Viewer"})})}),Object(o.jsxs)("div",{className:"container content",children:[Object(o.jsxs)("div",{className:"column column-6",children:[Object(o.jsx)("h2",{children:"Raw JWT"}),Object(o.jsx)(u,{disabled:c.status===a.LOADING,handleDecode:i,initialText:r})]}),Object(o.jsxs)("div",{className:"column column-6",children:[Object(o.jsx)("h2",{children:"Decoded"}),c.credential&&c.credential.payload.vp&&Object(o.jsx)(I,{presentation:c.credential,verifyVerifiableJwt:p,jwt:c.jwt}),c.credential&&c.credential.payload.vc&&Object(o.jsx)(k,{credential:c.credential,verifyVerifiableJwt:p,jwt:c.jwt}),c.status===a.ERROR&&Object(o.jsx)("div",{className:"panel",children:Object(o.jsx)(O,{message:c.message})}),c.status===a.LOADING&&Object(o.jsx)(g,{})]})]}),Object(o.jsx)(E,{})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,368)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root")),F()}},[[367,1,2]]]);
//# sourceMappingURL=main.192259a5.chunk.js.map