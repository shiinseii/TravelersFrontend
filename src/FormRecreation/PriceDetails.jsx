function PriceDetails({ recreationName }) {
    return (
        <div className="bg-white p-3 shadow">
            <div className="my-2 px-3 pb-2">
                <h4>{recreationName}</h4>
                <div className="d-flex justify-content-between">
                    <p>Total Price</p>
                    <p>Rp 1.000.000</p>
                </div>
                <p className="m-0 p-0" style={{fontSize: "12px"}}>(1x) Entrance Ticket to Toriaezu Recreation</p>
                <p className="m-0 p-0" style={{fontSize: "12px"}}>(1x) Entrance Ticket to Toriaezu Recreation</p>
                <div className="d-flex justify-content-between mt-3">
                    <p>Taxes & Fees</p>
                    <p>Rp. 10.000</p>
                </div>
                <hr className="my-0" />
                <div className="d-flex justify-content-between mt-2">
                    <h4>Total Price</h4>
                    <h4 style={{color: "rgb(255, 102, 0)"}}>Rp. 1.010.000</h4>
                </div>
                <button type="submit" className="btn w-100 fs-4 fw-bold" style={{background: "rgb(255, 102, 0)", color: "white"}}>Continue To Payment</button>
            </div>
        </div>
    )
}

export default PriceDetails