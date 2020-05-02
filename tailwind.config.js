module.exports = {
  purge: [
    './src/index.html'
  ],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
      colors: {
        "spr-pink": "var(--spr-pink)",
        "spr-blue": "var(--spr-blue)",
        "spr-mint": "var(--spr-mint)",
      },
    },
  },
};
