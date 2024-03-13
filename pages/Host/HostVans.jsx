import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)   
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])
    
    const vanElements = vans.map((van) => {
        return (
            <Link
                to={van.id}
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
    
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

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