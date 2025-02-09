import type { Meta, StoryObj } from '@storybook/vue3';
import { useI18n } from 'vue-i18n';
import { createPinia, setActivePinia } from 'pinia';
import RentalView from '@/views/RentalView.vue';
import { useBookStore } from '@/stores/bookStore';

const initializeStore = () => {
  setActivePinia(createPinia());
  const bookStore = useBookStore();
  return bookStore;
};

const meta = {
  title: 'Views/RentalView',
  component: RentalView,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => ({
      template: '<div class="min-h-[100px]"><story/></div>',
      setup() {
        const bookStore = initializeStore();
        bookStore.rentals = [
          {
            id: 1,
            bookId: 'book-1',
            rentalDate: new Date('2024-02-01'),
            returnDate: new Date('2024-02-15')
          },
          {
            id: 2,
            bookId: 'book-2',
            rentalDate: new Date('2024-02-05'),
            returnDate: new Date('2024-02-19')
          }
        ];
        return {};
      }
    }),
  ],
} satisfies Meta<typeof RentalView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VersãoPortuguês: Story = {
  decorators: [
    () => ({
      template: '<div><story/></div>',
      setup() {
        const bookStore = initializeStore();
        bookStore.rentals = [
          {
            id: 1,
            bookId: 'book-1',
            rentalDate: new Date('2024-02-01'),
            returnDate: new Date('2024-02-15')
          }
        ];
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
        const bookStore = initializeStore();
        bookStore.rentals = [
          {
            id: 1,
            bookId: 'book-1',
            rentalDate: new Date('2024-02-01'),
            returnDate: new Date('2024-02-15')
          }
        ];
        const { locale } = useI18n();
        locale.value = 'en';
        return {};
      },
    }),
  ],
};

