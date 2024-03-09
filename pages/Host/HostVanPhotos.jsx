import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { van } = useOutletContext()
    return (
        <img className="host-van-image" src={van.imageUrl} />
    )
}