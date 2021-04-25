const app = Vue.createApp({
    data() {
        return {
            name: 'Josef',
            age: 23,
            imageUrl: 'https://s3.amazonaws.com/images.seroundtable.com/http-418-teapot-1408710394.png',
            randomNumber: Math.random(),
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        }
            },
});

app.mount('#assignment');