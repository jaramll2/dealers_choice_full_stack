import React from "react";
import {connect} from 'react-redux';
import { deleteBook } from "./store";
import { Link } from 'react-router-dom';

const BookList = (props)=>{
    const books = props.books;
    return(
        <>
        <div id='bookList'>
            <h3>📚 To Read List: 📚</h3>
            {books.map(book => {
                return (
                    <span className='book' key={book.id}>📕 {book.name} by {book.author}<br />
                        <Link to={`/summary/${book.id}`}>Summary</Link>
                        <br />
                        <button onClick={() => props.delete(book)}>Remove From List</button>
                        <br />
                        <br/>
                    </span>
                );
            })}
        </div>
        </>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        delete: (book)=>{
            dispatch(deleteBook(book));
        }
    }
}

export default connect (state=>state,mapDispatchToProps)(BookList);

