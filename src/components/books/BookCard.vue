<template>
  <div 
    class="book-card p-4 border rounded-lg shadow hover:shadow-md transition cursor-pointer" 
    @click="navigateToBookDetails"
  >
    <img 
      :src="book.coverUrl" 
      :alt="book.title" 
      class="w-full h-48 object-cover mb-4"
      @click.stop="navigateToBookDetails"
    >
    <h3 class="text-lg text-dark font-bold">{{ book.title }}</h3>
    <p class="text-gray-600">{{ book.author }}</p>
    <div class="mt-2 flex justify-between items-center">
      <span class="text-green-600">${{ book.price.toFixed(2) }}</span>
      <button 
        @click.stop="rentBook" 
        :disabled="!book.available"
        class="px-6 py-2 bg-blue text-white rounded disabled:opacity-50"
      >
        {{ book.available ? $t('rent') : $t('unavailable') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Book } from '@/types/Book'

const props = defineProps<{
  book: Book
}>()

const router = useRouter()
const { t } = useI18n()
const emit = defineEmits(['rent', 'show-modal'])

const navigateToBookDetails = () => {
  router.push({ 
    name: 'BookDetails', 
    params: { id: props.book.id } 
  })
}

const rentBook = () => {
  emit('show-modal', {
    title: t('confirm_rental_title'),
    message: t('confirm_rental_message', { title: props.book.title }),
    book: props.book
  })
}
</script>