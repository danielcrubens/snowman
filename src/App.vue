<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
    <Alert ref="alertComponent" />
    <Modal ref="modalComponent" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Alert from '@/components/common/Alert.vue'
import Modal from '@/components/common/Modal.vue'
import type { AlertType } from '@/types/Notification'

const { t } = useI18n()
const alertComponent = ref<InstanceType<typeof Alert> | null>(null)
const modalComponent = ref<InstanceType<typeof Modal> | null>(null)

const showAlert = (message: string, type: AlertType = 'success') => {
  if (alertComponent.value) {
    alertComponent.value.showAlert(message, type)
  }
}

const showModal = async (title: string, message: string, bookTitle?: string): Promise<boolean> => {
  if (modalComponent.value) {
    return modalComponent.value.open(title, message, bookTitle)
  }
  return false
}

provide('showAlert', showAlert)
provide('showModal', showModal)
</script>