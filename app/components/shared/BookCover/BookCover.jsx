import React from "react";
import config from "../../../config";
const {API: {protocols, domain, imagePath}} = config;

const BackButton = () => (
    <div className="col-md-4">
        <div className="thumbnail">
            <img className="cover"
                 src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}${book.imageUrl}`}/>
        </div>
    </div>
)

export default BackButton;