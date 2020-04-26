import React ,{useState} from 'react';

const BookSearch = ({onSearch})=> {
    const [searchValue, setSearchValue]= useState('');

    const divStyle = {
        marginTop: '20px'
    };
    const changeTitle =(event)=> {
        setSearchValue(event.target.value);
    }
    const searchBook = ()=>{
        onSearch(searchValue);
    }
    return(
       
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Book title" aria-label="Book title" aria-describedby="basic-addon2" style={divStyle} value={searchValue} onChange={changeTitle}/>
            <div class="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={divStyle} onClick={searchBook}>Search</button>
            </div>
        </div>

    )
};

export default BookSearch;