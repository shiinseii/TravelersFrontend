function UpperNav() {
    return(
        <div className="d-flex align-items-center justify-content-between w-75">
            <h2><a href="/" className="text-decoration-none text-dark">Travelers</a></h2>
            <div className="d-flex gap-2 my-2 align-items-center">
                <ul className="d-flex gap-2 m-0 p-0 align-items-center" style={{listStyle: "none"}}>
                    <li><a href="#" className="btn btn-custom">IDR | EN</a></li>
                    <li><a href="#" className="btn btn-custom">Deals</a></li>
                    <li><a href="#" className="btn btn-custom">Support</a></li>
                    <li><a href="#" className="btn btn-custom">Partnerhips</a></li>
                    <li><a href="#" className="btn btn-custom">For Corporotes</a></li>
                    <li><a href="#" className="btn btn-custom">Booking</a></li>
                </ul>
                <div className="d-flex align-items-center gap-2">
                    <a href="#"className="btn btn-outline-primary">Log in</a>
                    <a href="#"className="btn btn-primary">Register</a>
                </div>
            </div>
        </div>
    )
}

export default UpperNav