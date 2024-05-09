import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Homepage from "./Homepage";
import LoginForm from "../auth/LoginForm"
import SignupForm from "../auth/SignupForm";
import Profile from "./Profile";
// import NotFound from "./NotFound";
import Navigation from "./Navigation";
import JobList from "./JobList";
import CompaniesList from "./CompaniesList";
import CompanyDetail from "./CompanyDetail";
import JoblyApi from "../services/JoblyApi";
import useLocalStorage from "../hooks/useLocalStorage";
import TokenContext from "../contexts/TokenContext"
import UserContext from "../contexts/UserContext";


const AllRoutes = () => {

    //const [token, setToken] = useState();
    const [token, setToken] = useLocalStorage('token', null);
    const [user, setUser] = useState(null);
    const [applicationIds, setApplicationIds] = useState(new Set([]));



    function hasAppliedToJob(id) {
        return applicationIds.has(id);
    }

  /** Apply to a job: make API call and update set of application IDs. */
    function applyToJob(id) {
        if (hasAppliedToJob(id)) return;
        JoblyApi.applyToJob(user.username, id);
        setApplicationIds(new Set([...applicationIds, id]));
    }

 
    useEffect( () => {
        async function getCurrentUser() {
            if(!token) return;
            if(!JoblyApi.token) {
                JoblyApi.token = token;
            }
            try {
                console.log("TOKEN", token);
                const decoded = jwtDecode(token);
                let res = await JoblyApi.getUser(decoded.username);
                setUser(res);
                setApplicationIds(new Set(res.applications));
            } catch(error) {
                console.error(error);
            }
        }
        getCurrentUser();
    }, [token]);

    return (
        <BrowserRouter>
        <Navigation user={user} setToken={setToken} setUser={setUser} />
        <main>
        <TokenContext.Provider value={token}>
        <UserContext.Provider 
        value={{user, setUser, hasAppliedToJob, applyToJob }}>
        <Routes>
            <Route path="/" element={<Homepage user={user} />} />
            <Route exact path="/companies" element={<CompaniesList />}/>
            <Route exact path="/companies/:handle" element={<CompanyDetail />}/>
            <Route exact path="/jobs" element={<JobList />}/>
            <Route path="/login" element={<LoginForm setToken={setToken} setUser={setUser} />}/>             
            <Route path="/signup" element={<SignupForm setToken={setToken} setUser={setUser} />}/>
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </UserContext.Provider>
        </TokenContext.Provider>
        </main>
      </BrowserRouter>
    )



};

export default AllRoutes;










//OLD
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import CompaniesList from "./CompaniesList";
// import CompanyDetail  from "./CompanyDetail"
// import JobList from "./JobList";
// import JobCardList from "./JobCardList"; 
// import LoginForm from "../auth/LoginForm";
// import SignupForm from "../auth/SignupForm";
// import Profile from "./Profile";
// import Homepage from "./Homepage";
// import Logout from "./Logout";
// import { useContext } from "react";
// import Navbar from "./Navigation";
// // import UserContext from "./context/UserContext";
// // import ProtectedRoutes from "./components/ProtectedRoutes";

// /** Site-wide routes.
//  *
//  * Parts of site should only be visitable when logged in. Those routes are
//  * wrapped by <PrivateRoute>, which is an authorization component.
//  *
//  * Visiting a non-existant route redirects to the homepage.
//  */

// function AppRoutes({ login, signup }) {
  

//   return (
//       <div className="pt-5">
       
//         <Routes> 
//           <Route path="/" element={<Homepage />} />           
//           <Route path="/login" element={<LoginForm />} />           
//           <Route path="/signup" element={<SignupForm />} />           
//           <Route path="/logout" element={<Logout />} />           
//           <Route path="/companies" element={<CompaniesList />} />           
//           <Route path="/companies:handle" element={<CompanyDetail />} />           
//           <Route path="/jobs" element={<JobList />} />           
//           <Route path="/profile" element={<Profile />} />           

//         </Routes>
      
//       </div>
//   );
// }

// export default AppRoutes;















