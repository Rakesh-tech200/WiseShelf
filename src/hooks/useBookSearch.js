import { useState, useEffect } from 'react'

export default function useBookSearch(selectedGenres) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!selectedGenres.length) return

    const fetchBooks = async () => {
      setLoading(true)
      try {
        const query = selectedGenres.join('+')
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=BOOKS&maxResults=40&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
        )

        const data = await response.json()
        console.log('Full API Response:', data)

        if (!response.ok) {
          throw new Error(data.error.message || 'API Error')
        }

        setBooks(data.items || [])
        
      } catch (err) {
        console.error('API Error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [selectedGenres])

  return { books, loading, error }
}