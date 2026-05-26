<script setup>
//gestione della ricerca, visualizzazione dei libri e logica principale

import { ref, onMounted, watch } from 'vue'
//recupero libri dal api
import {
  searchBooks,
  getRandomBooks
} from '../services/openLibrary'

import LibraryShelf from '../components/LibraryShelf.vue'
//variabile reattive
const books = ref([])
const search = ref('')
const loading = ref(false)

const preferiti = ref([])
//tutti o preferiti 
const mostraPreferiti = ref(false)
//recupero libri dal localstorage
onMounted(() => {
  const salvati = localStorage.getItem('preferiti')
  if (salvati) preferiti.value = JSON.parse(salvati)

  loadRandomBooks()
})

const salvaPreferiti = () => {
  localStorage.setItem('preferiti', JSON.stringify(preferiti.value))
}

const togglePreferito = (book) => {
  const esiste = preferiti.value.find(b => b.key === book.key)
//rimuovo
  if (esiste) {
    preferiti.value = preferiti.value.filter(b => b.key !== book.key)
  } else {
    preferiti.value.push(book)
  }

  salvaPreferiti()
}
//libro tra preferiti?
const èPreferito = (book) => {
  return preferiti.value.some(b => b.key === book.key)
}
//carico libri random
const loadRandomBooks = async () => {
  loading.value = true

  const data = await getRandomBooks()
  //solo libri copertina
  books.value = data?.filter(b => b.cover_i) || []

  loading.value = false
}
//libri tramite ricerca utente
const fetchBooks = async () => {
  if (!search.value.trim()) {
    await loadRandomBooks()
    return
  }

  loading.value = true

  const data = await searchBooks(search.value)
  const results = data?.filter(b => b.cover_i) || []

  books.value = results.length > 0 ? results : await getRandomBooks()

  loading.value = false
}
//se ricerca viene svuotata carica libri random
watch(search, async (val) => {
  if (val.trim() === '') {
    await loadRandomBooks()
  }
})
//restituisco lista di tutti i libri o solo preferiti
const listaAttuale = () => {
  return mostraPreferiti.value ? preferiti.value : books.value
}
</script>

<template>
  <div class="min-h-screen p-10">

    <h1 class="text-4xl text-center text-green-400 mb-10 drop-shadow-lg">
      📚 MINEBRARY
    </h1>

    <div class="flex justify-center gap-4 mb-6">

      <input v-model="search" @keyup.enter="fetchBooks" placeholder="Cerca libro..."
        class="bg-zinc-800 border-4 border-zinc-900 p-4 w-80" />

      <button @click="fetchBooks" class="bg-green-600 px-6 border-b-4 border-green-900">
        CERCA
      </button>

      <button @click="mostraPreferiti = false" :class="mostraPreferiti ? 'bg-gray-600' : 'bg-green-600'"
        class="px-4 border-b-4 border-green-900">
        TUTTI
      </button>

      <button @click="mostraPreferiti = true" :class="mostraPreferiti ? 'bg-yellow-400' : 'bg-yellow-500'"
        class="px-4 border-b-4 border-yellow-700 text-black">
        PREFERITI
      </button>

    </div>

    <p v-if="loading" class="text-center text-gray-400">
      Caricamento...
    </p>

    <LibraryShelf :books="listaAttuale()" :togglePreferito="togglePreferito" :èPreferito="èPreferito" />

  </div>
</template>