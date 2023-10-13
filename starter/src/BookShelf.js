import Book from "./Book";

const BookShelf = ({bookShelfTitle , bookGrid , handleChange}) => {


    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookGrid.map((book , index)=>
                    <li key={index}>
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

export default BookShelf;