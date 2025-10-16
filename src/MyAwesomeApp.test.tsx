import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'

import {MyAwesomeApp} from './MyAwesomeApp'

describe('MyAwesomeApp', () => { // El describe es para agrupar tests
    test('Renderizar firstName y lastName', () => { // El test es para definir un caso de prueba
        const { container } = render(<MyAwesomeApp />)

        screen.debug() // Muestra el HTML renderizado en la consola

        const h1 = container.querySelector('h1')
        const h3 = container.querySelector('h3')

        expect(h1?.innerHTML).toContain('Cristian') // El ? es para evitar errores si h1 es null
        expect(h3?.innerHTML).toContain('Paiva') // El toContain es para verificar que el string contiene el valor esperado

    });

    test('Renderizar firstName y lastName', () => {
        render(<MyAwesomeApp />) // El render es para renderizar el componente

        screen.debug()

        const h1 = screen.getByTestId('first-name-title')

        expect(h1?.innerHTML).toContain('Cristian') // El expect es para hacer una aserción

    });

    test('Crear un snapshot de MyAwesomeApp', () => {
        const { container } = render(<MyAwesomeApp />)
        expect(container).toMatchSnapshot()
    })
})