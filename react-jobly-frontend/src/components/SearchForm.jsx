import {useState} from 'react';
import JoblyApi from '../services/JoblyApi';

function SearchForm ({searchFor}){

    const [searchTerm, setSearchTerm] = useState("");

    
    //function to update form fields
    function handleChange(evt){
        setSearchTerm(evt.target.value);
    }

   async function handleSubmit(evt){
    evt.preventDefault();
    // const resp = await JoblyApi.getAllCompanies(fetchCompanies);
    // setCompanies(resp);
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());

   }


    
    return(
        <div className="SearchForm mb-4">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
              className="form-control form-control-lg flex-grow-1"
              name="searchTerm"
              placeholder="Enter search term.."
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
}

export default SearchForm;