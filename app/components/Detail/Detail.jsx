import React from "react";
import {Link} from 'react-router-dom'
import DetailModal from "../shared/DetailModal";
import ConfirmationModal from "../shared/ConfirmationModal";
import config from "../../config";
const {API: {protocols, domain, imagePath}} = config;
import PropTypes from 'prop-types';

class Detail extends React.PureComponent {
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
        this.setState({
            book : nextProps.book
        });
        if (nextProps.isSuccess)
            this.setState({
                showDetailModal: false
            });
        setTimeout(() => {
            this.props.isSuccessAction();
        }, 2000);
    }

    render() {
        let book = this.state.book.id ? this.state.book : this.props.book;
        return (
            <section className="container bg-gray">
                <div className="row">
                    <Link to='/'>
                        <div>
                            <img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}back_button.jpg`}
                                 className="back-button"/>
                        </div>
                    </Link>

                    <div className="col-md-4">
                        <div className="thumbnail">
                            <img className="cover"
                                 src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}${book.imageUrl}`}/>
                        </div>
                    </div>
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

Detail.propTypes = {
    book : PropTypes.object.isRequired,
    isSuccess : PropTypes.bool,
    isSuccessAction : PropTypes.func.isRequired,
    editBookById : PropTypes.func.isRequired,
    getBookById : PropTypes.func.isRequired
}

export default Detail;

