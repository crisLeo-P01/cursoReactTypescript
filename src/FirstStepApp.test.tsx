
// Importaciones necesarias para testing con React Testing Library y Vitest
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi, afterEach } from "vitest";
import { FirstStepApp } from "./FirstStepApp";

// mockItemCounter es una función simulada que reemplaza al componente real ItemCounter
// Retorna un div simple con un atributo data-testid para facilitar su selección en las pruebas

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />
});

// Mock del módulo ItemCounter para que todas las importaciones de ItemCounter usen el mock
// Esto permite aislar las pruebas del componente FirstStepApp sin depender de la implementación real de ItemCounter
// La función mockItemCounter registra las llamadas para verificar que se renderice correctamente con las props esperadas
vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

// Mock del componente ItemCounter para aislar las pruebas
// Reemplaza el componente real con una versión simplificada que solo renderiza un div con testid
// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: () => <div data-testid="ItemCounter"/>
// }))

// Suite de pruebas para el componente FirstStepApp
describe('FirstStepApp', () => {

    // Limpia los mocks después de cada prueba para evitar interferencias entre pruebas
    afterEach(() => {
        vi.clearAllMocks()
    })

    // Test de snapshot - verifica que el componente se renderiza igual que en capturas anteriores
    // Útil para detectar cambios no intencionados en la estructura del componente
    test('should match snapshot', () => {
        const { container } = render(<FirstStepApp />)

        // Compara el HTML renderizado con el snapshot guardado
        expect(container).toMatchSnapshot()
    });

    // Test que verifica la cantidad correcta de componentes ItemCounter renderizados
    test('should render the correct number of ItemCOunter components', () => {
        // Renderiza el componente FirstStepApp
        render(<FirstStepApp />)

        // Busca todos los elementos que tengan el data-testid="ItemCounter"
        const itemCounters = screen.getAllByTestId('ItemCounter')

        // Verifica que se rendericen exactamente 3 componentes ItemCounter
        expect(itemCounters.length).toBe(3)

        // screen.debug() imprime en consola el DOM renderizado para debugging
        // screen.debug();
    });

    test('should rendet ItemCounter with correct props', () => {
        render(<FirstStepApp />)

        // Verifica que se haya llamado al mockItemCounter 3 veces
        expect(mockItemCounter).toHaveBeenCalledTimes(3)

        // Verifica que el mockItemCounter haya sido llamado con las props correctas
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Nintendo Switch', quantity: 1 })
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Xbox Series', quantity: 4 })
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'PlayStation 5', quantity: 1 })
    })
})

/*
* Se recomienda usar screen porque refleja los cambios en la UI después de que se disparan
* eventos, mientras que container no se actualiza y solo representa el estado inicial
*/