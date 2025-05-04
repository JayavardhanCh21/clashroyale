<template>
  <h2>{{ devName }} 's</h2>
  <h3>{{ cardName }}</h3>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    cardName: {
      type: String,
      required: true,
    },
    devName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
h3 {
  margin-bottom: 20px;
}
</style>
