// import logo from './logo.svg';
import './App.css';
import AppRoutes from './components/AppRoutes'

function App() {
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;



//OLD

// import { useState, useEffect } from 'react';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import './App.css';
// import Homepage from './components/Homepage';
// import CompaniesList from './components/CompaniesList'; 
// import CompanyDetail from './components/CompanyDetail';
// import JobList from './components/JobList';
// import LoginForm from './auth/LoginForm';
// import Logout from './components/Logout';
// import SignupForm from './auth/SignupForm';
// import Navigation from './components/Navigation';
// import Profile from './components/Profile'
// import UserContext from './contexts/UserContext';
// import TokenContext from './contexts/TokenContext';
// import JoblyApi from './services/JoblyApi';
// import useLocalStorage from './hooks/useLocalStorage';
// import AppRoutes from './components/AppRoutes';
// // import jwt from "jsonwebtoken";
// import {jwtDecode} from "jwt-decode";

// // Key name for storing token in localStorage for "remember me" re-login
// export const TOKEN_STORAGE_ID = "jobly-token";





// function App() {
//   const [infoLoaded, setInfoLoaded] = useState(false);
//   const [applicationIds, setApplicationIds] = useState(new Set([]));
//   const [currentUser, setCurrentUser] = useState(null);
//   const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);


//   // Load user info from API. Until a user is logged in and they have a token,
//   // this should not run. It only needs to re-run when a user logs out, so
//   // the value of the token is a dependency for this effect.

//   useEffect(function loadUserInfo() {
//     console.debug("App useEffect loadUserInfo", "token=", token);

//     async function getCurrentUser() {
//       if (token) {
//         try {
//           let { username } = jwtDecode(token);
//           // put the token on the Api class so it can use it to call the API.
//           JoblyApi.token = token;
//           let currentUser = await JoblyApi.getCurrentUser(username);
//           setCurrentUser(currentUser);
//           setApplicationIds(new Set(currentUser.applications));
//         } catch (err) {
//           console.error("App loadUserInfo: problem loading", err);
//           setCurrentUser(null);
//         }
//       }
//       setInfoLoaded(true);
//     }

//     // set infoLoaded to false while async getCurrentUser runs; once the
//     // data is fetched (or even if an error happens!), this will be set back
//     // to false to control the spinner.
//     setInfoLoaded(false);
//     getCurrentUser();
//   }, [token]);

//   /** Handles site-wide logout. */
//   function logout() {
//     setCurrentUser(null);
//     setToken(null);
//   }

//   /** Handles site-wide signup.
//    *
//    * Automatically logs them in (set token) upon signup.
//    *
//    * Make sure you await this function and check its return value!
//    */
//   async function signup(signupData) {
//     try {
//       let token = await JoblyApi.signup(signupData);
//       setToken(token);
//       return { success: true };
//     } catch (errors) {
//       console.error("signup failed", errors);
//       return { success: false, errors };
//     }
//   }

//   /** Handles site-wide login.
//    *
//    * Make sure you await this function and check its return value!
//    */
//   async function login(loginData) {
//     try {
//       let token = await JoblyApi.login(loginData);
//       setToken(token);
//       return { success: true };
//     } catch (errors) {
//       console.error("login failed", errors);
//       return { success: false, errors };
//     }
//   }

//   /** Checks if a job has been applied for. */
//   function hasAppliedToJob(id) {
//     return applicationIds.has(id);
//   }

//   /** Apply to a job: make API call and update set of application IDs. */
//   function applyToJob(id) {
//     if (hasAppliedToJob(id)) return;
//     JoblyApi.applyToJob(currentUser.username, id);
//     setApplicationIds(new Set([...applicationIds, id]));
//   }

//   if (!infoLoaded) <div> Loading ...</div>




    
//     return (
//       <BrowserRouter>
//         <UserContext.Provider
//             value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
//           <div className="App">
//             <Navigation logout={logout} />
//             <AppRoutes login={login} signup={signup} />
//           </div>
//         </UserContext.Provider>
//       </BrowserRouter>
//   );
// }

// export default App
