import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <section className="host-van-detail-layout-container">
            {
                van?
                <div className="host-van-detail-container">
                    <img src={van.imageUrl} />
                    <div>
                        <p>{van.type}</p>
                        <p className="host-van-detail-title">{van.name}</p>
                        <p className="host-van-detail-price">${van.price}<span>/day</span></p>
                    </div>
                </div>:
                <h1>Loading...</h1>
            }
        </section>
    )
}