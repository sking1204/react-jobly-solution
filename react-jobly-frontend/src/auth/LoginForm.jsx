import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";
import JoblyApi from "../services/JoblyApi";


const LoginForm = ({ setToken, setUser }) => {

    const INITIAL_STATE = {
        username: "",
        password: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const token = await JoblyApi.login(formData);
            if(token) {
                setToken(token);
                setFormData(INITIAL_STATE);
                
                navigate("/");
            }

        } catch(error) {
            console.error(error);
        }
        
        
    };

    return (
        <section>
            <h1>Log In</h1>
            <Card>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor='username'>Username</label>
                    <input type="text" 
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" 
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </div>
                                        
                    <button>Submit</button>
                </form> 
            </CardBody>
        </Card>
        </section>
    );



};

export default LoginForm;








//OLD

// import {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import JoblyApi from '../services/JoblyApi';

// const LoginForm = () =>{
//     const INITIAL_STATE = {
//         username:'',
//         password:''
//     };

//     const [formData, setFormData] = useState(INITIAL_STATE);
//     const navigate = useNavigate();
//     // const [formErrors, setFormErrors] = useState([]);

//     /** Handle form submit:
//    *
//    * Calls login func prop and, if successful, redirect to /companies.
//    */

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     try{
//     let result = await JoblyApi.login(formData);
//      navigate("/companies");
     
//     } catch(err) {
//         console.error('Error during login:', err);
//         alert("Failed login attempt");
//     }
//   }

//   /** Update form data field */
//   function handleChange(evt) {
//     const { name, value } = evt.target;
//     setFormData(l => ({ ...l, [name]: value }));
//   }

//   return (
//       <div className="LoginForm">
//         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//           <h3 className="mb-3">Log In</h3>

//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Username</label>
//                   <input
//                       name="username"
//                       className="form-control"
//                       value={formData.username}
//                       onChange={handleChange}
//                       autoComplete="username"
//                       required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                       type="password"
//                       name="password"
//                       className="form-control"
//                       value={formData.password}
//                       onChange={handleChange}
//                       autoComplete="current-password"
//                       required
//                   />
//                 </div>

                

//                 <button
//                     className="btn btn-primary float-right"
//                     onSubmit={handleSubmit}
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

// export default LoginForm;









    //old
    //update form data field
//     function handleChange(evt){
//         const {name,value} = evt.target;
//         setFormData(formData =>(
//             {...formData,
//             [name]: value
//         }));    
//     };

//     const handleSubmit = async(evt) =>{
//         evt.preventDefault();
//         try{
//             const result = await JoblyApi.login(formData);
//             console.log('Response from login API:', result);
//             if(result.success){
//                 navigate("/companies")
//             }
           
            
          
//         }catch (err){
//             console.error('Error during login:', err);
//             alert("Failed login attempt");
//         }
//     };  
    
    
//     return(
//         <form onSubmit={handleSubmit} className="LoginForm">
//             <div>
//                 <label htmlFor="username">Username</label>
//                 <input
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 />           
              
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input 
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}                 
//                 />
//             </div>

//             <button>Submit</button>
            
//         </form>
        
//     )
// }

// export default LoginForm;