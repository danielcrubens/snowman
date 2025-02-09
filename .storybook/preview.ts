import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createI18n } from 'vue-i18n';
import '../src/assets/css/style.css';

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt: {
      catalog: 'Catálogo',
      my_rentals: 'Minhas Locações',
      copyright: '© {year} iBook. Todos os direitos reservados.',
      rent: "Alugar",
      unavailable: "Indisponível",
      book_id: "ID do Livro",
      rental_date: "Data de Aluguel",
      return_date: "Data de Devolução",
      rental_success_message: "Livro alugado com sucesso!",
      rental_failed_message: "Falha ao alugar o livro",
      rental_cancelled_message:"Aluguel cancelado",
      book_not_found: "Livro não encontrado",
      confirm_rental_title: "Confirmar Aluguel",
      confirm_rental_message: "Você deseja alugar o livro",
      cancel: "Cancelar",
      confirm: "Confirmar",
    },
    en: {
      catalog: 'Catalog',
      my_rentals: 'My Rentals',
      copyright: '© {year} iBook. All rights reserved.',
      rent: "Rent",
      unavailable: "Unavailable",
      book_id: "Book ID",
      rental_date: "Rental Date",
      return_date: "Return Date",
      rental_success_message: "Book successfully rented!",
      rental_failed_message: "Failed to rent the book",
      rental_cancelled_message:"Rental canceled",
      book_not_found: "Book not found",
      confirm_rental_title: "Confirm Rental",
      confirm_rental_message: "Do you want to rent the book",
      cancel: "Cancel",
      confirm: "Confirm"


    }
  }
});

setup((app) => {
  app.use(i18n);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


export default preview;