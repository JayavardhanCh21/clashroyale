<template>
  <div class="gridCard">
    <SingleCard v-for="card in cards" :key="card.id" :card="card" />
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
};
</script>

<style>
.gridCard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
