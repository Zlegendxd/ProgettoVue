<script setup>
import { ref } from 'vue'
import { searchBooks } from '../services/openLibrary'
import LibraryShelf from '../components/LibraryShelf.vue'

const books = ref([])
const search = ref('')
const loading = ref(false)

const fetchBooks = async () => {
  if (!search.value) return

  loading.value = true

  const data = await searchBooks(search.value)

  books.value = data?.filter(b => b.cover_i) || []

  loading.value = false
}
</script>

<template>
  <div class="min-h-screen p-10">

    <h1 class="text-4xl text-center text-green-400 mb-10 drop-shadow-lg">
      📚 MINEBRARY
    </h1>

    <div class="flex justify-center gap-4 mb-10">

      <input
        v-model="search"
        placeholder="Cerca un libro..."
        class="bg-zinc-900 border-4 border-green-700 p-4 w-80 shadow-lg"
      />

      <button
        @click="fetchBooks"
        class="bg-green-600 px-6 border-b-4 border-green-900 hover:scale-105 transition"
      >
        SEARCH
      </button>

    </div>

    <p v-if="loading" class="text-center text-gray-400">
      Loading world...
    </p>

    <LibraryShelf :books="books" />

  </div>
</template>