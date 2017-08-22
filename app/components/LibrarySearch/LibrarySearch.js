import React from "react";
import {renderBooksList} from "../../utility";
import SearchBar from "../shared/SearchBar";
import BackButton from '../shared/BackButton';

class LibrarySearch extends React.Component {
    constructor(props) {
        super(props);
        this.filterBooks = this.filterBooks.bind(this);
        this.reset = this.reset.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            searchKey: this.props.match.params.book
        }
    }

    componentDidMount() {
        //if (!this.props.books.length)
        this.props.getFilteredBooks(this.props.match.params.book);
    }

    filterBooks(event) {
        this.setState({searchKey: event.target.value.toLowerCase()});
    }

    reset() {
        this.setState({searchKey: ''});
        this.props.getBooksAsync();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.getFilteredBooks(this.state.searchKey);
        this.props.history.push(`/search/${this.state.searchKey}`);
    }

    render() {
        return (
            <section className="container bg-gray">
                <div className="wraper">
                    <BackButton/>
                    <SearchBar filterBooks={this.filterBooks} reset={this.reset} searchKey={this.state.searchKey}
                               onSubmit={this.onSubmit}/>
                    <h4>See your search results here...</h4>
                    {this.props.books.length ?
                        <div className="row" id="content">{renderBooksList(this.props.books)}</div> :
                        <div>No result found</div>
                    }
                </div>
            </section>
        )
    }
}

export default LibrarySearch;