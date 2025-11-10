import "./css/Body.css";

function Card() {
    return (
        <div className="card">
            <div className="card-img">
                <img src="https://images.unsplash.com/photo-1551322120-c697cf88fbdc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" />
            </div>
            <div className="card-body">
                <div style={{fontWeight: "bold", fontSize: "15px"}}>
                    Flight Name
                </div>
                <div style={{fontSize: "13px", color: "gray"}}>
                    Date
                </div>
                <div style={{fontSize: "15px", color: "rgb(255, 102, 0)"}}>
                    Rp. 1.500.000
                </div>
            </div>
        </div>
    );
}

export default Card;