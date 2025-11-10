import React from "react";

export default function HotelList() {
  const hotels = [
    {
      id: 1,
      name: "Sunset Paradise Resort",
      location: "Kuta, Bali",
      rating: 8.7,
      reviews: 420,
      description:
        "Experience the serene beauty of Bali at Sunset Paradise Resort, offering a relaxing stay with modern amenities and a tropical atmosphere.",
      price: "Rp 1.200.000",
      image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000226-1024x747-FIT_AND_TRIM-bbddd6de7872ef025ceeae5de706973f.jpeg?_src=imagekit&tr=dpr-2,f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
    },
    {
      id: 2,
      name: "Ocean Breeze Hotel",
      location: "Seminyak, Bali",
      rating: 9.1,
      reviews: 312,
      description:
        "Located near the beach, Ocean Breeze Hotel provides comfortable rooms with an ocean view and easy access to popular attractions.",
      price: "Rp 1.450.000",
      image: "https://awsimages.detik.net.id/community/media/visual/2022/05/20/the-trans-resort-bali_169.jpeg?w=1200",
    },
    {
      id: 3,
      name: "Green Leaf Villa",
      location: "Ubud, Bali",
      rating: 8.9,
      reviews: 278,
      description:
        "Immerse yourself in nature at Green Leaf Villa. Enjoy a peaceful atmosphere surrounded by lush greenery and traditional Balinese charm.",
      price: "Rp 980.000",
      image: "https://digital.ihg.com/is/image/ihg/hotel-indigo-bali-6067764985-2x1",
    },
    {
      id: 4,
      name: "Skyline Luxury Suites",
      location: "Nusa Dua, Bali",
      rating: 9.4,
      reviews: 510,
      description:
        "Skyline Luxury Suites offers an elegant stay with world-class facilities and stunning views of the ocean and city skyline.",
      price: "Rp 2.300.000",
      image: "https://www.jhlgroup.co.id/storage/businesses/July2022/OaOC6s9irpD0wrbPHn3y.",
    },
  ];

  return (
    <div className="container-fluid d-flex bg-light m-0 justify-content-center">
        <div
        className="container py-4 m-0 w-100"
        style={{
            minHeight: "100vh",
        }}
        >
            <h4 className="mb-4 fw-semibold">4 hotels available</h4>

            {hotels.map((hotel) => (
            <div
                key={hotel.id}
                className="card shadow-sm border-0 w-100"
                style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "210px",
                }}
            >
                <div className="row g-0">
                    <div className="col-3">
                        <img
                            src={hotel.image}
                            className="img-fluid h-100"
                            alt={hotel.name}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start">
                                <h5 className="card-title mb-1 fw-bold">{hotel.name}</h5>
                                <div
                                    className="text-white px-2 py-1 rounded"
                                    style={{
                                    backgroundColor: "#1BA0E2",
                                    fontSize: "0.85rem",
                                    fontWeight: "600",
                                    }}
                                >
                                    {hotel.rating}
                                </div>
                            </div>
                            <p
                                className="text-muted mb-1"
                                style={{ fontSize: "0.9rem", fontWeight: "500" }}
                            >
                                {hotel.location}
                            </p>
                            <p
                                className="text-muted"
                                style={{ fontSize: "0.85rem", lineHeight: "1.4" }}
                            >
                                {hotel.description}
                            </p>
                            <p className="text-muted mb-1" style={{ fontSize: "0.8rem" }}>
                                {hotel.reviews} reviews
                            </p>
                            <div className="d-flex justify-content-end align-items-end flex-column">
                                <p
                                    className="fw-bold mb-0"
                                    style={{
                                    color: "#1BA0E2",
                                    fontSize: "1.1rem",
                                    }}
                                >
                                    {hotel.price} / night
                                </p>
                                <button
                                    className="btn btn-primary mt-2"
                                    style={{
                                    backgroundColor: "#1BA0E2",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontWeight: "500",
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}

            <div className="d-flex justify-content-center mt-4">
                    <nav>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
    </div>
  );
}
