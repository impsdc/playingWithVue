Vue.filter('capitalize', (value)=>{
    return value.charAt(0).toUpperCase() + value.slice(1)
})

/*
Vue.filter('reverse', (value)=>{
    return value.split('').reverse().join('')
})

Vue.filter('AllCapital',(value)=>{
    return value.charAt()
})*/

new Vue({
    el: "#app",
    data: {
        message: 'bonjour',
        check : false,
        direction: 0,
        count: 1,   
        seconds: 0,
        timer: 0,
        list: [],
        },
    methods: {
        changing: (e) => {
          this.check = !this.check 
          console.log(this.check)
       },
        add: function () {
            this.list.push(this.seconds)
            console.log(this.seconds)
        }, 
        stop: function () {
            clearInterval($timer)
        }
    },
    mounted() {
        this.$timer = setInterval(()=>{
            this.seconds++
       },1000);
    },
     destroyed:function () {
        clearInterval($timer)
    }
    })

Vue.component('rowproduct',{
    props: {
        quantity: Number, 
        name: String
    },
    template: `<div>
    <input type="text" v-model="quantity"> {{name}}
    <span v-if="quantity==0"> -- Out of stock</span>
    <button @click="plusOne">Add</button>
    <button @click="moinsone">Remove</button>
    <button @click="del">X</button>
    <slot name="caca">
    
    </slot>
    
    </div>`, 
    methods: {
        plusOne () {
            console.log(this.$parent.$data.alert)
            this.$parent.$data.alert = false
            console.log(this.$parent.$data.alert)
            this.$emit('plusone')
        }, 
        moinsone () {
            this.$emit("moinone")
        }, 
        del () {
            this.$emit("del")
        }
    },
});
new Vue({
    el:"#app2", 
    data: {
        products: [
        {"id":1, "quantity":1, "name":"compoasse"},
        {"id":2, "quantity":0, "name":"jacket"},
        {"id":3, "quantity":5, "name":"hiking"},
        {"id":4, "quantity":4, "name":"suntan"}
        ],
        alert: true
    },
    computed:{
        totalProducts: function () {
            this.$total = 0
            this.products.forEach((obj,i) => {
                this.$total +=obj.quantity
            });
            return this.$total
        }, 
    }, 
    methods: {
        del: function (index) {
            this.$delete(this.products,index)
        }
    }
})