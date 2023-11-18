import { useState } from "react"
import "../ItemCountComponent/ItemCountComponent.css"

const ItemCountComponent = () => {
    const [contador, setContador] = useState(1)

    function sumar() {
        setContador(contador+1)
    }
    function restar(){
        if (contador > 1){
            setContador(contador-1)
        }
        
    }
    return(
        <div className="item-count">
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCountComponent