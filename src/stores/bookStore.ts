import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Book } from '@/types/Book'
import type { Rental } from '@/types/Rental'

import { useMockApiService } from '@/services/mockApiService'

export const useBookStore = defineStore('books', () => {
  const books = ref<Book[]>([])
  const rentals = ref<Rental[]>([])
  const { getBooks, rentBook: apiRentBook } = useMockApiService()

  // Buscar livros quando a store for inicializada
  const initializeBooks = async () => {
    try {
      const fetchedBooks = await getBooks()
      books.value = fetchedBooks
    } catch (error) {
      console.error('Falha ao inicializar os livros:', error)
      books.value = []
    }
  }

  const availableBooks = computed(() => 
    books.value.filter(book => book.available)
  )

  const processBookRental = async (bookId: string, userId: string) => {
    try {
      // Primeiro, verificar se o livro existe e está disponível
      const book = books.value.find(b => b.id === bookId)
      if (!book) {
        throw new Error('Livro não encontrado')
      }
      if (!book.available) {
        throw new Error('O livro não está disponível')
      }

      const rental = await apiRentBook(bookId, userId)
      rentals.value.push(rental)
      
      // Atualizar a disponibilidade do livro
      const bookIndex = books.value.findIndex(b => b.id === bookId)
      if (bookIndex !== -1) {
        books.value[bookIndex].available = false
      }

      return rental
    } catch (error) {
      console.error('Falha no aluguel:', error)
      throw error
    }
  }

  // Inicializar os livros quando a store for criada
  initializeBooks()

  return {
    books,
    rentals,
    availableBooks,
    processBookRental,
    initializeBooks
  }
})