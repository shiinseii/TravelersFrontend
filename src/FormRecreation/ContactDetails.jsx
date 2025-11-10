function ContactDetails({ totalPerson, setTotalPerson, formData, setFormData }) {
    return (
        <div className="bg-white py-2 shadow rounded">
            <p className="text-muted mx-3 p-0">Please fill in all fields correctly to ensure you receive the booking confirmation voucher in your email.</p>
            <hr />
            <div className="px-3 m-3">
                <div>
                    <label htmlFor="fullname" className="text-muted">Full Name (as in Passport/Official ID Card)</label>
                    <input className="form-control" 
                        type="text" 
                        placeholder="Name"
                        value={formData.fullname}
                        onChange={(e) => setFormData({...formData, fullname: e.target.value})} />
                    <p className="text-muted" style={{fontSize: "13px"}}>(Without title and punctuation)</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="email" className="text-muted">Email Address</label>
                        <input className="form-control" 
                            type="text" 
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        <p className="text-muted" style={{fontSize: "13px"}}>e.g. email@example.com</p>
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="text-muted">Phone Number</label>
                        <div className="input-group">
                            <select className="form-select" style={{maxWidth: "80px"}} aria-label="Default select example" >
                                <option value={"+62"}>+62</option>
                                <option value={"1"}>+81</option>
                                <option value={"2"}>+12</option>
                                <option value={"3"}>+68</option>
                            </select>
                            <input className="form-control"
                                type="text" 
                                placeholder=""
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        </div>
                        <p className="text-muted" style={{fontSize: "13px"}}>e.g. +62812345678, for Country Code (+62) and Mobile No. 0812345678</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="bookingDate" className="text-muted">Booking Date</label>
                        <input className="form-control" 
                            type="date" 
                            value={formData.bookingDate} 
                            onChange={(e) => setFormData({...formData, bookingDate: e.target.value})} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="totalPerson" className="text-muted">Total Person</label>
                        <input className="form-control" 
                            value={totalPerson} 
                            onChange={(e) => setTotalPerson(e.target.value)} 
                            type="number" 
                            placeholder="Total Person" />
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center mt-4">
                    <p className="text-primary fw-bold" style={{fontSize: "13px"}}>Make sure your identity and the dates are correct!</p>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails