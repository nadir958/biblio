import axios from "axios";

class BookService{

    findBooks(){
        return axios.get('/books');
    }

    findBookById(bookId){
        return axios.get(`/books/${bookId}`);
    }

    findBooksByTitle(title){
        return axios.get(`/books?title=${title}`);
    }

    editBook(book){
        return axios.put(`/books/${book.id}`, book);
    }

    createBook(book){
        return this.findBooks().then(resp =>{
            var id = resp.data[resp.data.length-1].id;
            book['id'] = ++id;            
            return axios.post('/books',book)
            
        } )
    }
}

export const bookService = new BookService();