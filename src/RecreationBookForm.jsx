import { useState } from "react"
import ContactDetails from "./FormRecreation/ContactDetails"
import PersonDetails from "./FormRecreation/PersonDetails"
import PriceDetails from "./FormRecreation/PriceDetails"
import { useLocation } from "react-router-dom"

function RecreationBookForm() {
    const location = useLocation();
    const { recreationId, recreationName, ticketName, ticketPrice } = location.state || {}

    console.log("booking Data: ", recreationId, recreationName, ticketName, ticketPrice);

    const [totalPerson, setTotalPerson] = useState(1)

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        bookingDate: '',
        persons: [{
            name: '',
            type: 'Adult'
        }]
    });

    const handleChange = (value) => {
        const num = Number(value);
        setTotalPerson(num);
        setFormData((prev) => {
            const diff = num - prev.persons.length;
            let persons = [...prev.persons];
            if (diff > 0) {
                persons = persons.concat(Array(diff).fill({ name: "", type: "Adult" }));
            } else if (diff < 0) {
                persons = persons.slice(0, num);
            }
            return { ...prev, persons };
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);

        setFormData({
            fullname: '',
            email: '',
            phone: '',
            bookingDate: '',
            persons: [{
                name: '',
                type: ''
            }]
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container d-flex gap-3 justify-content-center align-items-start">
                <div className="col-6">
                    <h3>Contact Details</h3>
                    <ContactDetails 
                        totalPerson={totalPerson} 
                        setTotalPerson={handleChange}
                        formData={formData}
                        setFormData={setFormData} 
                        />
                    <h3 className="mt-4">Person Details</h3>
                    <PersonDetails 
                        totalPerson={totalPerson}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
                <div className="col-4">
                    <h3>Price Details</h3>
                    <PriceDetails
                        recreationName={recreationName} />
                </div>
            </div>
        </form>
    )
}

export default RecreationBookForm