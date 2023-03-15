<template>
    <div>
      <v-card color="red">
        <v-card-text>
          <p>Message: {{ message }}</p>
        </v-card-text>
        
      </v-card>
    </div>
  </template>
  
  <script setup>
import { useRoute } from 'vue-router';
import {ref,onMounted} from 'vue';
const route = useRoute();
    const message = ref('');

    onMounted(() => {
      message.value = route.query.message || '';
    });
  </script>
  