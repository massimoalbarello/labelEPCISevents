import { Routes, Route } from 'react-router-dom';

import AllEventsPage from './pages/AllEvents';
import LabeledEventsPage from './pages/LabeledEvents';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllEventsPage />} />
        <Route path='/labeledEvents' element={<LabeledEventsPage />} />
      </Routes>
    </div>
  );
}

export default App;
