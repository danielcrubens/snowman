import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import ConfirmationModal from '../../../components/common/Modal.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  messages: {
    pt: {
      cancel: 'Cancelar',
      confirm: 'Confirmar'
    }
  }
})

describe('ConfirmationModal', () => {
  const createWrapper = () => {
    return mount(ConfirmationModal, {
      global: {
        plugins: [i18n]
      }
    })
  }

  it('deve iniciar com o modal fechado', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.fixed.inset-0').exists()).toBe(false)
  })

  it('deve abrir o modal e mostrar as informações corretas', async () => {
    const wrapper = createWrapper()
    const title = 'Título Teste'
    const message = 'Mensagem Teste'
    const bookTitle = 'Livro Teste'

    wrapper.vm.open(title, message, bookTitle)
    await nextTick()

    expect(wrapper.find('h2').text()).toBe(title)
    expect(wrapper.find('p').text()).toContain(message)
    expect(wrapper.find('p').text()).toContain(bookTitle)
  })

  it('deve retornar true ao confirmar', async () => {
    const wrapper = createWrapper()
    const promise = wrapper.vm.open('Título', 'Mensagem')
    await nextTick()

    const confirmButton = wrapper.find('button.bg-blue')
    await confirmButton.trigger('click')

    const result = await promise
    expect(result).toBe(true)
  })

  it('deve retornar false ao cancelar', async () => {
    const wrapper = createWrapper()
    const promise = wrapper.vm.open('Título', 'Mensagem')
    await nextTick()

    const cancelButton = wrapper.find('button.bg-gray-200')
    await cancelButton.trigger('click')

    const result = await promise
    expect(result).toBe(false)
  })

 
})