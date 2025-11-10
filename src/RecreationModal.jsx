import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useState } from "react";

function RecreationModal() {

    const [selectedCountry, setSelectedCountry] = useState("");
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    // Country and city data
    const data = {
        Indonesia: ["Bali", "Jakarta", "Bandung", "Surabaya"],
        Malaysia: ["Kuala Lumpur", "Penang", "Johor Bahru"],
        Singapore: ["Singapore"],
        Thailand: ["Bangkok", "Chiang Mai", "Phuket"],
        Vietnam: ["Hanoi", "Ho Chi Minh City", "Da Nang"],
    };

    // Handle country selection
    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        setCities(data[country] || []); // update city list
        setSelectedCity(""); // reset city selection
    };

    return (
        <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Search For Recreation
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-center gap-3">
                            <select name="country" 
                                className="form-select col mb-3"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                >
                                <option className="text-muted">Choose Country</option>
                                {Object.keys(data).map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                            <select name="city" 
                                className="form-select col mb-3"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                >
                                <option className="text-muted">Choose City</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input type="text" className="form-control" placeholder="Search for Recreation (optional)"/>
                        <a href='/recreation' className="btn btn-primary mt-3">Search</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecreationModal