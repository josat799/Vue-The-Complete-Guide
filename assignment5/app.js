const app = Vue.createApp({
    data() {
        return {
            showList: true,
            currentTask: '',
            tasks: []
        };
    },
    computed: {
        buttonLabel() {
            if (this.showList) {
                return "Hide List";
            } else {
                return "Show List";
            }
        }
    },
    methods: {
        addTask() {
            if (this.currentTask != '') {
                this.tasks.push(this.currentTask);
                this.currentTask = '';
            }
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');
