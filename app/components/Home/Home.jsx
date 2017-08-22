import React from "react";
import SearchBar from "../shared/SearchBar";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {renderBooksList} from "../../utility";

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchKey: '',
            noResultFound: false
        };
        this.filterBooks = this.filterBooks.bind(this);
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
        //this.props.getFilteredBooks(event.target.value.toLowerCase());
    }

    reset() {
        this.setState({searchKey : ''});
        this.props.getBooksAsync();
    }

    onSubmit(e) {
        e.preventDefault();
        if(!this.state.searchKey)
            return;

        this.props.history.push(`/search/${this.state.searchKey}`);
    }

    render() {
        return (
            <div>
                <section className="container bg-gray">
                    <div className="wraper">
                     <SearchBar filterBooks={this.filterBooks} reset={this.reset} searchKey={this.state.searchKey} onSubmit={this.onSubmit}/>
                        {this.props.books && this.props.books.length ?
                            <div className="row" id="content">{renderBooksList(this.props.books)}</div> :
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
};

Home = withRouter(Home);
export default Home;

