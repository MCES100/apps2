<!-- components/Navbar.vue -->

<template>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  nav {
    background-color: #333;
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  
  li {
    margin-right: 10px;
  }
  
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  </style>
  