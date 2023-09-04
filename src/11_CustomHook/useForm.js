import React, { useState } from 'react'

export default function useForm(defaultValues) {
    const [values,setValues] =useState(defaultValues)


    const handleChange = (evt) => {
        const {name,value} =evt.target

        console.log(evt.target.name)
        // console.log(evt.target.name)
        setValues({
            ...values,
            [name]:value,

        })
    }

  return {values,handleChange}
}


