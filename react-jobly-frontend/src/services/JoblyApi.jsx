import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3001';

class JoblyApi {
    // the token for interactive with the API will be stored here.
    static token;
  
    static async request(endpoint, data = {}, method = "get") {
      console.debug("API Call:", endpoint, data, method);
  
      //there are multiple ways to pass an authorization token, this is how you pass it in the header.
      //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
      const url = `${BASE_URL}/${endpoint}`;
      const headers = { Authorization: `Bearer ${JoblyApi.token}` };
      const params = (method === "get")
          ? data
          : {};
  
      try {
        return (await axios({ url, method, data, params, headers })).data;
      } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    // Individual API routes
  
    /** Get details on a company by handle. */
  
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }
  
    static async getAllCompanies() {
      let res = await this.request(`companies/`);
      return res.companies;
    }
  
    /**Search for a company by specific parameters */
    static async searchCompanies(formData) {
      let query = []
      if(formData.term) {
        query.push(`name=${formData.term}`);
      }
      if(formData.minEmployees) {
        query.push(`minEmployees=${formData.minEmployees}`);
      }
      if(formData.maxEmployees) {
        query.push(`maxEmployees=${formData.maxEmployees}`);
      }
      let url = "companies?" + query.join("&");
  
      let res = await this.request(url);
      return res.companies;
    }
  
    /** Create a new company using an object with relevant data */
    static async createCompany(company) {
      let res = await this.request(`companies/`, company, "post");
      return res.statusCode;
    }
  
    /** Get details on a job by id */
    static async getJob(id) {
      let res = await this.request(`jobs/${id}`);
      return res.job;
    }
  
    static async getAllJobs() {
      let res = await this.request(`jobs/`);
      return res.jobs;
    }
  
    /**Search for a job by specific parameters */
    static async searchJobs(formData) {
      let query = []
      console.log(formData);
      if(formData.term) {
        query.push(`title=${formData.term}`);
      }
      if(formData.minSalary) {
        query.push(`minSalary=${formData.minSalary}`);
      }
      if(formData.hasEquity) {
        query.push(`hasEquity=${formData.hasEquity}`);
      }
      //let url = "jobs/search?" + query.join("&");
      let url = "jobs?" + query.join("&");
      
      let res = await this.request(url);
      return res.jobs;
    }
  
    /** Create a new job using an object with relevant data */
    static async createJob(job) {
      let res = await this.request(`jobs/`, job, "post");
      return res.statusCode;
    }
  
    static async login(credentials) {
      let res = await this.request("auth/token/", credentials, "post");
      JoblyApi.token = res.token;
      return res.token;
    }
  
    static async signUp(data) {
      let res = await this.request("auth/register/", data, "post");
      JoblyApi.token = res.token;
      return res.token;
    }
  
    static async getUser(username) {
      let res = await this.request(`users/${username}`);
      return res.user;
    }
  
    static async patchUser(username, data) {
      let res = await this.request(`users/${username}`, data, "patch");
      console.log("API RESPONSE", res);
      return res;
    }
  
    static async applyToJob(username, jobId) {
      let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
      return res;
    }
  
    // obviously, you'll add a lot here ...
  }
  
  // for now, put token ("testuser" / "password" on class)
  // JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  
  export default JoblyApi;






//old sb version:

// class JoblyApi {
//     // the token for interactive with the API will be stored here.
//     static token;
  
//     static async request(endpoint, data = {}, method = "get") {
//       console.debug("API Call:", endpoint, data, method);
  
//       const url = `${BASE_URL}/${endpoint}`;
//       const headers = { Authorization: `Bearer ${JoblyApi.token}` };
//       const params = (method === "get")
//           ? data
//           : {};
  
//       try {
//         return (await axios({ url, method, data, params, headers })).data;
//       } catch (err) {
//         console.error("API Error:", err.response);
//         let message = err.response.data.error.message;
//         throw Array.isArray(message) ? message : [message];
//       }
//     }
  
//     // Individual API routes
  
//     /** Get the current user. */
  
//     static async getCurrentUser(username) {
//       let res = await this.request(`users/${username}`);      
//       return res.user;
//     }
  
//     /** Get companies (filtered by name if not undefined) */
  
//     static async getCompanies(name) {
//       let res = await this.request("companies", { name });
//       return res.companies;
//     }
  
//     /** Get details on a company by handle. */
  
//     static async getCompany(handle) {
//       let res = await this.request(`companies/${handle}`);
//       return res.company;
//     }
  
//     /** Get list of jobs (filtered by title if not undefined) */
  
//     static async getJobs(title) {
//       let res = await this.request("jobs", { title });
//       return res.jobs;
//     }
  
//     /** Apply to a job */
  
//     static async applyToJob(username, id) {
//       await this.request(`users/${username}/jobs/${id}`, {}, "post");
//     }
  
//     /** Get token for login from username, password. */
  
//     static async login(data) {
//       let res = await this.request(`auth/token`, data, "post");
//       return res.token;
//     }
  
//     /** Signup for site. */
  
//     static async signup(data) {
//       let res = await this.request(`auth/register`, data, "post");
//       return res.token;
//     }
  
//     /** Save user profile page. */
  
//     static async saveProfile(username, data) {
//       let res = await this.request(`users/${username}`, data, "patch");
//       return res.user;
//     }
//   }
  
  
//   export default JoblyApi;
  




//OLD

// class JoblyApi {
//     static token;

//     static async getCompanies() {
//         // Implementation of the method
//         let res = await this.request("companies"); // Assuming 'request' is a method handling API calls
//         return res.companies; // Or however the response is structured
//     }

//     static async getCompany(handle) {
//         let res = await this.request(`companies/${handle}`);
//         return res.company;
//       }

//     // Method to get all jobs
//     static async getJobs() {
//         const response = await this.request("jobs"); // Adjust "jobs" if your endpoint is different
//         return response.jobs; // Assuming the backend returns an object with a jobs array
//     }

//     static async request(endpoint, data = {}, method = "get") {
//         const url = `${BASE_URL}/${endpoint}`;
//         const headers = { Authorization: `Bearer ${JoblyApi.token}` };
//         const params = (method === "get") ? data : {};

//         try {
//             return (await axios({ url, method, data, params, headers })).data;
//         } catch (err) {
//             console.error("API Error:", err.response);
//             let message = err.response.data.error.message;
//             throw Array.isArray(message) ? message : [message];
//         }
//     }

//     static async getCurrentUser(username) {
//         let res = await this.request(`users/${username}`);
//         return res.user;
//       }

//     static async login(data) {
//         let res = await this.request(`auth/token`, data, "post");
//         this.token = res.token; // Save the token
//         return res.user; // Return user info
//     }

//     static async register(data) {
//         let res = await this.request(`auth/register`, data, "post");
//         this.token = res.token; // Save the token
//         return res.user; // Return user info
//     }

//     // Update user profile
//     static async updateProfile(username, data) {
//         let res = await this.request(`users/${username}`, data, "patch");
//         return res.user; // Assuming the backend returns the updated user
//     }

//     // Method to apply to a job
//     static async applyToJob(username, jobId) {
//         let res = await this.request(`jobs/${jobId}/apply`, { username }, "post");
//         return res.message; // Assuming the backend returns a confirmation message
//     }
// }

// // JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
// //     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
// //     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

// export default JoblyApi;