import React from 'react';
import { Link } from 'react-router-dom';

const GenericNotFound = ({
    params,
}) => (
        <div className="loader-container">
            <div className="content">
                <div className="title">404</div>
                <div className="subtitle">NOTHING FOUND</div>
                <div className="description">You are on the wrong path. <Link className="text-light" to="/">Try to navigate to Home</Link></div>
            </div>
        </div>
    );

export default GenericNotFound;
