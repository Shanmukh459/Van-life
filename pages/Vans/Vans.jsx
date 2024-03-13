import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    
    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch(err) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const filteredVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans
    
    const vanElements = filteredVans.map(van => {
            return (
                <div key={van.name} className="van-card">
                    <Link 
                        to={van.id}
                        state={{
                            search: `?${searchParams.toString()}`, 
                            type: typeFilter
                        }}
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
    
    if(loading) {
        return <h1 aria-live="polite">Loading...</h1>
    }

    if(error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
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