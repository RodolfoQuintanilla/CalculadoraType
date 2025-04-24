import { MenuItem } from "../types";

type menuItemProps = {
    item: MenuItem,
    addItem: () => void //Pasar prop de funcion es comun
}

const MenuItem = ({ item, addItem }: menuItemProps) => {
    return (
        <button
            className="border-2 border-teal-400  hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={()=> addItem()}
        >
            <p>{item.name}</p>
            <p className="font-black">{item.price}</p>
        </button>
    );
};

export default MenuItem;