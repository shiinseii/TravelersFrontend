import { Routes, Route } from "react-router-dom";
import Header from "./header/Header.jsx";
import FlightList from "./FlightList.jsx";
import HotelBookForm from "./HotelBookForm.jsx";
import "./css/App.css";
import FlightBook from "./FlightBook.jsx";
import RecreationBookForm from "./RecreationBookForm.jsx";
import RecreationList from "./RecreationList.jsx";
import RecreationDetail from "./RecreationDetail.jsx";
import HotelList from "./HotelList.jsx";
import HotelModal from "./HotelModal.jsx";
import RecreationModal from "./RecreationModal.jsx";

function App() {
  return (
    <>
      <Header />
      <HotelModal />
      <RecreationModal />
      {/* <RecreationBookForm /> */}
      <Routes>
        <Route path="/" element={<FlightList />} />
        <Route path="/book-flight" element={<FlightBook />} />
        <Route path="/book-hotel" element={<HotelBookForm />} />
        <Route path="/book-tour" element={<RecreationBookForm />} />
        <Route path="/recreation" element={<RecreationList />} />
        <Route path="/recreation-detail/:id" element={<RecreationDetail />} />
        <Route path="/hotels" element={<HotelList />} />
      </Routes>
      {/* <RecreationDetail /> */}
      {/* <HotelList /> */}
    </>
  );
}

export default App;
