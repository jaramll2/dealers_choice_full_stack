import React from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Summary = (props)=> {
    const id = props.match.params.id * 1;
    const book = props.books.find(book=> book.id === id);
    
    if(!book){
        return null;
    }

    return(
        <div>
            <div id ='summaryHeaders'>
                <h2>{book.name}</h2>
                <h3>by {book.author}</h3>
            </div>
            
            <Link to='/'>Back</Link>
            <hr/>

            <p id='summaryText'>{book.summary}</p>
        </div>
    );
};

export default connect(state=>state)(Summary);