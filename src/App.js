import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import AddProperty from './pages/AddProperty';
import ReservationCalendar from './pages/ReservationCalendar';
import PropertyDetailPage from './pages/PropertyDetailPage';
import MyReservations from './pages/MyReservations';
import MyProperties from './pages/MyProperties';
import ReservationDetailPage from './pages/ReservationDetailPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';

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
          <Route path='/my-properties' element={<MyProperties />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/reservation-confirmation/:id' element={<ReservationDetailPage />}/> {/* Precisa ser revisto, o ID precisa ser o da reserva*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
