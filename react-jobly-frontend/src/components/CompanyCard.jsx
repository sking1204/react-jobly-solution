import React from 'react';
import {Link} from 'react-router-dom';

function CompanyCard({ company }) {
    return (
        <Link className="companycard" to = {`/companies/${company.handle}`}>
        <div className="card">
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            

        </div>
        </Link>
    );
}


export default CompanyCard;