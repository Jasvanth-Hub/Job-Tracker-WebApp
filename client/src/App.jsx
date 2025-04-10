import { useState } from 'react';
import './App.css';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => setRefresh((prev) => prev + 1);  

  return (
    <div className="App">
      <h1 className="heading">🎯 Student Job Tracker</h1>
      <JobForm onJobAdded={handleRefresh} />
      <JobList refreshFlag={refresh} />
    </div>
  );
}

export default App;