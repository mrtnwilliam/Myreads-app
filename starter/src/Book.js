const Book =({ handleChange , wholeBook , booksWithShelf}) => {

    return(
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        ...( wholeBook.imageLinks?.smallThumbnail ? { backgroundImage: `url("${wholeBook.imageLinks.smallThumbnail}")` } : {} ),
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select value={wholeBook.shelf} onChange={(e)=> handleChange(e.target.value , wholeBook)}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        {wholeBook.shelf !== "none" && 
                            <option value="none">None</option>
                        }
                    </select>
                </div>
            </div>
            <div className="book-title">{wholeBook.title}</div>
            <div className="book-authors">{wholeBook.authors}</div>
         </div>
    )
}

export default Book;