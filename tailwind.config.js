/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2F5249",
        secondary: "#437057",
        accent: "#97B067",
        lightyellow: "#E3DE61",
      },
    },
  },
  plugins: [],
};
