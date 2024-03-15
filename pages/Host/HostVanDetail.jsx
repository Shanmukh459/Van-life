import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import { getVan } from "../../api"

export default function HostVanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

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

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

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
                    <Outlet context={{ van }}/>
                </div>:
                <h1>Loading...</h1>
            }
            
        </section>
    )
}