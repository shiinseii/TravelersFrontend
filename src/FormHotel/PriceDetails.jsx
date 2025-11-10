
function PriceDetails() {
    return (
        <div className="bg-white my-3 p-3" style={{borderRadius: "20px"}}>
            <h4>Price Details</h4>
            <p className="text-primary fw-bold" style={{fontSize: "12px"}}>Don’t miss the chance! Log in now to enjoy our exclusive new user coupon and save up to Rp1.000.000 on your first booking!</p>
            <div className="d-flex justify-content-between">
                <p>Total Price</p>
                <p>Rp 1.000.000</p>
            </div>
            <p style={{fontSize: "12px"}}>(1x) Superior - Best Deal Room Only (1 night)</p>
            <div className="d-flex justify-content-between">
                <p>Taxes & Fees</p>
                <p>Rp. 10.000</p>
            </div>
            <hr className="my-0" />
            <div className="d-flex justify-content-between mt-2">
                <h4>Total Price</h4>
                <h4 style={{color: "rgb(255, 102, 0)"}}>Rp. 1.010.000</h4>
            </div>
                <button className="btn w-100 fs-4 fw-bold" 
                    style={{background: "rgb(255, 102, 0)", color: "white"}}
                    type="submit"
                    >Continue To Payment</button>
        </div>
    );
}

export default PriceDetails