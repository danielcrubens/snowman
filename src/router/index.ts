import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'
import RentalView from '@/views/RentalView.vue'
import BookDetailsView from '@/views/BookDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: CatalogView
  },
  {
    path: '/rentals',
    name: 'Rentals',
    component: RentalView
  },
  {
    path: '/book/:id',
    name: 'BookDetails',
    component: BookDetailsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router