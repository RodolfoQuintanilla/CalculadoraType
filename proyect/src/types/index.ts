
export type MenuItem = {
    id: number,
    name: string,
    price: number,
}

//Tomamos todo lo que tiene munuItem se asigna y agrega quantity 01
export type OrderItem = MenuItem & {
    quantity: number
}