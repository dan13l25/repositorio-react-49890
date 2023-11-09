import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
function App (){
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={'Bienvenidos'} />     
        </div>
    )
}
export default App