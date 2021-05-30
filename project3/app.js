const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }

    // name(value) {
    //   if (value == null) {
    //     this.fullName = '';
    //   }
    //   this.fullName = value + ' ' + lastName;
    // },
    // lastName(value) {
    //   if (value == null) {
    //     this.fullName = '';
    //   }
    //   this.fullName = value + ' ' + value;
    // }
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName == null) {
        return '';
      }
      return this.name + ' ' + this.lastName;
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