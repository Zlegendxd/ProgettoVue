<script setup>
import { ref } from 'vue'
import BookModal from './BookModal.vue'

const props = defineProps({
  book: Object,
  togglePreferito: Function,
  èPreferito: Function
})

const open = ref(false)

const clickPreferito = (e) => {
  e.stopPropagation()
  props.togglePreferito(props.book)
}
</script>

<template>
  <div>

    <div @click="open = true"
      class="relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:shadow-green-500/30">

      <button @click="clickPreferito" class="absolute top-2 right-2 z-20 text-xl transition hover:scale-125">
        {{ èPreferito(props.book) ? '⭐' : '☆' }}
      </button>

      <img :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`" class="w-full h-56 object-cover" />

      <div class="absolute bottom-0 p-3 w-full">
        <p class="text-sm text-white">
          {{ book.title }}
        </p>

        <p class="text-[11px] text-gray-300">
          {{ book.author_name?.[0] || 'Autore sconosciuto' }}
        </p>
      </div>

    </div>

    <BookModal :book="book" :open="open" @close="open = false" />

  </div>
</template>