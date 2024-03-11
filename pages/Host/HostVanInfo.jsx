import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { van } = useOutletContext()
    return (
        <div className="host-van-info">
            <p>Name: <span>{van.name}</span></p>
            <p>Category: <span className="host-van-type">{van.type}</span></p>
            <p>Description: <span>{van.description}</span></p>
            <p>Visibility: <span>Public</span></p>
        </div>
    )
}