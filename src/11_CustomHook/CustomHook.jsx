import React, { useState } from 'react'
import useCount from './useCount'
import useForm from './useForm'

export default function CustomHook() {
    // const [count,setcount] = useState(0)

    // const handleIncrease = () =>{
    //     setcount(count + 1)
    // }
    // const handleDecrease = () =>{
    //     setcount(count - 1)
    // }

    const { count, handleDecrease, handleIncrease } = useCount()

    const { values, handleChange } = useForm({ email: "", password: "" });

    return (
        <div>
            <h1>CustomHook</h1>

            <hr />

            <p>Count: {count}</p>

            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>



            <hr />
            <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log(values);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            className="form-control"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form> */
        </div>
    )
}

// react không cho phép sử dụng hook trong function vì chỉ cho phép sử dụng trong function component
// hook customer cách khai báo giống với  function bình thường nhưng tên bắt đầu bằng use


// import useCount from "./useCount";
// import useForm from "./useForm";

// export default function CustomHooks() {
//   const { count, handleIncrease, handleDecrease } = useCount();
//   const { values, handleChange } = useForm({ email: "", password: "" });

//   return (
//     <div>
//       <h1>CustomHooks</h1>
//       <hr />
//       <p>Count: {count}</p>
//       <button onClick={handleIncrease}>+</button>
//       <button onClick={handleDecrease}>-</button>
//       <hr />
//       <form
//         onSubmit={(evt) => {
//           evt.preventDefault();
//           console.log(values);
//         }}
//       >
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             name="email"
//             className="form-control"
//             value={values.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             value={values.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button className="btn btn-success">Submit</button>
//       </form>
//     </div>
//   );
// }
