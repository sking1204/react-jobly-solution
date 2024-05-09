import React, { useState, useEffect } from 'react';
import JoblyApi from '../services/JoblyApi';
import JobCard from './JobCard';


function JobCardList({ jobs, apply }) {
    console.debug("JobCardList", "jobs=", jobs);
  
    return (
        <div className="JobCardList">
          {jobs.map(job => (
              <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  salary={job.salary}
                  equity={job.equity}
                  companyName={job.companyName}
              />
          ))}
        </div>
    );
  }
  
  export default JobCardList;



// import JobCard from "./JobCard";

// //should be used by Jobslist and CompanyDetail to list jobs

// function JobCardList({jobs}){
    
//     return(
//         <div className ="JobCardList">
//             {jobs.map(job =>{
//                 <JobCard
//                 key={job.id}
//                 id={job.id}
//                 title={job.title}
//                 salary={job.salary}
//                 equity={job.equity}
//                 companyName={job.companyName}
//                 />
//             })}
//         </div>
//     )
// }

// export default JobCardList;