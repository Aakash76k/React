import React , {useEffect, useEfffect, useState} from 'react'

const Card = () => {
    const[product, setProduct] = useState([])
    const [loading,setLoading] = useState(true)
    const[currentPage, setCurrentpage] = useState(1)

const productPerPage = 4

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data)
            setLoading(false)
        })
    },[])

  return (
    <div></div>
  )
}

export default Card;
