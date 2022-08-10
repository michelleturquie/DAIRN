import { useContext } from 'react';
import menuContext from "./contexts/menuContext";

function addPlato(plato) {
    const { menu, setMenu } = useContext(menuContext);
    console.log(menu);
}

function deletePlato(plato) {

}

function deleteAll () {

}

export {addPlato, deletePlato, deleteAll};