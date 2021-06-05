const app = Vue.createApp({
  data() {
    return {
      currentGoal: '',
      goals: []
    };
  },
  computed: {
    hasGoals() {
      return this.goals.length === 0;
    }
  },
  watch: {
  },
  methods: {
    addGoal() {
      if (this.currentGoal != '') {
        this.goals.push(this.currentGoal);
        this.currentGoal = '';
      }
    },
    removeGoal(index) {
      this.goals.splice(index);
    }
  }
});

app.mount('#user-goals');
