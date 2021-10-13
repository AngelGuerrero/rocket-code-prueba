<script setup>
import { computed, ref } from 'vue'
import InputComponent from './InputComponent.vue'
import ChatResults from '../Chat/ChatResults.vue'

const emits = defineEmits(['on-save'])

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },

  titleResult: {
    type: String,
    required: false,
    default: ''
  },

  values: {
    type: Function,
    required: true,
    default: () => ({})
  }
})

/**
 * Copia localmente los valores para no sobre-escribir los props.
 */
const data = () => props.values()

/**
 * Pasa los valores de props para hacer la propiedad reactiva.
 */
const formData = ref(data())

/**
 * Establece si el formulario ha sido guardado o no.
 */
const saved = ref(false)

/**
 * Propiedad computada para hacer una pequeña validación,
 * únicamnete para validar que todos los campos no estén vacíos.
 */
const isValid = computed(() =>
  Object.values(formData.value).every(e => e.value)
)

/**
 * Establece la variable para guardar a verdadero
 * y emite una señal que indica que la información ha sido
 * guardada.
 */
const onSave = () => {
  if (!isValid.value) return

  saved.value = true
  emits('on-save', formData.value)
}

/**
 * Si el usuario quisiera editar de nuevo sus datos,
 * se le permite simplemente estableciendo el valor de
 * salvar a falso.
 */
const onEdit = () => {
  saved.value = false
}

/**
 * Limpia los datos del formulario
 */
const onReset = () => {
  formData.value = data()
}
</script>

<template>
  <div class="bg-white pb-2 rounded shadow-2xl">
    <header class="p-2 bg-gray-900 rounded">
      <h3 class="text-sm font-bold text-white text-center">{{ title }}</h3>
    </header>

    <form @submit.prevent="onSave" v-if="!saved">
      <InputComponent
        v-for="item in Object.values(formData)"
        :key="item.id"
        v-model:input="item.value"
        :placeholder="item.placeholder"
      />

      <!-- Buttons -->
      <div class="flex justify-between w-full p-2">
        <input
          type="reset"
          @click="onReset"
          value="Limpiar datos"
          class="
            px-2
            py-1
            text-sm text-white
            bg-black
            rounded
            shadow
            cursor-pointer
            hover:bg-gray-700
          "
        />
        <input
          type="submit"
          value="Guardar"
          :disabled="!isValid"
          class="px-2 py-1 text-sm text-white rounded shadow cursor-pointer"
          :class="[
            !isValid
              ? 'bg-gray-100 text-gray-500 shadow-none cursor-not-allowed'
              : 'bg-green-500'
          ]"
        />
      </div>
    </form>
    <ChatResults
      v-else
      :response="formData"
      :title="titleResult"
      @on-edit="onEdit"
    />
  </div>
</template>
