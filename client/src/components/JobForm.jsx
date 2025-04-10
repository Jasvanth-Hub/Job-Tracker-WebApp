import { useState } from 'react';
import { addJob } from '../api/jobAPI';

const JobForm = ({ onJobAdded }) => {
  const [form, setForm] = useState({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: '',
    link: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        ...form,
        appliedDate: new Date(form.appliedDate) // Convert to Date object
      };
      await addJob(jobData);
      onJobAdded();
      setForm({ company: '', role: '', status: 'Applied', appliedDate: '', link: '' });
    } catch (err) {
      console.error('Error adding job:', err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input name="appliedDate" type="date" value={form.appliedDate} onChange={handleChange} required />
      <input name="link" placeholder="Job Link" value={form.link} onChange={handleChange} required />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;