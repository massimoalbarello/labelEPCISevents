import { Routes, Route } from 'react-router-dom';

import AllEventsPage from './pages/AllEvents';
import LabeledEventsPage from './pages/LabeledEvents';
import MapPage from './pages/MapPage';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllEventsPage />} />
        <Route path='/labeledEvents' element={<LabeledEventsPage />} />
        <Route path='/map' element={<MapPage />} />
      </Routes>
    </div>
  );
}

export default App;
