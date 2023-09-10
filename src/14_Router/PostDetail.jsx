import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetail() {
const {id} = useParams()
    

    return (
        <div>PostDetail ({id})</div>
    )
}
