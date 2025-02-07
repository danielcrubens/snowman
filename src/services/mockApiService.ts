import type { Book } from '@/types/Book'
import type {Rental} from '@/types/Rental'

class MockApiService {
  private books: Book[] = [
    {
      id: '1',
      title: 'Meteor Falls',
      author: 'John Doe',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.There are many variations of passages of Lorem Ipsum available",
      coverUrl: 'https://i.imgur.com/Uw86zzN_d.webp?maxwidth=760&fidelity=grand',
      available: true,
      price: 9.99
    },
    {
      id: '2',
      title: 'O besouro de má sorte',
      author: 'Murilo Emerick',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.There are many variations of passages of Lorem Ipsum available",
      coverUrl: "https://i.imgur.com/316pnWQ_d.webp?maxwidth=760&fidelity=grand",
      available: true,
      price: 14.99
    },
    {
      id: '3',
      title: 'Vectober de Bárbara Ghirello',
      author: 'Bárbara Ghirello"',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.There are many variations of passages of Lorem Ipsum available",
      coverUrl: "https://i.imgur.com/rVQA8pp_d.webp?maxwidth=760&fidelity=grand",
      available: false,
      price: 19.99
    },
    {
      id: '4',
      title: 'Viagem ao fim do universo',
      author: 'Fábio Martins',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.There are many variations of passages of Lorem Ipsum available",
      coverUrl: "https://i.imgur.com/QAFqjxo_d.webp?maxwidth=760&fidelity=grand",
      available: false,
      price: 19.99
    },
    
  ]

  private rentals: Rental[] = []

  async getBooks(): Promise<Book[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve([...this.books]), 300)
    })
  }

  async getBookById(id: string): Promise<Book | undefined> {
    return new Promise(resolve => {
      setTimeout(() => {
        const book = this.books.find(b => b.id === id)
        resolve(book)
      }, 300)
    })
  }

  async rentBook(bookId: string, userId: string): Promise<Rental> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const bookIndex = this.books.findIndex(b => b.id === bookId)
        
        if (bookIndex === -1 || !this.books[bookIndex].available) {
          reject(new Error('Book not available'))
          return
        }

        const rental: Rental = {
          id: `rental-${Math.random().toString(36).substr(2, 9)}`,
          bookId,
          userId,
          rentalDate: new Date(),
          returnDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
        }

        this.books[bookIndex].available = false
        this.rentals.push(rental)

        resolve(rental)
      }, 500)
    })
  }

  async returnBook(rentalId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rentalIndex = this.rentals.findIndex(r => r.id === rentalId)
        
        if (rentalIndex === -1) {
          reject(new Error('Rental not found'))
          return
        }

        const rental = this.rentals[rentalIndex]
        const bookIndex = this.books.findIndex(b => b.id === rental.bookId)

        if (bookIndex !== -1) {
          this.books[bookIndex].available = true
        }

        this.rentals.splice(rentalIndex, 1)
        resolve()
      }, 300)
    })
  }
}

export const useMockApiService = () => {
  const apiService = new MockApiService()
  
  return {
    getBooks: () => apiService.getBooks(),
    getBookById: (id: string) => apiService.getBookById(id),
    rentBook: (bookId: string, userId: string) => apiService.rentBook(bookId, userId),
    returnBook: (rentalId: string) => apiService.returnBook(rentalId)
  }
}