import "./App.css";
import { useState , useEffect } from "react";
import { Route , Routes } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI"

function App() {

  const [ currentlyReading , setCurrentlyReading] = useState ([]);
  const [ wantToRead , setWantToRead] = useState([])
  const [ read , setRead ] = useState([]);

  useEffect (()=> {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setCurrentlyReading(res.filter((book)=>book.shelf === "currentlyReading"));
      setWantToRead(res.filter((book)=>book.shelf === "wantToRead"));
      setRead(res.filter((book)=>book.shelf === "read"));
    };

    getBooks();
  },[]);



  const handleChange = (value , wholeBook) => {
    BooksAPI.update(wholeBook,value);
    console.log(wholeBook);

    if (wholeBook.shelf === "currentlyReading")
    {
      const newGrid = currentlyReading.filter((book)=>book.title !== wholeBook.title);
      setCurrentlyReading(newGrid)
    }
    else if (wholeBook.shelf === "wantToRead")
    {
      const newGrid = wantToRead.filter((book)=>book.title !== wholeBook.title);
      setWantToRead(newGrid)
    }
    else if (wholeBook.shelf === "read")
    {
      const newGrid = read.filter((book)=>book.title !== wholeBook.title);
      setRead(newGrid)
    }

    wholeBook.shelf = value;

    if ( value === "currentlyReading")
    {
      setCurrentlyReading([...currentlyReading, wholeBook])
      console.log("true")
    }
    else if (value === "wantToRead")
    {
      setWantToRead([...wantToRead, wholeBook])
    }
    else if (value === "read")
    {
      setRead([...read, wholeBook])
    }
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <ListBooks currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} handleChange={handleChange}/>
        }/>
      <Route path="/search" element={
        <SearchBooks handleChange={handleChange}/>
      }/>
    </Routes>

  );
}

export default App;
