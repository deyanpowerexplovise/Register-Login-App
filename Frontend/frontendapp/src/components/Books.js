import React from "react";
import api from "../api/api";

class Books extends React.Component{

    state = {
        books: []
    };

    loadBooks = async () => {
        const response = await api.get('/api/books/', {
            headers: {
                Authorization: `Token ${this.props.token}`
            }
        });
        this.setState({books: response.data});
    }
  
    render(){
        return (
            <div className="books-component">
                <h1>Books</h1>
                {this.state.books.map(book => {
                    return <h3 key={book.id}>{book.title}</h3>
                })}
                <button onClick={this.loadBooks}>Load Books</button>
            </div>
        );   
    }
};

export default Books;