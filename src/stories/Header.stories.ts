import type { Meta, StoryObj } from '@storybook/vue3';
import { useI18n } from 'vue-i18n';
import Header from '@/components/layout/Header.vue';

const meta = {
  title: 'Components/Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => ({
      template: '<div class="min-h-[100px]"><story/></div>',
    }),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VersãoPortuguês: Story = {
  decorators: [
    () => ({
      template: '<div><story/></div>',
      setup() {
        const { locale } = useI18n();
        locale.value = 'pt';
        return {};
      },
    }),
  ],
};

export const VersãoInglês: Story = {
  decorators: [
    () => ({
      template: '<div><story/></div>',
      setup() {
        const { locale } = useI18n();
        locale.value = 'en';
        return {};
      },
    }),
  ],
};