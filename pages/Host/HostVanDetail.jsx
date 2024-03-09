import React from "react"
import { useParams, Link, Outlet } from "react-router-dom"

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
            <Link 
            to=".."
            relative="path">&larr; <span>Back to all vans</span></Link>
            {
                van?
                <div className="host-van-detail-wrapper">
                    <div className="host-van-detail-container">
                        <img src={van.imageUrl} />
                        <div>
                            <p className={`van-type ${van.type}`}>{van.type}</p>
                            <p className="host-van-detail-title">{van.name}</p>
                            <p className="host-van-detail-price">${van.price}<span>/day</span></p>
                        </div>
                    </div>
                    <Outlet />
                </div>:
                <h1>Loading...</h1>
            }
            
        </section>
    )
}