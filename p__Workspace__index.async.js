"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[365],{30668:function(_e,ie,r){var ce=r(76361),I=r(41699),q=r(13178),s=r(96773),B=function(ee){var ye=ee.spinning,he=ye===void 0?!0:ye,ne=ee.tip,se=ne===void 0?"Loading ...":ne,ue=ee.style;return(0,s.jsx)(ce.Z,{indicator:(0,s.jsx)(q.Z,{spin:!0}),spinning:he,tip:se,style:ue,children:ee.children})};ie.Z=B},84703:function(_e,ie,r){r.r(ie),r.d(ie,{default:function(){return ct}});var ce=r(48305),I=r.n(ce),q={workspaceContainer:"workspaceContainer___nOWQ2",menuBar:"menuBar___sJxXf",missionPane:"missionPane___wrFhh",sideBar:"sideBar___B3lKL"},s=r(41699),B=r(82153),Y=r(87839);const ee=s.createContext({}),ye=s.createContext({message:{},notification:{},modal:{}});var he=null,ne=r(68014),se=r(82037),ue=r(92366),Ne=r(19650),Oe=r(67812),be=r(83765),k=r(15260),S=r(13178),Z=r(82187),g=r.n(Z),E=r(25414),V=r(9987),D=r(88071),We=r(82716),J=r(99441),Ce=r(24731),je=r(55945),He=r(83419),cn=r(21972),un=r(28303),fn=s.forwardRef(function(e,n){var a=e.prefixCls,t=e.style,o=e.className,i=e.duration,f=i===void 0?4.5:i,c=e.showProgress,x=e.pauseOnHover,u=x===void 0?!0:x,d=e.eventKey,h=e.content,m=e.closable,M=e.closeIcon,N=M===void 0?"x":M,P=e.props,y=e.onClick,L=e.onNoticeClose,w=e.times,$=e.hovering,R=s.useState(!1),T=(0,E.Z)(R,2),C=T[0],A=T[1],p=s.useState(0),l=(0,E.Z)(p,2),O=l[0],b=l[1],H=s.useState(0),G=(0,E.Z)(H,2),W=G[0],me=G[1],F=$||C,z=f>0&&c,te=function(){L(d)},ve=function(j){(j.key==="Enter"||j.code==="Enter"||j.keyCode===cn.Z.ENTER)&&te()};s.useEffect(function(){if(!F&&f>0){var X=Date.now()-W,j=setTimeout(function(){te()},f*1e3-W);return function(){u&&clearTimeout(j),me(Date.now()-X)}}},[f,F,w]),s.useEffect(function(){if(!F&&z&&(u||W===0)){var X=performance.now(),j,_=function $e(){cancelAnimationFrame(j),j=requestAnimationFrame(function(Te){var le=Te+W-X,ae=Math.min(le/(f*1e3),1);b(ae*100),ae<1&&$e()})};return _(),function(){u&&cancelAnimationFrame(j)}}},[f,W,F,z,w]);var Me=s.useMemo(function(){return(0,He.Z)(m)==="object"&&m!==null?m:m?{closeIcon:N}:{}},[m,N]),Ze=(0,un.Z)(Me,!0),pe=100-(!O||O<0?0:O>100?100:O),Q="".concat(a,"-notice");return s.createElement("div",(0,J.Z)({},P,{ref:n,className:g()(Q,o,(0,Ce.Z)({},"".concat(Q,"-closable"),m)),style:t,onMouseEnter:function(j){var _;A(!0),P==null||(_=P.onMouseEnter)===null||_===void 0||_.call(P,j)},onMouseLeave:function(j){var _;A(!1),P==null||(_=P.onMouseLeave)===null||_===void 0||_.call(P,j)},onClick:y}),s.createElement("div",{className:"".concat(Q,"-content")},h),m&&s.createElement("a",(0,J.Z)({tabIndex:0,className:"".concat(Q,"-close"),onKeyDown:ve,"aria-label":"Close"},Ze,{onClick:function(j){j.preventDefault(),j.stopPropagation(),te()}}),Me.closeIcon),z&&s.createElement("progress",{className:"".concat(Q,"-progress"),max:"100",value:pe},pe+"%"))}),Be=fn,Ke=s.createContext({}),dn=function(n){var a=n.children,t=n.classNames;return s.createElement(Ke.Provider,{value:{classNames:t}},a)},mn=dn,Ue=8,Ge=3,ze=16,vn=function(n){var a={offset:Ue,threshold:Ge,gap:ze};if(n&&(0,He.Z)(n)==="object"){var t,o,i;a.offset=(t=n.offset)!==null&&t!==void 0?t:Ue,a.threshold=(o=n.threshold)!==null&&o!==void 0?o:Ge,a.gap=(i=n.gap)!==null&&i!==void 0?i:ze}return[!!n,a]},pn=vn,gn=["className","style","classNames","styles"],yn=function(n){var a=n.configList,t=n.placement,o=n.prefixCls,i=n.className,f=n.style,c=n.motion,x=n.onAllNoticeRemoved,u=n.onNoticeClose,d=n.stack,h=(0,s.useContext)(Ke),m=h.classNames,M=(0,s.useRef)({}),N=(0,s.useState)(null),P=(0,E.Z)(N,2),y=P[0],L=P[1],w=(0,s.useState)([]),$=(0,E.Z)(w,2),R=$[0],T=$[1],C=a.map(function(F){return{config:F,key:String(F.key)}}),A=pn(d),p=(0,E.Z)(A,2),l=p[0],O=p[1],b=O.offset,H=O.threshold,G=O.gap,W=l&&(R.length>0||C.length<=H),me=typeof c=="function"?c(t):c;return(0,s.useEffect)(function(){l&&R.length>1&&T(function(F){return F.filter(function(z){return C.some(function(te){var ve=te.key;return z===ve})})})},[R,C,l]),(0,s.useEffect)(function(){var F;if(l&&M.current[(F=C[C.length-1])===null||F===void 0?void 0:F.key]){var z;L(M.current[(z=C[C.length-1])===null||z===void 0?void 0:z.key])}},[C,l]),s.createElement(je.V4,(0,J.Z)({key:t,className:g()(o,"".concat(o,"-").concat(t),m==null?void 0:m.list,i,(0,Ce.Z)((0,Ce.Z)({},"".concat(o,"-stack"),!!l),"".concat(o,"-stack-expanded"),W)),style:f,keys:C,motionAppear:!0},me,{onAllRemoved:function(){x(t)}}),function(F,z){var te=F.config,ve=F.className,Me=F.style,Ze=F.index,pe=te,Q=pe.key,X=pe.times,j=String(Q),_=te,$e=_.className,Te=_.style,le=_.classNames,ae=_.styles,ut=(0,V.Z)(_,gn),Ae=C.findIndex(function(Se){return Se.key===j}),Pe={};if(l){var ge=C.length-1-(Ae>-1?Ae:Ze-1),rn=t==="top"||t==="bottom"?"-50%":"0";if(ge>0){var we,Fe,ke;Pe.height=W?(we=M.current[j])===null||we===void 0?void 0:we.offsetHeight:y==null?void 0:y.offsetHeight;for(var ln=0,Le=0;Le<ge;Le++){var De;ln+=((De=M.current[C[C.length-1-Le].key])===null||De===void 0?void 0:De.offsetHeight)+G}var ft=(W?ln:ge*b)*(t.startsWith("top")?1:-1),dt=!W&&y!==null&&y!==void 0&&y.offsetWidth&&(Fe=M.current[j])!==null&&Fe!==void 0&&Fe.offsetWidth?((y==null?void 0:y.offsetWidth)-b*2*(ge<3?ge:3))/((ke=M.current[j])===null||ke===void 0?void 0:ke.offsetWidth):1;Pe.transform="translate3d(".concat(rn,", ").concat(ft,"px, 0) scaleX(").concat(dt,")")}else Pe.transform="translate3d(".concat(rn,", 0, 0)")}return s.createElement("div",{ref:z,className:g()("".concat(o,"-notice-wrapper"),ve,le==null?void 0:le.wrapper),style:(0,D.Z)((0,D.Z)((0,D.Z)({},Me),Pe),ae==null?void 0:ae.wrapper),onMouseEnter:function(){return T(function(re){return re.includes(j)?re:[].concat((0,Y.Z)(re),[j])})},onMouseLeave:function(){return T(function(re){return re.filter(function(mt){return mt!==j})})}},s.createElement(Be,(0,J.Z)({},ut,{ref:function(re){Ae>-1?M.current[j]=re:delete M.current[j]},prefixCls:o,classNames:le,styles:ae,className:g()($e,m==null?void 0:m.notice),style:Te,times:X,key:Q,eventKey:Q,onNoticeClose:u,hovering:l&&R.length>0})))})},hn=yn,Cn=s.forwardRef(function(e,n){var a=e.prefixCls,t=a===void 0?"rc-notification":a,o=e.container,i=e.motion,f=e.maxCount,c=e.className,x=e.style,u=e.onAllRemoved,d=e.stack,h=e.renderNotifications,m=s.useState([]),M=(0,E.Z)(m,2),N=M[0],P=M[1],y=function(l){var O,b=N.find(function(H){return H.key===l});b==null||(O=b.onClose)===null||O===void 0||O.call(b),P(function(H){return H.filter(function(G){return G.key!==l})})};s.useImperativeHandle(n,function(){return{open:function(l){P(function(O){var b=(0,Y.Z)(O),H=b.findIndex(function(me){return me.key===l.key}),G=(0,D.Z)({},l);if(H>=0){var W;G.times=(((W=O[H])===null||W===void 0?void 0:W.times)||0)+1,b[H]=G}else G.times=0,b.push(G);return f>0&&b.length>f&&(b=b.slice(-f)),b})},close:function(l){y(l)},destroy:function(){P([])}}});var L=s.useState({}),w=(0,E.Z)(L,2),$=w[0],R=w[1];s.useEffect(function(){var p={};N.forEach(function(l){var O=l.placement,b=O===void 0?"topRight":O;b&&(p[b]=p[b]||[],p[b].push(l))}),Object.keys($).forEach(function(l){p[l]=p[l]||[]}),R(p)},[N]);var T=function(l){R(function(O){var b=(0,D.Z)({},O),H=b[l]||[];return H.length||delete b[l],b})},C=s.useRef(!1);if(s.useEffect(function(){Object.keys($).length>0?C.current=!0:C.current&&(u==null||u(),C.current=!1)},[$]),!o)return null;var A=Object.keys($);return(0,We.createPortal)(s.createElement(s.Fragment,null,A.map(function(p){var l=$[p],O=s.createElement(hn,{key:p,configList:l,placement:p,prefixCls:t,className:c==null?void 0:c(p),style:x==null?void 0:x(p),motion:i,onNoticeClose:y,onAllNoticeRemoved:T,stack:d});return h?h(O,{prefixCls:t,key:p}):O})),o)}),xn=Cn,En=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],Mn=function(){return document.body},Ve=0;function Pn(){for(var e={},n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];return a.forEach(function(o){o&&Object.keys(o).forEach(function(i){var f=o[i];f!==void 0&&(e[i]=f)})}),e}function Sn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.getContainer,a=n===void 0?Mn:n,t=e.motion,o=e.prefixCls,i=e.maxCount,f=e.className,c=e.style,x=e.onAllRemoved,u=e.stack,d=e.renderNotifications,h=(0,V.Z)(e,En),m=s.useState(),M=(0,E.Z)(m,2),N=M[0],P=M[1],y=s.useRef(),L=s.createElement(xn,{container:N,ref:y,prefixCls:o,motion:t,maxCount:i,className:f,style:c,onAllRemoved:x,stack:u,renderNotifications:d}),w=s.useState([]),$=(0,E.Z)(w,2),R=$[0],T=$[1],C=s.useMemo(function(){return{open:function(p){var l=Pn(h,p);(l.key===null||l.key===void 0)&&(l.key="rc-notification-".concat(Ve),Ve+=1),T(function(O){return[].concat((0,Y.Z)(O),[{type:"open",config:l}])})},close:function(p){T(function(l){return[].concat((0,Y.Z)(l),[{type:"close",key:p}])})},destroy:function(){T(function(p){return[].concat((0,Y.Z)(p),[{type:"destroy"}])})}}},[]);return s.useEffect(function(){P(a())}),s.useEffect(function(){if(y.current&&R.length){R.forEach(function(l){switch(l.type){case"open":y.current.open(l.config);break;case"close":y.current.close(l.key);break;case"destroy":y.current.destroy();break}});var A,p;T(function(l){return(A!==l||!p)&&(A=l,p=l.filter(function(O){return!R.includes(O)})),p})}},[R]),[C,L]}var Xe=r(94662),Ye=r(53129),Nn=r(83687),On=r(46882),bn=r(14702),jn=r(8026);const Rn=e=>{const{componentCls:n,iconCls:a,boxShadow:t,colorText:o,colorSuccess:i,colorError:f,colorWarning:c,colorInfo:x,fontSizeLG:u,motionEaseInOutCirc:d,motionDurationSlow:h,marginXS:m,paddingXS:M,borderRadiusLG:N,zIndexPopup:P,contentPadding:y,contentBg:L}=e,w=`${n}-notice`,$=new Ye.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:M,transform:"translateY(0)",opacity:1}}),R=new Ye.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:M,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),T={padding:M,textAlign:"center",[`${n}-custom-content`]:{display:"flex",alignItems:"center"},[`${n}-custom-content > ${a}`]:{marginInlineEnd:m,fontSize:u},[`${w}-content`]:{display:"inline-block",padding:y,background:L,borderRadius:N,boxShadow:t,pointerEvents:"all"},[`${n}-success > ${a}`]:{color:i},[`${n}-error > ${a}`]:{color:f},[`${n}-warning > ${a}`]:{color:c},[`${n}-info > ${a},
      ${n}-loading > ${a}`]:{color:x}};return[{[n]:Object.assign(Object.assign({},(0,On.Wf)(e)),{color:o,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:P,[`${n}-move-up`]:{animationFillMode:"forwards"},[`
        ${n}-move-up-appear,
        ${n}-move-up-enter
      `]:{animationName:$,animationDuration:h,animationPlayState:"paused",animationTimingFunction:d},[`
        ${n}-move-up-appear${n}-move-up-appear-active,
        ${n}-move-up-enter${n}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:R,animationDuration:h,animationPlayState:"paused",animationTimingFunction:d},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[`${w}-wrapper`]:Object.assign({},T)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},T),{padding:0,textAlign:"start"})}]},In=e=>({zIndexPopup:e.zIndexPopupBase+Nn.u6+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`});var Je=(0,bn.I$)("Message",e=>{const n=(0,jn.IX)(e,{height:150});return[Rn(n)]},In),Zn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const $n={info:s.createElement(k.Z,null),success:s.createElement(Ne.Z,null),error:s.createElement(Oe.Z,null),warning:s.createElement(be.Z,null),loading:s.createElement(S.Z,null)},Qe=e=>{let{prefixCls:n,type:a,icon:t,children:o}=e;return s.createElement("div",{className:g()(`${n}-custom-content`,`${n}-${a}`)},t||$n[a],s.createElement("span",null,o))};var Tn=e=>{const{prefixCls:n,className:a,type:t,icon:o,content:i}=e,f=Zn(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:c}=s.useContext(ne.E_),x=n||c("message"),u=(0,Xe.Z)(x),[d,h,m]=Je(x,u);return d(s.createElement(Be,Object.assign({},f,{prefixCls:x,className:g()(a,h,`${x}-notice-pure-panel`,m,u),eventKey:"pure",duration:null,content:s.createElement(Qe,{prefixCls:x,type:t,icon:o},i)})))},An=r(1613),wn=r(60993);function Fn(e,n){return{motionName:n!=null?n:`${e}-move-up`}}function Re(e){let n;const a=new Promise(o=>{n=e(()=>{o(!0)})}),t=()=>{n==null||n()};return t.then=(o,i)=>a.then(o,i),t.promise=a,t}var kn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Ln=8,Dn=3,_n=e=>{let{children:n,prefixCls:a}=e;const t=(0,Xe.Z)(a),[o,i,f]=Je(a,t);return o(s.createElement(mn,{classNames:{list:g()(i,f,t)}},n))},Wn=(e,n)=>{let{prefixCls:a,key:t}=n;return s.createElement(_n,{prefixCls:a,key:t},e)},Hn=s.forwardRef((e,n)=>{const{top:a,prefixCls:t,getContainer:o,maxCount:i,duration:f=Dn,rtl:c,transitionName:x,onAllRemoved:u}=e,{getPrefixCls:d,getPopupContainer:h,message:m,direction:M}=s.useContext(ne.E_),N=t||d("message"),P=()=>({left:"50%",transform:"translateX(-50%)",top:a!=null?a:Ln}),y=()=>g()({[`${N}-rtl`]:c!=null?c:M==="rtl"}),L=()=>Fn(N,x),w=s.createElement("span",{className:`${N}-close-x`},s.createElement(An.Z,{className:`${N}-close-icon`})),[$,R]=Sn({prefixCls:N,style:P,className:y,motion:L,closable:!1,closeIcon:w,duration:f,getContainer:()=>(o==null?void 0:o())||(h==null?void 0:h())||document.body,maxCount:i,onAllRemoved:u,renderNotifications:Wn});return s.useImperativeHandle(n,()=>Object.assign(Object.assign({},$),{prefixCls:N,message:m})),R});let qe=0;function en(e){const n=s.useRef(null),a=(0,wn.ln)("Message");return[s.useMemo(()=>{const o=u=>{var d;(d=n.current)===null||d===void 0||d.close(u)},i=u=>{if(!n.current){const A=()=>{};return A.then=()=>{},A}const{open:d,prefixCls:h,message:m}=n.current,M=`${h}-notice`,{content:N,icon:P,type:y,key:L,className:w,style:$,onClose:R}=u,T=kn(u,["content","icon","type","key","className","style","onClose"]);let C=L;return C==null&&(qe+=1,C=`antd-message-${qe}`),Re(A=>(d(Object.assign(Object.assign({},T),{key:C,content:s.createElement(Qe,{prefixCls:h,type:y,icon:P},N),placement:"top",className:g()(y&&`${M}-${y}`,w,m==null?void 0:m.className),style:Object.assign(Object.assign({},m==null?void 0:m.style),$),onClose:()=>{R==null||R(),A()}})),()=>{o(C)}))},c={open:i,destroy:u=>{var d;u!==void 0?o(u):(d=n.current)===null||d===void 0||d.destroy()}};return["info","success","warning","error","loading"].forEach(u=>{const d=(h,m,M)=>{let N;h&&typeof h=="object"&&"content"in h?N=h:N={content:h};let P,y;typeof m=="function"?y=m:(P=m,y=M);const L=Object.assign(Object.assign({onClose:y,duration:P},N),{type:u});return i(L)};c[u]=d}),c},[]),s.createElement(Hn,Object.assign({key:"message-holder"},e,{ref:n}))]}function Bn(e){return en(e)}let K=null,oe=e=>e(),fe=[],de={};function nn(){const{getContainer:e,duration:n,rtl:a,maxCount:t,top:o}=de,i=(e==null?void 0:e())||document.body;return{getContainer:()=>i,duration:n,rtl:a,maxCount:t,top:o}}const Kn=s.forwardRef((e,n)=>{const{messageConfig:a,sync:t}=e,{getPrefixCls:o}=(0,s.useContext)(ne.E_),i=de.prefixCls||o("message"),f=(0,s.useContext)(ee),[c,x]=en(Object.assign(Object.assign(Object.assign({},a),{prefixCls:i}),f.message));return s.useImperativeHandle(n,()=>{const u=Object.assign({},c);return Object.keys(u).forEach(d=>{u[d]=function(){return t(),c[d].apply(c,arguments)}}),{instance:u,sync:t}}),x}),Un=s.forwardRef((e,n)=>{const[a,t]=s.useState(nn),o=()=>{t(nn)};s.useEffect(o,[]);const i=(0,se.w6)(),f=i.getRootPrefixCls(),c=i.getIconPrefixCls(),x=i.getTheme(),u=s.createElement(Kn,{ref:n,sync:o,messageConfig:a});return s.createElement(se.ZP,{prefixCls:f,iconPrefixCls:c,theme:x},i.holderRender?i.holderRender(u):u)});function xe(){if(!K){const e=document.createDocumentFragment(),n={fragment:e};K=n,oe(()=>{(0,ue.x)()(s.createElement(Un,{ref:t=>{const{instance:o,sync:i}=t||{};Promise.resolve().then(()=>{!n.instance&&o&&(n.instance=o,n.sync=i,xe())})}}),e)});return}K.instance&&(fe.forEach(e=>{const{type:n,skipped:a}=e;if(!a)switch(n){case"open":{oe(()=>{const t=K.instance.open(Object.assign(Object.assign({},de),e.config));t==null||t.then(e.resolve),e.setCloseFn(t)});break}case"destroy":oe(()=>{K==null||K.instance.destroy(e.key)});break;default:oe(()=>{var t;const o=(t=K.instance)[n].apply(t,(0,Y.Z)(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),fe=[])}function Gn(e){de=Object.assign(Object.assign({},de),e),oe(()=>{var n;(n=K==null?void 0:K.sync)===null||n===void 0||n.call(K)})}function zn(e){const n=Re(a=>{let t;const o={type:"open",config:e,resolve:a,setCloseFn:i=>{t=i}};return fe.push(o),()=>{t?oe(()=>{t()}):o.skipped=!0}});return xe(),n}function Vn(e,n){const a=(0,se.w6)(),t=Re(o=>{let i;const f={type:e,args:n,resolve:o,setCloseFn:c=>{i=c}};return fe.push(f),()=>{i?oe(()=>{i()}):f.skipped=!0}});return xe(),t}const Xn=e=>{fe.push({type:"destroy",key:e}),xe()},Yn=["success","info","warning","error","loading"],tn={open:zn,destroy:Xn,config:Gn,useMessage:Bn,_InternalPanelDoNotUseOrYouWillBeFired:Tn};Yn.forEach(e=>{tn[e]=function(){for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];return Vn(e,a)}});const gt=()=>{};let yt=null,ht=null;var Jn=tn,sn=r(80846),on=r(10150),Qn=r(96608),qn=r(63650),et=r(88901),Ee=r(91941),nt=r(35724),U=r(15175),Ie=r(69376),v=r(96773),tt=function(n){var a=n.onSubmit,t=(0,U.useIntl)(),o=s.useState([]),i=I()(o,2),f=i[0],c=i[1];(0,s.useEffect)(function(){(0,Ie.sS)().then(function(d){c(d.data.types)})},[]);var x=function(h){a==null||a(h)},u=function(h){console.log("Failed:",h)};return(0,v.jsxs)(Ee.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0},onFinish:x,onFinishFailed:u,autoComplete:"off",children:[(0,v.jsx)(Ee.Z.Item,{label:t.formatMessage({id:"workspace_create_mission_modal_form_missionname_label",defaultMessage:"Mission Name"}),name:"name",rules:[{required:!0,message:t.formatMessage({id:"workspace_create_mission_modal_form_missionname_rule_required_msg",defaultMessage:"Please input your mission name."})}],children:(0,v.jsx)(nt.Z,{})}),(0,v.jsx)(Ee.Z.Item,{label:t.formatMessage({id:"workspace_create_mission_modal_form_missiontype_label",defaultMessage:"Mission Type"}),name:"type",rules:[{required:!0,message:t.formatMessage({id:"workspace_create_mission_modal_form_missiontype_rule_required_msg",defaultMessage:"Please select a mission type."})}],children:(0,v.jsx)(et.Z,{options:f.map(function(d){return{label:d.name,value:d.type}})})}),(0,v.jsx)(Ee.Z.Item,{label:null,children:(0,v.jsx)(on.ZP,{type:"primary",htmlType:"submit",children:(0,v.jsx)(U.FormattedMessage,{id:"workspace_create_mission_modal_form_submit_btn_text",defaultMessage:"Create Mission"})})})]})},st=tt,ot=r(42111),at=r(29913),rt=function(n){var a,t=(0,U.useMatch)("/task/:missionId"),o=n.missions,i=t==null||(a=t.params)===null||a===void 0?void 0:a.missionId;if(o==null||o.length===0)return(0,v.jsx)("div",{style:{padding:"16px"},children:(0,v.jsx)(ot.Z,{styles:{image:{height:60}},description:"No missions."})});var f=o.map(function(c){return{key:c.uid,label:(0,v.jsx)("div",{title:c.name,children:(0,v.jsx)(U.Link,{to:"/task/".concat(c.uid),children:c.name})})}});return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(at.Z,{selectedKeys:i?[i]:[],mode:"inline",items:f})})},it=rt,an=r(30668),lt=B.Z.Text;function ct(){var e=(0,U.useIntl)(),n=(0,U.useMatch)("/task/:missionId"),a=s.useState(!1),t=I()(a,2),o=t[0],i=t[1],f=s.useState(null),c=I()(f,2),x=c[0],u=c[1],d=s.useState(!1),h=I()(d,2),m=h[0],M=h[1],N=s.useState(!1),P=I()(N,2),y=P[0],L=P[1],w=(0,s.useCallback)(function(C){M(!0),(0,Ie.o5)().then(function(A){u(A.data.missions),C&&U.history.push("/task/".concat(C))}).finally(function(){M(!1)})},[]);(0,s.useEffect)(function(){w()},[]);var $=function(A){L(!0),(0,Ie.E6)(A).then(function(p){U.history.push("/"),w(p.data.uid)}).catch(function(p){Jn.error("Cannot create mission. Please try again later").then()}).finally(function(){L(!1),i(!1)})},R=function(){i(!0)},T=function(){i(!1)};return(0,v.jsxs)("div",{className:q.workspaceContainer,children:[(0,v.jsxs)("div",{className:q.menuBar,children:[(0,v.jsxs)(sn.Z,{children:[(0,v.jsx)(on.ZP,{size:"small",icon:(0,v.jsx)(qn.Z,{}),onClick:R,children:(0,v.jsx)(U.FormattedMessage,{id:"workspace_menu_create_mission_btn_text"})}),(0,v.jsx)(Qn.Z,{title:e.formatMessage({id:"workspace_create_mission_modal_title",defaultMessage:"Create a new mission"}),open:o,onClose:T,onCancel:T,maskClosable:!1,footer:!1,destroyOnClose:!0,children:(0,v.jsx)(an.Z,{spinning:y,tip:"Creating mission",children:(0,v.jsx)("div",{style:{borderTop:"solid 1px rgb(240,240,240)",paddingTop:"16px"},children:(0,v.jsx)(st,{onSubmit:$})})})})]}),(0,v.jsx)(sn.Z,{})]}),(0,v.jsxs)("div",{className:q.missionPane,children:[(0,v.jsxs)("div",{className:q.sideBar,children:[(0,v.jsx)("div",{style:{overflowY:"auto",overflowX:"hidden",flex:1},children:(0,v.jsx)(an.Z,{spinning:m,children:(0,v.jsx)(it,{missions:x})})}),(0,v.jsx)("div",{style:{padding:"8px",borderTop:"1px solid rgb(220,220,220)"},children:(0,v.jsxs)(lt,{children:[(0,v.jsx)(U.FormattedMessage,{id:"workspace_sidebar_total_mission"}),": ",x==null?void 0:x.length]})})]}),n==null?(0,v.jsx)("div",{style:{padding:"12px",color:"rgb(160, 160, 160)"},children:(0,v.jsx)(U.FormattedMessage,{id:"workspace_mission_pane_null_msg",defaultMessage:"Please select a Mission from list to view"})}):(0,v.jsx)(U.Outlet,{})]})]})}},69376:function(_e,ie,r){r.d(ie,{E6:function(){return se},MK:function(){return ue},Qm:function(){return be},bS:function(){return Oe},nU:function(){return ne},o5:function(){return he},sS:function(){return ee},y1:function(){return Ne}});var ce=r(90228),I=r.n(ce),q=r(87999),s=r.n(q),B=r(15175),Y=r(94942),ee=function(){var k=s()(I()().mark(function S(){return I()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,B.request)("/api/mission/types"));case 1:case"end":return g.stop()}},S)}));return function(){return k.apply(this,arguments)}}(),ye=null,he=function(){var k=s()(I()().mark(function S(){return I()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,B.request)("/api/mission",{params:{page_size:1e4}}));case 1:case"end":return g.stop()}},S)}));return function(){return k.apply(this,arguments)}}(),ne=function(){var k=s()(I()().mark(function S(Z){return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,B.request)("/api/mission/".concat(Z),{}));case 1:case"end":return E.stop()}},S)}));return function(Z){return k.apply(this,arguments)}}(),se=function(){var k=s()(I()().mark(function S(Z){return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,B.request)("/api/mission",{method:"POST",data:Z}));case 1:case"end":return E.stop()}},S)}));return function(Z){return k.apply(this,arguments)}}(),ue=function(){var k=s()(I()().mark(function S(Z){return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,B.request)("/api/mission/launch",{method:"POST",data:Z}));case 1:case"end":return E.stop()}},S)}));return function(Z){return k.apply(this,arguments)}}(),Ne=function(){var k=s()(I()().mark(function S(){return I()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,B.request)("/api/explorer",{}));case 1:case"end":return g.stop()}},S)}));return function(){return k.apply(this,arguments)}}(),Oe=function(){var k=s()(I()().mark(function S(Z){var g,E,V,D=arguments;return I()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return g=D.length>1&&D[1]!==void 0?D[1]:1,E=D.length>2&&D[2]!==void 0?D[2]:20,V=D.length>3&&D[3]!==void 0?D[3]:[0,1],J.abrupt("return",(0,B.request)("/api/explorer/".concat(Z),{params:{page:g,page_size:E,type:V},paramsSerializer:function(je){return Y.Z.stringify(je)}}));case 4:case"end":return J.stop()}},S)}));return function(Z){return k.apply(this,arguments)}}(),be=function(){var k=s()(I()().mark(function S(Z,g){return I()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.abrupt("return",(0,B.request)("/api/explorer/".concat(Z,"/").concat(g),{}));case 1:case"end":return V.stop()}},S)}));return function(Z,g){return k.apply(this,arguments)}}()}}]);
