<template>
  <MyHeader
    :cardName="'Clash Royale Cards Guide'"
    :devName="'Jayavardhan'"
    :rarities="uniqueRarities"
  />

  <CardBox :cards="cards[0].cards" />
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import CardBox from "./components/CardBox.vue";

export default {
  name: "App",

  components: {
    MyHeader,
    CardBox,
  },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    async fetchcards() {
      const res = await fetch("https://clashroyale.onrender.com/api");
      const data = await res.json();
      console.log(data);
      return data;
    },
  },
  computed: {
    uniqueRarities() {
      if (!this.cards[0]) return [];
      return [...new Set(this.cards[0].cards.map((c) => c.rarity))];
    },
  },

  async created() {
    this.cards = await this.fetchcards();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  background-color: #517891;
  color: white;
}

.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid #bdb96a;
  padding: 30px;
  border-radius: 5px;
}

div {
  margin-bottom: 0.5em;
  text-align: center;
}
</style>
