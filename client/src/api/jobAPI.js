import axios from 'axios';

const API_BASE = 'https://job-tracker-backend-2j77.onrender.com/api/jobs';
// const API_BASE = 'http://localhost:5000/api/jobs'; // Uncomment this line for local development

export const getJobs = () => axios.get(API_BASE);
export const addJob = (job) => axios.post(API_BASE, job);
export const updateJob = (id, updatedJob) => axios.put(`${API_BASE}/${id}`, updatedJob);
export const deleteJob = (id) => axios.delete(`${API_BASE}/${id}`);
