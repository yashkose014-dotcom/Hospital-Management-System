/** @type {import('tailwindcss').Config} */
export default { darkMode: 'class', content: ['./index.html', './src/**/*.{js,jsx}'], theme: { extend: { colors: { brand: { 50: '#eff6ff', 500: '#2563eb', 600: '#1d4ed8', 900: '#172554' } }, boxShadow: { glow: '0 24px 60px rgba(37, 99, 235, .20)' } } }, plugins: [] }
