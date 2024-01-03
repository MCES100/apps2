<!-- components/Navbar.vue -->

<template>
  <nav>
    <div class="navbar-container">
      <div class="logo">
        <nuxt-link to="/">Your Logo</nuxt-link>
      </div>
      <div class="menu" @click="toggleMenu">
        <div :class="{ 'bar': true, 'bar1-open': isMenuOpen }"></div>
        <div :class="{ 'bar': true, 'bar2-open': isMenuOpen }"></div>
        <div :class="{ 'bar': true, 'bar3-open': isMenuOpen }"></div>
      </div>
      <ul :class="{ 'show-menu': isMenuOpen }">
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
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
nav {
  background-color: #333;
  padding: 1rem;
  border-radius: 10px; /* Add rounded corners */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.menu {
  cursor: pointer;
  display: none; /* Hide on larger screens */
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: all 0.3s ease;
}

.bar1-open {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.bar2-open {
  opacity: 0;
}

.bar3-open {
  transform: rotate(45deg) translate(-5px, -6px);
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  border-radius: 10px; /* Add rounded corners */
  overflow: hidden; /* Ensure rounded corners are applied properly */
}

li {
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

/* Media query for mobile */
@media only screen and (max-width: 600px) {
  .menu {
    display: block;
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    z-index: 1;
  }

  ul.show-menu {
    display: flex;
  }

  li {
    margin: 0;
    text-align: center;
  }
}
</style>
