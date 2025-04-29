export default function BookCard({ book, addToReadingList }) {
  return (
    <div className="book-card">
      <img 
        src={book.volumeInfo?.imageLinks?.thumbnail || '/placeholder-book.jpg'} 
        alt={book.volumeInfo.title}
      />
      <h3>{book.volumeInfo.title}</h3>
      <p>by {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
      <div className="rating">
        {Array.from({ length: book.volumeInfo.averageRating || 0 }, (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
      <button onClick={() => addToReadingList(book)}>Add to Reading List</button>
    </div>
  )
}