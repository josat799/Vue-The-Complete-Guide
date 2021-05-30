const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      message: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 37) {
        this.message = 'Too much!';
      } else {
          this.message = 'Not there yet!';
      }
      setTimeout( function() {
          this.counter = 0;
      }, 5000);
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  }
});

app.mount('#assignment');