<script setup>
import BookItem from './BookItem.vue'

defineProps({
  books: Array
})
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
    
    <BookItem
      v-for="book in books"
      :key="book.key"
      :book="book"
    />

  </div>
</template>