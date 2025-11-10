import { Link } from "react-router-dom";
import HotelModal from "../HotelModal";

function LowerNav(){
    return(
        <div className="w-75 mb-2">
            <ul className="d-flex gap-1 m-0 p-0" style={{listStyle: "none"}}>
                <li><a href="/book-hotel" className="btn btn-custom"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">Hotels</a></li>
                <li><a href="/book-flight" className="btn btn-custom">Flights</a></li>
                <li><a href="#" className="btn btn-custom">Trains</a></li>
                <li><a href="#" className="btn btn-custom">Bus & Travel</a></li>
                <li><a href="#" className="btn btn-custom">Airport Transfer</a></li>
                <li><a href="#" className="btn btn-custom">Car Rental</a></li>
                <li><a href="/recreation" className="btn btn-custom">Things To Do</a></li>
                <li><a href="#" className="btn btn-custom">More</a></li>
            </ul>
            
        </div>
    )
}

export default LowerNav