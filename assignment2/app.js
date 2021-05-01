const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: '',
            confirmedOutput2: '',
        };
    },
    methods: {
        addInput1(event) {
            this.output1 = event.target.value;
        },
        addInput2(event) {
            this.output2 = event.target.value;
        },
        confirmInput2() {
            this.confirmedOutput2 = this.output2;
        },
        showAlert() {
            alert('Hi! Nice to see you!');
        }

    }
});

app.mount('#assignment');