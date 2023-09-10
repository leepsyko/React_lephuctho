import React from 'react'
// sử dụng thư viện để nối class
import cn from "classnames"

//import file CSS
import "./style.css"
// nhược điểm khi sử dụng css trực tiếp. bản chất các css sẽ được đẩy lên thẻ style của head ò dfile html. CSS sẽ ảnh hưởng tất cả các component khác. Gây ra sự xung đột 
// để khắc phục sẽ sử dụng css module . Import css module
import style from "./styles.module.css"

// import scss module
import stylesSCSS from "./styles.module.scss"



import { Title } from './h/eader'




console.log(style)



// let classes = "btn m-2 "

// if(seat.isBooked) {
//   classes += "btn-danger"
// }else if (isSelected) {
//   classes += "btn-success"
// } else {
//   classes += "btn-secondary"
// }

// vd cho bài 15 styles thư viện classnames

// cn("btn m-2 btn-secondary",{"btn-danger": seat.isBooked,"btn-success":isSelected})




export default function Styles() {
  return (
    <div>
      <h1 className='title'>CSS</h1>
      <h1 className={cn(style.title, "alert alert-danger")}>CSS Module</h1>
      <h1 className={stylesSCSS.title}>SCSS Module</h1>
      <Title color='red'>JS SIEU HAY</Title>
    </div>
  )
}


// cài đặt thư viện cho scss
// npm i  sass -D

//  -D là thư viện không liên quan đến code mà liên quan đến phần build ra file cuối cùng



// CSS-in-JS: kỹ thuật viết css trong JS. Phải sử dung thư viện để hỗ trợ
// thư viện: styled components, emotion 

// 3 thư viện UI component reactBootstrap, antDesign, material UI