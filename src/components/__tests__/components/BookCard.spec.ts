import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import BookCard from '../../../components/books/BookCard.vue'

// Mock das traduções
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      rent: 'Rent',
      unavailable: 'Unavailable',
      confirm_rental_title: 'Confirm Rental',
      confirm_rental_message: 'Do you want to rent {title}?'
    }
  }
})

// Mock do router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/book/:id',
      name: 'BookDetails',
      component: {} // Componente mock
    }
  ]
})

describe('BookCard', () => {
  const mockBook = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    price: 29.99,
    coverUrl: 'test-cover.jpg',
    available: true
  }

  const mountComponent = () => {
    return mount(BookCard, {
      props: {
        book: mockBook
      },
      global: {
        plugins: [router, i18n]
      }
    })
  }

  it('deve renderizar as informações do livro corretamente', () => {
    const wrapper = mountComponent()
    
    expect(wrapper.find('h3').text()).toBe('Test Book')
    expect(wrapper.find('p').text()).toBe('Test Author')
    expect(wrapper.find('.text-green-600').text()).toBe('$29.99')
    expect(wrapper.find('img').attributes('src')).toBe('test-cover.jpg')
    expect(wrapper.find('img').attributes('alt')).toBe('Test Book')
  })

  it('deve mostrar botão de alugar quando o livro está disponível', () => {
    const wrapper = mountComponent()
    const button = wrapper.find('button')
    
    expect(button.text()).toBe('Rent')
    expect(button.attributes('disabled')).toBeUndefined()
  })

  it('deve mostrar botão indisponível quando o livro não está disponível', async () => {
    const wrapper = mount(BookCard, {
      props: {
        book: { ...mockBook, available: false }
      },
      global: {
        plugins: [router, i18n]
      }
    })
    
    const button = wrapper.find('button')
    expect(button.text()).toBe('Unavailable')
    expect(button.attributes('disabled')).toBeDefined()
  })

  it('deve navegar para os detalhes do livro quando o card for clicado', async () => {
    const wrapper = mountComponent()
    const pushSpy = vi.spyOn(router, 'push')
    
    await wrapper.trigger('click')
    
    expect(pushSpy).toHaveBeenCalledWith({
      name: 'BookDetails',
      params: { id: 1 }
    })
  })

  it('deve emitir evento show-modal com dados corretos quando o botão de alugar for clicado', async () => {
    const wrapper = mountComponent()
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(wrapper.emitted('show-modal')).toBeTruthy()
    expect(wrapper.emitted('show-modal')[0][0]).toEqual({
      title: 'Confirm Rental',
      message: 'Do you want to rent Test Book?',
      book: mockBook
    })
  })
})