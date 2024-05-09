import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';






//OLD
class JoblyApi {
    // static token;

    //   // Method to set the token
    static setToken(token) {
      JoblyApi.token = token;
    }

    static async getCompanies() {
        // Implementation of the method
        let res = await this.request("companies"); // Assuming 'request' is a method handling API calls
        return res.companies; // Or however the response is structured
    }

  /** Get companies (filtered by name if not undefined) */

  static async getCompany(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }

    // Method to get all jobs
    static async getAllJobs() {
        const response = await this.request("jobs"); // Adjust "jobs" if your endpoint is different
        return response.jobs; // Assuming the backend returns an object with a jobs array
    }

  /** Get list of jobs (filtered by title if not undefined) */

  static async getJob(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
  }

    static async request(endpoint, data = {}, method = "get") {
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get") ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
    static async login(data) {
        let res = await this.request(`auth/token`, data, "post");
        this.token = res.token; // Save the token
        return res.user; // Return user info
    }

    static async register(data) {
        let res = await this.request(`auth/register`, data, "post");
        this.token = res.token; // Save the token
        return res.user; // Return user info
    }

    // Update user profile
    static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.token; // Assuming the backend returns the updated user
    }

    // Method to apply to a job
    static async applyToJob(username, jobId) {
        let res = await this.request(`jobs/${jobId}/apply`, { username }, "post");
        return res.message; // Assuming the backend returns a confirmation message
    }
}

export default JoblyApi;