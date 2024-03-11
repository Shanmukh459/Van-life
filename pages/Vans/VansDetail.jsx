import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function VansDetail() {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <>
           {van?
            (   
                <div className="van-detail">
                    <Link 
                        to={location.state ? `/vans/?${location.state.search}` : ".."}
                        relative="path">&larr; <span>Back to all vans</span></Link>
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