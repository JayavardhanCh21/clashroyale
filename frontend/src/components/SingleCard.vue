<template>
  <div class="card-container" :class="rarityClass">
    <div class="header">
      <span class="elixir">{{ card.elixir }}</span>
      <h2 class="name">{{ card.name }}</h2>
    </div>

    <div class="details">
      <p><strong>Type:</strong> {{ card.type }}</p>
      <p><strong>Targets:</strong> {{ card.targets }}</p>
      <p>
        <strong>Evolution:</strong>
        <span
          class="evolution"
          :class="{ yes: card.evolution, no: !card.evolution }"
        >
          {{ card.evolution ? "Yes" : "No" }}
        </span>
      </p>
    </div>
    <!-- 
    <div class="rarity-label">{{ card.rarity }}</div> -->
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    rarityClass() {
      return this.card.rarity.toLowerCase();
    },
  },
};
</script>

<style scoped>
.card-container {
  border-radius: 12px;
  padding: 1rem;
  background: #2a2a2a;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: left;
  transition: 0.2s ease;
}
.card-container:hover {
  transform: scale(1.03);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.name {
  font-size: 1.4rem;
  font-weight: bold;
}

.elixir {
  background-color: #8240ff;
  padding: 6px 12px;
  border-radius: 50%;
  font-weight: bold;
  color: white;
  font-size: 1rem;
}

.details p {
  margin: 6px 0;
  font-size: 0.95rem;
}

.evolution.yes {
  color: #00ff99;
  font-weight: bold;
}
.evolution.no {
  color: #999;
}

/* Rarity border accents */
.common {
  border-left: 6px solid lightgray;
}
.rare {
  border-left: 6px solid deepskyblue;
}
.epic {
  border-left: 6px solid violet;
}
.legendary {
  border-left: 6px solid gold;
}
.champion {
  border-left: 6px solid orange;
}

.rarity-label {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.8rem;
  background: #444;
  padding: 3px 8px;
  border-radius: 6px;
  text-transform: uppercase;
}
</style>
