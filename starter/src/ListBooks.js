import { Link } from "react-router-dom"
import BookShelf from "./BookShelf";

const ListBooks = ({currentlyReading , wantToRead , read , handleChange}) => {
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf bookShelfTitle="Currently Reading"  bookGrid={currentlyReading} handleChange={handleChange}/>
              <BookShelf bookShelfTitle="Want to Read" bookGrid={wantToRead} handleChange={handleChange}/>
              <BookShelf bookShelfTitle="Read" bookGrid={read} handleChange={handleChange}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

export default ListBooks;