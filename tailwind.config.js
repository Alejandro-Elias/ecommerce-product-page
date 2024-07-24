/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'vdb': 'hsl(220, 13%, 13%)',
        'dgb': 'hsl(219, 9%, 45%)',
        'gb': 'hsl(220, 14%, 75%)',
        'lgb': 'hsl(223, 64%, 98%)',
        'bo': 'hsl(0, 0%, 0%)',
        'naranja': 'hsl(26, 100%, 55%)'
      }
    },
  },
  plugins: [],
}

/* npx tailwindcss -i ./src/input.css -o ./src/output.css --watch */