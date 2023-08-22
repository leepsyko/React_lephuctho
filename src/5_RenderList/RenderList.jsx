import React from 'react'

export default function RenderList() {

    const animals = ["Dog", "Cat", 'Duck', 'Pig'];


    // bắt buộc các phần tử con phải có một property key khác nhau không được trùng lặp. Thuộc tính "key" là từ khoá
    const list = animals.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    const products = [
        {id:1, name: "Iphone 13", price: "30000000"},
        {id:2,name: "Samsung s22", price: "25000000"},
        {id:3,name: "Oppo X5", price: "20000000"}
    ]


    return (
        <div>
            <h1>RenderList</h1>
            <ul>
                {list}
            </ul>

            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>{
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>

        </div>
    )
}
