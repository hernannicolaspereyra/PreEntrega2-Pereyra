import ItemListContainer from '../components/ItemListContainerComponent/ItemListContainer'
import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(res => {
                setProductos(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ItemListContainer productos={productos} />
    )
}

export default Home