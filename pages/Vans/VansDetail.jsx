import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { getVan } from "../../api"

export default function VansDetail() {
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const { id } = useParams()
    const location = useLocation()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])
    
    const search = location.state?.search || "" 
    const type = location.state?.type || "all"

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <>
           {van?
            (   
                <div className="van-detail">
                    <Link 
                        to={`..${search}`}
                        relative="path">&larr; <span>Back to {type} vans</span></Link>
                    <img src={van.imageUrl} />
                    <p className={`van-type ${van.type}`}>{van.type}</p>
                    <p className="van-detail-name">{van.name}</p>
                    <p className="van-detail-price">${van.price}<span>/day</span></p>
                    <p className="van-detail-desc">{van.description}</p>
                    <button className="btn van-detail-btn">Rent this van</button>
                </div>
            ):
            (
                <h1>Loading...</h1>
            )
           }
        </>
    )
}