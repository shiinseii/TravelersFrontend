import ContactDetails from "./FormHotel/ContactDetails";
import PriceDetails from "./FormHotel/PriceDetails";
import RightSide from "./FormHotel/RightSide";

import { useState } from "react";

function HotelBookForm() {
    const [formDataHotel, setFormDataHotel] = useState({
        fullname: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: ''
    });

    const handleSubmitHotel = async (e) => {
        e.preventDefault();
        console.log(formDataHotel);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataHotel),
        });
        const data = await res.json();
        console.log(data);

        setFormDataHotel({
            fullname: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: ''
        });
    };
    return (
        <form onSubmit={handleSubmitHotel}>
            <div className="container d-flex gap-3 align-items-start">
                <div className="col-7">
                    <ContactDetails
                        formDataHotel={formDataHotel}
                        setFormDataHotel={setFormDataHotel}
                         />
                    <PriceDetails />
                </div>
            </div>
        </form>
    );
}

export default HotelBookForm