<template>
  <Transition name="modal">
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black opacity-50" @click="close(false)"></div>
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative z-10">
        <h2 class="text-xl font-bold mb-4">{{ currentTitle }}</h2>
        <p class="mb-4">{{ currentMessage }} <span class="font-bold"> {{ bookTitle }}</span></p>
        <div class="flex justify-around space-x-2">
          <button
            @click="closeWithDebug(false)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {{ $t('cancel') }}
          </button>
          <button
            @click="closeWithDebug(true)"
            class="px-4 py-2 bg-blue text-white rounded hover:bg-blue-600"
          >
            {{ $t('confirm') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isVisible = ref(false)
const currentTitle = ref('')
const currentMessage = ref('')
const bookTitle = ref('')
const resolvePromise = ref<((value: boolean) => void) | null>(null)

const open = (title: string, message: string, bookTitleParam?: string) => {
  console.group('Modal Open Debug')
  console.log('Opening modal with parameters:', {
    title,
    message,
    bookTitle: bookTitleParam
  })
  
  currentTitle.value = title
  currentMessage.value = message
  bookTitle.value = bookTitleParam || ''
  isVisible.value = true

  return new Promise<boolean>((resolve) => {
    resolvePromise.value = resolve
    console.log('Promise created and stored in resolvePromise')
    console.groupEnd()
  })
}

const closeWithDebug = (confirmed: boolean) => {
  console.group('Modal Close Debug')
  console.log('Close method called with:', {
    confirmed,
    currentTitle: currentTitle.value,
    currentMessage: currentMessage.value,
    bookTitle: bookTitle.value
  })

  isVisible.value = false
  
  if (resolvePromise.value) {
    console.log('Resolving promise with:', confirmed)
    resolvePromise.value(confirmed)
    resolvePromise.value = null
    console.log('Promise resolved and reset')
  } else {
    console.warn('No promise to resolve!')
  }

  console.groupEnd()
}

const close = closeWithDebug

defineExpose({ open, close })
</script>