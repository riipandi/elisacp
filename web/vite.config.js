import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * @type { import('vite').UserConfig }
 */
export default {
  // base: process.env.NODE_ENV === 'production' ? '/app/' : '/',
  plugins: [reactRefresh()]
}
