import type { Meta, StoryObj } from '@storybook/vue3';
import { useI18n } from 'vue-i18n';
import BookCard from '@/components/books/BookCard.vue';

const meta = {
  title: 'Components/Books/BookCard',
  component: BookCard,
 
  args: {
    book: {
      id: 1,
      title: 'Meteor Falls',
      author: 'John Doe',
      coverUrl: 'https://i.imgur.com/Uw86zzN_d.webp?maxwidth=760&fidelity=grand',
      price: 29.99,
      available: true
    }
  },

  decorators: [
    () => ({
      template: '<div class="max-w-sm mx-auto"><story/></div>',
    }),
  ],
} satisfies Meta<typeof BookCard>;

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

export const VersãoIndisponível: Story = {
  args: {
    book: {
      id: 2,
      title: 'Vectober de Bárbara Ghirello',
      author: 'Bárbara Ghirello',
      coverUrl: 'https://i.imgur.com/rVQA8pp_d.webp?maxwidth=760&fidelity=grand',
      price: 39.99,
      available: false
      
    }
  },
};