import React from "react";
import {connect} from 'react-redux';
import {addBook} from './store';

class Form extends React.Component {
    constructor(){
        super();
        this.state ={
            name: '',
            author: '',
            summary: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(ev){
        ev.preventDefault();
    }

    onChange(ev){
        const change ={};
        change[ev.target.name] = ev.target.value;
        this.setState(change);
    }

    render(){
        const {name, author, summary} = this.state;
        const {onChange, onSubmit} = this;

        return(
            <div>
                <h3>Add A Book To The List</h3>
                <form id='form' onSubmit={onSubmit}>
                    <label htmlFor="name">Name:</label><br/>
                    <input type='text' value={name}id='name' name='name' onChange={ onChange}/><br/>

                    <label htmlFor="author">Author:</label><br/>
                    <input type='text' value={author} id='author' name='author' onChange={onChange}/><br/>

                    <label htmlFor="summary">Summary:</label><br/>
                    <input type='text' value={summary} id='summary' name='summary' onChange={onChange}/><br/>

                    <button disabled={!name || !author || !summary} onClick={()=>this.props.add({name:this.state.name, author:this.state.author, summary: this.state.summary})}>Submit</button>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        add: (book)=>{
            dispatch(addBook(book));
        }
    }
}

export default connect(state=>state,mapDispatchToProps)(Form);