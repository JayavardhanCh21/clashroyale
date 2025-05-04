<template>
  <div :class="card.evolution ? 'green' : 'red'">
    <h1>{{ card.name }}</h1>

    <h2>{{ card.rarity }}</h2>
    <h2>{{ card.type }}</h2>
  </div>
</template>

<script>
export default {
  name: "singleCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.green {
  background-color: green;
}

h4 {
  margin: 2px;
}

div {
  background-color: #ffb89e;
  border-radius: 10px;
  color: black;
  padding: 1em;
  text-align: center;
  width: 80%;
  margin: auto;
}

.red {
  background-color: orangered !important;
}
</style>
