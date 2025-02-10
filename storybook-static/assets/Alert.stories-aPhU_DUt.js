import{u as o}from"./vue-i18n-HSqjXFe5.js";import{d as C,r as p,c as w,a as v,b as x,T as I,o as h,e as $,f as S,n as b,t as P}from"./vue.esm-bundler-DX46CzUY.js";const s=C({__name:"Alert",setup(r,{expose:t}){const e=p(!1),i=p(""),d=p("success"),f=(g,A="success")=>{i.value=g,d.value=A,e.value=!0,setTimeout(()=>{e.value=!1},3e3)},_=w(()=>{switch(d.value){case"success":return"bg-green-500 text-white";case"error":return"bg-red-500 text-white";case"warning":return"bg-yellow-500 text-white";default:return"bg-black text-white"}});return t({showAlert:f}),(g,A)=>(h(),v(I,{"enter-active-class":"transition-transform duration-500 ease-out z-10","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"absolute duration-[0.49s]",mode:"default"},{default:x(()=>[e.value?(h(),$("div",{key:0,class:b([_.value,"fixed top-4 right-4 p-4 rounded shadow-lg z-50"])},P(i.value),3)):S("",!0)]),_:1}))}});s.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},expose:[{name:"showAlert"}],sourceFiles:["C:/Projetos/snowman/src/components/common/Alert.vue"]};const y={title:"Components/Common/Alert",component:s},a={render:r=>({components:{Alert:s},setup(){const{t,locale:e}=o();return e.value="pt",{args:r,t}},template:'<Alert ref="alertComponent" />',mounted(){this.$refs.alertComponent.showAlert(this.t("rental_success_message"),"success")}})},n={render:r=>({components:{Alert:s},setup(){const{t,locale:e}=o();return e.value="en",{args:r,t}},template:'<Alert ref="alertComponent" />',mounted(){this.$refs.alertComponent.showAlert(this.t("rental_success_message"),"success")}})},l={render:r=>({components:{Alert:s},setup(){const{t,locale:e}=o();return e.value="pt",{args:r,t}},template:'<Alert ref="alertComponent" />',mounted(){this.$refs.alertComponent.showAlert(this.t("rental_failed_message"),"error")}})},c={render:r=>({components:{Alert:s},setup(){const{t,locale:e}=o();return e.value="en",{args:r,t}},template:'<Alert ref="alertComponent" />',mounted(){this.$refs.alertComponent.showAlert(this.t("rental_failed_message"),"error")}})},u={render:r=>({components:{Alert:s},setup(){const{t,locale:e}=o();return e.value="pt",{args:r,t}},template:'<Alert ref="alertComponent" />',mounted(){this.$refs.alertComponent.showAlert(this.t("rental_cancelled_message"),"warning")}})},m={render:r=>({components:{Alert:s},setup(){const{t,locale:e}=o();return e.value="en",{args:r,t}},template:'<Alert ref="alertComponent" />',mounted(){this.$refs.alertComponent.showAlert(this.t("rental_cancelled_message"),"warning")}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
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
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_success_message'), 'success');
    }
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
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
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_success_message'), 'success');
    }
  })
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
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
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_failed_message'), 'error');
    }
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
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
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_failed_message'), 'error');
    }
  })
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
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
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_cancelled_message'), 'warning');
    }
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
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
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_cancelled_message'), 'warning');
    }
  })
}`,...m.parameters?.docs?.source}}};const z=["SucessoAlertaPortuguês","SucessoAlertaInglês","ErroAlertaPortuguês","ErroAlertaInglês","AtençãoAlertaPortuguês","AtençãoAlertaInglês"];export{m as AtençãoAlertaInglês,u as AtençãoAlertaPortuguês,c as ErroAlertaInglês,l as ErroAlertaPortuguês,n as SucessoAlertaInglês,a as SucessoAlertaPortuguês,z as __namedExportsOrder,y as default};
