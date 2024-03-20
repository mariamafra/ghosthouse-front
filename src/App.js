import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import AddProperty from './pages/AddProperty';
import ReservationCalendar from './pages/ReservationCalendar';
import PropertyDetailPage from './pages/PropertyDetailPage';
import MyReservations from './pages/MyReservations';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addProperty' element={<AddProperty />}/>
          <Route path='/propertyDetail/:id' element={<PropertyDetailPage />}/>
          <Route path='/calendar-reservation/:id' element={<ReservationCalendar />}/>
          <Route path='/my-reservations' element={<MyReservations />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
