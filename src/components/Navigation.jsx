import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Genre Selection</Link></li>
        <li><Link to="/books">Book List</Link></li>
        <li><Link to="/reading-list">Reading List</Link></li>
      </ul>
    </nav>
  )
}