import{u as i}from"./vue-i18n-HSqjXFe5.js";import{j as w,d as _,e as B,g as r,k as p,t,o as V}from"./vue.esm-bundler-DX46CzUY.js";/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */var m;(function(o){o.pop="pop",o.push="push"})(m||(m={}));var u;(function(o){o.back="back",o.forward="forward",o.unknown=""})(u||(u={}));var b;(function(o){o[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated"})(b||(b={}));const y=Symbol("");function C(){return w(y)}const x=["src","alt"],I={class:"text-lg text-dark font-bold"},U={class:"text-gray-600"},G={class:"mt-2 flex justify-between items-center"},j={class:"text-green-600"},S=["disabled"],h=_({__name:"BookCard",props:{book:{}},emits:["rent","show-modal"],setup(o,{emit:k}){const l=o,v=C(),{t:c}=i(),f=k,d=()=>{v.push({name:"BookDetails",params:{id:l.book.id}})},g=()=>{f("show-modal",{title:c("confirm_rental_title"),message:c("confirm_rental_message",{title:l.book.title}),book:l.book})};return(e,D)=>(V(),B("div",{class:"book-card p-4 border rounded-lg shadow hover:shadow-md transition cursor-pointer",onClick:d},[r("img",{src:e.book.coverUrl,alt:e.book.title,class:"w-full h-48 object-cover mb-4",onClick:p(d,["stop"])},null,8,x),r("h3",I,t(e.book.title),1),r("p",U,t(e.book.author),1),r("div",G,[r("span",j,"$"+t(e.book.price.toFixed(2)),1),r("button",{onClick:p(g,["stop"]),disabled:!e.book.available,class:"px-6 py-2 bg-blue text-white rounded disabled:opacity-50"},t(e.book.available?e.$t("rent"):e.$t("unavailable")),9,S)])]))}});h.__docgenInfo={exportName:"default",displayName:"BookCard",description:"",tags:{},props:[{name:"book",required:!0,type:{name:"Book"}}],events:[{name:"rent"},{name:"show-modal"}],sourceFiles:["C:/Projetos/snowman/src/components/books/BookCard.vue"]};const z={title:"Components/Books/BookCard",component:h,args:{book:{id:"1",title:"Meteor Falls",author:"John Doe",coverUrl:"https://i.imgur.com/Uw86zzN_d.webp?maxwidth=760&fidelity=grand",price:29.99,available:!0,description:"Um livro sobre Vectober por Bárbara Ghirello."}},decorators:[()=>({template:'<div class="max-w-sm mx-auto"><story/></div>'})]},s={decorators:[()=>({template:"<div><story/></div>",setup(){const{locale:o}=i();return o.value="pt",{}}})]},a={decorators:[()=>({template:"<div><story/></div>",setup(){const{locale:o}=i();return o.value="en",{}}})]},n={args:{book:{id:"2",title:"Vectober de Bárbara Ghirello",author:"Bárbara Ghirello",coverUrl:"https://i.imgur.com/rVQA8pp_d.webp?maxwidth=760&fidelity=grand",price:39.99,available:!1,description:"Um livro sobre Vectober por Bárbara Ghirello."}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    book: {
      id: '2',
      title: 'Vectober de Bárbara Ghirello',
      author: 'Bárbara Ghirello',
      coverUrl: 'https://i.imgur.com/rVQA8pp_d.webp?maxwidth=760&fidelity=grand',
      price: 39.99,
      available: false,
      description: 'Um livro sobre Vectober por Bárbara Ghirello.'
    }
  }
}`,...n.parameters?.docs?.source}}};const A=["VersãoPortuguês","VersãoInglês","VersãoIndisponível"];export{n as VersãoIndisponível,a as VersãoInglês,s as VersãoPortuguês,A as __namedExportsOrder,z as default};
