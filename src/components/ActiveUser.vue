<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ age }} years</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
section {
  margin: 1rem auto;
  max-width: 40rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

h2 {
  margin-top: 2rem;
  padding-top: 1rem;
}

h3 {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
}
</style>