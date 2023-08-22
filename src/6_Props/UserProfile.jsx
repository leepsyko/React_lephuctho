import React from 'react'

// trong component luôn có property props dưới kiểu dữ liệu object

// export default function UserProfile(props) {
export default function UserProfile({name = "unknown", age = 0 , isAdmin = false}) {

    // const {name, age , isAdmin} = props
    // console.log(props)
  return (
    <div>
        <h3> Name: {name}
        {isAdmin && <span> (Admin)</span>}
        
        </h3>

        <h3> Age: {age}</h3>
    </div>
//   return (
//     <div>
//         <h3> Name: {props.name}
//         {props.isAdmin && <span>(Admin)</span>}
        
//         </h3>

//         <h3> Age: {props.age}</h3>
//     </div>
  )
}
