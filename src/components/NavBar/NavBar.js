import CartWidget from "../../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Pasteleria Amanecer</h1>
            <div>
                <button>Ordenar de pastel</button>
                <button>Pedidos online</button>
                <button>Consulta</button>

            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar