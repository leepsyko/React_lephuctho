import React from 'react'

export default function Cart({ onCloseCart, carts,onDeleteProductFromCart }) {
    return (
        <>
            <div>
                <div style={{ display: 'block' }} className="modal show" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCloseCart} />
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Số Lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts.map(item => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td><img src={item.img} alt={item.name} width="70px" height="70px" /></td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.price * item.quantity}</td>
                                                        <td>
                                                            <button className='btn btn-danger' onClick={()=>onDeleteProductFromCart(item.id)}>x</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onCloseCart}>Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal-backdrop fade show'></div>
        </>

    )
}