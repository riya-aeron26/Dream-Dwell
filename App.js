
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreatingListing from "./pages/CreatingListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage />}/>
        <Route path="/register" element= {<RegisterPage />}/>
        <Route path="/login" element= {<LoginPage />}/>
        <Route path="/create-listing" element= {<CreatingListing />}/>
        <Route path="/properties/:listingId" element= {<ListingDetails />}/>
        <Route path="/properties/category/:category" element={<CategoryPage/>} />
        <Route path="/properties/search/:search" element={<SearchPage/>} />
        <Route path="/:userId/trips" element={<TripList />}/>
        <Route path="/:userId/properties" element= {<PropertyList/>}/>
        <Route path="/:userId/reservations" element= {<ReservationList/>}/>

      </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
