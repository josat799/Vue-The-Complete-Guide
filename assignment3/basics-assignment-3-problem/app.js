const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    message() {
        const that = this;
      setTimeout( function() {
          that.counter = 0;
      }, 5000);
    }
  },
  computed: {
      message() {
          if (this.counter < 37) {
              return 'Not there yet!';
            } else if (this.counter === 37) {
              return 37;
            } else {
                return 'Too much!'
            }
      }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  }
});

app.mount('#assignment');