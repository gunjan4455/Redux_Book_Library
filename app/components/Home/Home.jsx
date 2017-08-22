import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Book from '../shared/Book';
import SearchBar from '../shared/SearchBar';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchKey: '',
            noResultFound: false
        };
        this.filterBooks = this.filterBooks.bind(this);
        this.renderBook = this.renderBook.bind(this);
        this.reset = this.reset.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        if(this.props.match.url.includes('/search/'))
            this.props.getFilteredBooks(this.props.match.params.book);
        else
            this.props.getBooksAsync();
    }

    filterBooks(event) {
        this.setState({searchKey: event.target.value.toLowerCase()});
        this.props.getFilteredBooks(event.target.value.toLowerCase());
    }

    reset() {
        this.setState({searchKey : ''});
        this.props.getBooksAsync();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchKey}`);
    }

    renderBook(item, index) {
        return (
            <Book book={item} key={index} index={index}/>
        )
    }

    render() {
        let books = this.props.books && this.props.books.length && this.props.books.map(this.renderBook);
        return (
            <div>
                <section className="container bg-gray">
                    <div className="wraper">
                     <SearchBar filterBooks={this.filterBooks} reset={this.reset} searchKey={this.state.searchKey} onSubmit={this.onSubmit}/>
                        {
                            books &&
                            books.length ?
                            <div className="row" id="content">{books}</div> :
                            <div>No result found</div>
                        }
                    </div>
                </section>
            </div>
        )
    }
}

Home.propTypes = {
    getBooksAsync : PropTypes.func.isRequired,
    getFilteredBooks : PropTypes.func.isRequired,
    books : PropTypes.array.isRequired,
    history : PropTypes.object.isRequired
}

Home = withRouter(Home);
export default Home;

