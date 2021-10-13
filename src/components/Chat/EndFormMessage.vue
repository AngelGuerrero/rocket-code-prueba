<script setup>
defineProps({
  info: {
    type: Object,
    required: false,
    default: () => ({})
  }
})
</script>

<template>
  <div>
    <div class="border px-3 py-2 bg-green-200 text-green-800">
      <h3 class="text-md text-center">!Datos guardados correctamente!</h3>
    </div>

    <div class="p-1 m-4 bg-blue-100 rounded-md shadow-md">
      <h3 class="text-md text-center text-blue-900">Información</h3>
      <div v-for="values in Object.values(info)" :key="values.id">
        <div v-for="item in Object.values(values)" :key="item.id">
          <span class="text-sm font-bold text-left text-blue-900">
            {{ item.placeholder }}:
          </span>
          <span class="p-2 my-1 text-sm text-blue-900 rounded">
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
