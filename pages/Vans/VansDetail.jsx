import React from "react"
import { useParams } from "react-router-dom"

export default function VansDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    console.log(van)
    return (
        <>
           {van?
            (   
                <div className="van-detail">
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