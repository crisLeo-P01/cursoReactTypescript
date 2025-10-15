import { useState } from "react";

import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props {
    name: string;
    quantity?: number
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    const [ count, setCount ] = useState(quantity)

    const handleSubtract = () => {
        if(count === 1) return;

        return setCount(count - 1)
    }

    const handleAdd = () => {
        return setCount(count + 1)
    }

    return (
        <section className="item-row">
            <span className="item-text" style={{
                color: count === 1 ? 'red' : 'black'
            }}>{ name }</span>
            <button className={ styles.padding } onClick={ handleSubtract }>-1</button>
            <span className={ styles.fontSize }>{ count }</span>
            <button className={ styles.padding } onClick={ handleAdd }>+1</button>
        </section>
    )
}