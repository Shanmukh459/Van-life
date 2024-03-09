import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

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
                    <nav className="host-van-detail-nav">
                        <NavLink 
                            to="."
                            end
                            style={({isActive}) => isActive ? activeStyles : null}
                        >Details</NavLink>
                        <NavLink 
                            to="pricing"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >Pricing</NavLink>
                        <NavLink 
                            to="photos"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >Photos</NavLink>
                    </nav>
                    <Outlet />
                </div>:
                <h1>Loading...</h1>
            }
            
        </section>
    )
}