<template>
  <div v-if="book" class="w-11/12 lg:w-11/12 mx-auto md:p-4">
    <div class="flex flex-col md:flex-row">
      <img 
        :src="book.coverUrl" 
        :alt="book.title" 
        class="md:w-60  w-7/12  md:mr-10 lg:mr-9 xl:mr-10 object-cover"
      >
      <div class="mt-8 lg:mt-0">
        <h1 class="text-xl font-bold">{{ book.title }}</h1>
        <p class="text-gray-600 mb-4">{{ book.author }}</p>
        <p class="mb-4">{{ book.description }}</p>
        <div class="flex items-center mb-4">
          <span class="text-green-600 mr-4 text-xl">${{ book.price.toFixed(2) }}</span>
          <span 
            :class="book.available ? 'text-green-500' : 'text-red-500'"
            class="text-sm"
          >
            {{ book.available ? $t('available') : $t('unavailable') }}
          </span>
        </div>
        <button 
          :disabled="!book.available"
          class="mt-4 px-6 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {{ book.available ? $t('rent_book') : $t('unavailable') }}
        </button>
      </div>
    </div>
  </div>
  <div v-else-if="loading" class="text-center">
    Loading...
  </div>
  <div v-else class="text-center text-gray-500">
    {{ $t('book_not_found') }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMockApiService } from '@/services/mockApiService'
import { useI18n } from 'vue-i18n'
import type { Book } from '@/types/Book'
const route = useRoute()
const { getBookById } = useMockApiService()

const { t } = useI18n()

const book = ref<Book | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const bookId = route.params.id as string
    console.log('Fetching book with ID:', bookId)
    
    const fetchedBook = await getBookById(bookId)
    console.log('Fetched book:', fetchedBook)
    
    book.value = fetchedBook
    loading.value = false
  } catch (err) {
    console.error('Error fetching book details:', err)
    error.value = err instanceof Error ? err.message : 'Unknown error'
    loading.value = false
  }
})
</script>