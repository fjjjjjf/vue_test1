<template>
  <input style="background-color: gray;color: #000;" type="text"  v-model="inputValue">
  <button style="background-color: blue;" @click="next">press</button>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router'

const routerInstance =useRouter()
const inputValue =ref('')
  function next(){
    routerInstance.push({path:'/next',query:{message: inputValue.value}});
  }
</script>
