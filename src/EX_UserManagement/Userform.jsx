import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Userform({ onSubmitSuccess, selectedUser }) {

    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        address: "",
        phone: ""
    })


    const handleChange = (evt) => {
        const { name, value } = evt.target

        setValue({ ...values, [name]: value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const { id, ...payload } = values
        const option = id ? {
            method: "PUT",
            url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/users/${id}`,
            data: payload,
        }
            : {
                method: "POST",
                url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
                data: payload,
            }


        try {
            await axios(option)

            onSubmitSuccess()


            setValue({
                firstName: "",
                lastName: "",
                email: "",
                dateOfBirth: "",
                address: "",
                phone: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // dùng efect để theo dõi selectedUser khi giá trị thay đổi
        if (!selectedUser) {
            //nếu là null thì không làm j hết
            return
        }

        setValue({ ...selectedUser })
    }, [selectedUser])





    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label' htmlFor="firstName">First Name</label>
                <input className='form-control' id="firstName" value={values.firstName} name="firstName" onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="lastName">Last Name</label>
                <input className='form-control' id="lastName" value={values.lastName} name="lastName" onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-control' id="email" value={values.email} name="email" onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="dateOfBirth">Date of Birth</label>
                <input className='form-control' id="dateOfBirth" value={values.dateOfBirth} name="dateOfBirth" onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="address">Address</label>
                <input className='form-control' id="address" value={values.address} name="address" onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="phone">Phone</label>
                <input className='form-control' id="phone" value={values.phone} name="phone" onChange={handleChange} />
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    )
}
