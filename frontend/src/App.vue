<template>
  <MyHeader cardName="Clash Royale Cards Guide" devName="JayaVardhan" />

  <CardBox :cards="cards[0].cards" />
</template>

<script>
//Importing the component
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

body {
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  background-color: #111;
  color: white;
}

.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
}

div {
  margin-bottom: 0.5em;
  text-align: center;
}
</style>
