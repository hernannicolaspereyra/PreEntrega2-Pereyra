import { Link } from "react-router-dom";
import "./ItemListContainer.css"
import Card from 'react-bootstrap/Card';


const ItemListContainer = ({ productos }) => {
    return (
        <div className="item-list-container">
            {productos.map((producto) => {
                return (
                    <Card key={producto.id} className="tarjeta">
                        <Card.Img variant="top" src={producto.image} />
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Link to={`/item/${producto.id}`}>Informacion</Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>)
}

export default ItemListContainer