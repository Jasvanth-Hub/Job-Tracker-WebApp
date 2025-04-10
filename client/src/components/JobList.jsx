import { useEffect, useState } from 'react';
import { getJobs } from '../api/jobAPI';
import JobCard from './JobCard';

const JobList = ({ refreshFlag }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      if (Array.isArray(res.data)) setJobs(res.data);
      else setJobs([]);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [refreshFlag]);

  useEffect(() => {
    let filtered = [...jobs];

    if (statusFilter !== 'All') {
      filtered = filtered.filter(job => job.status === statusFilter);
    }

    filtered.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
    setFilteredJobs(filtered);
  }, [statusFilter, jobs]);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Filter by Status: </label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs found for this filter.</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} onRefresh={fetchJobs} />
          ))
        )}
      </div>
    </div>
  );
};

export default JobList;