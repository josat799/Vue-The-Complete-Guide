const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    computed: {},
    methods: {
        boxClasses(box) {
            if (box === "A") {
                return {active: this.boxASelected};
            } else if (box === 'B') {
                return {active: this.boxBSelected};
            } else if (box === 'C') {
                return {active: this.boxCSelected};
            }  
        },
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    },
});

app.mount('#styling');