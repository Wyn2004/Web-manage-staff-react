# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- install MUI: npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  npm i dayjs
  npm install @mui/x-data-grid

**npm install -D tailwindcss postcss autoprefixer**

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/x-data-grid

npm list @mui/material @emotion/react @emotion/styled

npm install @mui/icons-material

npm list @mui/x-data-grid

npx tailwindcss init -p

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

**@tailwind** base**;**
**@tailwind** components**;**
**@tailwind** utilities**;**

npm install antd
