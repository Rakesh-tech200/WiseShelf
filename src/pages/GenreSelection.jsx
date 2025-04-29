import { useNavigate } from 'react-router-dom'
import GenreCheckbox from '../components/GenreCheckbox'

const genres = [
  'Fiction', 'Mystery', 'Romance', 'Science Fiction', 
  'Fantasy', 'Thriller', 'Biography', 'History', 
  'Self Help', 'Business', 'Science', 'Technology'
]

export default function GenreSelection({ selectedGenres, setSelectedGenres }) {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/books')
  }

  return (
    <div className="genre-selection">
      <h2>Select Your Favorite Genres</h2>
      <form onSubmit={handleSubmit}>
        <div className="genre-grid">
          {genres.map(genre => (
            <GenreCheckbox
              key={genre}
              genre={genre}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
            />
          ))}
        </div>
        <button type="submit">Show Recommendations</button>
      </form>
    </div>
  )
}