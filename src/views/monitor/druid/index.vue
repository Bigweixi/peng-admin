<template>
   <div>
      <h1>暂未开发...</h1>
      <!-- <i-frame v-model:src="url"></i-frame> -->
   </div>
</template>

<script setup>
import iFrame from '@/components/iFrame'

import { ref } from 'vue';

const url = ref(import.meta.env.VITE_APP_BASE_API + '/druid/login.html');
</script>
