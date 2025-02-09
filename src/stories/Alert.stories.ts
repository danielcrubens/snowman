import type { Meta, StoryObj } from '@storybook/vue3';
import { useI18n } from 'vue-i18n';
import Alert from '@/components/common/Alert.vue';

const meta = {
  title: 'Components/Common/Alert',
  component: Alert,
/*   tags: ['autodocs'], */
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SucessoAlertaPortuguês: Story = {
  render: (args) => ({
    components: { Alert },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'pt';
      return { args, t };
    },
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_success_message'), 'success');
    },
  }),
};

export const SucessoAlertaInglês: Story = {
  render: (args) => ({
    components: { Alert },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'en';
      return { args, t };
    },
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_success_message'), 'success');
    },
  }),
};

export const ErroAlertaPortuguês: Story = {
  render: (args) => ({
    components: { Alert },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'pt';
      return { args, t };
    },
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_failed_message'), 'error');
    },
  }),
};

export const ErroAlertaInglês: Story = {
  render: (args) => ({
    components: { Alert },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'en';
      return { args, t };
    },
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_failed_message'), 'error');
    },
  }),
};

export const AtençãoAlertaPortuguês: Story = {
  render: (args) => ({
    components: { Alert },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'pt';
      return { args, t };
    },
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_cancelled_message'), 'warning');
    },
  }),
};

export const AtençãoAlertaInglês: Story = {
  render: (args) => ({
    components: { Alert },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'en';
      return { args, t };
    },
    template: '<Alert ref="alertComponent" />',
    mounted() {
      this.$refs.alertComponent.showAlert(this.t('rental_cancelled_message'), 'warning');
    },
  }),
};