import axios from 'axios'
import React from 'react'

export default function UserList({ users, onDeleteSuccess,onSelectUser }) {

    const handleDelete = async (userID) => {
        try {
            await axios({
                method: "DELETE",
                url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/users/${userID}`,
            })

            onDeleteSuccess()
        } catch (error) {

        }
    }




    return (
        <div className='mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => ((
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className='btn btn-success' onClick={()=>{onSelectUser(user.id)}}> Edit </button>
                                <button className='btn btn-danger' onClick={() => handleDelete(user.id)}> Remove</button>

                            </td>
                        </tr>
                    )))}

                </tbody>
            </table>



        </div>
    )
}
