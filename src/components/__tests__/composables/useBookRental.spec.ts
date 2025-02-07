import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useBookRental } from '../../../composables/useBookRental'
import { useBookStore } from '../../../stores/bookStore'

vi.mock('@/stores/bookStore', () => ({
  useBookStore: vi.fn(() => ({
    processBookRental: vi.fn(),
    books: [],
    availableBooks: []
  }))
}))

describe('useBookRental', () => {
  const mockBook = {
    id: '1',
    title: 'Test Book',
    available: true
  }

  let bookRental: ReturnType<typeof useBookRental>
  let mockBookStore: ReturnType<typeof useBookStore>

  beforeEach(() => {
    vi.clearAllMocks()
    mockBookStore = useBookStore()
    bookRental = useBookRental()
  })

  it('deve iniciar com estados padrão', () => {
    expect(bookRental.isRenting.value).toBe(false)
    expect(bookRental.rentalError.value).toBeNull()
  })

  it('deve retornar false e definir erro quando livro é inválido', async () => {
    const result = await bookRental.rentBook(null as any)
    
    expect(result).toBe(false)
    expect(bookRental.rentalError.value).toBe('Invalid book data')
    expect(bookRental.isRenting.value).toBe(false)
  })

  it('deve definir isRenting como true durante o processo de aluguel', async () => {
    vi.mocked(mockBookStore.processBookRental).mockImplementationOnce(async () => {
      expect(bookRental.isRenting.value).toBe(true)
      return { id: 'rental-1', bookId: '1', userId: 'user-123' }
    })

    await bookRental.rentBook(mockBook)
  })
})