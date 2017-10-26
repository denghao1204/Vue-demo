<template>
  <div class="app2">
    <h1>{{msg}}</h1>
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>
<script>
  export default {
    name:'app2',
    data(){
      return {
        msg:' 我是app2',
        price:15
      }
    },
    methods:{
      addOne(){
        this.$store.commit('increment',this.price)
      },
      minusOne(){
        this.$store.commit('decrement',this.price)
      }
    }
  }
</script>
<style></style>
