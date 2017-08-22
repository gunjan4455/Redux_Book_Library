import React from 'react';
import {Link} from 'react-router-dom';
import Book from '../shared/Book';
import {getBooksAsync,getFilteredBooks} from '../../actions';
import config from "../../config";
const {API: {protocols, domain, imagePath}} = config;

class LibrarySearch extends React.Component {
    constructor(props) {
        super(props);
        this.filterBooks = this.filterBooks.bind(this);
        this.reset = this.reset.bind(this);
        console.log("heree==")
    }

    componentDidMount() {
        //if (!this.props.books.length)
            this.props.getFilteredBooks(this.props.match.params.book);
    }

    filterBooks(event) {
        var updatedList = this.props.books;
        updatedList = updatedList.filter(function (book) {
            return book.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.props.getFilteredBooks(event.target.value.toLowerCase());
    }

    renderBook(item, index) {
        return (
            <Book book={item} key={index} index={index}/>
        )
    }

    reset() {
        this.props.getBooksAsync();
    }

    render() {
        let books = this.props.books && this.props.books.length && this.props.books.map(this.renderBook);
        return (
            <section className="container bg-gray">
                <div className="wraper">
                    <div className="row">
                        <Link to='/'>
                            <div>
                                <img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}back_button.jpg`}
                                     className="back-button"/>
                            </div>
                        </Link>

                        <div className="col-sm-6 text-center">
                            <div>
                                <form>
                                    <input type='text' placeholder="search..." onChange={this.filterBooks}
                                           style={{ height: 37}} defaultValue={this.props.match.params.book}/>
                                               <span>
                                                    <input type="reset" value="X" className="btn btn-default"
                                                           onClick={this.reset}/>
                                               </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    {books.length && <div className="row" id="content">
                        {books}
                    </div>
                    }
                    {!books.length && <div>No result found</div>}
                </div>
            </section>
        )
    }
}

export default LibrarySearch;