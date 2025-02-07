import { ref } from 'vue'
import { useBookStore } from '@/stores/bookStore'
import type { Book } from '@/types/Book'

export const useBookRental = () => {
  const bookStore = useBookStore()
  const isRenting = ref(false)
  const rentalError = ref<string | null>(null)

  const rentBook = async (book: Book) => {
    if (!book) {
      rentalError.value = 'Invalid book data'
      return false
    }

    isRenting.value = true
    rentalError.value = null

    try {
      const userId = 'user-123'
      
      const rental = await bookStore.processBookRental(book.id, userId)
      console.log('Rental successful:', rental)
      
      return true
    } catch (error) {
      console.error('Rental error details:', error)
      rentalError.value = error instanceof Error 
        ? error.message 
        : 'Unknown rental error'
      return false
    } finally {
      isRenting.value = false
    }
  }

  return {
    rentBook,
    isRenting,
    rentalError,
    books: bookStore.books,
    availableBooks: bookStore.availableBooks
  }
}