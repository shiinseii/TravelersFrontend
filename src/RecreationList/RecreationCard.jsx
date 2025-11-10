import { Link } from "react-router-dom";

function RecreationCard({ id, image, name, price }) {
    return (
        <Link to={`/recreation-detail/${id}`}
            onClick={() => window.scrollTo(0, 0)} 
            className="card border-0 shadow bg-light text-decoration-none" 
            style={{backgroundColor: "none", width: "285px"}}>
            <div className="card-img" style={{width: "100%", objectFit: "cover", height: "150px"}}>
                <img src={image}
                    alt="img here" />
            </div>
            <div className="card-body">
                <p className="fw-bold my-0">{name}</p>
                <p className="text-decoration-line-through my-0" style={{color: "gray", fontSize: "14px"}}>Rp. 400000</p>
                <p className="fs-6" style={{color: "#FF6600"}}>Rp. {price}</p>
            </div>
        </Link>
    )
}

export default RecreationCard