import React from "react"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const vanElements = vans.map((van) => {
        return (
            <div key={van.name} className="host-van-card">
                <img src={van.imageUrl} />
                <div>
                    <p className="host-van-card-title">{van.name}</p>
                    <p className="host-van-card-price">${van.price}/day</p>
                </div>
            </div>
        )
    })
    
    return (
        <div className="host-vans-container">
            <h1>Your listed vans</h1>
            {vanElements}
        </div>
    )
}