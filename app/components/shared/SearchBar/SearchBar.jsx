import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = (props) => (
    <div className="row">
        <div className="col-sm-6 text-center">
            <form onSubmit={props.onSubmit}>
                <input type='text' placeholder="search..." onChange={props.filterBooks}
                       style={{ height: 37}} value={props.searchKey}/>
                   <span>
                        <Link to='/home'>
                            <input type="reset" value="X" className="btn btn-default"
                                   onClick={props.reset}/>
                        </Link>
                       {
                           props.searchKey ?
                           <Link to={`/search/${props.searchKey}`}>
                               <button className="btn btn-default" type="button">Go!</button>
                           </Link> : <Link to='/home'>
                               <button className="btn btn-default" type="button">Go!</button>
                           </Link>
                       }

                   </span>
            </form>
        </div>
    </div>
);

SearchBar.propTypes = {
    searchKey : PropTypes.string.isRequired,
    reset : PropTypes.func.isRequired,
    onSubmit : PropTypes.func.isRequired,
    filterBooks : PropTypes.func.isRequired
};

export default SearchBar;