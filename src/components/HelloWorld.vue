<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="text-center">
    <h1 class="text-2xl font-bold text-gray-800">{{ msg }}</h1>

    <button
      type="button"
      @click="count++"
      class="
        px-2
        py-1
        my-2
        text-white
        bg-green-500
        rounded
        shadow
        hover:bg-gray-700
      "
    >
      count is: {{ count }}
    </button>
  </div>
</template>
