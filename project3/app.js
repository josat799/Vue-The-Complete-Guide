const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Atoui'
    },
  },
  methods: {
    outPutFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Atoui'
    },

    resetInput() {
      this.name = '';
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  }
});

app.mount('#events');