import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { van } = useOutletContext()
    return (
        <h2 className="host-van-pricing">${van.price}.00<span>/day</span></h2>
    )
}