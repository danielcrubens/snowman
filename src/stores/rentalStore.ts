import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Rental } from '@/types/Rental'

export const useRentalStore = defineStore('rentals', () => {
  const rentals = ref<Rental[]>([])

  const activeRentals = computed(() => 
    rentals.value.filter(rental => 
      new Date(rental.returnDate) > new Date()
    )
  )

  const expiredRentals = computed(() => 
    rentals.value.filter(rental => 
      new Date(rental.returnDate) <= new Date()
    )
  )

  const addRental = (rental: Rental) => {
    rentals.value.push(rental)
  }

  const removeRental = (rentalId: string) => {
    rentals.value = rentals.value.filter(r => r.id !== rentalId)
  }

  return {
    rentals,
    activeRentals,
    expiredRentals,
    addRental,
    removeRental
  }
})