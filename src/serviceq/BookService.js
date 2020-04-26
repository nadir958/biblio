import axios from "axios";

class BookService{

    findBooks(){
        const data =axios.get('/books');
        console.log('Data from service',data);
        return data;
    }

    findBooksByTitle(title){
        return axios.get(`/books?title=${title}`);
    }
}

export const bookService = new BookService();