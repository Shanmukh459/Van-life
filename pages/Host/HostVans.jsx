import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const vanElements = vans.map((van) => {
        return (
            <Link
                to={`/host/vans/${van.id}`}
                className="host-van-link-wrapper"
                key={van.name}
            >
                <div className="host-van-card">
                    <img src={van.imageUrl}  alt={`Photo of ${van.name}`}/>
                    <div>
                        <p className="host-van-card-title">{van.name}</p>
                        <p className="host-van-card-price">${van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })
    
    return (
        <div className="host-vans-container">
            <h1>Your listed vans</h1>
            {
                vans.length ? 
                <>
                    {vanElements}
                </> :
                <h1>Loading...</h1>
            }
        </div>
    )
}