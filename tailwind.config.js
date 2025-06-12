/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 Aqui garantimos suporte a arquivos TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
