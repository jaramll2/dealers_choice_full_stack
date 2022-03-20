import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import thunk from 'redux-thunk'

const initalState = {
    books: []
}

const LOAD = 'LOAD';
const DELETE = 'DELETE';
const CREATE = 'CREATE';

const reducer = (state = initalState, action)=>{
    if(action.type === LOAD){
        state = {...state,books:action.books}
    }
    if(action.type === DELETE){
        const books = state.books.filter(_book=>_book.id !==action.book.id);
        state = {...state,books};
    }
    if(action.type === CREATE){
        state = {...state, books: [...state.books, action.book]};
    }

    return state;
}

const loadBooks = ()=>{
    return async (dispatch)=>{
        const books = (await axios.get('/api/books')).data;
        dispatch({
            type: 'LOAD',
            books 
        })
    };
};

const deleteBook = (book)=>{
    return async(dispatch)=>{
        await axios.delete(`/api/books/${book.id}`);
        dispatch({
            type: 'DELETE',
            book
        })
    }
};

const addBook = (newBook)=>{
    return async(dispatch)=>{
        const book = (await axios.post('/api/books', newBook)).data;
        dispatch({ 
            type: 'CREATE',
            book
        })
    };
};

const store = createStore(reducer,applyMiddleware(thunk));

export default store;

export {
    loadBooks,
    deleteBook,
    addBook
}