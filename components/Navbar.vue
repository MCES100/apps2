<!-- components/Navbar.vue -->

<template>
  <nav>
    <div class="navbar-container">
      <div class="logo">
        <img src="/img/Logo.png" alt="MCES10 Software Logo" width="100px" height="20px" />
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
          <nuxt-link to="./apps">Apps</nuxt-link>
        </li>
        <li>
          <nuxt-link to="./signin">Account</nuxt-link>
        </li>
        <li>
          <nuxt-link to="./signup">About</nuxt-link>
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
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  watch: {
    // Watch for route changes and close the menu
    $route(to, from) {
      this.closeMenu();
    },
  },
};
</script>


<style scoped>
/* Add your styling here */
nav {
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 16px;
  box-shadow: 0 14px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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
  margin: 5px 0;
  width: 25px;
  height: 3px;
}

.bar2-open {
  opacity: 0;
  margin: 5px 0;
  width: 25px;
  height: 3px;
}

.bar3-open {
  transform: rotate(45deg) translate(-5px, -6px);
  margin: 5px 0;
  width: 25px;
  height: 3px;
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
  width: 5rem;
  height: 5rem;
}
a:hover {
  text-decoration: none;
  
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
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
    background-color: #000000;
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
