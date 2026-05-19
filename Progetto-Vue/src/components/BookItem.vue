<script setup>
import { ref } from 'vue'
import BookModal from './BookModal.vue'

defineProps({ book: Object })

const open = ref(false)
</script>

<template>
  <div>


    <div
      @click="open = true"
      class="
        bg-gradient-to-b from-amber-700 to-amber-900
        border-4 border-black
        p-2
        cursor-pointer
        transform
        transition-all duration-300
        hover:scale-110
        hover:-translate-y-4
        hover:rotate-2
        shadow-2xl
      "
    >

      <img
        :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
        class="w-full h-52 object-cover border-2 border-black"
      />

      <p class="text-[10px] mt-2 text-yellow-300">
        {{ book.title }}
      </p>

    </div>

    <BookModal
      :book="book"
      :open="open"
      @close="open = false"
    />

  </div>
</template>