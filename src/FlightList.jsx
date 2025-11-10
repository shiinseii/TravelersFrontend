// import "./css/Body.css";
import { useState } from "react";
import Card from "./Card";
import ButtonCat from "./ButtonCat";
import Rediscover from "./Rediscover";
import Guide from "./Guide";
import RecreationCard from "./RecreationList/RecreationCard";

function FlightList() {
    const [selected, setSelected] = useState(null);

    const categories = ["Medan", "Bali", "Surabaya", "Balikpapan", "Lampung", "Jakarta"];

    return (
        <div className="body">
            <div className="rediscover-container">
                <Rediscover title="Japan" subtitle="28.141 Acomodation" />
                <Rediscover title="Japan" subtitle="28.141 Acomodation" />
                <Rediscover title="Japan" subtitle="28.141 Acomodation" />
                <Rediscover title="Japan" subtitle="28.141 Acomodation" />
                <Rediscover title="Japan" subtitle="28.141 Acomodation" />
                <Rediscover title="Japan" subtitle="28.141 Acomodation" />
            </div>
            <div className="container flex-column align-items-start">
                <div>
                    <h2 style={{margin: "0px"}}>Domestic Flight Best Deals for You ✈️</h2>
                </div>
                <div className="category">
                    {categories.map((cat) => (
                    <ButtonCat
                        key={cat}
                        name={cat}
                        isActive={selected === cat}
                        onClick={() => setSelected(cat)}
                    />
                    ))}
                </div>
                <div className="card-list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="container">
                    <div>
                    <h2 style={{margin: "0px"}}>International Flight Best Deals!🌏</h2>
                </div>
                <div className="category">
                    <ButtonCat name="Singapore" />
                    <ButtonCat name="Malaysia" />
                    <ButtonCat name="Thailand" />
                    <ButtonCat name="Japan" />
                    <ButtonCat name="South Korea" />
                    <ButtonCat name="Hong Kong" />
                </div>
                <div className="card-list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="container">
                <div>
                    <h2 style={{margin: "0px"}}>Trending Activity</h2>
                </div>
                <div className="category">
                    <ButtonCat name="Attraction" />
                    <ButtonCat name="Tour" />
                    <ButtonCat name="Playground" />
                    <ButtonCat name="Beauty & Spa" />
                </div>
                <div className="card-list">
                    <RecreationCard />
                    <RecreationCard />
                    <RecreationCard />
                    <RecreationCard />
                </div>
            </div>
            <div className="container">
                <div>
                    <h2 style={{margin: "0px"}}>International Escapes: get the guides</h2>
                </div>
                <div className="guide-container">
                    <Guide />
                    <Guide />
                    <Guide />
                    <Guide />
                    <Guide />   
                </div>
            </div>
        </div>
    );
}

export default FlightList