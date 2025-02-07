import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Book, Rental } from '@/types'
import { useMockApiService } from '@/services/mockApiService'

export const useBookStore = defineStore('books', () => {
  // Initialize the books array as a ref
  const books = ref<Book[]>([])
  const rentals = ref<Rental[]>([])
  const { getBooks, rentBook: apiRentBook } = useMockApiService()

  // Fetch books when store is initialized
  const initializeBooks = async () => {
    try {
      const fetchedBooks = await getBooks()
      books.value = fetchedBooks
    } catch (error) {
      console.error('Failed to initialize books:', error)
      books.value = []
    }
  }

  const availableBooks = computed(() => 
    books.value.filter(book => book.available)
  )

  const processBookRental = async (bookId: string, userId: string) => {
    try {
      // First check if the book exists and is available
      const book = books.value.find(b => b.id === bookId)
      if (!book) {
        throw new Error('Book not found')
      }
      if (!book.available) {
        throw new Error('Book is not available')
      }

      const rental = await apiRentBook(bookId, userId)
      rentals.value.push(rental)
      
      // Update book availability
      const bookIndex = books.value.findIndex(b => b.id === bookId)
      if (bookIndex !== -1) {
        books.value[bookIndex].available = false
      }

      return rental
    } catch (error) {
      console.error('Rental failed:', error)
      throw error
    }
  }

  // Initialize books when store is created
  initializeBooks()

  return {
    books,
    rentals,
    availableBooks,
    processBookRental,
    initializeBooks
  }
})