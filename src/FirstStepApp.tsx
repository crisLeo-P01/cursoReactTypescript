import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch', quantity: 1},
    {productName: 'Xbox Series', quantity: 4},
    {productName: 'PlayStation 5', quantity: 1},
]

export function FirstStepApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                itemsInCart.map(({productName, quantity}) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity}/>
                ))
            }
            
            {/* <ItemCounter name={'Nintendo Switch 2'} quantity={2}/>
            <ItemCounter name={'PlaStation 5'} quantity={1}/>
            <ItemCounter name={'Xbox'} quantity={3}/> */}
        </>
    )
}