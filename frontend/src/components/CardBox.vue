<template>
  <div class="grouped-cards">
    <div
      v-for="(group, rarity) in groupedCards"
      :key="rarity"
      :id="rarity.toLowerCase()"
      class="rarity-section"
    >
      <h2 :class="['rarity-title', rarity.toLowerCase()]">{{ rarity }}</h2>

      <div class="gridCard">
        <SingleCard v-for="card in group" :key="card.id" :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleCard from "./SingleCard.vue";

export default {
  name: "CardBox",
  components: {
    SingleCard,
  },
  props: {
    cards: Array,
  },
  computed: {
    groupedCards() {
      return this.cards.reduce((groups, card) => {
        if (!groups[card.rarity]) groups[card.rarity] = [];
        groups[card.rarity].push(card);
        return groups;
      }, {});
    },
  },
};
</script>

<style scoped>
.gridCard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.rarity-title {
  font-size: 24px;
  margin: 1rem 0;
  text-transform: uppercase;
  text-align: center;
}

.common {
  color: skyblue;
}
.rare {
  color: rgb(221, 232, 13);
}
.epic {
  color: violet;
}
.legendary {
  color: gold;
}
.champion {
  color: orange;
}

@media (max-width: 1024px) {
  .gridCard {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
