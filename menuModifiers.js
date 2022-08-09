import { useContext } from 'react';
import menuContext from "./contexts/menuContext";

const { menu, setMenu } = useContext(menuContext);

function addPlato(plato) {
    let aux = menu;
    aux.push(plato);
    setMenu(aux);
}

function deletePlato() {

}

function deleteAll () {

}

export {addPlato, deletePlato, deleteAll};