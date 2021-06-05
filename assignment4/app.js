const app = Vue.createApp({
    data() {
        return {
            user: '',
            isVisable: true,
            activeColor: 'red'
        };
    },
    computed: {
        userParagraphClass() {
            console.log(this.user);
            return {
                user1: this.user === 'user1',
                user2: this.user === 'user2',
                hidden: !this.isVisable,
            };
        },
        inlineParagraph() {
            return {
                color: this.activeColor,
            };
        }

    },
    methods: {
        toggleVisability() {
            this.isVisable = !this.isVisable;
        },
        setUser(event) {
            if (event.target.value === 'user1') {
                this.user = 'user1';
            } else if (event.target.value === 'user2') {
                this.user = 'user2';
            }
        },
        setActiveColor(event) {
            this.activeColor = event.target.value;
        }
    }
});

app.mount('#assignment');