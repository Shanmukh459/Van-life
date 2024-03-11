import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    
    const typeFilter = searchParams.get("type")

    const filteredVans = typeFilter
        ? vans.filter(van => van.type == typeFilter)
        : vans
    
    React.useEffect(() => {
        fetch("/api/vans", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)})
    }, [])
    const vanElements = filteredVans.map(van => {
            return (
                <div key={van.name} className="van-card">
                    <Link to={`/vans/${van.id}`}>
                        <img src={van.imageUrl} />
                        <div>
                            <div className="name-price">
                                <h2 className="van-name">{van.name}</h2>
                                <p className="van-price">${van.price}<span>/day</span></p>
                            </div>
                            <p className={`van-type ${van.type}`}>{van.type}</p>
                        </div>
                    </Link>
                </div>
            )
    })
    
    return (
        <div className="vans-body-container">
            <h1>Explore our van options</h1>
            <div className="van-filter-div">
                <Link 
                    to="?type=simple"
                    type="?type=simple"   
                    className="van-type-filter simple"
                >simple</Link>
                <Link 
                    to="?type=rugged"
                    type="?type=rugged"   
                    className="van-type-filter rugged"
                >rugged</Link>
                <Link 
                    to="?type=luxury"
                    type="?type=luxury"   
                    className="van-type-filter luxury"
                >luxury</Link>
                <Link
                    to="." 
                    className="van-type-filter clear-filter"
                >clear filters</Link>
            </div>
            <div className="vans-container">
                {vanElements}
            </div>
        </div>
    )
}