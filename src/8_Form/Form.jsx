import React,{useState} from 'react'


// Button trong thẻ form thì mặc định nút button có type là submit
// Nút button sẽ đẩy các thông tin trong form lên thanh địa chỉ. Đồng thời kích hoạt sự kiện onSubmit của thẻ form




export default function Form() {

    const [value,setValue] =  useState({username:"",email:"",address:"",favouriteColor: "" })


    const handleSubmit = (evt) =>{
        // Ngăn chặn hành vi mặc định khi submit form là reload lại page và đưa giá trị lên url
        evt.preventDefault()

        console.log("Form values:", value)
    }
    const handleChange = (evt)=>{
        // LƯU Ý: CẦN ĐẶT THUỘC TÍNH NAME CỦA INPUT NÓ KHỚP VỚI TÊN THUỘC TÍNH TRONG OBJECT VALUES
        setValue({...value, [evt.target.name]: evt.target.value})
    }

    const handleReset = () =>{
setValue({username:"",email:"",address:"",favouriteColor: "" })
    }



    return (
        <div>
            <h1>Form</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className='form-label' > Username</label>
                    <input className='form-control' name='username'value={value.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className='form-label' > Email</label>
                    <input className='form-control' name='email' onChange={handleChange} value={value.email}/>
                </div>
                <div className="mb-3">
                    <label className='form-label' > Address</label>
                    <input className='form-control' name='address' onChange={handleChange} value={value.address} />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                    <select className='form-control' name='favouriteColor' value={value.favouriteColor} onChange={handleChange}>
                        <option value="">chưa chọn</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                    </select>
                </div>


                <button className='btn btn-primary' type='submit'>Submit</button>
                <button className='btn btn-primary' type='button' onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}
