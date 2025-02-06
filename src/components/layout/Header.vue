<template>
  <header class="flex justify-center items-center lg:py-11 py-24  relative">
      <nav class="bg-dark text-white px-6 py-2 rounded-full flex items-center shadow-lg">
        <h1 class="text-lg font-bold mr-6">iBook</h1>
        <div class="flex space-x-6">
          <router-link to="/" class="relative px-3 py-1 transition duration-300 hover:opacity-80"
            active-class="border-b-2 border-white">
            {{ $t('catalog') }}
          </router-link>
          <router-link to="/rentals" class="relative px-3 py-1 transition duration-300 hover:opacity-80"
            active-class="border-b-2 border-white">
            {{ $t('my_rentals') }}
          </router-link>
        </div>
      </nav>
    <div class="absolute top-4 right-4 ">
      <button @click="toggleDropdown" class="p-2 bg-dark rounded-full hover:bg-dark/90 transition">
        <Globe :size="20" class=" text-white" />
      </button>

      <ul v-if="dropdownOpen" class="absolute right-0 mt-2 w-12 bg-white text-dark shadow-lg rounded-lg py-2">
        <li class="px-4 py-2 cursor-pointer hover:bg-gray-200" @click="setLocale('en')">
          En
        </li>
        <li class="px-4 py-2 cursor-pointer hover:bg-gray-200" @click="setLocale('pt')">
          Pt
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Globe } from 'lucide-vue-next'

const { locale } = useI18n()
const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const setLocale = (lang: string) => {
  locale.value = lang
  dropdownOpen.value = false
}
</script>
