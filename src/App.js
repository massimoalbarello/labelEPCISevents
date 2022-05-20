import { Routes, Route, Link } from 'react-router-dom';

import AllEventsPage from './pages/AllEvents';
import LabeledEventsPage from './pages/LabeledEvents';
import MapPage from './pages/MapPage';
import LoginForm from './LoginForm';
import ProgressListPage from './pages/ProgressListPage';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path='/allEvents' element={<AllEventsPage />} />
          <Route path='/labeledEvents' element={<LabeledEventsPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/overview' element={<ProgressListPage />} />
        </Routes>
    </div>
  );
}

export default App;
