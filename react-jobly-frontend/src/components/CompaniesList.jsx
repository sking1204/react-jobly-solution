import React, { useState, useEffect } from 'react';
import JoblyApi from '../services/JoblyApi';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

function CompaniesList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function fetchCompanies() {
            const fetchedCompanies = await JoblyApi.getAllCompanies();
            setCompanies(fetchedCompanies);
        }

        fetchCompanies();
        
    }, []);

  /** Triggered by search form submit; reloads companies. */
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

    return (
        <div className="card-container">
            <SearchForm searchFor={search} />
            {companies.map(company => (
                <CompanyCard 
                key={company.id} company={company} />
            ))}
        </div>
    );
}

export default CompaniesList;