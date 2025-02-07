<template>
  <Transition enter-active-class="transition-transform duration-500 ease-out z-10" enter-from-class="translate-x-full"
    enter-to-class="translate-x-0" leave-active-class="absolute duration-[0.49s]" mode="default">
    <div v-if="visible" :class="alertClasses" class="fixed top-4 right-4 p-4 rounded shadow-lg z-50">
      {{ message }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AlertType } from '@/types/Notification'


const visible = ref(false)
const message = ref('')
const type = ref<AlertType>('success')

const showAlert = (text: string, alertType: AlertType = 'success') => {
  message.value = text
  type.value = alertType
  visible.value = true

  setTimeout(() => {
    visible.value = false
  }, 3000)
}

const alertClasses = computed(() => {
  switch (type.value) {
    case 'success': return 'bg-green-500 text-white'
    case 'error': return 'bg-red-500 text-white'
    case 'warning': return 'bg-yellow-500 text-white'
    default: return 'bg-black text-white'
  }
})

defineExpose({ showAlert })
</script>