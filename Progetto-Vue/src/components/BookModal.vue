<script setup>
defineProps({
  book: Object,
  open: Boolean
})

defineEmits(['close'])
</script>

<template>

  <Transition name="zoom">

    <div v-if="open" class="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50">

      <div class="bg-zinc-900 border-4 border-green-500 p-8 max-w-3xl w-[90%] shadow-2xl">

        <button @click="$emit('close')" class="text-red-400 mb-6">
          CLOSE
        </button>

        <div class="flex gap-8">

          <img :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`"
            class="w-56 border-4 border-black shadow-lg" />

          <div>

            <h1 class="text-green-400 text-2xl mb-4">
              {{ book.title }}
            </h1>

            <p class="text-white">
              {{ book.author_name?.[0] }}
            </p>s

            <p class="text-sm text-gray-400 mt-2">
              {{ book.first_publish_years }}
            </p>
            <p class="text-sm text-gray-300 mt-4 leading-6">
              {{
                book.subject?.slice(0, 6).join(', ')
                || 'Nessuna descrizione disponibile '
              }}
            </p>

          </div>

        </div>

      </div>

    </div>

  </Transition>

</template>

<style>
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.25s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
</style>