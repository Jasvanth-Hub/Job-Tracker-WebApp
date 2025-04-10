const Job = require('../models/Job');

// Add new job
const addJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json({
      message: 'Jobs fetched successfully',
      data: jobs,
    })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update job
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete job
const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addJob, getJobs, updateJob, deleteJob };
