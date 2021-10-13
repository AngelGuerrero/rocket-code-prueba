<script setup>
import { inject } from 'vue'

const isProcessCompleted = inject('isProcessCompleted')

defineEmits(['on-edit'])

defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },

  response: {
    type: Object,
    required: false,
    default: () => ({})
  }
})
</script>

<template>
  <div class="p-1 m-4 bg-pink-100 rounded-md shadow">
    <h3 class="text-xl text-center text-pink-900">{{ title }}</h3>
    <div v-for="item in Object.values(response)" :key="item.id" class="p-1">
      <label class="text-sm font-bold text-left text-pink-900">
        {{ item.placeholder }}:
      </label>
      <div class="p-2 my-1 text-sm text-white bg-pink-400 rounded">
        {{ item.value }}
      </div>
    </div>
    <button
      v-if="!isProcessCompleted"
      class="
        w-full
        px-3
        py-1
        my-2
        text-white
        bg-blue-400
        border border-blue-200
        rounded
        hover:bg-blue-700
      "
      @click="$emit('on-edit')"
    >
      Editar
    </button>
  </div>
</template>
