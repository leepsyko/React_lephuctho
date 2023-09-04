import React,{forwardRef, useState} from 'react'

// hàm này sẽ có 2 tham số nhờ vào forwardRef. gồm props và ref
function SampleForm({onSubmit},ref) {
    const [value, setValue] = useState({email:"",password:""})


  return (
    <div>
        <form ref={ref} onSubmit={(evt)=>{
            evt.preventDefault()
            onSubmit(value)
        }}>
            <div className='mb-3'>
                <label className='form-label'> Email</label>
                <input className='form-control' type="email" name='email'/>
            </div>
            <div className='mb-3'>
                <label  className='form-label'>Password</label>
                <input  className='form-control'  type="password" name='password'/>
            </div>
        </form>
    </div>
  )
}


export default forwardRef(SampleForm)