import axios from "axios";

const api = axios.create({
  // baseURL: "https://job-listing-mern.herokuapp.com/",
  baseURL: "http://localhost:8000",
});

const getAllJobs = () => api.get("jobs");

const getJob = (id) => api.get(`jobs/${id}`);

const deleteJob = (id) => api.delete(`jobs/${id}`);

const createJob = (newJob) => api.post("jobs", newJob);

const filterJob = (conditions) =>
  api.post(`jobs/query/`, conditions);

export { getAllJobs, deleteJob, createJob, getJob, filterJob };
