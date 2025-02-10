import{u as g}from"./vue-i18n-HSqjXFe5.js";import{l as v,d as _,r as C,e as h,g as s,y as m,b as y,f as I,u as N,L as V,o as f,h as b,t as w}from"./vue.esm-bundler-DX46CzUY.js";/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=({size:e,strokeWidth:r=2,absoluteStrokeWidth:t,color:n,iconNode:l,name:a,class:o,...c},{slots:i})=>v("svg",{...d,width:e||d.width,height:e||d.height,stroke:n||d.stroke,"stroke-width":t?Number(r)*24/Number(e):r,class:["lucide",`lucide-${$(a??"icon")}`],...c},[...l.map(x=>v(...x)),...i.default?[i.default()]:[]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,r)=>(t,{slots:n})=>v(B,{...t,iconNode:r,name:e},n);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=L("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),P={class:"flex justify-center items-center lg:py-11 py-24 relative"},j={class:"bg-dark text-white px-6 py-2 rounded-full flex items-center shadow-lg"},E={class:"flex space-x-6"},S={class:"absolute top-4 right-4"},A={key:0,class:"absolute right-0 mt-2 w-12 bg-white text-dark shadow-lg rounded-lg py-2"},k=_({__name:"Header",setup(e){const{locale:r}=g(),t=C(!1),n=()=>{t.value=!t.value},l=a=>{r.value=a,t.value=!1};return(a,o)=>{const c=V("router-link");return f(),h("header",P,[s("nav",j,[o[2]||(o[2]=s("h1",{class:"text-lg font-bold mr-6"},"iBook",-1)),s("div",E,[m(c,{to:"/",class:"relative px-3 py-1 transition duration-300 hover:opacity-80","active-class":"border-b-2 border-white"},{default:y(()=>[b(w(a.$t("catalog")),1)]),_:1}),m(c,{to:"/rentals",class:"relative px-3 py-1 transition duration-300 hover:opacity-80","active-class":"border-b-2 border-white"},{default:y(()=>[b(w(a.$t("my_rentals")),1)]),_:1})])]),s("div",S,[s("button",{onClick:n,class:"p-2 bg-dark rounded-full hover:bg-dark/90 transition"},[m(N(H),{size:20,class:"text-white"})]),t.value?(f(),h("ul",A,[s("li",{class:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:o[0]||(o[0]=i=>l("en"))}," En "),s("li",{class:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:o[1]||(o[1]=i=>l("pt"))}," Pt ")])):I("",!0)])])}}});k.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},sourceFiles:["C:/Projetos/snowman/src/components/layout/Header.vue"]};const M={title:"Components/Layout/Header",component:k,parameters:{layout:"fullscreen"},decorators:[()=>({template:'<div class="min-h-[100px]"><story/></div>'})]},u={decorators:[()=>({template:"<div><story/></div>",setup(){const{locale:e}=g();return e.value="pt",{}}})]},p={decorators:[()=>({template:"<div><story/></div>",setup(){const{locale:e}=g();return e.value="en",{}}})]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [() => ({
    template: '<div><story/></div>',
    setup() {
      const {
        locale
      } = useI18n();
      locale.value = 'pt';
      return {};
    }
  })]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [() => ({
    template: '<div><story/></div>',
    setup() {
      const {
        locale
      } = useI18n();
      locale.value = 'en';
      return {};
    }
  })]
}`,...p.parameters?.docs?.source}}};const O=["VersãoPortuguês","VersãoInglês"];export{p as VersãoInglês,u as VersãoPortuguês,O as __namedExportsOrder,M as default};
