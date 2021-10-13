<script setup>
import { computed, provide, reactive, ref } from 'vue'
import ChatCardContainer from './ChatCardContainer.vue'
import FormComponent from '../Shared/FormComponent.vue'
import EndFormMessage from './EndFormMessage.vue'

const state = reactive({
  //
  // Variables para guardar la información proporcionada
  // y mostrarla al final.
  stepOneSavedData: {},
  stepTwoSavedData: {},
  stepThreeSavedData: {},
  //
  // Variables para verificar si los datos han sido guardados
  // y pasar al siguiente formulario.
  stepOneSaved: false,
  stepTwoSaved: false,
  stepThreeSaved: false
})

const stepOneData = () => ({
  name: {
    value: '',
    placeholder: 'Primer nombre'
  },
  secondName: {
    value: '',
    placeholder: 'Segundo nombre'
  },
  middleName: {
    value: '',
    placeholder: 'Primer apellido'
  },
  lastName: {
    value: '',
    placeholder: 'Segundo apellido'
  }
})

const stepTwoData = () => ({
  day: {
    value: '',
    placeholder: 'Día'
  },
  month: {
    value: '',
    placeholder: 'Mes'
  },
  year: {
    value: '',
    placeholder: 'Año'
  }
})

const stepThreeData = () => ({
  email: {
    value: '',
    placeholder: 'Email'
  },
  phone: {
    value: '',
    placeholder: 'Teléfono'
  }
})

const isProcessCompleted = computed(
  () => state.stepOneSaved && state.stepTwoSaved && state.stepThreeSaved
)

provide(
  'isProcessCompleted',
  computed(() => isProcessCompleted.value)
)

const onSaveData = (keyData, keyValid, value) => {
  state[keyData] = value
  state[keyValid] = true
}
</script>

<template>
  <div class="chat__container w-1/2 max-w-sm mr-3 bg-gray-100 shadow-2xl">
    <div class="py-3 bg-primary text-center">
      <h1 class="text-2xl font-bold text-contrast">Awesome form</h1>
      <h3 class="text-sm text-contrast">En menos de 5 minutos</h3>
    </div>

    <div class="chat__content pb-10 overflow-y-scroll">
      <ChatCardContainer>
        <FormComponent
          title="¿Cuál es tu nombre?"
          title-result="Credenciales"
          :values="stepOneData"
          @on-save="onSaveData('stepOneSavedData', 'stepOneSaved', $event)"
        />
      </ChatCardContainer>

      <ChatCardContainer v-if="state.stepOneSaved">
        <FormComponent
          title="¿Cuál es tu fecha de nacimiento?"
          title-result="Fecha de nacimiento"
          :values="stepTwoData"
          @on-save="onSaveData('stepTwoSavedData', 'stepTwoSaved', $event)"
        />
      </ChatCardContainer>

      <ChatCardContainer v-if="state.stepOneSaved && state.stepTwoSaved">
        <FormComponent
          title="Datos de contacto"
          title-result="Datos de contacto"
          :values="stepThreeData"
          @on-save="onSaveData('stepThreeSavedData', 'stepThreeSaved', $event)"
        />
      </ChatCardContainer>

      <EndFormMessage v-if="isProcessCompleted" :info="state" />
    </div>
  </div>
</template>

<style>
.chat__container {
  min-width: 350px;
}
.chat__content {
  height: 450px;
}
</style>
