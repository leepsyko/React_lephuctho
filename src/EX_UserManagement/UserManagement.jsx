import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Userform from './Userform'
import UserList from './UserList'

export default function UserManagement() {
    // State store users list from APIs

    const [users, setUsers] = useState([])

    //State administration of user selected
    const [selectedUser, setSelectedUser] = useState(null)



    // Function to get user list by APIs and assign for state users
    const getUsers = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
            })
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getUserById = async (userID) => {
        console.log("first")

        try {
            const response = await axios({
                method: "GET",
                url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/users/${userID}`,
            })

            setSelectedUser(response.data)
        } catch (error) {

        }
    }



    useEffect(() => {
        getUsers()
    }, [])











    return (
        <div className="container">
            <h1 className='text-center text-primary'>
                UserManagement
            </h1>

            <Userform onSubmitSuccess={getUsers} selectedUser={selectedUser} />

            <UserList users={users} onDeleteSuccess={getUsers} onSelectUser={getUserById} />

        </div>
    )
}
