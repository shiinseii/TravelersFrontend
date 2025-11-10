import RecreationCard from "./RecreationList/RecreationCard"
import SearchBar from "./RecreationList/SearchBar"
import { useEffect, useState } from "react"
import axios from "axios"


function RecreationList() {

    const [recreations, setRecreations] = useState([]);

    const [allRecreations, setAllRecreations] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/recreation-list").then((res) => {
            const allData = res.data.data;
            setRecreations(allData.slice(0, 8));
            setAllRecreations(allData);
        });
    });

    console.log(recreations, allRecreations);


    return (
        <>
            <SearchBar />
            <div className="container">
                <div className="w-100">
                    <h3>Recreation List</h3>
                    <div 
                        className="d-grid"
                        style={{
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "20px",
                        }}>
                        {recreations.map((recreation) => (
                            <RecreationCard
                                key={recreation.id}
                                id={recreation.id}
                                image={recreation.image}
                                name={recreation.name}
                                price={recreation.price}
                            ></RecreationCard>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="btn text-primary fw-bold w-100 my-4">Show More &gt;</div>
                </div>
                <div className="my-3 w-100">
                    <h3 className="mb-3">
                        Try Other Destination
                    </h3>
                    <div className="d-flex gap-3 mb-3">
                        <div className="btn btn-outline-dark rounded-pill">Tour</div>
                        <div className="btn btn-outline-dark rounded-pill">Playground</div>
                        <div className="btn btn-outline-dark rounded-pill">Recreational Sports</div>
                        <div className="btn btn-outline-dark rounded-pill">Classes & Culture</div>
                    </div>
                    <div className="col d-flex justify-content-around flex-wrap">
                        <RecreationCard />
                        <RecreationCard />
                        <RecreationCard />
                        <RecreationCard />
                    </div>
                </div>
                <div>
                      
                </div>
            </div>
        </>
    )
}

export default RecreationList