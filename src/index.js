import React, {Component} from 'react';
import {connect, Provider} from "react-redux";
import { render } from 'react-dom';
import store, {loadBooks, deleteBook} from  './store';
import {HashRouter, Route} from 'react-router-dom';
import BookList from './BookList';
import Summary from './Summary';
import Form from './Form';

class App extends Component{
    async componentDidMount(){
        await this.props.startUp();
    }

    async destroy(book){
        await this.props.delete(book);
    }

    render(){
        const books = this.props.books;
        return (
            <HashRouter>
                <div id='container'>
                    <Route exact path='/' component={Form}/>
                    <Route exact path= '/' component={() => <BookList books={books} delete = {deleteBook} />}/>
                </div>
                <div id='summaryView'>
                    <Route path='/summary/:id' component={Summary}/>
                </div>
                
            </HashRouter>
        );
    };

}

const _App = connect(
    state=>state,
    (dispatch)=>{
        return{
            startUp: ()=>{
                dispatch(loadBooks());
            }
        }
    }
)(App);

render(<Provider store={store}><_App/></Provider>, document.querySelector('#root'));