const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    resetInput() {
      this.name = "";
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    inputName(event, lastname) {
      this.name = event.target.value;
    }
  }
});

app.mount('#events');