import React, { useRef, useEffect, useState } from 'react'
import SampleForm from './SampleForm'

export default function Ref() {

    const inputRef = useRef()
    const inputFileRef = useRef()

    const formRef = useRef()

    const [searchTerm, setSearchTerm] = useState("")

    let timer = useRef

    useEffect(() => {
        inputRef.current.focus()
    },[])

    const handleSubmit = (value) => {
      console.log(value)
    }
    
    const handleChangeSearchTerm = (evt)=>{
        setSearchTerm(evt.target.value)
        
        clearTimeout(timer.current)
        
        timer.current = setTimeout(() => {
            alert(evt.target.value)
        }, 300);


    }



    return (
        <div>
            <h1>REF</h1>

            <hr />

            <input placeholder='Input your message' ref={inputRef} />

            <hr />

            <input type="file" ref={inputFileRef} hidden />

            <button onClick={() => inputFileRef.current.click()}>Upload File</button>

            <hr />

            <SampleForm ref={formRef} onSubmit={handleSubmit}/>

            <button className='btn btn-primary' onClick={()=>{ formRef.current.requestSubmit()}}> Submit </button>

            <hr />

            <div className="mb-3">
                <label  className="form-label">
                    Demo debounce
                </label>
                <input name='search' className="form-control"  value={searchTerm} onChange={handleChangeSearchTerm}/>
            </div>
        </div>
    )
}


// biến lưu trữ trạng thái của component
// khi ref thay đổi, không làm render lại component