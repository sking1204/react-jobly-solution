import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import JoblyApi from "../services/JoblyApi";

const SignupForm = () =>{
    const INITIAL_STATE = {
        username:'',
        password:'',
        firstName:'',
        lastName:'',
        email:''
    };



    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const handleSubmit = async(evt) =>{
        evt.preventDefault();
        try{
            const user = await JoblyApi.signUp(formData);
            console.log('Response from login API:', user);
            // login(user);
            navigate('/')
        }catch (err){
            console.error('Error during login:', err);
            alert("Failed login attempt");
        }
    };  

    //update form data field
    function handleChange(evt){
        const {name,value} = evt.target;
        setFormData(formdata =>(
            {...formdata,
            [name]: value
        }));    
    };

    
    
    
    return(
        <form onSubmit={handleSubmit} className="SignupForm">
            <div>
                <label htmlFor="username">User name</label>
                <input 
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}                 
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}                 
                />
            </div>
            <div>
                <label htmlFor="firstName">First name</label>
                <input 
                type="text"                 
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}                 
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input 
                type="text"                 
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}                 
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email"                 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}                 
                />
            </div>

            <button>Submit</button>
            
        </form>
        
    )
}

export default SignupForm;