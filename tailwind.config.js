/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',
          light: '#f8fafc',
          primary: '#6366f1',
          secondary: '#a855f7',
          accent: '#06b6d4',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'modern-mesh': 'radial-gradient(at 40% 20%, hsla(280,100%,74%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.05) 0px, transparent 50%)',
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-up-delayed": "fade-in-up 1s ease-out forwards 0.2s",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "blob": "blob 7s infinite",
      },
    },
  },
  plugins: [],
}
