import React from "react"

export default function Vans() {
    
    const [vans, setVans] = React.useState([])
    
    React.useEffect(() => {
        fetch("/api/vans", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVans(data.vans)})
    }, [])
    const vanElements = vans.map(van => {
            return (
                <div key={van.name} className="van-card">
                    <img src={van.imageUrl} />
                    <div>
                        <div className="name-price">
                            <h2 className="van-name">{van.name}</h2>
                            <p className="van-price">${van.price}<span>/day</span></p>
                        </div>
                        <p className={`van-type ${van.type}`}>{van.type}</p>
                    </div>
                </div>
            )
    })
    
    return (
        <div className="vans-body-container">
            <h1>Explore our van options</h1>
            <div className="vans-container">
                {vanElements}
            </div>
        </div>
    )
}