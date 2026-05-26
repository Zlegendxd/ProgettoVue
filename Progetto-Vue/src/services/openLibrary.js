import axios from "axios"
//chiamata api
export async function searchBooks(query) {
  const res = await axios.get(
    `https://openlibrary.org/search.json?q=${query}`
  )

  return res.data.docs
}

export async function getRandomBooks() {

  const randomQueries = [
    "minecraft",
    "fantasy",
    "magic",
    "adventure",
    "history",
    "science"
  ]

  const random =
    randomQueries[Math.floor(Math.random() * randomQueries.length)]

  const res = await axios.get(
    `https://openlibrary.org/search.json?q=${random}`
  )

  return res.data.docs
}