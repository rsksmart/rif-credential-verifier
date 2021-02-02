(this["webpackJsonprif-credential-manager"]=this["webpackJsonprif-credential-manager"]||[]).push([[0],{171:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},177:function(e,t,c){},250:function(e,t){},251:function(e,t){},290:function(e,t){},292:function(e,t){},302:function(e,t){},304:function(e,t){},333:function(e,t){},335:function(e,t){},342:function(e,t){},343:function(e,t){},366:function(e,t,c){"use strict";c.r(t);var a,n=c(0),i=c(6),s=c.n(i),r=c(168),l=c.n(r),j=c(4),d=c(16),b=c.p+"static/media/rif-credential-viewer.5cd41cae.svg";c(177);!function(e){e.START="START",e.LOADING="LOADING",e.ERROR="ERROR",e.DECODED="DECODED"}(a||(a={}));var o={status:a.START,message:"",jwt:void 0,credential:void 0},u=function(e){var t=e.disabled,c=e.handleDecode,a=e.initialText,s=Object(i.useState)(a||""),r=Object(d.a)(s,2),l=r[0],b=r[1],o=Object(i.useState)(!0),u=Object(d.a)(o,2),O=u[0],h=u[1],v={disabled:t};return Object(n.jsxs)("div",{children:[Object(n.jsx)("textarea",Object(j.a)(Object(j.a)({},v),{},{value:l,onChange:function(e){return b(e.target.value)},className:"userInput"})),Object(n.jsx)("p",{children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",Object(j.a)(Object(j.a)({},v),{},{type:"checkbox",checked:O,className:"ethSignCheck",onChange:function(e){return h(e.target.checked)}})),"Use ethSign"]})}),Object(n.jsx)("button",Object(j.a)(Object(j.a)({},v),{},{onClick:function(){return c(l.trim().replace(/\n/g," "),O)},className:"submit",children:"Decode JWT"}))]})},O=function(e){var t=e.message;return Object(n.jsx)("p",{className:"alert",children:t})},h=c(170),v=c(169),f=c(91),x=new h.a(Object(v.getResolver)({networks:[{name:"rsk:testnet",rpcUrl:"https://did.testnet.rsk.co:4444",registry:"0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"},{name:"rsk",rpcUrl:"https://did.rsk.co:4444",registry:"0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"},{name:"mainnet",rpcUrl:"https://mainnet.infura.io/v3/8c2e55bc61b94ad781c4deae786c4f58",registry:"0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"}]})),m=function(e,t){return Object(f.verifyJWT)(e,{ethSign:t,resolver:x})},p=function(){return Object(n.jsx)("div",{className:"panel",style:{textAlign:"center"},children:Object(n.jsx)("div",{className:"loader",children:" "})})},g="Signature invalid for JWT",N=function(e){var t=e.label,c=e.value,a=e.validation;if(!c)return Object(n.jsx)(n.Fragment,{});var i=new Date(1e3*c),s=i.toLocaleString(),r="datetime";return("PAST"===a&&i<new Date||"FUTURE"===a&&i>new Date)&&(r+=" alert"),Object(n.jsx)(y,{className:r,label:t,value:s})},y=function(e){var t=e.label,c=e.value,a=e.className;return c?Object(n.jsxs)("div",{className:a?"container ".concat(a):"container",children:[Object(n.jsx)("div",{className:"column-3 label",children:Object(n.jsx)("p",{children:t})}),Object(n.jsx)("div",{className:"column-9 value",children:Object(n.jsx)("p",{children:c})})]}):Object(n.jsx)(n.Fragment,{})},w=function(e){var t,c,a=e.payload;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(N,{label:"Issued At",value:(null===a||void 0===a?void 0:a.iat)||null}),Object(n.jsx)(N,{label:"Expires",value:(null===(t=a.vp)||void 0===t?void 0:t.exp)||(null===(c=a.vc)||void 0===c?void 0:c.exp)||null,validation:"PAST"}),Object(n.jsx)(N,{label:"Not Valid Before",value:(null===a||void 0===a?void 0:a.nbf)||null,validation:"FUTURE"})]})},R=function(e){var t,c=e.jwt,a=e.credential,s=e.verifyVerifiableJwt,r=Object(i.useState)(!1),l=Object(d.a)(r,2),j=l[0],b=l[1],o=Object(i.useState)(null),u=Object(d.a)(o,2),h=u[0],v=u[1],f=Object(i.useState)(null),x=Object(d.a)(f,2),m=x[0],N=x[1],R=function(e){v(null),b(e),s&&c&&s(c,e).then((function(e){return N(e)})).catch((function(e){return v(e.message)}))};if(Object(i.useEffect)((function(){a?N(a):R(j)}),[c]),h)return Object(n.jsxs)("div",{className:"panel error",children:[Object(n.jsx)("h3",{children:"VerifiableCredential"}),Object(n.jsx)(O,{message:h}),h===g&&Object(n.jsxs)("button",{onClick:function(){R(!j)},children:["Try again ",Object(n.jsx)("strong",{children:j?"without":"with"})," eth sign."]})]});if(!m)return Object(n.jsx)(p,{});var S=m.payload,D=m.payload.vc.credentialSubject;return Object(n.jsxs)("div",{className:"panel credential",children:[Object(n.jsx)("h3",{children:null===(t=S.vc.type)||void 0===t?void 0:t.join(": ")}),Object(n.jsx)(y,{className:"did",label:"Issuer",value:S.iss}),Object(n.jsx)(y,{className:"did",label:"Subject",value:S.sub}),Object(n.jsx)(w,{payload:S}),Object(n.jsx)("h4",{children:"CredentialSubject"}),D&&Object.keys(D).map((function(e){return Object(n.jsx)(y,{value:D[e],label:e},e)}))]})},S=function(e){var t,c=e.presentation,a=e.verifyVerifiableJwt;return Object(n.jsxs)("div",{className:"panel presentation",children:[Object(n.jsx)("h3",{children:null===(t=c.payload.vp.type)||void 0===t?void 0:t.join(": ")}),Object(n.jsx)(y,{className:"did",label:"Issuer",value:c.issuer}),Object(n.jsx)(w,{payload:c.payload}),c.payload.vp.verifiableCredential.map((function(e){return Object(n.jsx)(R,{jwt:e,verifyVerifiableJwt:a},e)}))]})},D=c.p+"static/media/powered-by-iov.5db81567.svg",I=c(171),k=function(){var e={rel:"noreferrer",target:"_blank"};return Object(n.jsxs)("div",{className:"container footer",children:[Object(n.jsxs)("div",{className:"column-4",children:[Object(n.jsx)("img",{src:D,alt:"Powered By RIF"}),Object(n.jsx)("p",{children:"Copyright \xa9 2021 IOV Labs. All rights reserved."}),Object(n.jsxs)("p",{children:["Version ",I.a]})]}),Object(n.jsxs)("div",{className:"column-4",children:[Object(n.jsx)("h2",{children:"RIF Identity Products"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",Object(j.a)(Object(j.a)({href:"https://rsksmart.github.io/rif-identity-manager/"},e),{},{children:"RIF Identity Manager"}))}),Object(n.jsx)("li",{children:Object(n.jsx)("a",Object(j.a)(Object(j.a)({href:"https://rsksmart.github.io/email-vc-issuer/"},e),{},{children:"Email Verifiable Credential Issuer"}))}),Object(n.jsx)("li",{children:Object(n.jsx)("a",Object(j.a)(Object(j.a)({href:"https://developers.rsk.co/rif/identity/"},e),{},{children:"RIF Identity Documentation"}))})]})]}),Object(n.jsxs)("div",{className:"column-4",children:[Object(n.jsx)("h2",{children:"RNS Products"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",Object(j.a)(Object(j.a)({href:"https://manager.rns.rifos.org/"},e),{},{children:"RNS Domain Manager"}))}),Object(n.jsx)("li",{children:Object(n.jsx)("a",Object(j.a)(Object(j.a)({href:"https://developers.rsk.co/rif/rns/"},e),{},{children:"RNS Documentation"}))})]})]})]})};var T=function(){var e=Object(i.useState)(o),t=Object(d.a)(e,2),c=t[0],s=t[1],r=function(e,t){s(Object(j.a)(Object(j.a)({},o),{},{status:a.LOADING})),m(e,t).then((function(t){return s(Object(j.a)(Object(j.a)({},c),{},{jwt:e,credential:t,status:a.DECODED}))})).catch((function(e){var t=e.message===g?"".concat(e.message,", try toggling 'Use ethSign'."):e.message;s(Object(j.a)(Object(j.a)({},o),{},{message:t,status:a.ERROR}))}))},l=window.location.search.startsWith("?jwt=")?window.location.search.replace("?jwt=",""):"";return Object(i.useEffect)((function(){""!==l&&r(l,!0)}),[window.location.search]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"container header",children:Object(n.jsx)("div",{className:"column",children:Object(n.jsx)("img",{src:b,alt:"RIF Credential Viewer"})})}),Object(n.jsxs)("div",{className:"container content",children:[Object(n.jsxs)("div",{className:"column column-6",children:[Object(n.jsx)("h2",{children:"Raw JWT"}),Object(n.jsx)(u,{disabled:c.status===a.LOADING,handleDecode:r,initialText:l})]}),Object(n.jsxs)("div",{className:"column column-6",children:[Object(n.jsx)("h2",{children:"Decoded"}),c.credential&&c.credential.payload.vp&&Object(n.jsx)(S,{presentation:c.credential,verifyVerifiableJwt:m}),c.credential&&c.credential.payload.vc&&Object(n.jsx)(R,{credential:c.credential,verifyVerifiableJwt:m}),c.status===a.ERROR&&Object(n.jsx)("div",{className:"panel",children:Object(n.jsx)(O,{message:c.message})}),c.status===a.LOADING&&Object(n.jsx)(p,{})]})]}),Object(n.jsx)(k,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,367)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),C()}},[[366,1,2]]]);
//# sourceMappingURL=main.942b0509.chunk.js.map