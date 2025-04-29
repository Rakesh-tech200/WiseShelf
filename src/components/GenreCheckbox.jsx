export default function GenreCheckbox({ genre, selectedGenres, setSelectedGenres }) {
  const handleChange = () => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre) 
        : [...prev, genre]
    )
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={selectedGenres.includes(genre)}
        onChange={handleChange}
      />
      {genre}
    </label>
  )
}