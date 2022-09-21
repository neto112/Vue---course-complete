<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <input placeholder="Your name" type="text" v-model="enteredUserName" />
        <input placeholder="Your age" type="number" v-model="enteredAge" />
      </div>
      <div>
        <button>Set item</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredUserName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-item", this.enteredUserName, this.enteredAge);
    },
  },
};
</script>

<style>
input {
  padding: 0.5rem;
  margin: 1rem 0.5rem;
}

button {
  background-color: green;
  color: white;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  margin-bottom: 1rem;
}
</style>