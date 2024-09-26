//导入方法
import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import axios from 'axios'
const API_URL = 'http://geek.itheima.net/v1_0/channels'
export const useCounterStore = defineStore('counter',()=>{
    //定义数据
    const count = ref(0)
    //定义修改数据的方法
    const increment = ()=>{
        count.value++
    }
    const doubleCount = computed(()=> count.value*2)
    const list = ref([])
    const getList = async ()=>{
      const res = await axios.get(API_URL)
      list.value = res.data.data.channels
    }
    //以对象方式return组件使用
    return {
        count,
        doubleCount,
        increment,
        list,
        getList
    }
})