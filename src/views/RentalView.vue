<template>
  <div class="w-11/12 mx-auto">
    <h1 class="text-3xl font-bold mb-6">{{ $t('my_rentals') }}</h1>
    <div class="">
    <div v-if="bookStore.rentals.length === 0" class="text-center text-gray-500">
      {{ $t('no_rentals') }}
    </div>
    <div v-else class=" md:w-11/12 grid grid-cols-1 md:grid-cols-3  gap-28">
      <div 
        v-for="rental in bookStore.rentals" 
        :key="rental.id" 
        class="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
      >
        <p>{{ $t('book_id') }}: {{ rental.bookId }}</p>
        
        <p>{{ $t('rental_date') }}: {{ rental.rentalDate.toLocaleDateString() }}</p>
        <p>{{ $t('return_date') }}: {{ rental.returnDate.toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useBookStore } from '@/stores/bookStore'

const bookStore = useBookStore()
</script>