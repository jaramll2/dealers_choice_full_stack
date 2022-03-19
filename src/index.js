import axios from 'axios';
import React, {Component} from 'react';
import { render } from 'react-dom';

class App extends Component{
    constructor(){
        super();
        this.state = {
            books: []
        }

        this.destroy = this.destroy.bind(this);
    }

    async componentDidMount(){
        const books = (await axios.get('/api/books')).data;
        this.setState({books});
    }

    async destroy(book){
        console.log(book);
        await axios.delete(`/api/books/${book.id}`);
        console.log('after axios');
        const books = this.state.books.filter(_book=>_book.id !== book.id);
        this.setState({books});
    }

    render(){
        const books = this.state.books;
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

render(<App />, document.querySelector('#root'));