import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import AllEventsPage from './pages/AllEvents';
import LabeledEventsPage from './pages/LabeledEvents';
import MapDashboardPage from './pages/MapDashboardPage';
import LoginForm from './LoginForm';
import ProgressListPage from './pages/ProgressListPage';
import LabeledEventsContext from './store/labeledEvents-context';


function App() {

  const labeledCtx = useContext(LabeledEventsContext);
  const apiKey = labeledCtx.apiKey;

  return (
    <div>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path='/allEvents' element={<AllEventsPage />} />
          <Route path='/labeledEvents' element={<LabeledEventsPage />} />
          <Route path='/map' element={<MapDashboardPage />} />
          <Route path='/progressList' element={<ProgressListPage />} />
          <Route path='/dashboard' element={<MapDashboardPage api={apiKey}/>} />
        </Routes>
    </div>
  );
}

export default App;
