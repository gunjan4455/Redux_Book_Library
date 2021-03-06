import React from "react";
import DetailModal from "../shared/DetailModal";
import ConfirmationModal from "../shared/ConfirmationModal";
import BackButton from '../shared/BackButton';
import BookCover from '../shared/BookCover';

class LibraryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {},
            showDetailModal: false,
            showConfirmation: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        if (this.props.books && this.props.books.length) {
            let book = this.props.books.filter((book) => (book.id === this.props.match.params.id));
            this.setState({book: book[0]});
        }
        if (!this.props.book || !this.props.book.id)
            this.props.getBookById(this.props.match.params.id);
        this.setState({showConfirmation: this.props.isSuccess});
    }

    closeModal() {
        this.setState({showDetailModal: false})
    }

    showInfo() {
        this.setState({showDetailModal: !this.state.showDetailModal})
    }

    onEdit(formData) {
        this.props.editBookById(this.props.match.params.id, formData);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSuccess)
            this.setState({showDetailModal: false});
        setTimeout(() => {
            this.props.isSuccessAction();
        }, 2000);
    }

    render() {
        let book = this.state.book.id ? this.state.book : this.props.book;
        return (
            <section className="container bg-gray">
                <div className="row">
                    <BackButton/>
                    <BookCover image={book.imageUrl}/>
                    <div className="col-md-6 detail-mid-box">
                        <h3>{book.title}</h3>
                        <h5>By {book.author}</h5>
                        <p>{book.description}</p>
                    </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-default corner-bottom" onClick={this.showInfo}>
                            Edit
                        </button>
                    </div>
                    {this.state.showDetailModal &&
                    <DetailModal onHideModal={this.closeModal} book={book} onEdit={this.onEdit}/>
                    }
                    {this.props.isSuccess &&
                    <ConfirmationModal message="Successfully edited" onHideModal={this.closeModal}/>
                    }
                </div>
            </section>
        )
    }
}

export default LibraryDetail

