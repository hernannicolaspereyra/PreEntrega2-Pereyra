import ItemListContainer from '../components/ItemListContainerComponent/ItemListContainer'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const Category = () => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res => {
                setProductos(res.data)
            })
            .catch(err => console.log(err))
    }, [categoryId])

    return (
        <ItemListContainer productos={productos} /> 
    )
}

export default Category