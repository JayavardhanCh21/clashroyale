<template>
  <header class="page-header">
    <h2>{{ devName }}'s</h2>
    <h3>{{ cardName }}</h3>
    <div class="hamburger" @click="toggleMenu">☰</div>

    <nav class="rarity-nav" :class="{ open: menuOpen }">
      <a
        v-for="rarity in rarities"
        :key="rarity"
        :href="'#' + rarity.toLowerCase()"
        @click="closeMenu"
      >
        {{ rarity }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    cardName: String,
    devName: String,
    rarities: Array,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
.page-header {
  text-align: center;
  margin: 2rem auto;
  position: relative;
}

.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  color: white;
}

.rarity-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.rarity-nav a {
  color: white;
  background-color: #333;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  transition: 0.2s ease;
}
.rarity-nav a:hover {
  background-color: #555;
}

@media (max-width: 1024px) {
  .rarity-nav {
    display: none;
    flex-direction: column;
    background-color: #222;
    margin-top: 1rem;
    padding: 1rem;
  }

  .rarity-nav.open {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
</style>
