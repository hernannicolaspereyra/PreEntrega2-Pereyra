import axios from "axios"
import ItemDetainConteiner from "../components/ItemDetailContainer/ItemDetailContainer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Item = () => {
  
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProducto(res.data))
            .catch(err => console.log(err))
    },[id])
    
  return (
    <ItemDetainConteiner producto={producto}/>
  )
}

export default Item