import { Link } from "react-router-dom"
import RecreationCard from "./RecreationList/RecreationCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function RecreationDetail() {

    const { id } = useParams()
    const [recreation, setRecreation] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recreation-details/${id}`)
            .then((res) => setRecreation(res.data.data))
            .catch((err) => console.log(err));
    }, [id]);

    console.log(recreation);

    const dates = Array.from({ length: 12 }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() + index);
        return date;
    });

    return (
        <div className="container-fluid bg-white m-0 p-0">
            <div className="container w-100 flex-column align-items-start px-5">
                <div>
                    <h3>{recreation.name}</h3>
                    <p className="my-0">Jl. Kartika Plaza, Tuban, Kuta, Kabupaten Badung, Bali 80361, Indonesia</p>
                    <p className="my-0 fw-bold">Opening hours: {recreation.open_time && recreation.close_time ? recreation.open_time.split(":").slice(0,2).join(":") : "24 Hours"}</p>
                </div>
                 {/* Image Here */}
                <div className="gap-4 d-flex justify-content-center w-100">
                    <div className="row g-2" style={{height: "500px"}}>
                        <div className="col-md-6 h-100">
                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/e3/17/70/the-oasis-gardens-area.jpg?w=1200&h=-1&s=1" style={{objectFit: "cover"}} className="rounded w-100 h-100" alt="" />
                        </div>
                        <div className="col-md-6 h-100 d-flex flex-column ps-1">
                            <div className="d-flex flex-grow-1 pb-1 h-50">
                                <div className="flex-fill pe-2 h- w-50">
                                    <img
                                        src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/fjvyoecwuxvzqe7ufopu/TiketMasukWaterbomBali-KlookIndonesia.jpg"
                                        className="rounded w-100 h-100"
                                        style={{ objectFit: "cover"}}
                                        alt=""
                                    />
                                </div>
                                <div className="flex-fill w-50">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPJdrS1FVhVkY2rCVJ2CmI3BAEIqpmNxXKw&s"
                                        className="rounded w-100 h-100"
                                        style={{ objectFit: "cover"}}
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="d-flex flex-grow-1 pt-1 h-50">
                                <div className="flex-fill pe-2 w-50">
                                    <img
                                        src="https://www.oberoihotels.com/-/media/oberoi-hotel/bali-resized/Experiences/desktop1024x706/waterbom-bali.jpg"
                                        className="rounded w-100 h-100"
                                        style={{ objectFit: "cover"}}
                                        alt=""
                                    />
                                </div>
                                <div className="flex-fill w-50">
                                    <img
                                        src="https://thingstodoinbali.com/wp-content/uploads/Visit-Waterbom-In-Bali-edited.jpg"
                                        className="rounded w-100 h-100"
                                        style={{ objectFit: "cover"}}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Rating Here */}
                <div className="d-flex mb-0 gap-3 w-100">
                    <div className="d-flex col-2 align-items-center justify-content-center gap-4 p-2 rounded-2" style={{height: "80px", background: "linear-gradient(360deg, #f5fafd, #cbebff)"}}>
                        <div className="h-100 d-flex align-items-center">
                            <p className="m-0" style={{fontSize: "20px"}}>9,3/10</p>
                        </div>
                        <div>
                            <p className="m-0" style={{fontSize: "18px"}}>Exceptional</p>
                            <p className="m-0" style={{fontSize: "14px"}}>3 Reviews</p>
                        </div>
                    </div>
                    <div className="d-flex flex-grow-1 p-2 flex-column justify-content-center rounded-2" style={{height: "80px", background: "linear-gradient(360deg, #f5fafd, #cbebff)"}}>
                        <p className="mb-0 text-primary fw-bold" style={{fontSize: "20px"}}>Show Map</p>
                        <p className="mb-0" style={{fontSize: "18px"}}>Waterbom Bali</p>
                    </div>
                    <div className="d-flex col-4 p-2 d-flex flex justify-content-between align-items-center rounded-2" style={{height: "80px", background: "linear-gradient(360deg, #f5fafd, #cbebff)"}}>
                        <div>
                            <p className="mb-0" style={{fontSize: "18px"}}>Starts From</p>
                            <p className="mb-0 fw-bold" style={{fontSize: "20px", color: "rgb(255, 102, 0"}}>Rp. {recreation.ticket?.length ? Math.min(...recreation.ticket.map(t => t.price)).toLocaleString("id-ID") : "-"}</p>
                        </div>
                        <div>
                            <div className="btn btn-primary">Find Ticket</div>
                        </div>
                    </div>
                </div>
                {/* Book Here */}
                <div className="d-flex mt-0 w-100 gap-3 align-items-start mb-3">
                    <div className="d-flex flex-column flex-grow-1 p-3 rounded-3 bg-light h-auto">
                        <p className="m-0">What You'll Explore</p>
                        <ul style={{fontSize: "18px"}}>
                            <li>Explore Asia’s #1 water park with 26 world-class slides and activities!</li>
                            <li>Feel the rush on Smashdown 2.0 and race your friends on Twin Racers for ultimate excitement</li>
                            <li>Relax on the Lazy River or unwind in a private gazebo surrounded by lush Bali vibes!</li>
                        </ul>
                        <hr />
                        <p>Contact, Facilities, Service Language, And More</p>
                    </div>
                    <div className="col-4 p-2">
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold">What Travelers Say</p>
                            <p className="text-primary">See All Reviews</p>
                        </div>
                        <div className="d-flex flex-column bg-light p-3">
                            <div className="d-flex align-items-center justify-content-between w-100">
                                <div>
                                    <p className="fw-bold m-0">Shin</p>
                                    <p className="text-secondary m-0">Reviewed at 02/04/2023</p>
                                </div>
                                <div>
                                    <p className="m-0" style={{fontSize: "20px"}}><span className="text-primary fw-bold">10,0</span>/10</p>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quia inventore accusamus, nostrum, perferendis eligendi ab numquam ipsum obcaecati similique labore necessitatibus totam maxime quae</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Book Date */}
            <div className="container-fluid bg-light m-0 p-0">
                <div className="container py-3">
                    <div className="card w-100 p-3">
                        <p>Available Ticket For You</p>
                        {/* Date */}
                        <div className="d-flex justify-content-between">
                            <div className="rounded border border-dark-1 p-3 align-items-center">
                                <p className="m-0">Select Date</p>
                            </div>
                            {dates.map((date) => {
                                const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
                                const month = date.toLocaleDateString("en-GB", { month: "short" });
                                const year = date.getFullYear();
                                return (
                                    <div key={date} className="rounded border border-dark-1 p-3">
                                        <p className="m-0 text-center">{day} {month}</p>
                                        <p className="m-0 text-center">{year}</p>
                                    </div>
                                );
                            })}
                                
                        </div>
                        {/* Ticket */}
                        {recreation.ticket?.map((ticket) => (
                            <div key={ticket.id} className="d-flex justify-content-between rounded border border-dark-1 p-3 mt-3">
                                <div className="d-flex flex-column flex-grow-1">
                                    <p className="m-0 fw-bold fs-3">{ticket.ticket_name}</p>
                                    <p className="m-0 fw-bold text-primary fs-5">See Details</p>
                                </div>
                                <div className="col-4 align-items-end">
                                    <p className="m-0 fw-bold fs-4 mb-2" style={{color: "rgb(255, 102, 0)"}}>Rp. {ticket.price.toLocaleString("id-ID")}</p>
                                    <Link to={"/book-tour"} 
                                        state={{
                                            ticketId: ticket.id,
                                            ticketName: ticket.ticket_name,
                                            ticketPrice: ticket.price,
                                            recreationId: recreation.id,
                                            recreationName: recreation.name
                                        }}
                                        onClick={() => window.scrollTo(0, 0)}>
                                        <p className="m-0 fw-bold w-100 fs-6 btn btn-primary p-2">Select Ticket</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                {/* About */}
                <div className="w-100">
                    <div className="col">
                        <h3 className="fw-bold">About {recreation.name}</h3>
                        <div className="d-flex gap-3 align-items-start w-100">
                            <div>
                                <p className="ps-3">
                                    {recreation.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100">
                    <div>
                        <h3>Try Other Activities</h3>
                        <div className="d-flex flex-wrap justify-content-between">
                            <RecreationCard />
                            <RecreationCard />
                            <RecreationCard />
                            <RecreationCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecreationDetail