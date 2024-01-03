<template>
    <div>index page</div>
    <button class="btn">
      <span class="btn-text">Click me</span>
      <span class="subtitle">Subtitle here</span>
    </button>
</template>
<style>

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 66%, rgba(0,85,244,1) 100%);
}
.btn {
  @apply relative inline-block px-6 py-4 text-lg font-semibold rounded-full bg-opacity-25 bg-white text-white hover:bg-opacity-50 hover:bg-white border border-white border-opacity-25 transition duration-300 ease-in-out;
  backdrop-filter: blur(10px);
}

.btn-text {
  @apply block mb-1; /* Display as block and add margin-bottom for separation */
}

.subtitle {
  @apply text-sm text-gray-300; /* Adjust the font size and color as needed */
}
/*

background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb)); */
    </style>