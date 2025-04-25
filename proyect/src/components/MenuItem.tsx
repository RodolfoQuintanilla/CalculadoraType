import { MenuItem } from "../types";

type menuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void //Pasar prop de funcion es comun// despues pasa el item
}

const MenuItem = ({ item, addItem }: menuItemProps) => {
    return (
        <button
            className="border-2 border-teal-400  hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">{item.price}</p>
        </button>
    );
};

export default MenuItem;