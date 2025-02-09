import type { Meta, StoryObj } from '@storybook/vue3';
import { useI18n } from 'vue-i18n';
import Modal from '@/components/common/Modal.vue';

const meta = {
  title: 'Components/Common/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalPortuguês: Story = {
  render: (args) => ({
    components: { Modal },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'pt';
      return { args, t };
    },
    template: '<Modal ref="modalComponent" />',
    mounted() {
      this.$refs.modalComponent.open(this.t('confirm_rental_title'), this.t('confirm_rental_message', { title: 'Livro Exemplo' }));
    },
  }),
};

export const ModalInglês: Story = {
  render: (args) => ({
    components: { Modal },
    setup() {
      const { t, locale } = useI18n();
      locale.value = 'en';
      return { args, t };
    },
    template: '<Modal ref="modalComponent" />',
    mounted() {
      this.$refs.modalComponent.open(this.t('confirm_rental_title'), this.t('confirm_rental_message', { title: 'Example Book' }));
    },
  }),
};

