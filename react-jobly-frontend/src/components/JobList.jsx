import React, { useEffect, useState } from 'react';
import JoblyApi from '../services/JoblyApi';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';


function JobList() {
    console.debug("JobList");
  
    const [jobs, setJobs] = useState(null);
  
    useEffect(() => {
      async function fetchJobs() {
          const fetchedJobs = await JoblyApi.getAllJobs();
          setJobs(fetchedJobs);
      }

      fetchJobs();
      
  }, []);
  
    /** Triggered by search form submit; reloads jobs. */
    async function search(title) {
      let jobs = await JoblyApi.getJob(title);
      setJobs(jobs);
    }
  
    if (!jobs) return <div> Loading ... </div>
  
    return (
        <div className="JobList col-md-8 offset-md-2">
          <SearchForm searchFor={search} />
          {jobs.length
              ? <JobCardList jobs={jobs} />
              : <p className="lead">Sorry, no results were found!</p>
          }
        </div>
    );
  }
  
  export default JobList;