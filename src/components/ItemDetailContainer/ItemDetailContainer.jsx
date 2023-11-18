import Card from 'react-bootstrap/Card';
import "../ItemDetailContainer/ItemDetailContainer.css"
import ItemCountComponent from '../ItemCountComponent/ItemCountComponent';

const ItemDetainConteiner = ({ producto }) => {
    return (
        <div className="item-detail-container">
            <Card key={producto.id} className='tarjeta-detail'>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Card.Text>{`U$D ${producto.price}`}</Card.Text>
                    <ItemCountComponent/>
                    <button>Comprar</button>
                </Card.Body>
            </Card>
        </div>)
}

export default ItemDetainConteiner