// import "./css/Body.css"

function Rediscover(props) {
    return (
        <div className="card w-25">
            <img src="https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rediscover" />
            <div className="position-absolute m-4 text-white" style={{textShadow: "1px 1px 4px black"}}>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}

export default Rediscover