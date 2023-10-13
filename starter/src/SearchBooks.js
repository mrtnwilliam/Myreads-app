import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import Book from "./Book";

const SearchBooks = ({handleChange}) => {

    const [ query , setQuery ] = useState("");
    const [ searchResults , setSearchResults ] = useState([]);


    useEffect(() => {
        const getBooks = query !== "" ? async () => {
            const res = await BooksAPI.search(query, 50);
            const booksWithShelf = await BooksAPI.getAll();
            const updatedBooks = Array.isArray(res) ? res.map((book1)=>{
                const book2 =booksWithShelf.find((book2)=> book1.id === book2.id);
                book2 ? book1.shelf = book2.shelf : book1.shelf = "none";
                return book1
              }): [];
            setSearchResults(updatedBooks);
        }:()=>{};
        getBooks();
    },[query]);




    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to = "/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {Array.isArray(searchResults) && searchResults.map((book,index)=> <li key = {index}>
                <Book 
                handleChange={handleChange}
                wholeBook={book}
                />
              </li>)}
            </ol>
          </div>
        </div>
    )
}

export default SearchBooks; 