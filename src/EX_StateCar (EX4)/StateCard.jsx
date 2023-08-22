// @ts-nocheck
import React, { useState } from 'react'
import Icon from './Icon'



export default function StateCard() {

    let [type, setType] = useState("./img/black-car.jpg")

    const handleChangeCar = (type) => {
        setType(`./img/${type}-car.jpg`)
    }



    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-8'>
                    <img src={type} alt="" width="100%" />
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-header">Color</div>
                        <div className='card-body'>
                            {/* <div className='d-flex my-3' onClick={() => handleChangeCar('black')}>
                                <img src="./img/icon-black.jpg" alt="black" width="80px" />
                                <div>
                                    <h3>Crystal Black</h3>
                                    <b>Pearl</b>
                                </div>
                            </div>
                            <div className='d-flex my-3' onClick={() => handleChangeCar('red')}>
                                <img src="./img/icon-red.jpg" alt="red" width="80px" />
                                <div>
                                    <h3>Rally Red</h3>
                                    <b>Metallic</b>
                                </div>
                            </div>
                            <div className='d-flex my-3' onClick={() => handleChangeCar('silver')}>
                                <img src="./img/icon-silver.jpg" alt="silver" width="80px" />
                                <div>
                                    <h3>Lunar Silver</h3>
                                    <b>Metallic</b>
                                </div>
                            </div>
                            <div className='d-flex my-3' onClick={() => handleChangeCar('steel')}>
                                <img src="./img/icon-steel.jpg" alt="steel" width="80px" />
                                <div>
                                    <h3>Modern Steel</h3>
                                    <b>Metallic</b>
                                </div>
                            </div> */}
                            <Icon onChangeCar={handleChangeCar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
