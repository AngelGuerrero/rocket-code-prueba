<script setup>
defineProps({
  input: {
    type: String,
    required: true
  },

  label: {
    type: String,
    required: false,
    default: ''
  },

  placeholder: {
    type: String,
    required: false,
    default: ''
  },

  //
  // Todo validations
  required: {
    type: Boolean,
    required: false,
    default: false
  }
})

defineEmits(['update:input'])
</script>

<template>
  <section class="flex flex-col my-2">
    <label
      for="input__component"
      class="w-full min-w-full mx-1 text-sm font-bold text-left text-primary"
    >
      {{ label }}
    </label>
    <input
      name="input__component"
      :value="input"
      @input="$emit('update:input', $event.target.value)"
      type="text"
      class="p-1 mx-2 my-1 border border-indigo-300 rounded"
      :placeholder="placeholder"
    />
  </section>
</template>
