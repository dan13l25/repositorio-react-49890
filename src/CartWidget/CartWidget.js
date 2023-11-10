import cart from "../img/carrito.png"
import './css/App.css'

const CartWidget = ()=>{
    return (
        <div>
            <img src={cart} alt = "carrito de compra" className="carro"/>
            0
        </div>
    )
}

export default CartWidget 