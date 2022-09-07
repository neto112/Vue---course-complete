const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + ' Rasweiler '
    },
    submitForm(event) {
      event.preventDefault();
      alert('Submitted!')
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter +num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
