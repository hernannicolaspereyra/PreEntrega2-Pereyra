import LogoCarrito from "./assets/logo-carrito.png"
import "../CartComponent/CartWidgetComponent.css"

const CartWidget = () => {
    return (
        <div className="cart">
            <button><img src={LogoCarrito} alt="carrito-de-compras" /></button>
            <span>5</span>
        </div>
    )
}
export default CartWidget