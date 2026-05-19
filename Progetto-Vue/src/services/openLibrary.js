import axios from "axios"

export async function searchBooks(query) {
  const res = await axios.get(
    `https://openlibrary.org/search.json?q=${query}`
  )

  return res.data.docs
}