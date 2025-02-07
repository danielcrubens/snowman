declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/services/mockApiService' {
  const mockApiService: any;
  export default mockApiService;
}
