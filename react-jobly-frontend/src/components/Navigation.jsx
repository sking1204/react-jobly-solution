import React from "react";
// import "./NavBar.css";
import { Link,NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";


function Navigation({ user, setToken, setUser }) {

    const navigate = useNavigate();

    const handleLogout = () => {
        setToken('');
        setUser(null);
        navigate("/");
    }

    
      
        function loggedInNav() {
          return (
              <ul className="navbar-nav ml-auto">
                <li className="nav-right">
                  <NavLink className="nav-link" to="/companies">
                    Companies
                  </NavLink>
                </li>
                <li className="nav-right">
                  <NavLink className="nav-link" to="/jobs">
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-right">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-right">
                  <Link className="nav-link" to="/" onClick={handleLogout}>
                    Log out {user.first_name || user.username}
                  </Link>
                </li>
              </ul>
          );
        }
      
        function loggedOutNav() {
          return (
              <ul className="navbar-nav ml-auto">
                <li className="nav-right">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-right">
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
          );
        }

             return (
            <nav className="Navigation navbar navbar-expand-md">
              <Link className="home-nav-link" to="/">
                Jobly
              </Link>
              {user ? loggedInNav() : loggedOutNav()}
            </nav>
        );
      
 
      }
    
    
      export default Navigation;

    // return (
    //     <div>
    //       <Navbar className="navbar-container">
    //         <div className="navbar-links">
    //         <NavLink to="/" className="navbar-left">
    //           Jobly
    //         </NavLink>
    //         </div>
      
    //         {user && (
    //           <div className="navbar-links">
    //             <NavLink to="/companies" className="navbar-right">
    //               Companies
    //             </NavLink>
    //             <NavLink to="/jobs" className="navbar-right">
    //               Jobs
    //             </NavLink>
    //             <NavLink to="/profile" className="navbar-left">
    //               Profile
    //             </NavLink>
    //             <button onClick={() => handleLogout()} className="navbar-button">
    //               Log out {user.username}
    //             </button>
    //           </div>
    //         )}
    //         {!user && (
    //           <div className="navbar-links">
    //             <NavLink to="/login">Log In</NavLink>
    //             <NavLink to="/signup">Sign Up</NavLink>
    //           </div>
    //         )}
    //       </Navbar>
    //     </div>
    //   );
    // }

    // export default Navigation;
      

//   return (
//     <div>
//       <Navbar  className="navbar-container" >
//         <NavLink to="/" className="navbar-left">
//           Jobly
//         </NavLink>
        
//             { user && 
//                 <><Nav className="NavBar" >
//                       <NavItem >
//                           <NavLink to="/companies" className="navbar-right">Companies</NavLink>
//                       </NavItem>
//                       <NavItem>
//                           <NavLink  to="/jobs" className="navbar-right">Jobs</NavLink>
//                       </NavItem>
//                   </Nav>
//                   <Nav>
//                           <NavItem>
//                               <NavLink to="/profile" className="navbar-left">Profile</NavLink>
//                           </NavItem>
//                       </Nav><Nav className="nav-button" >
//                           <NavItem>
//                               <button onClick={() => handleLogout()}>
//                                 Log out {user.username}
//                               </button>
//                           </NavItem>
//                       </Nav></>
//             }
//             { !user &&
//                 <><Nav className="navbar-right">
//                 <NavItem>
//                     <NavLink to="/login">Log In</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="/signup">Sign Up</NavLink>
//                 </NavItem>
//             </Nav></>
//             }
            
//       </Navbar>
//     </div>
//   );
// }

// export default Navigation;

//old
// return (
//     <div>
//       <Navbar  className="navbar-container" >
//         <NavLink to="/" className="navbar-brand">
//           Jobly
//         </NavLink>
        
//             { user && 
//                 <><Nav className="ml-auto d-flex justify-content-between" navbar>
//                       <NavItem >
//                           <NavLink to="/companies">Companies</NavLink>
//                       </NavItem>
//                       <NavItem>
//                           <NavLink className="navlink" to="/jobs">Jobs</NavLink>
//                       </NavItem>
//                   </Nav>
//                   <Nav className="ml-auto" navbar>
//                           <NavItem>
//                               <NavLink to="/profile">Profile</NavLink>
//                           </NavItem>
//                       </Nav><Nav className="ml-auto" navbar>
//                           <NavItem>
//                               <button onClick={() => handleLogout()}>
//                                 Log out {user.username}
//                               </button>
//                           </NavItem>
//                       </Nav></>
//             }
//             { !user &&
//                 <><Nav className="ml-auto" navbar>
//                 <NavItem>
//                     <NavLink to="/login">Log In</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="/signup">Sign Up</NavLink>
//                 </NavItem>
//             </Nav></>
//             }
            
//       </Navbar>
//     </div>
//   );
// }

// export default Navigation;








