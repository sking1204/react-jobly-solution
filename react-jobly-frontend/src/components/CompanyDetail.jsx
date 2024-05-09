import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../services/JoblyApi'
import JobCardList from './JobCardList';


function CompanyDetail() {
    const { handle } = useParams(); // Get company handle or ID from URL
    const [company, setCompany] = useState(null);

    useEffect (function getCompanyAndJobsForUser(){
        async function getCompany () {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    // useEffect(() => {
    //     async function getCompany() {
    //         const fetchedCompany = await JoblyApi.getCompany(handle); // Fetch company details from API
    //         setCompany(fetchedCompany);
    //     }
    //     getCompany();
    // }, [companyName]);

    if (!company) return <div>Loading...</div>;

    return (
        <div>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    );
}

export default CompanyDetail;