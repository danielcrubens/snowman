import{u as h}from"./vue-i18n-HSqjXFe5.js";import{d as k,r as l,a as w,o as x,b as y,e as $,f as E,g as t,u as P,t as a,h as T,T as B}from"./vue.esm-bundler-DX46CzUY.js";const I={key:0,class:"fixed inset-0 z-50 flex items-center justify-center"},N={class:"bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative z-10"},D={class:"text-xl font-bold mb-4"},V={class:"mb-4"},j={class:"font-bold"},O={class:"flex justify-around space-x-2"},u=k({__name:"Modal",setup(r,{expose:s}){const{t:c}=h(),p=l(!1),g=l(""),f=l(""),v=l(""),i=l(null),M=(e,o,n)=>(console.group("Modal Open Debug"),console.log("Opening modal with parameters:",{title:e,message:o,bookTitle:n}),g.value=e,f.value=o,v.value=n||"",p.value=!0,new Promise(C=>{i.value=C,console.log("Promise created and stored in resolvePromise"),console.groupEnd()})),_=e=>{console.group("Modal Close Debug"),console.log("Close method called with:",{confirmed:e,currentTitle:g.value,currentMessage:f.value,bookTitle:v.value}),p.value=!1,i.value?(console.log("Resolving promise with:",e),i.value(e),i.value=null,console.log("Promise resolved and reset")):console.warn("No promise to resolve!"),console.groupEnd()},b=_;return s({open:M,close:b}),(e,o)=>(x(),w(B,{name:"modal"},{default:y(()=>[p.value?(x(),$("div",I,[t("div",{class:"fixed inset-0 bg-black opacity-50",onClick:o[0]||(o[0]=n=>P(b)(!1))}),t("div",N,[t("h2",D,a(g.value),1),t("p",V,[T(a(f.value)+" ",1),t("span",j,a(v.value),1)]),t("div",O,[t("button",{onClick:o[1]||(o[1]=n=>_(!1)),class:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"},a(e.$t("cancel")),1),t("button",{onClick:o[2]||(o[2]=n=>_(!0)),class:"px-4 py-2 bg-blue text-white rounded hover:bg-blue-600"},a(e.$t("confirm")),1)])])])):E("",!0)]),_:1}))}});u.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"open"},{name:"close"}],sourceFiles:["C:/Projetos/snowman/src/components/common/Modal.vue"]};const L={title:"Components/Common/Modal",component:u},m={render:r=>({components:{Modal:u},setup(){const{t:s,locale:c}=h();return c.value="pt",{args:r,t:s}},template:'<Modal ref="modalComponent" />',mounted(){this.$refs.modalComponent.open(this.t("confirm_rental_title"),this.t("confirm_rental_message",{title:"Livro Exemplo"}))}})},d={render:r=>({components:{Modal:u},setup(){const{t:s,locale:c}=h();return c.value="en",{args:r,t:s}},template:'<Modal ref="modalComponent" />',mounted(){this.$refs.modalComponent.open(this.t("confirm_rental_title"),this.t("confirm_rental_message",{title:"Example Book"}))}})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const {
        t,
        locale
      } = useI18n();
      locale.value = 'pt';
      return {
        args,
        t
      };
    },
    template: '<Modal ref="modalComponent" />',
    mounted() {
      this.$refs.modalComponent.open(this.t('confirm_rental_title'), this.t('confirm_rental_message', {
        title: 'Livro Exemplo'
      }));
    }
  })
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const {
        t,
        locale
      } = useI18n();
      locale.value = 'en';
      return {
        args,
        t
      };
    },
    template: '<Modal ref="modalComponent" />',
    mounted() {
      this.$refs.modalComponent.open(this.t('confirm_rental_title'), this.t('confirm_rental_message', {
        title: 'Example Book'
      }));
    }
  })
}`,...d.parameters?.docs?.source}}};const F=["ModalPortuguês","ModalInglês"];export{d as ModalInglês,m as ModalPortuguês,F as __namedExportsOrder,L as default};
