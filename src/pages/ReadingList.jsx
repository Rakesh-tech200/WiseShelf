export default function ReadingList({ readingList, setReadingList }) {
  const removeFromList = (bookId) => {
    const newList = readingList.filter(book => book.id !== bookId)
    setReadingList(newList)
    localStorage.setItem('readingList', JSON.stringify(newList))
  }

  return (
    <div className="reading-list">
      <h2>Your Reading List</h2>
      {readingList.length === 0 ? (
        <p>Your reading list is empty</p>
      ) : (
        <div className="books-grid">
          {readingList.map(book => (
            <div key={book.id} className="book-card">
              <h3>{book.volumeInfo.title}</h3>
              <button onClick={() => removeFromList(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}