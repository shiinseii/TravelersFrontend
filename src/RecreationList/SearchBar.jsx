  

function SearchBar() {
    return (
        <div className="container-fluid w-100" 
            style={{height: "300px",
                borderRadius: "0px 0px 100px 0px",
                backgroundImage: "url('https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2019-09/nature.jpg?itok=wWtFQZ9M')",
                backgroundSize: "cover",
                backgroundPosition: "center 60%",
                backgroundRepeat: "no-repeat",
                }}>
            <div
                style={{
                position: "absolute",
                inset: 0,
                height: "400px",
                backgroundColor: "rgba(0,0,0,0.4)", // <-- 0.4 = 40% black
                borderRadius: "0px 0px 100px 0px",
                
                }}
            ></div>
            <div className="container h-100 my-0 d-flex align-items-center justify-content-between text-white position-relative" style={{zIndex: "99"}}>
                <div>
                    <div className="d-flex align-items-center flex-column">
                        <h3>
                            Things To Do In
                        </h3>
                        <select name="city" id="">
                            
                        </select>
                    </div>
                </div>
                <div className="w-50 d-flex">
                    <input className="form-control w-75 border-primary" 
                        type="text"
                        style={{borderRadius: "20px 0px 0px 20px"}}
                        placeholder="Search for recreation" />
                    <div className="btn btn-primary" style={{borderRadius: "0px 20px 20px 0px"}}>Search</div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar