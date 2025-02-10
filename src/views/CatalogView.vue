<template>
  <div class="w-11/12 mx-auto">
    <h1 class="text-xl md:text-3xl text-dark font-bold mb-6">{{ $t('book_catalog') }}</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">
      {{ error }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
      <BookCard 
        v-for="book in books" 
        :key="book.id" 
        :book="book"
        @rent="handleRent"
        @show-modal="handleShowModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import useMockApiService from '@/services/mockApiService'
import { useBookRental } from '@/composables/useBookRental'
import BookCard from '@/components/books/BookCard.vue'
import { useI18n } from 'vue-i18n'
import type { Book } from '@/types/Book'

const { t } = useI18n()
const { getBooks } = useMockApiService()
const { rentBook } = useBookRental()

const showAlert = inject('showAlert') as (message: string, type: 'success' | 'error' | 'warning') => void
const showModal = inject('showModal') as (title: string, message: string, bookTitle?: string) => Promise<boolean>

const books = ref<Book[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    console.log('Fetching books...')
    const fetchedBooks = await getBooks()
    console.log('Fetched books:', fetchedBooks)
    books.value = fetchedBooks
    loading.value = false
  } catch (err) {
    console.error('Error fetching books:', err)
    error.value = (err as Error).message
    loading.value = false
  }
})

const handleRent = async (book: Book) => {
  const success = await rentBook(book)
  if (success) {
    showAlert(t('rental_success_message', { title: book.title }), 'success') 
  } else {
    showAlert(t('rental_failed_message', { title: book.title }), 'error') 
  }
}

const handleShowModal = async ({ title, message, book }: { title: string, message: string, book: Book }) => {
  const confirmed = await showModal(title, message, book.title)
  if (confirmed) {
    handleRent(book)
  } else {
    showAlert(t('rental_cancelled_message', { title: book.title }), 'warning') 
  }
}
</script>