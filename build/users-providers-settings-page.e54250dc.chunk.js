(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[2282],{8971:(x,f,e)=>{"use strict";e.r(f),e.d(f,{ProvidersPage:()=>ue,default:()=>Ze});var t=e(67294),s=e(86896),n=e(5458),r=e(18721),i=e.n(r),l=e(11700),a=e.n(l),d=e(14087),m=e(17034),b=e(185),g=e(53979),p=e(49066),c=e(38939),y=e(8060),P=e(79031),u=e(37909),E=e(75515),R=e(63237),S=e(15234),z=e(12028),V=e(4585),$=e(88767),h=e(87561),O=e(89031);const ne={id:(0,O.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ae={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},Q={id:(0,O.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,O.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},se={id:(0,O.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},re={id:(0,O.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},N={id:(0,O.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ie={id:(0,O.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6}]],schema:h.Ry().shape({enabled:h.Xg().required(n.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:se,name:"key",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:re,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:h.Ry().shape({enabled:h.Xg().required(n.I0.required),key:h.Z_().when("enabled",{is:!0,then:h.Z_().required(n.I0.required),otherwise:h.Z_()}),secret:h.Z_().when("enabled",{is:!0,then:h.Z_().required(n.I0.required),otherwise:h.Z_()}),callback:h.Z_().when("enabled",{is:!0,then:h.Z_().required(n.I0.required),otherwise:h.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:se,name:"key",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,O.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:N,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,O.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,O.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:re,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:h.Ry().shape({enabled:h.Xg().required(n.I0.required),key:h.Z_().when("enabled",{is:!0,then:h.Z_().required(n.I0.required),otherwise:h.Z_()}),secret:h.Z_().when("enabled",{is:!0,then:h.Z_().required(n.I0.required),otherwise:h.Z_()}),subdomain:h.Z_().when("enabled",{is:!0,then:h.Z_().required(n.I0.required),otherwise:h.Z_()}),callback:h.Z_().when("enabled",{is:!0,then:h.Z_().required(n.I0.required),otherwise:h.Z_()})})}},ge=async v=>{try{const{get:B}=(0,n.tg)(),{data:T}=await B((0,O.Gc)("providers"));return T}catch{throw v({type:"warning",message:{id:"notification.error"}}),new Error("error")}},he=v=>{const{put:B}=(0,n.tg)();return B((0,O.Gc)("providers"),v)};var pe=e(89734),ve=e.n(pe);const fe=v=>ve()(Object.keys(v).reduce((B,T)=>{const{icon:Z,enabled:j,subdomain:D}=v[T],C=Z==="envelope"?["fas","envelope"]:["fab",Z];return D!==void 0?B.push({name:T,icon:C,enabled:j,subdomain:D}):B.push({name:T,icon:C,enabled:j}),B},[]),"name");var oe=e(81912),ye=e(42866),Ee=e(24969),le=e(2407),xe=e(59946),be=e(11047),Pe=e(11276),Me=e(74571),Oe=e(36856),de=e(29728),Be=e(45697),o=e.n(Be),Le=e(41054),je=e(20707),Te=e(16364);const w=({description:v,disabled:B,intlLabel:T,error:Z,name:j,onChange:D,placeholder:C,providerToEditName:I,type:F,value:M})=>{const{formatMessage:U}=(0,s.Z)(),W=j==="noName"?`${window.strapi.backendURL}/api/connect/${I}/callback`:M,K=U({id:T.id,defaultMessage:T.defaultMessage},{provider:I,...T.values}),A=v?U({id:v.id,defaultMessage:v.defaultMessage},{provider:I,...v.values}):"";if(F==="bool")return t.createElement(je.s,{"aria-label":j,checked:M,disabled:B,hint:A,label:K,name:j,offLabel:U({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:U({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:H=>{D({target:{name:j,value:H.target.checked}})}});const q=C?U({id:C.id,defaultMessage:C.defaultMessage},{...C.values}):"",_=Z?U({id:Z,defaultMessage:Z}):"";return t.createElement(Te.o,{"aria-label":j,disabled:B,error:_,label:K,name:j,onChange:D,placeholder:q,type:F,value:W})};w.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},w.propTypes={description:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),disabled:o().bool,error:o().string,intlLabel:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}).isRequired,name:o().string.isRequired,onChange:o().func.isRequired,placeholder:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),providerToEditName:o().string.isRequired,type:o().string.isRequired,value:o().oneOfType([o().bool,o().string])};const Re=w,k=({headerBreadcrumbs:v,initialData:B,isSubmiting:T,layout:Z,isOpen:j,onSubmit:D,onToggle:C,providerToEditName:I})=>{const{formatMessage:F}=(0,s.Z)();return j?t.createElement(ye.P,{onClose:C,labelledBy:"title"},t.createElement(Ee.x,null,t.createElement(le.O,{label:v.join(", ")},v.map(M=>t.createElement(le.$,{key:M},M)))),t.createElement(Le.J9,{onSubmit:M=>D(M),initialValues:B,validationSchema:Z.schema,validateOnChange:!1},({errors:M,handleChange:U,values:W})=>t.createElement(n.l0,null,t.createElement(xe.f,null,t.createElement(be.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Pe.r,{gap:5},Z.form.map(K=>K.map(A=>t.createElement(Me.P,{key:A.name,col:A.size,xs:12},t.createElement(Re,{...A,error:M[A.name],onChange:U,value:W[A.name],providerToEditName:I}))))))),t.createElement(Oe.m,{startActions:t.createElement(de.z,{variant:"tertiary",onClick:C,type:"button"},F({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(de.z,{type:"submit",loading:T},F({id:"global.save",defaultMessage:"Save"}))})))):null};k.defaultProps={initialData:null,providerToEditName:null},k.propTypes={headerBreadcrumbs:o().arrayOf(o().string).isRequired,initialData:o().object,layout:o().shape({form:o().arrayOf(o().array),schema:o().object}).isRequired,isOpen:o().bool.isRequired,isSubmiting:o().bool.isRequired,onSubmit:o().func.isRequired,onToggle:o().func.isRequired,providerToEditName:o().string};const Ce=k,ue=()=>{const{formatMessage:v}=(0,s.Z)();(0,n.go)();const{notifyStatus:B}=(0,d.G)(),T=(0,$.useQueryClient)(),{trackUsage:Z}=(0,n.rS)(),j=(0,t.useRef)(Z),[D,C]=(0,t.useState)(!1),[I,F]=(0,t.useState)(!1),[M,U]=(0,t.useState)(null),W=(0,n.lm)(),{lockApp:K,unlockApp:A}=(0,n.o1)(),q=(0,t.useMemo)(()=>({update:oe.Z.updateProviders}),[]),{isLoading:_,allowedActions:{canUpdate:H}}=(0,n.ss)(q),{isLoading:Ue,data:G,isFetching:Ae}=(0,$.useQuery)("get-providers",()=>ge(W),{onSuccess(){B(v({id:(0,O.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),De=Ue||Ae,Fe=(0,$.useMutation)(he,{async onSuccess(){await T.invalidateQueries("get-providers"),W({type:"info",message:{id:(0,O.OB)("notification.success.submit")}}),j.current("didEditAuthenticationProvider"),F(!1),ee(),A()},onError(){W({type:"warning",message:{id:"notification.error"}}),A(),F(!1)},refetchActive:!1}),X=(0,t.useMemo)(()=>fe(G),[G]),Se=X.length,ce=(0,t.useMemo)(()=>{if(!M)return!1;const L=X.find(te=>te.name===M);return i()(L,"subdomain")},[X,M]),Ie=v({id:(0,O.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),We=(0,t.useMemo)(()=>M==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[M,ce]),ee=()=>{C(L=>!L)},me=L=>{H&&(U(L.name),ee())},ze=async L=>{F(!0),K(),j.current("willEditAuthenticationProvider");const te={...G,[M]:L};Fe.mutate({providers:te})};return t.createElement(m.A,null,t.createElement(n.SL,{name:Ie}),t.createElement(b.o,null,t.createElement(g.T,{title:v({id:(0,O.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),De||_?t.createElement(n.dO,null):t.createElement(p.D,null,t.createElement(c.i,{colCount:3,rowCount:Se+1},t.createElement(y.h,null,t.createElement(P.Tr,null,t.createElement(u.Th,null,t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},v({id:"global.name",defaultMessage:"Name"}))),t.createElement(u.Th,null,t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},v({id:(0,O.OB)("Providers.status"),defaultMessage:"Status"}))),t.createElement(u.Th,null,t.createElement(E.Z,{variant:"sigma"},t.createElement(R.T,null,v({id:"global.settings",defaultMessage:"Settings"})))))),t.createElement(S.p,null,X.map(L=>t.createElement(P.Tr,{key:L.name,...(0,n.X7)({fn:()=>me(L),condition:H})},t.createElement(u.Td,{width:"45%"},t.createElement(E.Z,{fontWeight:"semiBold",textColor:"neutral800"},L.name)),t.createElement(u.Td,{width:"65%"},t.createElement(E.Z,{textColor:L.enabled?"success600":"danger600","data-testid":`enable-${L.name}`},L.enabled?v({id:"global.enabled",defaultMessage:"Enabled"}):v({id:"global.disabled",defaultMessage:"Disabled"}))),t.createElement(u.Td,{...n.UW},H&&t.createElement(z.h,{onClick:()=>me(L),noBorder:!0,icon:t.createElement(V.Z,null),label:"Edit"})))))))),t.createElement(Ce,{initialData:G[M],isOpen:D,isSubmiting:I,layout:We,headerBreadcrumbs:[v({id:(0,O.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),a()(M)],onToggle:ee,onSubmit:ze,providerToEditName:M}))},Ze=()=>t.createElement(n.O4,{permissions:oe.Z.readProviders},t.createElement(ue,null))},89031:(x,f,e)=>{"use strict";e.d(f,{YX:()=>r,Gc:()=>a,OB:()=>d.Z});var t=e(41609),s=e.n(t);const r=m=>Object.keys(m).reduce((b,g)=>{const p=m[g].controllers,c=Object.keys(p).reduce((y,P)=>(s()(p[P])||(y[P]=p[P]),y),{});return s()(c)||(b[g]={controllers:c}),b},{});var i=e(31498);const a=m=>`/${i.Z}/${m}`;var d=e(84757)},89881:(x,f,e)=>{var t=e(47816),s=e(99291),n=s(t);x.exports=n},69199:(x,f,e)=>{var t=e(89881),s=e(98612);function n(r,i){var l=-1,a=s(r)?Array(r.length):[];return t(r,function(d,m,b){a[++l]=i(d,m,b)}),a}x.exports=n},82689:(x,f,e)=>{var t=e(29932),s=e(97786),n=e(67206),r=e(69199),i=e(71131),l=e(7518),a=e(85022),d=e(6557),m=e(1469);function b(g,p,c){p.length?p=t(p,function(u){return m(u)?function(E){return s(E,u.length===1?u[0]:u)}:u}):p=[d];var y=-1;p=t(p,l(n));var P=r(g,function(u,E,R){var S=t(p,function(z){return z(u)});return{criteria:S,index:++y,value:u}});return i(P,function(u,E){return a(u,E,c)})}x.exports=b},71131:x=>{function f(e,t){var s=e.length;for(e.sort(t);s--;)e[s]=e[s].value;return e}x.exports=f},26393:(x,f,e)=>{var t=e(33448);function s(n,r){if(n!==r){var i=n!==void 0,l=n===null,a=n===n,d=t(n),m=r!==void 0,b=r===null,g=r===r,p=t(r);if(!b&&!p&&!d&&n>r||d&&m&&g&&!b&&!p||l&&m&&g||!i&&g||!a)return 1;if(!l&&!d&&!p&&n<r||p&&i&&a&&!l&&!d||b&&i&&a||!m&&a||!g)return-1}return 0}x.exports=s},85022:(x,f,e)=>{var t=e(26393);function s(n,r,i){for(var l=-1,a=n.criteria,d=r.criteria,m=a.length,b=i.length;++l<m;){var g=t(a[l],d[l]);if(g){if(l>=b)return g;var p=i[l];return g*(p=="desc"?-1:1)}}return n.index-r.index}x.exports=s},99291:(x,f,e)=>{var t=e(98612);function s(n,r){return function(i,l){if(i==null)return i;if(!t(i))return n(i,l);for(var a=i.length,d=r?a:-1,m=Object(i);(r?d--:++d<a)&&l(m[d],d,m)!==!1;);return i}}x.exports=s},89734:(x,f,e)=>{var t=e(21078),s=e(82689),n=e(5976),r=e(16612),i=n(function(l,a){if(l==null)return[];var d=a.length;return d>1&&r(l,a[0],a[1])?a=[]:d>2&&r(a[0],a[1],a[2])&&(a=[a[0]]),s(l,t(a,1),[])});x.exports=i},2407:(x,f,e)=>{"use strict";e.d(f,{$:()=>m,O:()=>b});var t=e(85893),s=e(16405),n=e(88972),r=e(63237),i=e(11047),l=e(41580),a=e(75515);const d=(0,n.ZP)(i.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:g})=>g.colors.neutral500};
    }
  }
  :last-of-type ${l.x} {
    display: none;
  }
  :last-of-type ${a.Z} {
    color: ${({theme:g})=>g.colors.neutral800};
    font-weight: ${({theme:g})=>g.fontWeights.bold};
  }
`,m=({children:g})=>(0,t.jsxs)(d,{inline:!0,as:"li",children:[(0,t.jsx)(a.Z,{variant:"pi",textColor:"neutral600",children:g}),(0,t.jsx)(l.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(s.Z,{})})]});m.displayName="Crumb";const b=({children:g,label:p,...c})=>(0,t.jsxs)(i.k,{...c,children:[(0,t.jsx)(r.T,{children:p}),(0,t.jsx)("ol",{"aria-hidden":!0,children:g})]});b.displayName="Breadcrumbs"},49066:(x,f,e)=>{"use strict";e.d(f,{D:()=>n});var t=e(85893),s=e(41580);const n=({children:r})=>(0,t.jsx)(s.x,{paddingLeft:10,paddingRight:10,children:r})},53979:(x,f,e)=>{"use strict";e.d(f,{T:()=>b});var t=e(85893),s=e(67294),n=e(88972);const r=c=>{const y=(0,s.useRef)(null),[P,u]=(0,s.useState)(!0),E=([R])=>{u(R.isIntersecting)};return(0,s.useEffect)(()=>{const R=y.current,S=new IntersectionObserver(E,c);return R&&S.observe(y.current),()=>{R&&S.disconnect()}},[y,c]),[y,P]};var i=e(79698);const l=(c,y)=>{const P=(0,i.W)(y);(0,s.useLayoutEffect)(()=>{const u=new ResizeObserver(P);return Array.isArray(c)?c.forEach(E=>{E.current&&u.observe(E.current)}):c.current&&u.observe(c.current),()=>{u.disconnect()}},[c,P])};var a=e(41580),d=e(11047),m=e(75515);const b=c=>{const y=(0,s.useRef)(null),[P,u]=(0,s.useState)(null),[E,R]=r({root:null,rootMargin:"0px",threshold:0});return l(E,()=>{E.current&&u(E.current.getBoundingClientRect())}),(0,s.useEffect)(()=>{y.current&&u(y.current.getBoundingClientRect())},[y]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:P?.height},ref:E,children:R&&(0,t.jsx)(p,{ref:y,...c})}),!R&&(0,t.jsx)(p,{...c,sticky:!0,width:P?.width})]})};b.displayName="HeaderLayout";const g=(0,n.ZP)(a.x)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,p=s.forwardRef(({navigationAction:c,primaryAction:y,secondaryAction:P,subtitle:u,title:E,sticky:R,width:S,...z},V)=>{const $=typeof u=="string";return R?(0,t.jsx)(g,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(d.k,{justifyContent:"space-between",children:[(0,t.jsxs)(d.k,{children:[c&&(0,t.jsx)(a.x,{paddingRight:3,children:c}),(0,t.jsxs)(a.x,{children:[(0,t.jsx)(m.Z,{variant:"beta",as:"h1",...z,children:E}),$?(0,t.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:u}):u]}),P?(0,t.jsx)(a.x,{paddingLeft:4,children:P}):null]}),(0,t.jsx)(d.k,{children:y?(0,t.jsx)(a.x,{paddingLeft:2,children:y}):void 0})]})}):(0,t.jsxs)(a.x,{ref:V,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,t.jsx)(a.x,{paddingBottom:2,children:c}):null,(0,t.jsxs)(d.k,{justifyContent:"space-between",children:[(0,t.jsxs)(d.k,{minWidth:0,children:[(0,t.jsx)(m.Z,{as:"h1",variant:"alpha",...z,children:E}),P?(0,t.jsx)(a.x,{paddingLeft:4,children:P}):null]}),y]}),$?(0,t.jsx)(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:u}):u]})})},17034:(x,f,e)=>{"use strict";e.d(f,{A:()=>l});var t=e(85893),s=e(88972),n=e(41580);const r=(0,s.ZP)(n.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,i=(0,s.ZP)(n.x)`
  overflow-x: hidden;
`,l=({sideNav:a,children:d})=>(0,t.jsxs)(r,{hasSideNav:!!a,children:[a,(0,t.jsx)(i,{paddingBottom:10,children:d})]})},185:(x,f,e)=>{"use strict";e.d(f,{o:()=>i});var t=e(85893),s=e(88972),n=e(41580);const r=(0,s.ZP)(n.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:l="main-content-title",...a})=>(0,t.jsx)(r,{"aria-labelledby":l,as:"main",id:"main-content",tabIndex:-1,...a})}}]);
