import React, {Component} from 'react';
import {connect, Provider} from "react-redux";
import { render } from 'react-dom';
import store, {loadBooks, deleteBook} from  './store';

class App extends Component{
    async destroy(book){
        await this.props.delete(book);
    }

    render(){
        this.props.startUp();
        const books = this.props.books;
        return (
            <div>
                {books.map(book=>{
                    return( 
                        <span key={book.id}>{book.name} by {book.author}<br/>
                            <button onClick={()=>this.destroy(book)}>Remove From List</button>
                            <br/>
                        </span>
                    )
                })}
            </div>
        );
    };
}

const _App = connect(
    state=>state,
    (dispatch)=>{
        return{
            startUp: ()=>{
                dispatch(loadBooks());
            },
            delete: (book)=>{
                dispatch(deleteBook(book));
            }
        }
    }
)(App);

render(<Provider store={store}><_App/></Provider>, document.querySelector('#root'));