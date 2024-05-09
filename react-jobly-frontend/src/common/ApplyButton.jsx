import { useContext, useState, useEffect } from "react";
import JoblyApi from "../services/JoblyApi";
import UserContext from "../contexts/UserContext";

const ApplyButton = ({ username, jobId, jobsAppliedTo }) => {

    const [applied, setApplied] = useState(false);
    const { hasAppliedToJob, applyToJob } = useContext(UserContext); 

    

    useEffect(function updateAppliedStatus() {
        console.debug("JobCard useEffect updateAppliedStatus", "id=", jobId);
    
        setApplied(hasAppliedToJob(jobId));
      }, [jobId, hasAppliedToJob]);

    async function handleApply() {
        try {
            if (hasAppliedToJob(jobId)) return;
            applyToJob(jobId);
            setApplied(true);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <button disabled={applied} onClick={handleApply}>
            {applied ? "APPLIED" : "APPLY"}
            </button>
    );



}
export default ApplyButton;