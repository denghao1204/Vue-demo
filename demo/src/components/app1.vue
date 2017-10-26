<template>
  <div class="app1">
    <h1>{{msg}}</h1>
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>
<script>
  export default {
    name:'app1',
    data(){
      return {
        msg:' 我是app1',
        price:5
      }
    },
    methods:{
      addOne(){
        this.$store.dispatch('increase',this.price)
      },
      minusOne(){
        this.$store.commit('decrement',this.price)
      }
    }
  }
</script>
<style></style>
