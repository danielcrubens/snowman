import { describe, it, expect, vi } from 'vitest'
import router from '../../../router'

vi.mock('vue-router', () => ({
  createRouter: vi.fn(() => ({
    options: {
      routes: [
        {
          path: '/',
          name: 'Catalog'
        },
        {
          path: '/rentals',
          name: 'Rentals'
        },
        {
          path: '/book/:id',
          name: 'BookDetails'
        }
      ]
    }
  })),
  createWebHistory: vi.fn()
}))

describe('Router', () => {
  it('deve conter todas as rotas necessárias', () => {
    const routes = router.options.routes
    const paths = routes.map(route => route.path)

    expect(paths).toContain('/')
    expect(paths).toContain('/rentals')
    expect(paths).toContain('/book/:id')
  })

  it('deve ter os nomes corretos para as rotas', () => {
    const routes = router.options.routes
    const routeNames = routes.map(route => route.name)

    expect(routeNames).toContain('Catalog')
    expect(routeNames).toContain('Rentals')
    expect(routeNames).toContain('BookDetails')
  })

  it('deve ter o parâmetro dinâmico na rota de detalhes do livro', () => {
    const bookRoute = router.options.routes.find(route => route.name === 'BookDetails')
    expect(bookRoute?.path).toBe('/book/:id')
  })
})