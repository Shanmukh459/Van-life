import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    
    const typeFilter = searchParams.get("type")

    const filteredVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
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
                    <Link 
                        to={van.id}
                        state={{search: searchParams.toString()}}
                    >
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

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if(value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
    return (
        <div className="vans-body-container">
            <h1>Explore our van options</h1>
            <div className="van-filter-div">
                <button 
                    onClick={() => handleFilterChange("type", "simple")}
                    type="?type=simple"   
                    className={`van-type-filter simple ${typeFilter === "simple" ? "selected" : null}`}
                >simple</button>
                <button 
                    onClick={() => handleFilterChange("type", "rugged")}
                    type="?type=rugged"   
                    className={`van-type-filter rugged ${typeFilter === "rugged" ? "selected" : null}`}
                >rugged</button>
                <button 
                    onClick={() => handleFilterChange("type", "luxury")}
                    type="?type=luxury"   
                    className={`van-type-filter luxury ${typeFilter === "luxury" ? "selected" : null}`}
                >luxury</button>
                {   
                    typeFilter ?
                    (<button
                        onClick={() => handleFilterChange("type", null)} 
                        className="van-type-filter clear-filter"
                    >clear filters</button>)
                : null}
            </div>
            <div className="vans-container">
                {vanElements}
            </div>
        </div>
    )
}