const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000)
      }
    }
  //   name(value) {
  //     if (value === '') {
  //       return ''
  //     } else
  //     this.fullname = value + ' ' + this.lastName;
  //   },
  //   lastName(value) {
  //     if (value === '') {
  //       return ''
  //     } else
  //     this.fullname = this.name + ' ' + value
  //   }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName
    }
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
      this.counter = this.counter + num;
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
