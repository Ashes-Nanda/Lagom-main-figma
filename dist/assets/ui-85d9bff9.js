import{r as c,a as ft,R as Pe,b as ht,c as T}from"./vendor-194d1c16.js";var Oe={exports:{}},Q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=c,pt=Symbol.for("react.element"),yt=Symbol.for("react.fragment"),mt=Object.prototype.hasOwnProperty,gt=vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kt={key:!0,ref:!0,__self:!0,__source:!0};function De(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)mt.call(t,r)&&!kt.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pt,type:e,key:a,ref:i,props:o,_owner:gt.current}}Q.Fragment=yt;Q.jsx=De;Q.jsxs=De;Oe.exports=Q;var k=Oe.exports;function ye(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Te(...e){return t=>{let n=!1;const r=e.map(o=>{const a=ye(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():ye(e[o],null)}}}}function A(...e){return c.useCallback(Te(...e),e)}function z(e){const t=Et(e),n=c.forwardRef((r,o)=>{const{children:a,...i}=r,s=c.Children.toArray(a),f=s.find(Ct);if(f){const l=f.props.children,d=s.map(h=>h===f?c.Children.count(l)>1?c.Children.only(null):c.isValidElement(l)?l.props.children:null:h);return k.jsx(t,{...i,ref:o,children:c.isValidElement(l)?c.cloneElement(l,void 0,d):null})}return k.jsx(t,{...i,ref:o,children:a})});return n.displayName=`${e}.Slot`,n}var so=z("Slot");function Et(e){const t=c.forwardRef((n,r)=>{const{children:o,...a}=n;if(c.isValidElement(o)){const i=Mt(o),s=wt(a,o.props);return o.type!==c.Fragment&&(s.ref=r?Te(r,i):i),c.cloneElement(o,s)}return c.Children.count(o)>1?c.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var bt=Symbol("radix.slottable");function Ct(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===bt}function wt(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...s)=>{const f=a(...s);return o(...s),f}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function Mt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xt=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),me=e=>{const t=xt(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ie=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:i,...s},f)=>c.createElement("svg",{ref:f,...Nt,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ie("lucide",o),...s},[...i.map(([l,d])=>c.createElement(l,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,t)=>{const n=c.forwardRef(({className:r,...o},a)=>c.createElement(St,{ref:a,iconNode:t,className:Ie(`lucide-${_t(me(e))}`,`lucide-${e}`,r),...o}));return n.displayName=me(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],io=v("arrow-left",Rt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],uo=v("arrow-right",At);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],lo=v("award",Pt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],fo=v("book-open",Ot);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ho=v("bot",Dt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],vo=v("brain",Tt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],po=v("building",It);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],yo=v("calendar",Lt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],mo=v("chart-column",$t);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],go=v("check",jt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ko=v("chevron-down",Ft);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Eo=v("chevron-up",Wt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],bo=v("circle",zt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Co=v("clock",Bt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],wo=v("coffee",Ut);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Mo=v("download",qt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],_o=v("external-link",Ht);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],xo=v("facebook",Vt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],No=v("file-text",Kt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],So=v("globe",Zt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Ro=v("headphones",Gt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Ao=v("heart",Yt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Po=v("info",Xt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Oo=v("instagram",Qt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Do=v("leaf",Jt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],To=v("linkedin",en);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Io=v("mail",tn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Lo=v("map-pin",nn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],$o=v("message-circle",rn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],jo=v("message-square",on);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Fo=v("pause",an);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Wo=v("phone-call",cn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],zo=v("phone",sn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Bo=v("play",un);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Uo=v("refresh-cw",ln);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qo=v("rotate-ccw",dn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ho=v("send",fn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Vo=v("shield",hn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Ko=v("shopping-cart",vn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Zo=v("sparkles",pn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Go=v("star",yn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Yo=v("target",mn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Xo=v("trending-up",gn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Qo=v("triangle-alert",kn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Jo=v("truck",En);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],ea=v("twitter",bn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],ta=v("user-check",Cn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],na=v("user",wn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],ra=v("users",Mn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],oa=v("volume-2",_n);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],aa=v("volume-x",xn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],ca=v("wind",Nn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sa=v("x",Sn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],ia=v("youtube",Rn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ua=v("zap",An);var Pn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],P=Pn.reduce((e,t)=>{const n=z(`Primitive.${t}`),r=c.forwardRef((o,a)=>{const{asChild:i,...s}=o,f=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),k.jsx(f,{...s,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function On(e,t){e&&ft.flushSync(()=>e.dispatchEvent(t))}function D(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Dn(e,t){const n=c.createContext(t),r=a=>{const{children:i,...s}=a,f=c.useMemo(()=>s,Object.values(s));return k.jsx(n.Provider,{value:f,children:i})};r.displayName=e+"Provider";function o(a){const i=c.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[r,o]}function Le(e,t=[]){let n=[];function r(a,i){const s=c.createContext(i),f=n.length;n=[...n,i];const l=h=>{var g;const{scope:p,children:m,...M}=h,u=((g=p==null?void 0:p[e])==null?void 0:g[f])||s,y=c.useMemo(()=>M,Object.values(M));return k.jsx(u.Provider,{value:y,children:m})};l.displayName=a+"Provider";function d(h,p){var u;const m=((u=p==null?void 0:p[e])==null?void 0:u[f])||s,M=c.useContext(m);if(M)return M;if(i!==void 0)return i;throw new Error(`\`${h}\` must be used within \`${a}\``)}return[l,d]}const o=()=>{const a=n.map(i=>c.createContext(i));return function(s){const f=(s==null?void 0:s[e])||a;return c.useMemo(()=>({[`__scope${e}`]:{...s,[e]:f}}),[s,f])}};return o.scopeName=e,[r,Tn(o,...t)]}function Tn(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=r.reduce((s,{useScope:f,scopeName:l})=>{const h=f(a)[`__scope${l}`];return{...s,...h}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}var B=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},In=Pe[" useId ".trim().toString()]||(()=>{}),Ln=0;function re(e){const[t,n]=c.useState(In());return B(()=>{e||n(r=>r??String(Ln++))},[e]),e||(t?`radix-${t}`:"")}var $n=Pe[" useInsertionEffect ".trim().toString()]||B;function jn({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,a,i]=Fn({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:o;{const d=c.useRef(e!==void 0);c.useEffect(()=>{const h=d.current;h!==s&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=s},[s,r])}const l=c.useCallback(d=>{var h;if(s){const p=Wn(d)?d(e):d;p!==e&&((h=i.current)==null||h.call(i,p))}else a(d)},[s,e,a,i]);return[f,l]}function Fn({defaultProp:e,onChange:t}){const[n,r]=c.useState(e),o=c.useRef(n),a=c.useRef(t);return $n(()=>{a.current=t},[t]),c.useEffect(()=>{var i;o.current!==n&&((i=a.current)==null||i.call(a,n),o.current=n)},[n,o]),[n,r,a]}function Wn(e){return typeof e=="function"}function U(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function zn(e,t=globalThis==null?void 0:globalThis.document){const n=U(e);c.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Bn="DismissableLayer",de="dismissableLayer.update",Un="dismissableLayer.pointerDownOutside",qn="dismissableLayer.focusOutside",ge,$e=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),je=c.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:i,onDismiss:s,...f}=e,l=c.useContext($e),[d,h]=c.useState(null),p=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=c.useState({}),M=A(t,w=>h(w)),u=Array.from(l.layers),[y]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),g=u.indexOf(y),E=d?u.indexOf(d):-1,b=l.layersWithOutsidePointerEventsDisabled.size>0,C=E>=g,_=Kn(w=>{const R=w.target,W=[...l.branches].some(ne=>ne.contains(R));!C||W||(o==null||o(w),i==null||i(w),w.defaultPrevented||s==null||s())},p),x=Zn(w=>{const R=w.target;[...l.branches].some(ne=>ne.contains(R))||(a==null||a(w),i==null||i(w),w.defaultPrevented||s==null||s())},p);return zn(w=>{E===l.layers.size-1&&(r==null||r(w),!w.defaultPrevented&&s&&(w.preventDefault(),s()))},p),c.useEffect(()=>{if(d)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(ge=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(d)),l.layers.add(d),ke(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=ge)}},[d,p,n,l]),c.useEffect(()=>()=>{d&&(l.layers.delete(d),l.layersWithOutsidePointerEventsDisabled.delete(d),ke())},[d,l]),c.useEffect(()=>{const w=()=>m({});return document.addEventListener(de,w),()=>document.removeEventListener(de,w)},[]),k.jsx(P.div,{...f,ref:M,style:{pointerEvents:b?C?"auto":"none":void 0,...e.style},onFocusCapture:D(e.onFocusCapture,x.onFocusCapture),onBlurCapture:D(e.onBlurCapture,x.onBlurCapture),onPointerDownCapture:D(e.onPointerDownCapture,_.onPointerDownCapture)})});je.displayName=Bn;var Hn="DismissableLayerBranch",Vn=c.forwardRef((e,t)=>{const n=c.useContext($e),r=c.useRef(null),o=A(t,r);return c.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),k.jsx(P.div,{...e,ref:o})});Vn.displayName=Hn;function Kn(e,t=globalThis==null?void 0:globalThis.document){const n=U(e),r=c.useRef(!1),o=c.useRef(()=>{});return c.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let f=function(){Fe(Un,n,l,{discrete:!0})};const l={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=f,t.addEventListener("click",o.current,{once:!0})):f()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Zn(e,t=globalThis==null?void 0:globalThis.document){const n=U(e),r=c.useRef(!1);return c.useEffect(()=>{const o=a=>{a.target&&!r.current&&Fe(qn,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ke(){const e=new CustomEvent(de);document.dispatchEvent(e)}function Fe(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?On(o,a):o.dispatchEvent(a)}var oe="focusScope.autoFocusOnMount",ae="focusScope.autoFocusOnUnmount",Ee={bubbles:!1,cancelable:!0},Gn="FocusScope",We=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[s,f]=c.useState(null),l=U(o),d=U(a),h=c.useRef(null),p=A(t,u=>f(u)),m=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let u=function(b){if(m.paused||!s)return;const C=b.target;s.contains(C)?h.current=C:O(h.current,{select:!0})},y=function(b){if(m.paused||!s)return;const C=b.relatedTarget;C!==null&&(s.contains(C)||O(h.current,{select:!0}))},g=function(b){if(document.activeElement===document.body)for(const _ of b)_.removedNodes.length>0&&O(s)};document.addEventListener("focusin",u),document.addEventListener("focusout",y);const E=new MutationObserver(g);return s&&E.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",y),E.disconnect()}}},[r,s,m.paused]),c.useEffect(()=>{if(s){Ce.add(m);const u=document.activeElement;if(!s.contains(u)){const g=new CustomEvent(oe,Ee);s.addEventListener(oe,l),s.dispatchEvent(g),g.defaultPrevented||(Yn(tr(ze(s)),{select:!0}),document.activeElement===u&&O(s))}return()=>{s.removeEventListener(oe,l),setTimeout(()=>{const g=new CustomEvent(ae,Ee);s.addEventListener(ae,d),s.dispatchEvent(g),g.defaultPrevented||O(u??document.body,{select:!0}),s.removeEventListener(ae,d),Ce.remove(m)},0)}}},[s,l,d,m]);const M=c.useCallback(u=>{if(!n&&!r||m.paused)return;const y=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,g=document.activeElement;if(y&&g){const E=u.currentTarget,[b,C]=Xn(E);b&&C?!u.shiftKey&&g===C?(u.preventDefault(),n&&O(b,{select:!0})):u.shiftKey&&g===b&&(u.preventDefault(),n&&O(C,{select:!0})):g===E&&u.preventDefault()}},[n,r,m.paused]);return k.jsx(P.div,{tabIndex:-1,...i,ref:p,onKeyDown:M})});We.displayName=Gn;function Yn(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(O(r,{select:t}),document.activeElement!==n)return}function Xn(e){const t=ze(e),n=be(t,e),r=be(t.reverse(),e);return[n,r]}function ze(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function be(e,t){for(const n of e)if(!Qn(n,{upTo:t}))return n}function Qn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Jn(e){return e instanceof HTMLInputElement&&"select"in e}function O(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Jn(e)&&t&&e.select()}}var Ce=er();function er(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=we(e,t),e.unshift(t)},remove(t){var n;e=we(e,t),(n=e[0])==null||n.resume()}}}function we(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function tr(e){return e.filter(t=>t.tagName!=="A")}var nr="Portal",Be=c.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[o,a]=c.useState(!1);B(()=>a(!0),[]);const i=n||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return i?ht.createPortal(k.jsx(P.div,{...r,ref:t}),i):null});Be.displayName=nr;function rr(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var J=e=>{const{present:t,children:n}=e,r=or(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),a=A(r.ref,ar(o));return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:a}):null};J.displayName="Presence";function or(e){const[t,n]=c.useState(),r=c.useRef(null),o=c.useRef(e),a=c.useRef("none"),i=e?"mounted":"unmounted",[s,f]=rr(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const l=q(r.current);a.current=s==="mounted"?l:"none"},[s]),B(()=>{const l=r.current,d=o.current;if(d!==e){const p=a.current,m=q(l);e?f("MOUNT"):m==="none"||(l==null?void 0:l.display)==="none"?f("UNMOUNT"):f(d&&p!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),B(()=>{if(t){let l;const d=t.ownerDocument.defaultView??window,h=m=>{const u=q(r.current).includes(m.animationName);if(m.target===t&&u&&(f("ANIMATION_END"),!o.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",l=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},p=m=>{m.target===t&&(a.current=q(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(l),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:c.useCallback(l=>{r.current=l?getComputedStyle(l):null,n(l)},[])}}function q(e){return(e==null?void 0:e.animationName)||"none"}function ar(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ce=0;function cr(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Me()),document.body.insertAdjacentElement("beforeend",e[1]??Me()),ce++,()=>{ce===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ce--}},[])}function Me(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var S=function(){return S=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},S.apply(this,arguments)};function Ue(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function sr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var G="right-scroll-bar-position",Y="width-before-scroll-bar",ir="with-scroll-bars-hidden",ur="--removed-body-scroll-bar-size";function se(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function lr(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var dr=typeof window<"u"?c.useLayoutEffect:c.useEffect,_e=new WeakMap;function fr(e,t){var n=lr(t||null,function(r){return e.forEach(function(o){return se(o,r)})});return dr(function(){var r=_e.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(s){a.has(s)||se(s,null)}),a.forEach(function(s){o.has(s)||se(s,i)})}_e.set(n,e)},[e]),n}function hr(e){return e}function vr(e,t){t===void 0&&(t=hr);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var f=function(){var d=i;i=[],d.forEach(a)},l=function(){return Promise.resolve().then(f)};l(),n={push:function(d){i.push(d),l()},filter:function(d){return i=i.filter(d),n}}}};return o}function pr(e){e===void 0&&(e={});var t=vr(null);return t.options=S({async:!0,ssr:!1},e),t}var qe=function(e){var t=e.sideCar,n=Ue(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,S({},n))};qe.isSideCarExport=!0;function yr(e,t){return e.useMedium(t),qe}var He=pr(),ie=function(){},ee=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:ie,onWheelCapture:ie,onTouchMoveCapture:ie}),o=r[0],a=r[1],i=e.forwardProps,s=e.children,f=e.className,l=e.removeScrollBar,d=e.enabled,h=e.shards,p=e.sideCar,m=e.noRelative,M=e.noIsolation,u=e.inert,y=e.allowPinchZoom,g=e.as,E=g===void 0?"div":g,b=e.gapMode,C=Ue(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),_=p,x=fr([n,t]),w=S(S({},C),o);return c.createElement(c.Fragment,null,d&&c.createElement(_,{sideCar:He,removeScrollBar:l,shards:h,noRelative:m,noIsolation:M,inert:u,setCallbacks:a,allowPinchZoom:!!y,lockRef:n,gapMode:b}),i?c.cloneElement(c.Children.only(s),S(S({},w),{ref:x})):c.createElement(E,S({},w,{className:f,ref:x}),s))});ee.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ee.classNames={fullWidth:Y,zeroRight:G};var xe,mr=function(){if(xe)return xe;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function gr(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=mr();return t&&e.setAttribute("nonce",t),e}function kr(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Er(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var br=function(){var e=0,t=null;return{add:function(n){e==0&&(t=gr())&&(kr(t,n),Er(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Cr=function(){var e=br();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ve=function(){var e=Cr(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},wr={left:0,top:0,right:0,gap:0},ue=function(e){return parseInt(e||"",10)||0},Mr=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ue(n),ue(r),ue(o)]},_r=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return wr;var t=Mr(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},xr=Ve(),F="data-scroll-locked",Nr=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ir,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(F,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(G,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Y,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Y," .").concat(Y,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(F,`] {
    `).concat(ur,": ").concat(s,`px;
  }
`)},Ne=function(){var e=parseInt(document.body.getAttribute(F)||"0",10);return isFinite(e)?e:0},Sr=function(){c.useEffect(function(){return document.body.setAttribute(F,(Ne()+1).toString()),function(){var e=Ne()-1;e<=0?document.body.removeAttribute(F):document.body.setAttribute(F,e.toString())}},[])},Rr=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Sr();var a=c.useMemo(function(){return _r(o)},[o]);return c.createElement(xr,{styles:Nr(a,!t,o,n?"":"!important")})},fe=!1;if(typeof window<"u")try{var H=Object.defineProperty({},"passive",{get:function(){return fe=!0,!0}});window.addEventListener("test",H,H),window.removeEventListener("test",H,H)}catch{fe=!1}var L=fe?{passive:!1}:!1,Ar=function(e){return e.tagName==="TEXTAREA"},Ke=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ar(e)&&n[t]==="visible")},Pr=function(e){return Ke(e,"overflowY")},Or=function(e){return Ke(e,"overflowX")},Se=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Ze(e,r);if(o){var a=Ge(e,r),i=a[1],s=a[2];if(i>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Dr=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Tr=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ze=function(e,t){return e==="v"?Pr(t):Or(t)},Ge=function(e,t){return e==="v"?Dr(t):Tr(t)},Ir=function(e,t){return e==="h"&&t==="rtl"?-1:1},Lr=function(e,t,n,r,o){var a=Ir(e,window.getComputedStyle(t).direction),i=a*r,s=n.target,f=t.contains(s),l=!1,d=i>0,h=0,p=0;do{if(!s)break;var m=Ge(e,s),M=m[0],u=m[1],y=m[2],g=u-y-a*M;(M||g)&&Ze(e,s)&&(h+=g,p+=M);var E=s.parentNode;s=E&&E.nodeType===Node.DOCUMENT_FRAGMENT_NODE?E.host:E}while(!f&&s!==document.body||f&&(t.contains(s)||t===s));return(d&&(o&&Math.abs(h)<1||!o&&i>h)||!d&&(o&&Math.abs(p)<1||!o&&-i>p))&&(l=!0),l},V=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Re=function(e){return[e.deltaX,e.deltaY]},Ae=function(e){return e&&"current"in e?e.current:e},$r=function(e,t){return e[0]===t[0]&&e[1]===t[1]},jr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Fr=0,$=[];function Wr(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState(Fr++)[0],a=c.useState(Ve)[0],i=c.useRef(e);c.useEffect(function(){i.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var u=sr([e.lockRef.current],(e.shards||[]).map(Ae),!0).filter(Boolean);return u.forEach(function(y){return y.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),u.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=c.useCallback(function(u,y){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!i.current.allowPinchZoom;var g=V(u),E=n.current,b="deltaX"in u?u.deltaX:E[0]-g[0],C="deltaY"in u?u.deltaY:E[1]-g[1],_,x=u.target,w=Math.abs(b)>Math.abs(C)?"h":"v";if("touches"in u&&w==="h"&&x.type==="range")return!1;var R=Se(w,x);if(!R)return!0;if(R?_=w:(_=w==="v"?"h":"v",R=Se(w,x)),!R)return!1;if(!r.current&&"changedTouches"in u&&(b||C)&&(r.current=_),!_)return!0;var W=r.current||_;return Lr(W,y,u,W==="h"?b:C,!0)},[]),f=c.useCallback(function(u){var y=u;if(!(!$.length||$[$.length-1]!==a)){var g="deltaY"in y?Re(y):V(y),E=t.current.filter(function(_){return _.name===y.type&&(_.target===y.target||y.target===_.shadowParent)&&$r(_.delta,g)})[0];if(E&&E.should){y.cancelable&&y.preventDefault();return}if(!E){var b=(i.current.shards||[]).map(Ae).filter(Boolean).filter(function(_){return _.contains(y.target)}),C=b.length>0?s(y,b[0]):!i.current.noIsolation;C&&y.cancelable&&y.preventDefault()}}},[]),l=c.useCallback(function(u,y,g,E){var b={name:u,delta:y,target:g,should:E,shadowParent:zr(g)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(C){return C!==b})},1)},[]),d=c.useCallback(function(u){n.current=V(u),r.current=void 0},[]),h=c.useCallback(function(u){l(u.type,Re(u),u.target,s(u,e.lockRef.current))},[]),p=c.useCallback(function(u){l(u.type,V(u),u.target,s(u,e.lockRef.current))},[]);c.useEffect(function(){return $.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",f,L),document.addEventListener("touchmove",f,L),document.addEventListener("touchstart",d,L),function(){$=$.filter(function(u){return u!==a}),document.removeEventListener("wheel",f,L),document.removeEventListener("touchmove",f,L),document.removeEventListener("touchstart",d,L)}},[]);var m=e.removeScrollBar,M=e.inert;return c.createElement(c.Fragment,null,M?c.createElement(a,{styles:jr(o)}):null,m?c.createElement(Rr,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function zr(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Br=yr(He,Wr);var Ye=c.forwardRef(function(e,t){return c.createElement(ee,S({},e,{ref:t,sideCar:Br}))});Ye.classNames=ee.classNames;const Ur=Ye;var qr=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},j=new WeakMap,K=new WeakMap,Z={},le=0,Xe=function(e){return e&&(e.host||Xe(e.parentNode))},Hr=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Xe(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Vr=function(e,t,n,r){var o=Hr(t,Array.isArray(e)?e:[e]);Z[n]||(Z[n]=new WeakMap);var a=Z[n],i=[],s=new Set,f=new Set(o),l=function(h){!h||s.has(h)||(s.add(h),l(h.parentNode))};o.forEach(l);var d=function(h){!h||f.has(h)||Array.prototype.forEach.call(h.children,function(p){if(s.has(p))d(p);else try{var m=p.getAttribute(r),M=m!==null&&m!=="false",u=(j.get(p)||0)+1,y=(a.get(p)||0)+1;j.set(p,u),a.set(p,y),i.push(p),u===1&&M&&K.set(p,!0),y===1&&p.setAttribute(n,"true"),M||p.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",p,g)}})};return d(t),s.clear(),le++,function(){i.forEach(function(h){var p=j.get(h)-1,m=a.get(h)-1;j.set(h,p),a.set(h,m),p||(K.has(h)||h.removeAttribute(r),K.delete(h)),m||h.removeAttribute(n)}),le--,le||(j=new WeakMap,j=new WeakMap,K=new WeakMap,Z={})}},Kr=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||qr(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),Vr(r,o,n,"aria-hidden")):function(){return null}},te="Dialog",[Qe,la]=Le(te),[Zr,N]=Qe(te),Je=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,s=c.useRef(null),f=c.useRef(null),[l,d]=jn({prop:r,defaultProp:o??!1,onChange:a,caller:te});return k.jsx(Zr,{scope:t,triggerRef:s,contentRef:f,contentId:re(),titleId:re(),descriptionId:re(),open:l,onOpenChange:d,onOpenToggle:c.useCallback(()=>d(h=>!h),[d]),modal:i,children:n})};Je.displayName=te;var et="DialogTrigger",Gr=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(et,n),a=A(t,o.triggerRef);return k.jsx(P.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":pe(o.open),...r,ref:a,onClick:D(e.onClick,o.onOpenToggle)})});Gr.displayName=et;var he="DialogPortal",[Yr,tt]=Qe(he,{forceMount:void 0}),nt=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=N(he,t);return k.jsx(Yr,{scope:t,forceMount:n,children:c.Children.map(r,i=>k.jsx(J,{present:n||a.open,children:k.jsx(Be,{asChild:!0,container:o,children:i})}))})};nt.displayName=he;var X="DialogOverlay",rt=c.forwardRef((e,t)=>{const n=tt(X,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=N(X,e.__scopeDialog);return a.modal?k.jsx(J,{present:r||a.open,children:k.jsx(Qr,{...o,ref:t})}):null});rt.displayName=X;var Xr=z("DialogOverlay.RemoveScroll"),Qr=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(X,n);return k.jsx(Ur,{as:Xr,allowPinchZoom:!0,shards:[o.contentRef],children:k.jsx(P.div,{"data-state":pe(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),I="DialogContent",ot=c.forwardRef((e,t)=>{const n=tt(I,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=N(I,e.__scopeDialog);return k.jsx(J,{present:r||a.open,children:a.modal?k.jsx(Jr,{...o,ref:t}):k.jsx(eo,{...o,ref:t})})});ot.displayName=I;var Jr=c.forwardRef((e,t)=>{const n=N(I,e.__scopeDialog),r=c.useRef(null),o=A(t,n.contentRef,r);return c.useEffect(()=>{const a=r.current;if(a)return Kr(a)},[]),k.jsx(at,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:D(e.onCloseAutoFocus,a=>{var i;a.preventDefault(),(i=n.triggerRef.current)==null||i.focus()}),onPointerDownOutside:D(e.onPointerDownOutside,a=>{const i=a.detail.originalEvent,s=i.button===0&&i.ctrlKey===!0;(i.button===2||s)&&a.preventDefault()}),onFocusOutside:D(e.onFocusOutside,a=>a.preventDefault())})}),eo=c.forwardRef((e,t)=>{const n=N(I,e.__scopeDialog),r=c.useRef(!1),o=c.useRef(!1);return k.jsx(at,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var i,s;(i=e.onCloseAutoFocus)==null||i.call(e,a),a.defaultPrevented||(r.current||(s=n.triggerRef.current)==null||s.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var f,l;(f=e.onInteractOutside)==null||f.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=a.target;((l=n.triggerRef.current)==null?void 0:l.contains(i))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),at=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,s=N(I,n),f=c.useRef(null),l=A(t,f);return cr(),k.jsxs(k.Fragment,{children:[k.jsx(We,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:k.jsx(je,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":pe(s.open),...i,ref:l,onDismiss:()=>s.onOpenChange(!1)})}),k.jsxs(k.Fragment,{children:[k.jsx(no,{titleId:s.titleId}),k.jsx(oo,{contentRef:f,descriptionId:s.descriptionId})]})]})}),ve="DialogTitle",ct=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(ve,n);return k.jsx(P.h2,{id:o.titleId,...r,ref:t})});ct.displayName=ve;var st="DialogDescription",to=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(st,n);return k.jsx(P.p,{id:o.descriptionId,...r,ref:t})});to.displayName=st;var it="DialogClose",ut=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(it,n);return k.jsx(P.button,{type:"button",...r,ref:t,onClick:D(e.onClick,()=>o.onOpenChange(!1))})});ut.displayName=it;function pe(e){return e?"open":"closed"}var lt="DialogTitleWarning",[da,dt]=Dn(lt,{contentName:I,titleName:ve,docsSlug:"dialog"}),no=({titleId:e})=>{const t=dt(lt),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ro="DialogDescriptionWarning",oo=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dt(ro).contentName}}.`;return c.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},fa=Je,ha=nt,va=rt,pa=ot,ya=ct,ma=ut,ao=c.createContext(void 0);function ga(e){const t=c.useContext(ao);return e||t||"ltr"}function ka(e){const t=e+"CollectionProvider",[n,r]=Le(t),[o,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=u=>{const{scope:y,children:g}=u,E=T.useRef(null),b=T.useRef(new Map).current;return k.jsx(o,{scope:y,itemMap:b,collectionRef:E,children:g})};i.displayName=t;const s=e+"CollectionSlot",f=z(s),l=T.forwardRef((u,y)=>{const{scope:g,children:E}=u,b=a(s,g),C=A(y,b.collectionRef);return k.jsx(f,{ref:C,children:E})});l.displayName=s;const d=e+"CollectionItemSlot",h="data-radix-collection-item",p=z(d),m=T.forwardRef((u,y)=>{const{scope:g,children:E,...b}=u,C=T.useRef(null),_=A(y,C),x=a(d,g);return T.useEffect(()=>(x.itemMap.set(C,{ref:C,...b}),()=>void x.itemMap.delete(C))),k.jsx(p,{[h]:"",ref:_,children:E})});m.displayName=d;function M(u){const y=a(e+"CollectionConsumer",u);return T.useCallback(()=>{const E=y.collectionRef.current;if(!E)return[];const b=Array.from(E.querySelectorAll(`[${h}]`));return Array.from(y.itemMap.values()).sort((x,w)=>b.indexOf(x.ref.current)-b.indexOf(w.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:i,Slot:l,ItemSlot:m},M,r]}export{mo as $,uo as A,ho as B,pa as C,ka as D,_o as E,xo as F,So as G,Ao as H,Oo as I,jn as J,re as K,To as L,Io as M,Ro as N,va as O,Wo as P,Bo as Q,fa as R,so as S,ea as T,na as U,Mo as V,Yo as W,sa as X,ia as Y,ua as Z,bo as _,P as a,No as a0,Po as a1,Qo as a2,jo as a3,Kr as a4,cr as a5,Ur as a6,We as a7,je as a8,Be as a9,z as aa,ko as ab,go as ac,Eo as ad,po as ae,Jo as af,Ko as ag,Go as ah,Zo as ai,io as aj,wo as ak,Do as al,Fo as am,qo as an,ca as ao,oa as ap,aa as aq,zo as b,ma as c,ya as d,ha as e,Le as f,ga as g,J as h,D as i,k as j,U as k,B as l,$o as m,Uo as n,Ho as o,ra as p,vo as q,fo as r,Vo as s,lo as t,A as u,yo as v,Xo as w,ta as x,Co as y,Lo as z};
