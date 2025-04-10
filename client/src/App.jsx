import { useState } from 'react';
import './App.css';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div className="App">
      <h1>🎯 Student Job Tracker</h1>
      <JobForm onJobAdded={handleRefresh} />
      <JobList refreshFlag={refresh} />
    </div>
  );
}

export default App;
