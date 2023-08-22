import React from 'react'

const icon = [
    {
        type: "black",
        name: "Crystal Black",
        desc: "Pearl",
        url: "./img/icon-black.jpg"
    },
    {
        type: "red",
        name: "Rally Red",
        desc: "Metallic",
        url: "./img/icon-red.jpg"
    },
    {
        type: "silver",
        name: "Lunar Silver",
        desc: "Metallic",
        url: "./img/icon-silver.jpg"
    },
    {
        type: "steel",
        name: "Crystal Black",
        desc: "Metallic",
        url: "./img/icon-steel.jpg"
    },
]

export default function Icon({onChangeCar}) {
    return icon.map((icon,index) => {
        return (
            <div className='card' key={index} onClick={() =>{onChangeCar(icon.type)}}>
                <div className='d-flex card-body' >
                    <img src={icon.url} alt={icon.type} width="80px" />
                    <div className='ms-3'>
                        <h3>{icon.name}</h3>
                        <b>{icon.desc}</b>
                    </div>
                </div>
            </div>
        )
    })
}
