<script setup>
import {useCounterStore} from '@/stores/counter'
import { onMounted } from 'vue'
import {storeToRefs} from 'pinia'
const counterStore = useCounterStore()
console.log(counterStore)

// const {count,doubleCount} = counterStore

const {count,doubleCount} = storeToRefs(counterStore)
console.log(count,doubleCount)
onMounted(()=>{
  counterStore.getList()
})
</script>

<template>
 <button @click="counterStore.increment">{{count}}</button>
 {{doubleCount}}
 <ul>
  <li v-for='item in counterStore.list' :key="item.id">{{item.name}}</li>
 </ul>
</template>

<style scoped>

</style>
