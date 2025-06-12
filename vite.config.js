export default {
  root: './',
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
}