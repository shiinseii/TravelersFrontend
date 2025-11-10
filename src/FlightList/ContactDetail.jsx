

function ContactDetail() {
    return (
        <div className="bg-white pb-2" style={{borderRadius: "20px"}}>
            <div className="w-100 m-0 p-2 bg-primary text-white h3" style={{borderRadius: "20px 20px 0px 0px"}}>
                Toriaezu Hoteru
            </div>
            <h4 className="m-3">Contact Details (For E-Voucher)</h4>
            <p className="text-muted m-3">Please fill in all fields correctly to ensure you receive the booking confirmation voucher in your email.</p>
            <div className="p-3 m-3" style={{backgroundColor: "#f5fafd", borderRadius: "20px"}}>
                <div>
                    <label htmlFor="name" className="text-muted">Full Name (as in Passport/Official ID Card)</label>
                    <input className="form-control" type="text" placeholder="Name" />
                    <p className="text-muted" style={{fontSize: "13px"}}>(Without title and punctuation)</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name" className="text-muted">Email Address</label>
                        <input className="form-control" type="text" placeholder="Name" />
                        <p className="text-muted" style={{fontSize: "13px"}}>e.g. email@example.com</p>
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="text-muted">Phone Number</label>
                        <div className="input-group">
                            <select className="form-select" style={{maxWidth: "80px"}} aria-label="Default select example" >
                                <option selected>+62</option>
                                <option value="1">+81</option>
                                <option value="2">+12</option>
                                <option value="3">+68</option>
                            </select>
                            <input className="form-control" type="text" placeholder="" />
                        </div>
                        <p className="text-muted" style={{fontSize: "13px"}}>e.g. +62812345678, for Country Code (+62) and Mobile No. 0812345678</p>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="checkInDate" className="text-muted">Flight Date</label>
                        <input className="form-control" type="date" />
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center mt-4">
                    <p className="text-primary fw-bold" style={{fontSize: "13px"}}>Make sure your identity and the dates are correct!</p>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail