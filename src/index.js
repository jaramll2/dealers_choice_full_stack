import axios from 'axios';
import React, {Component} from 'react';
import { render } from 'react-dom';

class App extends Component{
    constructor(){
        super();
        this.state = {
            books: []
        }
    }

    async componentDidMount(){
        const books = (await axios('/api/books')).data;
        this.setState({books});
    }

    render(){
        const books = this.state.books;
        return (
            <div>
                {books.map(book=>{
                    return( 
                        <span key={book.id}>{book.name}<br></br></span>
                    )
                })}
            </div>
        );
    };

}

render(<App />, document.querySelector('#root'));