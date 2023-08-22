import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Children from './Children'


export default function Effect() {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [username,setusername] = useState("")


    //useEffect nhận vào 2 tham số. Tham số thứ nhất callbackfuntion, tham số thứ 2 là list
    useEffect(() => {
        // axios({
        //     method: "GET",
        //     url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
        //     params: {
        //         name: searchTerm || undefined,
        //     }
        // }).then((response) => {
        //     setUsers(response.data)
        // })

        const getUser = async () => {
            try {
                let response = await axios({
                    method: "GET",
                    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
                    params: {
                        name: searchTerm || undefined,
                    }
                })

                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [searchTerm])


    const handleSetUsename = () =>{
        const value = prompt("Input username")
        setusername(value)
    }


    console.log("render-run")
    return (
        <div>
            <h1>Effect</h1>

            <input placeholder='Search usser' value={searchTerm} onChange={(evt) => setSearchTerm(evt.target.value)} />

            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
            <hr />

            <button onClick={handleSetUsename}>Set Username</button>
           {username && <Children username={username}/>}
            
        </div>
    )
}


// component được gọi tới thì sẽ tự động chạy lại render
//event handle là được chạy khi được thao tác
//effect sẽ render return ra trước sau đó gọi useEffect => call API và set Sate. và render lại


//vòng đời của component có 3 giai đoạn
// mouting: Khởi tại state và props => Render UI => gọi effect call back(nếu có )
// Updating: cập nhật. Khi giá trị thay đổi render lại.
// NẾU THAM SỐ THỨ 2 CỦA EFFECT LÀ MẢNG RỖNG THÌ CHỈ CHẠY 1 LẦN DUY NHẤT
// TRƯỜNG HỢP CÒN LẠI
// sẽ chạy lại render nếu Dependent thay đổi .  DÒNG CÓ HÀM "getUser"


// Unmouting: chết đi