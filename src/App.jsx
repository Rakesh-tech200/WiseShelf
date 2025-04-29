import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import GenreSelection from './pages/GenreSelection'
import BookList from './pages/BookList'
import ReadingList from './pages/ReadingList'


export default function App() {
  const [selectedGenres, setSelectedGenres] = useState([])
  const [readingList, setReadingList] = useState(
    JSON.parse(localStorage.getItem('readingList')) || []
  )

  const addToReadingList = (book) => {
    const newList = [...readingList, book]
    setReadingList(newList)
    localStorage.setItem('readingList', JSON.stringify(newList))
  }

  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<GenreSelection 
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />} />
        <Route path="/books" element={<BookList 
          selectedGenres={selectedGenres}
          addToReadingList={addToReadingList}
        />} />
        <Route path="/reading-list" element={<ReadingList 
          readingList={readingList}
          setReadingList={setReadingList}
        />} />
      </Routes>
      <Footer />
    </div>
  )
}