import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useBookSearch from '../hooks/useBookSearch'
import BookCard from '../components/BookCard'

export default function BookList({ selectedGenres, addToReadingList }) {
  const navigate = useNavigate()
  const { books, loading, error } = useBookSearch(selectedGenres)

  useEffect(() => {
    if (!selectedGenres.length) navigate('/')
  }, [selectedGenres, navigate])

  if (loading) return <div>Loading recommendations...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="book-list">
      <h2>Recommended Books</h2>
      <div className="books-grid">
        {books.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            addToReadingList={addToReadingList}
          />
        ))}
      </div>
    </div>
  )
}