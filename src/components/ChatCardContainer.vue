<script setup></script>

<template>
  <div class="flex py-3 dev">
    <div class="mx-2 bg-gray-700 rounded-full dev h-14 w-14"></div>
    <div class="flex-1 dev">
      <slot>
        <div class="dev">
          <header class="py-2 bg-gray-900 dev">
            <h3 class="text-sm font-bold text-white dev">
              ¿Cuál es tu fecha de nacimiento?
            </h3>
          </header>

          <section class="flex flex-col my-2 dev">
            <label
              for="nombre"
              class="
                w-full
                min-w-full
                mx-1
                text-sm
                font-bold
                text-left
                dev
                text-primary
              "
            >
              Nombre
            </label>
            <input
              name="nombre"
              type="text"
              class="p-1 mx-2 my-1 border border-indigo-300 rounded"
              placeholder="Ingresa tu nombre"
            />
          </section>
        </div>
      </slot>
    </div>
  </div>
</template>
