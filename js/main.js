var root = new Vue({
    el: "#app",
    data: {
        number: "",
        message: "",
        url: ""
    },
    methods: {
        generate() {
            let num = this.number.replace(/[^0-9]/g, "")
            let msg = encodeURI(this.message)
            this.url = `https://wa.me/send?phone=${num}&text=${msg}`
            console.log('Yes')
        }
    }
});




