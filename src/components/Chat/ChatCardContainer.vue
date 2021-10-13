<script setup>
import image from '../../assets/mujer.jpg'
</script>

<template>
  <div class="flex py-3 px-2">
    <!-- imagen -->
    <div
      class="
        mx-1
        bg-gray-300
        rounded-full
        h-14
        w-14
        flex
        justify-center
        items-center
        overflow-hidden
      "
    >
      <img :src="image" width="38" height="38" />
    </div>
    <div class="flex-1 border rounded-md">
      <slot />
    </div>
  </div>
</template>
