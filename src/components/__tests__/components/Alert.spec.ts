import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import AlertComponent from '../../../components/common/Alert.vue'

describe('Alert Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('deve iniciar com o alerta invisível', () => {
    const wrapper = mount(AlertComponent)
    const alert = wrapper.find('div')
    
    expect(alert.exists()).toBe(false)
  })

  it('deve mostrar o alerta com a mensagem correta quando showAlert é chamado', async () => {
    const wrapper = mount(AlertComponent)
    const testMessage = 'Teste de mensagem'
    
    await wrapper.vm.showAlert(testMessage)
    await nextTick()
    
    const alert = wrapper.find('div')
    expect(alert.exists()).toBe(true)
    expect(alert.text()).toBe(testMessage)
  })

  it('deve esconder o alerta após 3 segundos', async () => {
    const wrapper = mount(AlertComponent)
    
    await wrapper.vm.showAlert('Teste')
    await nextTick()
    
    expect(wrapper.find('div').exists()).toBe(true)
    
    vi.advanceTimersByTime(3000)
    await nextTick()
    
    expect(wrapper.find('div').exists()).toBe(false)
  })

  it('deve aplicar classes corretas para alerta do tipo success', async () => {
    const wrapper = mount(AlertComponent)
    
    await wrapper.vm.showAlert('Sucesso', 'success')
    await nextTick()
    
    const alert = wrapper.find('div')
    expect(alert.classes()).toContain('bg-green-500')
    expect(alert.classes()).toContain('text-white')
  })

  it('deve aplicar classes corretas para alerta do tipo error', async () => {
    const wrapper = mount(AlertComponent)
    
    await wrapper.vm.showAlert('Erro', 'error')
    await nextTick()
    
    const alert = wrapper.find('div')
    expect(alert.classes()).toContain('bg-red-500')
    expect(alert.classes()).toContain('text-white')
  })

  it('deve aplicar classes corretas para alerta do tipo warning', async () => {
    const wrapper = mount(AlertComponent)
    
    await wrapper.vm.showAlert('Atenção', 'warning')
    await nextTick()
    
    const alert = wrapper.find('div')
    expect(alert.classes()).toContain('bg-yellow-500')
    expect(alert.classes()).toContain('text-white')
  })

  it('deve aplicar classes padrão quando tipo de alerta é inválido', async () => {
    const wrapper = mount(AlertComponent)
    
    await wrapper.vm.showAlert('Teste', 'invalid-type')
    await nextTick()
    
    const alert = wrapper.find('div')
    expect(alert.classes()).toContain('bg-black')
    expect(alert.classes()).toContain('text-white')
  })
  
  it('deve permitir múltiplas chamadas do showAlert', async () => {
    const wrapper = mount(AlertComponent)
    
    await wrapper.vm.showAlert('Primeira mensagem')
    await nextTick()
    
    expect(wrapper.text()).toBe('Primeira mensagem')
    
    await wrapper.vm.showAlert('Segunda mensagem')
    await nextTick()
    
    expect(wrapper.text()).toBe('Segunda mensagem')
  })
})