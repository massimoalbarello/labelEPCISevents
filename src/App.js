import { Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';

let meetupsList = [
  {
      id: 1,
      name: 'Meetup 1',
      description: 'This is the first meetup',
      location: 'New York',
      date: '2020-01-01',
      time: '10:00',
      image: 'https://picsum.photos/200/300',
  },
  {
      id: 2,
      name: 'Meetup 2',
      description: 'This is the second meetup',
      location: 'San Francisco',
      date: '2020-01-01',
      time: '10:00',
      image: 'https://picsum.photos/200/300',  
  }
]

function addMeetupCallback(meetup) {
  meetupsList.push(meetup);
}

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage meetups={meetupsList}/>} />
        <Route path='/new-meetup' element={<NewMeetupsPage addMeetupHandler={addMeetupCallback}/>} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
