<template>
  <div>
    <active-user :username="item.name" :age="item.age" />
    <user-data @set-item="setItem" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: "Cristiano Rasweiler Neto",
        age: 27,
      },
    };
  },
  methods: {
    setItem(name, age) {
      this.item = {
        name: name,
        age: age,
      };
    },
  },
};
</script>