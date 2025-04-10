import { deleteJob, updateJob } from '../api/jobAPI';

const JobCard = ({ job, onRefresh }) => {
  const handleDelete = async () => {
    await deleteJob(job._id);
    onRefresh();
  };

  const handleStatusChange = async (e) => {
    await updateJob(job._id, { ...job, status: e.target.value });
    onRefresh();
  };

  return (
    <div className="job-card">
      <h3>{job.company} — {job.role}</h3>
      <p>
        Status:
        <select value={job.status} onChange={handleStatusChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </p>
      <p>Applied On: {new Date(job.appliedDate).toLocaleDateString()}</p>
      <p><a href={job.link} target="_blank" rel="noreferrer">View Job Posting</a></p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobCard;
