/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange_primary: '#F28D00',
        custom_gray:'#F0F2F5',
        custom_blue:'#E8F3F3',
        custom_blue_sec:'#F2F8F7',
        contact_input: '#D9B891',
        l_footer: '#0D2436'
      },
      fontFamily: {
        body: ['Noto Sans'],
        prime_font: ['Poppins']
      },
      fontSize: {
        stnd: '2rem'
      }
    },
  },
  plugins: [],
}
